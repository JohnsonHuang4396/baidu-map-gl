import{_ as G,d as L,r as h}from"./app.b8e7ffde.js";import{u as x}from"./useBaseMapEffect.f173e0ec.js";import"./useBaseMapListener.78d0f7c1.js";function z(a){return Object.prototype.toString.call(a)==="[object String]"}const O=L({props:{position:null,offset:{default:()=>({x:0,y:0})},icon:null,massClear:{type:Boolean,default:!0},dragging:{type:Boolean,default:!1},clicking:{type:Boolean,default:!0},raiseOnDrag:{type:Boolean,default:!1},draggingCursor:{default:"pointer"},rotation:{default:0},title:{default:""}},setup(a){const p=a;let i;return x(e=>{const{position:o,offset:g,icon:r,massClear:u,dragging:d,clicking:m,raiseOnDrag:B,draggingCursor:M,rotation:w,title:S}=p,l={offset:new BMapGL.Size(g.x,g.y),enableMassClear:u,enableDragging:d,enableClicking:m,raiseOnDrag:B,draggingCursor:M,rotation:w,title:S};if(r)if(z(r))l.icon=new BMapGL.Icon(r,new BMapGL.Size(60,70));else{const{anchor:s,imageOffset:f,imageSize:n,imageUrl:y,printImageUrl:c}=p.icon,t={imageSize:new BMapGL.Size(n.width,n.height)};s&&(t.anchor=new BMapGL.Size(s.x,s.y)),f&&(t.imageOffset=new BMapGL.Size(f.x,f.y)),c&&(t.printImageUrl=c),l.icon=new BMapGL.Icon(y,new BMapGL.Size(n.width,n.height),t)}return i=new BMapGL.Marker(new BMapGL.Point(o.lng,o.lat),l),e.addOverlay(i),()=>{e.removeOverlay(i)}}),(e,o)=>h(e.$slots,"default")}});var k=G(O,[["__file","index.vue"]]);export{k as default};
