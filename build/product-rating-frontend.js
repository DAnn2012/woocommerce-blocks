(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[63],{19:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return r(t)&&e in t}},203:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n(106);var r=n(47);const s=()=>r.m>1},204:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(49),s=n(19);const c=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(s.a)(t)?t:{}},275:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(119),s=n(203),c=n(19),o=n(204);const a=t=>{if(!Object(s.a)())return{className:"",style:{}};const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(19),s=n(204);const c=t=>{const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style),c=Object(r.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,textTransform:c.textTransform,fontFamily:e.fontFamily}}}},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(119),s=n(203),c=n(19),o=n(204);const a=t=>{if(!Object(s.a)()||"function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},357:function(t,e){},407:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(1),c=n(4),o=n.n(c),a=n(46),i=n(275),u=n(276),l=n(305),b=n(123);n(357);e.default=Object(b.withProductDataContext)(t=>{const{parentClassName:e}=Object(a.useInnerBlockLayoutContext)(),{product:n}=Object(a.useProductDataContext)(),c=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(n),b=Object(i.a)(t),f=Object(u.a)(t),p=Object(l.a)(t);if(!c)return null;const d={width:c/5*100+"%"},O=Object(s.sprintf)(
/* translators: %f is referring to the average rating value */
Object(s.__)("Rated %f out of 5","woo-gutenberg-products-block"),c),j=(t=>{const e=parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(n),g={__html:Object(s.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(s._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",j,"woo-gutenberg-products-block"),Object(s.sprintf)('<strong class="rating">%f</strong>',c),Object(s.sprintf)('<span class="rating">%d</span>',j))};return Object(r.createElement)("div",{className:o()(b.className,"wc-block-components-product-rating",{[e+"__product-rating"]:e}),style:{...b.style,...f.style,...p.style}},Object(r.createElement)("div",{className:o()("wc-block-components-product-rating__stars",e+"__product-rating__stars"),role:"img","aria-label":O},Object(r.createElement)("span",{style:d,dangerouslySetInnerHTML:g})))})}}]);