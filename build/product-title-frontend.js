(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[69],{123:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(45),a=n(18);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(a.a)(t)?t:{}},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function a(t,e){return c(t)&&e in t}},202:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n(104);var c=n(48);const a=()=>c.m>1},253:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(18),a=n(123);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(a.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:e.fontFamily}}}},273:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(117),a=n(202),r=n(18),s=n(123);const o=t=>{if(!Object(a.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},289:function(t,e,n){"use strict";var c=n(12),a=n.n(c),r=n(0),s=n(17),o=n(4),l=n.n(o);n(290),e.a=t=>{let{className:e="",disabled:n=!1,name:c,permalink:o="",target:i,rel:u,style:b,onClick:d,...p}=t;const m=l()("wc-block-components-product-name",e);if(n){const t=p;return Object(r.createElement)("span",a()({className:m},t,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)}}))}return Object(r.createElement)("a",a()({className:m,href:o,target:i},p,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)},style:b}))}},290:function(t,e){},302:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(117),a=n(202),r=n(18),s=n(123);const o=t=>{if(!Object(a.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},353:function(t,e){},448:function(t,e,n){"use strict";n.r(e);var c=n(121),a=n(0),r=n(4),s=n.n(r),o=n(47),l=n(202),i=n(289),u=n(59),b=n(273),d=n(302),p=n(253);n(353);const m=t=>{let{children:e,headingLevel:n,elementType:c="h"+n,...r}=t;return Object(a.createElement)(c,r,e)};var f=Object(c.withProductDataContext)(t=>{const{className:e,headingLevel:n=2,showProductLink:c=!0,linkTarget:r,align:f}=t,{parentClassName:O}=Object(o.useInnerBlockLayoutContext)(),{product:j}=Object(o.useProductDataContext)(),{dispatchStoreEvent:y}=Object(u.a)(),g=Object(b.a)(t),h=Object(d.a)(t),k=Object(p.a)(t);return j.id?Object(a.createElement)(m,{headingLevel:n,className:s()(e,g.className,"wc-block-components-product-title",{[O+"__product-title"]:O,["wc-block-components-product-title--align-"+f]:f&&Object(l.a)()}),style:Object(l.a)()?{...h.style,...k.style,...g.style}:{}},Object(a.createElement)(i.a,{disabled:!c,name:j.name,permalink:j.permalink,target:r,onClick:()=>{y("product-view-link",{product:j})}})):Object(a.createElement)(m,{headingLevel:n,className:s()(e,g.className,"wc-block-components-product-title",{[O+"__product-title"]:O,["wc-block-components-product-title--align-"+f]:f&&Object(l.a)()}),style:Object(l.a)()?{...h.style,...k.style,...g.style}:{}})});let O={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};Object(l.a)()&&(O={...O,align:{type:"string"}});var j=O;e.default=Object(c.withFilteredAttributes)(j)(f)}}]);