(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[29],{139:function(e,c){},158:function(e,c){},205:function(e,c,r){"use strict";r.r(c),r.d(c,"Block",(function(){return m}));var t=r(0),a=r(4),n=r.n(a),l=r(77),i=r(24),o=r(22),s=r(99),u=r(88),p=r(44);r(251);const m=e=>{var c,r;const{className:a,textAlign:p}=e,{parentClassName:m}=Object(o.useInnerBlockLayoutContext)(),{product:d}=Object(o.useProductDataContext)(),b=Object(s.a)(e),y=Object(u.a)(e),g=n()("wc-block-components-product-price",a,b.className,{[m+"__product-price"]:m}),_={...y.style,...b.style};if(!d.id)return Object(t.createElement)(l.a,{align:p,className:g});const v=d.prices,j=Object(i.getCurrencyFromPriceResponse)(v),O=v.price!==v.regular_price,N=n()({[m+"__product-price__value"]:m,[m+"__product-price__value--on-sale"]:O});return Object(t.createElement)(l.a,{align:p,className:g,priceStyle:_,regularPriceStyle:_,priceClassName:N,currency:j,price:v.price,minPrice:null==v||null===(c=v.price_range)||void 0===c?void 0:c.min_amount,maxPrice:null==v||null===(r=v.price_range)||void 0===r?void 0:r.max_amount,regularPrice:v.regular_price,regularPriceClassName:n()({[m+"__product-price__regular"]:m})})};c.default=Object(p.withProductDataContext)(m)},251:function(e,c){},37:function(e,c,r){"use strict";var t=r(6),a=r.n(t),n=r(0),l=r(133),i=r(4),o=r.n(i);r(139);const s=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});c.a=e=>{let{className:c,value:r,currency:t,onValueChange:i,displayType:u="text",...p}=e;const m="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(m))return null;const d=m/10**t.minorUnit;if(!Number.isFinite(d))return null;const b=o()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",c),y={...p,...s(t),value:void 0,currency:void 0,onValueChange:void 0},g=i?e=>{const c=+e.value*10**t.minorUnit;i(c)}:()=>{};return Object(n.createElement)(l.a,a()({className:b,displayType:u},y,{value:d,onValueChange:g}))}},77:function(e,c,r){"use strict";var t=r(0),a=r(1),n=r(37),l=r(4),i=r.n(l),o=r(24);r(158);const s=e=>{let{currency:c,maxPrice:r,minPrice:l,priceClassName:s,priceStyle:u={}}=e;return Object(t.createElement)(t.Fragment,null,Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(a.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),Object(o.formatPrice)(l),Object(o.formatPrice)(r))),Object(t.createElement)("span",{"aria-hidden":!0},Object(t.createElement)(n.a,{className:i()("wc-block-components-product-price__value",s),currency:c,value:l,style:u})," — ",Object(t.createElement)(n.a,{className:i()("wc-block-components-product-price__value",s),currency:c,value:r,style:u})))},u=e=>{let{currency:c,regularPriceClassName:r,regularPriceStyle:l,regularPrice:o,priceClassName:s,priceStyle:u,price:p}=e;return Object(t.createElement)(t.Fragment,null,Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Previous price:","woo-gutenberg-products-block")),Object(t.createElement)(n.a,{currency:c,renderText:e=>Object(t.createElement)("del",{className:i()("wc-block-components-product-price__regular",r),style:l},e),value:o}),Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Discounted price:","woo-gutenberg-products-block")),Object(t.createElement)(n.a,{currency:c,renderText:e=>Object(t.createElement)("ins",{className:i()("wc-block-components-product-price__value","is-discounted",s),style:u},e),value:p}))};c.a=e=>{let{align:c,className:r,currency:a,format:l="<price/>",maxPrice:o,minPrice:p,price:m,priceClassName:d,priceStyle:b,regularPrice:y,regularPriceClassName:g,regularPriceStyle:_}=e;const v=i()(r,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+c]:c});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const j=y&&m!==y;let O=Object(t.createElement)("span",{className:i()("wc-block-components-product-price__value",d)});return j?O=Object(t.createElement)(u,{currency:a,price:m,priceClassName:d,priceStyle:b,regularPrice:y,regularPriceClassName:g,regularPriceStyle:_}):void 0!==p&&void 0!==o?O=Object(t.createElement)(s,{currency:a,maxPrice:o,minPrice:p,priceClassName:d,priceStyle:b}):m&&(O=Object(t.createElement)(n.a,{className:i()("wc-block-components-product-price__value",d),currency:a,value:m,style:b})),Object(t.createElement)("span",{className:v},Object(t.createInterpolateElement)(l,{price:O}))}}}]);