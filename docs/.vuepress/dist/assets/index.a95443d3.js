import{_ as g,d as m,b as B,c as _}from"./app.b8e7ffde.js";import{u as C}from"./useBaseMapEffect.f173e0ec.js";import"./useBaseMapListener.78d0f7c1.js";const h=m({props:{path:null,strokeColor:{default:"#000"},strokeWeight:{default:2},strokeOpacity:{default:1},strokeStyle:{default:"solid"},massClear:{type:Boolean,default:!0},editing:{type:Boolean,default:!1},clicking:{type:Boolean,default:!0},geodesic:{type:Boolean,default:!1},clip:{type:Boolean,default:!0}},setup(l){const t=l;return C(e=>{const{strokeColor:o,strokeWeight:s,strokeOpacity:n,strokeStyle:r,massClear:i,editing:p,clicking:c,geodesic:d,clip:u}=t,f=t.path.map(({lng:k,lat:y})=>new BMapGL.Point(k,y)),a=new BMapGL.Polygon(f,{strokeColor:o,strokeWeight:s,strokeOpacity:n,strokeStyle:r,enableMassClear:i,enableEditing:p,enableClicking:c,geodesic:d,clip:u});return e.addOverlay(a),()=>{e.removeOverlay(a)}}),(e,o)=>(B(),_("div"))}});var M=g(h,[["__file","index.vue"]]);export{M as default};
