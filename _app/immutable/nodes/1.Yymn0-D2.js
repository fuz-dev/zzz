import{g as d,t as m,j as a,k as b,l as v,m as i}from"../chunks/disclose-version.DoY4awv2.js";import{G as o,H as h,m as $,b as p,a as _,I as x,J as j,K as k}from"../chunks/runtime.gOAZ9S7I.js";import{s as w}from"../chunks/entry.B3CdtmIU.js";function y(s,r,t){if(s==null)return r(void 0),t&&t(void 0),o;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function E(s,r,t){const e=t[r]??(t[r]={store:null,source:$(void 0),unsubscribe:o});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)p(e.source,void 0),e.unsubscribe=o;else{var u=!0;e.unsubscribe=y(s,n=>{u?(e.source.v=n,u=!1):p(e.source,n)})}return _(e.source)}function G(){const s={};return h(()=>{for(var r in s)s[r].unsubscribe()}),s}const H=()=>{const s=w;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},I={subscribe(s){return H().page.subscribe(s)}};var J=m("<h1> </h1> <p> </p>",1);function z(s,r){x(r,!0);const t=G(),e=()=>E(I,"$page",t);var u=J(),n=v(u),f=b(n),g=i(i(n,!0)),l=b(g);j(()=>{var c;a(f,e().status),a(l,(c=e().error)==null?void 0:c.message)}),d(s,u),k()}export{z as component};
