(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[66],{19:function(t,o,c){"use strict";c.d(o,"a",(function(){return n})),c.d(o,"b",(function(){return e}));const n=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function e(t,o){return n(t)&&o in t}},203:function(t,o,c){"use strict";c.d(o,"a",(function(){return e})),c(106);var n=c(47);const e=()=>n.m>1},204:function(t,o,c){"use strict";c.d(o,"a",(function(){return r}));var n=c(49),e=c(19);const r=t=>Object(n.a)(t)?JSON.parse(t)||{}:Object(e.a)(t)?t:{}},275:function(t,o,c){"use strict";c.d(o,"a",(function(){return a}));var n=c(119),e=c(203),r=c(19),s=c(204);const a=t=>{if(!Object(e.a)())return{className:"",style:{}};const o=Object(r.a)(t)?t:{},c=Object(s.a)(o.style);return Object(n.__experimentalUseColorProps)({...o,style:c})}},276:function(t,o,c){"use strict";c.d(o,"a",(function(){return r}));var n=c(19),e=c(204);const r=t=>{const o=Object(n.a)(t)?t:{},c=Object(e.a)(o.style),r=Object(n.a)(c.typography)?c.typography:{};return{style:{fontSize:o.fontSize?`var(--wp--preset--font-size--${o.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:o.fontFamily}}}},364:function(t,o){},413:function(t,o,c){"use strict";c.r(o);var n=c(0),e=c(1),r=c(4),s=c.n(r),a=c(46),i=c(275),u=c(276),l=c(123);c(364);o.default=Object(l.withProductDataContext)(t=>{const{className:o}=t,{parentClassName:c}=Object(a.useInnerBlockLayoutContext)(),{product:r}=Object(a.useProductDataContext)(),l=Object(i.a)(t),b=Object(u.a)(t);if(!r.id||!r.is_purchasable)return null;const d=!!r.is_in_stock,f=r.low_stock_remaining,p=r.is_on_backorder;return Object(n.createElement)("div",{className:s()(o,l.className,"wc-block-components-product-stock-indicator",{[c+"__stock-indicator"]:c,"wc-block-components-product-stock-indicator--in-stock":d,"wc-block-components-product-stock-indicator--out-of-stock":!d,"wc-block-components-product-stock-indicator--low-stock":!!f,"wc-block-components-product-stock-indicator--available-on-backorder":!!p}),style:{...l.style,...b.style}},f?(t=>Object(e.sprintf)(
/* translators: %d stock amount (number of items in stock for product) */
Object(e.__)("%d left in stock","woo-gutenberg-products-block"),t))(f):((t,o)=>o?Object(e.__)("Available on backorder","woo-gutenberg-products-block"):t?Object(e.__)("In Stock","woo-gutenberg-products-block"):Object(e.__)("Out of Stock","woo-gutenberg-products-block"))(d,p))})}}]);