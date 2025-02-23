<template>
  <div style="display: none">
    <div ref="controlContainer" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import { ControlAnchor, warn } from '../../../utils'
  export interface ControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: {
      x: number
      y: number
    }
    /**
     * 是否可见
     */
    visible?: boolean
  }
  const controlContainer = ref<HTMLDivElement>()
  const { ready } = useLifeCycle()
  const props = withDefaults(defineProps<ControlOptions>(), {
    anchor: 'BMAP_ANCHOR_TOP_LEFT',
    offset: () => ({ x: 83, y: 18 }),
    visible: true
  })
  defineEmits(['initd', 'unload'])
  onMounted(() => {
    useBaseMapEffect((map: BMapGL.Map) => {
      if (!controlContainer.value) {
        if (__DEV__) {
          warn('BControl', 'container el render error')
        }
        return
      }
      const { offset, anchor, visible } = props
      const customControl = new BMapGL.Control()
      customControl.defaultAnchor = window[anchor]
      customControl.defaultOffset = new BMapGL.Size(offset.x, offset.y)
      customControl.initialize = (_map: BMapGL.Map) => {
        return _map.getContainer().appendChild(controlContainer.value as Node) as HTMLElement
      }
      visible && map.addControl(customControl)
      ready(map, customControl)
      watch(
        () => props.visible,
        (n) => {
          map[n ? 'addControl' : 'removeControl'](customControl)
        }
      )
      return () => map.removeControl(customControl)
    })
  })
  defineOptions({
    name: 'BControl',
    inheritAttrs: false
  })
</script>
