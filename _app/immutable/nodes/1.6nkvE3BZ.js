import{x as m,y as v,z as i,B as h,C as b,E as p}from"../chunks/disclose-version.yC-hIejV.js";import{O as o,P as $,m as x,b as f,a as _,n as y,Q as E,q}from"../chunks/runtime._Nl0Nr-Q.js";import{s as g}from"../chunks/render.OO6e7HGc.js";import{s as w}from"../chunks/entry.IHU9NJ-c.js";function z(s,r,t){if(s==null)return r(void 0),t&&t(void 0),o;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function B(s,r,t){const e=t[r]??(t[r]={store:null,source:x(void 0),unsubscribe:o});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)f(e.source,void 0),e.unsubscribe=o;else{var n=!0;e.unsubscribe=z(s,u=>{n?(e.source.v=u,n=!1):f(e.source,u)})}return _(e.source)}function C(){const s={};return $(()=>{for(var r in s)s[r].unsubscribe()}),s}const O=()=>{const s=w;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return O().page.subscribe(s)}};var Q=v("<h1> </h1> <p> </p>",1);function D(s,r){y(r,!0);const t=C(),e=()=>B(P,"$page",t);var n=Q(),u=h(n),d=b(u);i(u);var c=p(p(u,!0)),l=b(c);i(c),E(()=>{var a;g(d,e().status),g(l,(a=e().error)==null?void 0:a.message)}),m(s,n),q()}export{D as component};
