import{g as S,b as F,P as j,d as q,e as v,u as A,B as x,R as M,h as R,i as N,l as Y,j as U,S as L,L as y,k as $,m as T,n as z,o as p}from"./runtime.AHookt5k.js";import{s as G,m as H}from"./disclose-version.CzZsQBM3.js";import{p as K}from"./if.BO6ObQ8P.js";import{c as Z}from"./store.CKuheJBb.js";const J={get(r,e){let n=r.props.length;for(;n--;){let t=r.props[n];if(p(t)&&(t=t()),typeof t=="object"&&t!==null&&e in t)return t[e]}},set(r,e,n){let t=r.props.length;for(;t--;){let i=r.props[t];p(i)&&(i=i());const u=S(i,e);if(u&&u.set)return u.set(n),!0}return!1},getOwnPropertyDescriptor(r,e){let n=r.props.length;for(;n--;){let t=r.props[n];if(p(t)&&(t=t()),typeof t=="object"&&t!==null&&e in t){const i=S(t,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(r,e){if(e===L||e===y)return!1;for(let n of r.props)if(p(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(r){const e=[];for(let n of r.props){p(n)&&(n=n());for(const t in n)e.includes(t)||e.push(t)}return e}};function ee(...r){return new Proxy({props:r},J)}function Q(r){for(var e=T,n=T;e!==null&&!(e.f&(x|M));)e=e.parent;try{return R(e),r()}finally{R(n)}}function re(r,e,n,t){var O;var i=(n&N)!==0,u=!Y,d=(n&U)!==0,B=(n&z)!==0,w=!1,s;d?[s,w]=Z(()=>r[e]):s=r[e];var C=L in r||y in r,l=((O=S(r,e))==null?void 0:O.set)??(C&&d&&e in r?a=>r[e]=a:void 0),o=t,h=!0,m=!1,E=()=>(m=!0,h&&(h=!1,B?o=A(t):o=t),o);s===void 0&&t!==void 0&&(l&&u&&F(),s=E(),l&&l(s));var _;if(_=()=>{var a=r[e];return a===void 0?E():(h=!0,m=!1,a)},!(n&j))return _;if(l){var D=r.$$legacy;return function(a,f){return arguments.length>0?((!f||D||w)&&l(f?_():a),a):_()}}var g=!1,I=!1,P=H(s),c=Q(()=>$(()=>{var a=_(),f=v(P);return g?(g=!1,I=!0,f):(I=!1,P.v=a)}));return i||(c.equals=q),function(a,f){if(arguments.length>0){const b=f?v(c):d?K(a):a;return c.equals(b)||(g=!0,G(P,b),m&&o!==void 0&&(o=b),A(()=>v(c))),a}return v(c)}}export{re as p,ee as s};
