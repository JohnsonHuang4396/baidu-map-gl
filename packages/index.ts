import type { App } from 'vue'
import componentsList from './components'
import { UserPlugins, PluginsSourceLink } from './utils/pluginLoader'
export interface Vue3BaiduMapGlOptions {
  ak?: string
  plugins?: UserPlugins
  pluginsSourceLink?: PluginsSourceLink
}
// hooks
export * from './hooks'
// components
export * from './components/index'
// types
export * from './utils/types'
// global register
const vue3BaiduMapGl = {
  install: (app: App, options?: Vue3BaiduMapGlOptions) => {
    const { ak, plugins: p, pluginsSourceLink: psl } = options || {}
    const appProp = app.config.globalProperties
    for (const component of componentsList) {
      const name = component.name
      app.component(name, component)
    }
    ak && (appProp.$baiduMapAk = ak)
    p && (appProp.$baiduMapPlugins = p)
    psl && (appProp.$baiduMapPluginsSourceLink = psl)
  },
  version: '__VERSION__'
}
// for umd
export const install = vue3BaiduMapGl.install
export const version = vue3BaiduMapGl.version

export default vue3BaiduMapGl
