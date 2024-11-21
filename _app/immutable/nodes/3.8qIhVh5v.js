import{a as v,t as x,c as O,f as ae}from"../chunks/disclose-version.DDkxTJXx.js";import{E as Ze,ai as Je,aN as Xe,n as Ye,u as Qe,D as xe,X as $e,q as ea,a9 as H,aO as aa,ax as ye,M as qe,af as ta,o as ra,aa as sa,t as F,p as Q,f as L,a as $,c as s,s as f,r,C as n,aP as K,V as P}from"../chunks/runtime.-JsZzBAw.js";import{d as na,a as A,s as Se,b as Ee}from"../chunks/store.f2EFjb3D.js";import{i as S}from"../chunks/if.D9UcrOZM.js";import{g as ve,i as te,d as W,f as M,s as ze,e as de,j as Ce,t as U,a as ee,b as ce,k as oa}from"../chunks/string.-zY814zy.js";import{p as Le}from"../chunks/props.EqimzTDr.js";import{S as Z,g as ia,z as _e,m as la,f as va,a as da,b as ca}from"../chunks/logos.DTvkRBwh.js";import{p as Pe}from"../chunks/stores.BFTAYO45.js";import{b as _a}from"../chunks/paths.50Oh8l41.js";import{p as ua}from"../chunks/pkg.D-WwuCi0.js";const ga=()=>performance.now(),J={tick:i=>requestAnimationFrame(i),now:()=>ga(),tasks:new Set};function Te(i){J.tasks.forEach(e=>{e.c(i)||(J.tasks.delete(e),e.f())}),J.tasks.size!==0&&J.tick(Te)}function fa(i){let e;return J.tasks.size===0&&J.tick(Te),{promise:new Promise(t=>{J.tasks.add(e={c:i,f:t})}),abort(){J.tasks.delete(e)}}}function ie(i,e){i.dispatchEvent(new CustomEvent(e))}function ma(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function je(i){const e={},t=i.split(";");for(const o of t){const[a,d]=o.split(":");if(!a||d===void 0)break;const h=ma(a.trim());e[h]=d.trim()}return e}const pa=i=>i;function ha(i,e,t,o){var a=(i&aa)!==0,d="both",h,w=e.inert,p,g;function _(){var q=ta,N=xe;ye(null),qe(null);try{return h??(h=t()(e,(o==null?void 0:o())??{},{direction:d}))}finally{ye(q),qe(N)}}var z={is_global:a,in(){e.inert=w,ie(e,"introstart"),p=ue(e,_(),g,1,()=>{ie(e,"introend"),p==null||p.abort(),p=h=void 0})},out(q){e.inert=!0,ie(e,"outrostart"),g=ue(e,_(),p,0,()=>{ie(e,"outroend"),q==null||q()})},stop:()=>{p==null||p.abort(),g==null||g.abort()}},j=xe;if((j.transitions??(j.transitions=[])).push(z),na){var b=a;if(!b){for(var k=j.parent;k&&k.f&Ze;)for(;(k=k.parent)&&!(k.f&Je););b=!k||(k.f&Xe)!==0}b&&Ye(()=>{Qe(()=>z.in())})}}function ue(i,e,t,o,a){var d=o===1;if($e(e)){var h,w=!1;return ea(()=>{if(!w){var N=e({direction:d?"in":"out"});h=ue(i,N,t,o,a)}}),{abort:()=>{w=!0,h==null||h.abort()},deactivate:()=>h.deactivate(),reset:()=>h.reset(),t:()=>h.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return a(),{abort:H,deactivate:H,reset:H,t:()=>o};const{delay:p=0,css:g,tick:_,easing:z=pa}=e;var j=[];if(d&&t===void 0&&(_&&_(0,1),g)){var b=je(g(0,1));j.push(b,b)}var k=()=>1-o,q=i.animate(j,{duration:p});return q.onfinish=()=>{var N=(t==null?void 0:t.t())??1-o;t==null||t.abort();var E=o-N,T=e.duration*Math.abs(E),D=[];if(T>0){if(g)for(var I=Math.ceil(T/16.666666666666668),R=0;R<=I;R+=1){var X=N+E*z(R/I),re=g(X,1-X);D.push(je(re))}k=()=>{var Y=q.currentTime;return N+E*z(Y/T)},_&&fa(()=>{if(q.playState!=="running")return!1;var Y=k();return _(Y,1-Y),!0})}q=i.animate(D,{duration:T,fill:"forwards"}),q.onfinish=()=>{k=()=>o,_==null||_(o,1-o),a()}},{abort:()=>{q&&(q.cancel(),q.effect=null,q.onfinish=H)},deactivate:()=>{a=H},reset:()=>{o===0&&(_==null||_(1,0))},t:()=>k()}}function wa(i,e,t,o,a){var d=()=>{o(t[i])};t.addEventListener(e,d),a?ra(()=>{t[i]=a()}):d(),(t===document.body||t===window||t===document)&&sa(()=>{t.removeEventListener(e,d)})}const Ne=i=>ve(te(te(i,"https://"),"www."),"/");var ka=x('<div class="root_url svelte-cs8o0f"><a> </a></div>'),ba=x('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function xa(i,e){$(e,!0);const t=Le(e,"root_url",3,null);var o=ba(),a=s(o);W(a,()=>e.children??H);var d=f(a,2),h=s(d);W(h,()=>e.logo_header??H);var w=f(h,2),p=s(w);S(p,()=>e.logo,z=>{var j=O(),b=L(j);W(b,()=>e.logo),v(z,j)},z=>{Z(z,{data:ia,size:"var(--icon_size_lg)"})}),r(w);var g=f(w,2);W(g,()=>e.logo_footer??H),r(d);var _=f(d,2);S(_,t,z=>{var j=ka(),b=s(j),k=s(b,!0);F(()=>A(k,Ne(t()))),r(b),r(j),F(()=>M(b,"href",t())),v(z,j)}),r(o),F(()=>M(w,"href",e.pkg.repo_url)),v(i,o),Q()}function ya(i){const e=i-1;return e*e*e+1}function qa(i,{delay:e=0,duration:t=400,easing:o=ya,axis:a="y"}={}){const d=getComputedStyle(i),h=+d.opacity,w=a==="y"?"height":"width",p=parseFloat(d[w]),g=a==="y"?["top","bottom"]:["left","right"],_=g.map(E=>`${E[0].toUpperCase()}${E.slice(1)}`),z=parseFloat(d[`padding${_[0]}`]),j=parseFloat(d[`padding${_[1]}`]),b=parseFloat(d[`margin${_[0]}`]),k=parseFloat(d[`margin${_[1]}`]),q=parseFloat(d[`border${_[0]}Width`]),N=parseFloat(d[`border${_[1]}Width`]);return{delay:e,duration:t,easing:o,css:E=>`overflow: hidden;opacity: ${Math.min(E*20,1)*h};${w}: ${E*p}px;padding-${g[0]}: ${E*z}px;padding-${g[1]}: ${E*j}px;margin-${g[0]}: ${E*b}px;margin-${g[1]}: ${E*k}px;border-${g[0]}-width: ${E*q}px;border-${g[1]}-width: ${E*N}px;`}}var za=x("<div><!></div>"),ja=x("<details><summary><!></summary> <!></details>");function Fa(i,e){$(e,!0);let t=Le(e,"open",15);var o=ja();let a;var d=s(o);let h;var w=s(d);W(w,()=>e.summary),r(d);var p=f(d,2);S(p,()=>e.eager,g=>{var _=O(),z=L(_);W(z,()=>e.children),v(g,_)},g=>{var _=O(),z=L(_);S(z,t,j=>{var b=za(),k=s(b);W(k,()=>e.children),r(b),ha(3,b,()=>qa),v(j,b)},null,!0),v(g,_)}),r(o),F(()=>{a=ze(o,a,{...e.attrs}),h=ze(d,h,{...e.summary_attrs})}),wa("open","toggle",o,t,t),v(i,o),Q()}var Sa=x('<div class="repo_name svelte-w7xguq"> <!></div>'),Ea=x('<div class="description svelte-w7xguq"> </div>'),Ca=x('<div class="motto svelte-w7xguq"> </div>'),La=x('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Pa=x('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),Ta=x('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Na=x('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),Ma=x('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),Oa=x('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),Wa=x('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),Aa=x('<div class="logo svelte-w7xguq"><img></div>'),Ga=x("<li> </li>"),Ra=x('<ul class="declarations unstyled svelte-w7xguq"></ul>'),Ba=x('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),Da=x('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),Ia=x("raw data for <code>pkg: Package_Meta</code>",1),Ha=x("<pre><code> </code></pre>"),Ka=x('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function Ua(i,e){$(e,!0);const t=Se(),o=()=>Ee(Pe,"$page",t),a=P(()=>e.pkg.package_json),d=P(()=>e.pkg.src_json),h=P(()=>n(d).modules),w=P(()=>n(a).repository?te(ve(ve(typeof n(a).repository=="string"?n(a).repository:n(a).repository.url,".git"),"/"),"git+"):null),p=P(()=>n(a).license&&n(w)?n(w)+"/blob/main/LICENSE":null),g=(y,l)=>y+"/blob/main/src/lib/"+(l.endsWith(".js")?l.slice(0,-3)+".ts":l),_=P(()=>n(a).exports&&Object.keys(n(a).exports)),z=P(()=>n(a).exports?Object.keys(n(a).exports).map(y=>{const l=te(y,"./");return l==="."?"index.js":l}):null);var j=Ka(),b=s(j),k=s(b),q=s(k),N=s(q),E=s(N);S(E,()=>e.repo_name,y=>{var l=O(),m=L(l);W(m,()=>e.repo_name,()=>e.pkg.repo_name),v(y,l)},y=>{var l=Sa(),m=s(l,!0),u=f(m);S(u,()=>n(a).glyph,c=>{var C=ae();F(()=>A(C,` ${n(a).glyph??""}`)),v(c,C)}),r(l),F(()=>A(m,e.pkg.repo_name)),v(y,l)}),r(N);var T=f(N,2);W(T,()=>e.children??H,()=>e.pkg);var D=f(T,2);S(D,()=>n(a).description,y=>{var l=O(),m=L(l);S(m,()=>e.description,u=>{var c=O(),C=L(c);W(C,()=>e.description,()=>n(a).description),v(u,c)},u=>{var c=Ea(),C=s(c,!0);r(c),F(()=>A(C,n(a).description)),v(u,c)}),v(y,l)});var I=f(D,2);S(I,()=>n(a).motto,y=>{var l=O(),m=L(l);S(m,()=>e.motto,u=>{var c=O(),C=L(c);W(C,()=>e.motto,()=>n(a).motto),v(u,c)},u=>{var c=Ca(),C=s(c,!0);r(c),F(()=>A(C,n(a).motto)),v(u,c)}),v(y,l)});var R=f(I,2);S(R,()=>e.pkg.npm_url,y=>{var l=O(),m=L(l);S(m,()=>e.npm_url,u=>{var c=O(),C=L(c);W(C,()=>e.npm_url,()=>e.pkg.npm_url),v(u,c)},u=>{var c=La(),C=s(c);r(c),F(()=>A(C,`npm i -D ${n(a).name??""}`)),v(u,c)}),v(y,l)});var X=f(R,2),re=s(X);S(re,()=>e.pkg.homepage_url,y=>{var l=O(),m=L(l);S(m,()=>e.homepage_url,u=>{var c=O(),C=L(c);W(C,()=>e.homepage_url,()=>e.pkg.homepage_url),v(u,c)},u=>{var c=Pa(),C=f(L(c),2),G=s(C),V=s(G),se=f(V);F(()=>A(se,` ${Ne(e.pkg.homepage_url)??""}`)),r(G),r(C),F(()=>{M(G,"href",e.pkg.homepage_url),U(G,"selected",e.pkg.homepage_url===o().url.href),M(V,"src",e.pkg.logo_url),M(V,"alt",e.pkg.logo_alt),ee(V,"width","16px"),ee(V,"height","16px"),ee(V,"margin-right","var(--space_xs)")}),v(u,c)}),v(y,l)});var Y=f(re,2);S(Y,()=>e.pkg.repo_url,y=>{var l=Ta(),m=f(L(l),2),u=s(m),c=s(u);r(u),r(m),F(()=>{M(u,"href",e.pkg.repo_url),A(c,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),v(y,l)});var ge=f(Y,2);S(ge,()=>e.pkg.npm_url,y=>{var l=Na(),m=f(L(l),2),u=s(m),c=s(u,!0);r(u),r(m),F(()=>{M(u,"href",e.pkg.npm_url),A(c,n(a).name)}),v(y,l)});var fe=f(ge,2);S(fe,()=>e.pkg.changelog_url,y=>{var l=Ma(),m=f(L(l),2),u=s(m),c=s(u,!0);r(u),r(m),F(()=>{M(u,"href",e.pkg.changelog_url),A(c,n(a).version)}),v(y,l)});var me=f(fe,2);S(me,()=>n(p),y=>{var l=Oa(),m=f(L(l),2),u=s(m),c=s(u,!0);r(u),r(m),F(()=>{M(u,"href",n(p)),A(c,n(a).license)}),v(y,l)});var Me=f(me,2);S(Me,()=>e.pkg.homepage_url,y=>{var l=Wa(),m=f(L(l),2),u=s(m);F(()=>M(u,"href",`${ce(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var c=f(u,2);F(()=>M(c,"href",`${ce(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),r(m),v(y,l)}),r(X),r(q),r(k);var Oe=f(k,2);S(Oe,()=>e.pkg.logo_url,y=>{var l=Aa(),m=s(l);r(l),F(()=>{M(m,"src",e.pkg.logo_url),M(m,"alt",e.pkg.logo_alt),ee(m,"width","var(--size, var(--icon_size_xl2))"),ee(m,"height","var(--size, var(--icon_size_xl2))")}),v(y,l)}),r(b);var pe=f(b,2);S(pe,()=>n(z)&&e.pkg.repo_url,y=>{var l=Da(),m=s(l);de(m,22,()=>n(z),u=>u,(u,c,C)=>{var G=Ba();const V=P(()=>g(e.pkg.repo_url,c)),se=P(()=>{var B;return(B=n(_))==null?void 0:B[n(C)]}),we=P(()=>{var B;return n(se)?(B=n(h))==null?void 0:B[n(se)]:void 0}),Ae=P(()=>c.endsWith(".js"));F(()=>U(G,"ts",n(Ae)));const Ge=P(()=>c.endsWith(".svelte"));F(()=>U(G,"svelte",n(Ge)));const Re=P(()=>c.endsWith(".css"));F(()=>U(G,"css",n(Re)));const Be=P(()=>c.endsWith(".json"));F(()=>U(G,"json",n(Be)));var ke=s(G),ne=s(ke),De=s(ne,!0);r(ne);var Ie=f(ne,2);S(Ie,()=>{var B;return(B=n(we))==null?void 0:B.declarations.length},B=>{var le=Ra();de(le,21,()=>n(we).declarations,Ce,(He,be)=>{let Ke=()=>n(be).name,Ue=()=>n(be).kind;var oe=Ga(),Ve=s(oe,!0);r(oe),F(()=>{oa(oe,`declaration chip ${Ue()??""}_declaration svelte-w7xguq`),A(Ve,Ke())}),v(He,oe)}),r(le),v(B,le)}),r(ke),r(G),F(()=>{M(ne,"href",n(V)),A(De,c)}),v(u,G)}),r(m),r(l),v(y,l)});var he=f(pe,2),We=s(he);Fa(We,{summary:l=>{K();var m=Ia();K(),v(l,m)},children:(l,m)=>{var u=Ha(),c=s(u),C=s(c,!0);F(()=>A(C,JSON.stringify(e.pkg,null,"	"))),r(c),r(u),v(l,u)},$$slots:{summary:!0,default:!0}}),r(he),r(j),v(i,j),Q()}var Va=x('<ul><li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, <a href="https://www.webdevladder.net/blog">blog</a> and YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub as <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and Bluesky as <a href="https://bsky.app/profile/ryanatkn.com">@ryanatkn.com</a></li> <li>Mastodon as <a rel="me" href="https://fosstodon.org/@ryanatkn">@ryanatkn@fosstodon.org</a>, <a rel="me" href="https://fosstodon.org/@webdevladder">@webdevladder@fosstodon.org</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a> and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>');function Za(i,e){var t=Va(),o=s(t),a=s(o),d=f(a,7);S(d,()=>e.selected==="webdevladder.net",g=>{var _=ae(", you are here");v(g,_)}),r(o);var h=f(o,2),w=s(h),p=f(w,2);S(p,()=>e.selected==="ryanatkn.com",g=>{var _=ae(", you are here");v(g,_)}),r(h),K(8),r(t),F(()=>{U(a,"selected",e.selected==="webdevladder.net"),U(w,"selected",e.selected==="ryanatkn.com")}),v(i,t)}var Ja=x('<a class="project_link svelte-1bpnvy9" title="Zzz - bot control hq" href="https://www.zzzbot.dev/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Xa(i){const e="var(--icon_size_lg)";var t=Ja(),o=L(t),a=s(o);Z(a,{data:_e,size:e}),K(),r(o);var d=f(o,2),h=s(d);Z(h,{data:la,size:e}),K(),r(d);var w=f(d,2),p=s(w);Z(p,{data:va,size:e}),K(),r(w);var g=f(w,2),_=s(g);Z(_,{data:da,size:e}),K(),r(g);var z=f(g,2),j=s(z);Z(j,{data:ca,size:e}),K(),r(z),v(i,t)}var Ya=x('<h2 class="mt_0 mb_lg">Links</h2>'),Qa=x('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function $a(i,e){$(e,!0);var t=Qa(),o=s(t);S(o,()=>e.children,w=>{var p=O(),g=L(p);W(g,()=>e.children),v(w,p)},w=>{var p=Ya();v(w,p)});var a=f(o,2);Za(a,{});var d=f(a,2),h=s(d);Xa(h),r(d),r(t),v(i,t),Q()}const et=i=>i.split("/").filter(e=>e&&e!=="."&&e!==".."),at=i=>{const e=[],t=et(i);t.length&&e.push({type:"separator",path:"/"});let o="";for(let a=0;a<t.length;a++){const d=t[a];o+="/"+d,e.push({type:"piece",name:d,path:o}),a!==t.length-1&&e.push({type:"separator",path:o})}return e};var tt=x('<a class="svelte-c9k2g"> </a>'),rt=x('<span class="separator svelte-c9k2g"><!></span>'),st=x('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function Fe(i,e){$(e,!0);const t=Se(),o=()=>Ee(Pe,"$page",t),a=P(()=>e.base_path??_a),d=P(()=>e.path??te(o().url.pathname,n(a))),h=P(()=>e.selected_path===null?null:e.selected_path??n(d)),w=P(()=>at(n(d))),p=P(()=>ce(n(a),"/"));var g=st(),_=s(g),z=s(_);S(z,()=>e.children,b=>{var k=O(),q=L(k);W(q,()=>e.children),v(b,k)},b=>{var k=ae("•");v(b,k)}),r(_);var j=f(_);de(j,17,()=>n(w),Ce,(b,k)=>{var q=O(),N=L(q);S(N,()=>n(k).type==="piece",E=>{var T=tt(),D=s(T,!0);r(T),F(()=>{M(T,"href",n(a)+n(k).path),U(T,"selected",n(k).path===n(h)),A(D,n(k).name)}),v(E,T)},E=>{var T=rt(),D=s(T);S(D,()=>e.separator,I=>{var R=O(),X=L(R);W(X,()=>e.separator),v(I,R)},I=>{var R=ae("/");v(I,R)}),r(T),v(E,T)}),v(b,q)}),r(g),F(()=>{M(_,"href",n(p)),U(_,"selected",n(p)===n(a)+n(h))}),v(i,g),Q()}var nt=x('<div class="mb_xl5"><!></div>'),ot=x('<main class="width_md svelte-m017mk"><section class="box"><header class="box mt_xl4"><!></header> <p class="mt_xl5">⚠️ early pre-release, see the <a href="https://github.com/ryanatkn/zzz/discussions">discussions</a></p></section> <section><div class="panel p_md width_md"><!></div></section> <!> <section class="box mb_xl7"><!></section></main>');function pt(i,e){$(e,!0);const t=ua.get();var o=ot(),a=s(o),d=s(a),h=s(d);Fe(h,{children:(b,k)=>{Z(b,{data:_e,size:"var(--icon_size_sm)"})},$$slots:{default:!0}}),r(d),K(2),r(a);var w=f(a,2),p=s(w),g=s(p);Ua(g,{pkg:t}),r(p),r(w);var _=f(w,2);$a(_,{});var z=f(_,2),j=s(z);xa(j,{pkg:t,children:(b,k)=>{var q=nt(),N=s(q);Fe(N,{children:(E,T)=>{Z(E,{data:_e,size:"var(--icon_size_sm)"})},$$slots:{default:!0}}),r(q),v(b,q)},$$slots:{default:!0}}),r(z),r(o),v(i,o),Q()}export{pt as component};
