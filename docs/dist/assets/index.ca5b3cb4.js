import{_ as s,d as i,w as f,b as c,c as d}from"./app.5d0104d1.js";import{u}from"./useBaseMapEffect.4ec4cb39.js";import{u as l}from"./useLife.a1d4ef8e.js";import"./useBaseMapListener.78d0f7c1.js";const p=i({props:{anchor:{default:"BMAP_ANCHOR_BOTTOM_LEFT"},offset:{default:()=>({x:83,y:18})},unit:{default:"BMAP_UNIT_METRIC"}},emits:["initd","unload"],setup(r){const e=r,{ready:a}=l();let t;u(o=>(t=new window.BMapGL.ScaleControl({offset:new window.BMapGL.Size(e.offset.x,e.offset.y),anchor:window[e.anchor]}),n(),o.addControl(t),a(o),()=>o.removeControl(t))),f(()=>e.unit,n);function n(){t.setUnit(window[e.unit])}return(o,_)=>(c(),d("div"))}});var C=s(p,[["__file","index.vue"]]);export{C as default};
