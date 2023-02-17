(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[67],{102:function(e,t){},103:function(e,t){},104:function(e,t){},114:function(e,t,n){"use strict";var r=n(15),c=n.n(r),i=n(0),o=n(150),a=n(6),u=n.n(a);n(214);const l=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:r,onValueChange:a,displayType:s="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const m=p/10**r.minorUnit;if(!Number.isFinite(m))return null;const d=u()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...l(r),value:void 0,currency:void 0,onValueChange:void 0},O=a?e=>{const t=+e.value*10**r.minorUnit;a(t)}:()=>{};return Object(i.createElement)(o.a,c()({className:d,displayType:s},f,{value:m,onValueChange:O}))}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n(53);var r=n(37);const c=()=>r.n>1},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(23),c=n(20);const i=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(98),i=n(5),o=n(30),a=n(20),u=n(32),l=n(63),s=n(25);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:p,queryState:m,productIds:d,isEditor:f=!1}=e,O=Object(s.a)();O+="-collection-data";const[j]=Object(u.a)(O),[_,g]=Object(u.b)("calculate_attribute_counts",[],O),[w,v]=Object(u.b)("calculate_price_range",null,O),[h,y]=Object(u.b)("calculate_stock_status_counts",null,O),[k,E]=Object(u.b)("calculate_rating_counts",null,O),x=Object(o.a)(t||{}),N=Object(o.a)(n),C=Object(o.a)(b),F=Object(o.a)(p);Object(r.useEffect)(()=>{"object"==typeof x&&Object.keys(x).length&&(_.find(e=>Object(a.b)(x,"taxonomy")&&e.taxonomy===x.taxonomy)||g([..._,x]))},[x,_,g]),Object(r.useEffect)(()=>{w!==N&&void 0!==N&&v(N)},[N,v,w]),Object(r.useEffect)(()=>{h!==C&&void 0!==C&&y(C)},[C,y,h]),Object(r.useEffect)(()=>{k!==F&&void 0!==F&&E(F)},[F,E,k]);const[S,R]=Object(r.useState)(f),[U]=Object(c.a)(S,200);S||R(!0);const L=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(i.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(j),[j]);return Object(l.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...m,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(i.isEmpty)(d)&&{include:d},...L},shouldSelect:U})}},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(23),c=n(155);const i=e=>({heading:Object(r.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(r.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||c.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showInputFields:"false"!==(null==e?void 0:e.showInputFields),inlineInput:"true"===(null==e?void 0:e.inlineInput)})},155:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},158:function(e,t,n){"use strict";var r=n(0),c=n(64),i=n(32),o=n(139),a=n(1),u=n(6),l=n.n(u),s=n(114),b=n(20),p=n(57);n(226);const m=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[i,o]=e;const a=e=>Number.isFinite(e);return a(i)||(i=t||0),a(o)||(o=n||r),a(t)&&t>i&&(i=t),a(n)&&n<=i&&(i=n-r),a(t)&&t>=o&&(o=t+r),a(n)&&n<o&&(o=n),!c&&i>=o&&(i=o-r),c&&o<=i&&(o=i+r),[i,o]};var d=n(71);const f=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},O=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var j=n(70),_=e=>{let{minPrice:t,maxPrice:n,minConstraint:c,maxConstraint:i,onChange:o,step:u,currency:_,showInputFields:g=!0,showFilterButton:w=!1,inlineInput:v=!0,isLoading:h=!1,isUpdating:y=!1,isEditor:k=!1,onSubmit:E=(()=>{})}=e;const x=Object(r.useRef)(null),N=Object(r.useRef)(null),C=u||10**_.minorUnit,[F,S]=Object(r.useState)(t),[R,U]=Object(r.useState)(n),L=Object(r.useRef)(null),[T,I]=Object(r.useState)(0);Object(r.useEffect)(()=>{S(t)},[t]),Object(r.useEffect)(()=>{U(n)},[n]),Object(r.useLayoutEffect)(()=>{var e;v&&L.current&&I(null===(e=L.current)||void 0===e?void 0:e.offsetWidth)},[v,I]);const A=Object(r.useMemo)(()=>isFinite(c)&&isFinite(i),[c,i]),P=Object(r.useMemo)(()=>isFinite(t)&&isFinite(n)&&A?{"--low":Math.round((t-c)/(i-c)*100)-.5+"%","--high":Math.round((n-c)/(i-c)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,c,i,A]),M=Object(r.useCallback)(e=>{if(h||!A||!x.current||!N.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=x.current.offsetWidth,c=+x.current.value,o=N.current.offsetWidth,a=+N.current.value,u=r*(c/i),l=o*(a/i);Math.abs(n-u)>Math.abs(n-l)?(x.current.style.zIndex="20",N.current.style.zIndex="21"):(x.current.style.zIndex="21",N.current.style.zIndex="20")},[h,i,A]),B=Object(r.useCallback)(e=>{const r=e.target.classList.contains("wc-block-price-filter__range-input--min"),a=+e.target.value,u=r?[Math.round(a/C)*C,n]:[t,Math.round(a/C)*C],l=m(u,c,i,C,r);o(l)},[o,t,n,c,i,C]),q=Object(r.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(F>=R){const e=m([0,R],null,null,C,t);return o([parseInt(e[0],10),parseInt(e[1],10)])}const n=m([F,R],null,null,C,t);o(n)},[o,C,F,R]),V=Object(p.a)(E,600),W=l()("wc-block-price-filter","wc-block-components-price-slider",g&&"wc-block-price-filter--has-input-fields",g&&"wc-block-components-price-slider--has-input-fields",w&&"wc-block-price-filter--has-filter-button",w&&"wc-block-components-price-slider--has-filter-button",!A&&"is-disabled",(v||T<=300)&&"wc-block-components-price-slider--is-input-inline"),D=Object(b.a)(x.current)?x.current.ownerDocument.activeElement:void 0,Q=D&&D===x.current?C:1,Y=D&&D===N.current?C:1,K=String(F/10**_.minorUnit),z=String(R/10**_.minorUnit),J=v&&T>300,X=Object(r.createElement)("div",{className:l()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":h&&y}),onMouseMove:M,onFocus:M},A&&Object(r.createElement)("div",{"aria-hidden":g},Object(r.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:P}),Object(r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(a.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":K,value:Number.isFinite(t)?t:c,onChange:B,step:Q,min:c,max:i,ref:x,disabled:h&&!A,tabIndex:g?-1:0}),Object(r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(a.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":z,value:Number.isFinite(n)?n:i,onChange:B,step:Y,min:c,max:i,ref:N,disabled:h,tabIndex:g?-1:0})));return Object(r.createElement)("div",{className:W,ref:L},(!J||!g)&&X,g&&Object(r.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},y?Object(r.createElement)("div",{className:"input-loading"}):Object(r.createElement)(s.a,{currency:_,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(a.__)("Filter products by minimum price","woo-gutenberg-products-block"),allowNegative:!1,isAllowed:O({minConstraint:c,minorUnit:_.minorUnit,currentMaxValue:R}),onValueChange:e=>{e!==F&&S(e)},onBlur:q,disabled:h||!A,value:F}),J&&X,y?Object(r.createElement)("div",{className:"input-loading"}):Object(r.createElement)(s.a,{currency:_,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(a.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:f({maxConstraint:i,minorUnit:_.minorUnit}),onValueChange:e=>{e!==R&&U(e)},onBlur:q,disabled:h||!A,value:R})),!g&&!y&&Number.isFinite(t)&&Number.isFinite(n)&&Object(r.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(r.createElement)(s.a,{currency:_,value:t}),Object(r.createElement)(s.a,{currency:_,value:n})),Object(r.createElement)("div",{className:"wc-block-components-price-slider__actions"},(k||!y&&(t!==c||n!==i))&&Object(r.createElement)(j.a,{onClick:()=>{o([c,i]),V()},screenReaderLabel:Object(a.__)("Reset price filter","woo-gutenberg-products-block")}),w&&Object(r.createElement)(d.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:y,disabled:h||!A,onClick:E,screenReaderLabel:Object(a.__)("Apply price filter","woo-gutenberg-products-block")})))},g=n(69),w=n(43),v=n(2),h=n(14),y=n(72),k=n(74),E=n(23);const x=(e,t,n)=>{const r=10*10**t;let i=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?i=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(i=Math.floor(o/r)*r));const a=Object(c.a)(i,Number.isFinite);return Number.isFinite(i)?i:a};n(225);var N=n(46);function C(e,t){return Number(e)*10**t}t.a=e=>{let{attributes:t,isEditor:n=!1}=e;const a=Object(N.b)(),u=Object(v.getSettingWithCoercion)("has_filterable_products",!1,k.a),l=Object(v.getSettingWithCoercion)("is_rendering_php_template",!1,k.a),s=n?[]:Object(v.getSettingWithCoercion)("product_ids",[],Array.isArray),[m,d]=Object(r.useState)(!1),f=Object(y.d)("min_price"),O=Object(y.d)("max_price"),[j]=Object(i.a)(),{results:F,isLoading:S}=Object(o.a)({queryPrices:!0,queryState:j,productIds:s,isEditor:n}),R=Object(w.getCurrencyFromPriceResponse)(Object(b.b)(F,"price_range")?F.price_range:void 0),[U,L]=Object(i.b)("min_price"),[T,I]=Object(i.b)("max_price"),[A,P]=Object(r.useState)(C(f,R.minorUnit)||null),[M,B]=Object(r.useState)(C(O,R.minorUnit)||null),{minConstraint:q,maxConstraint:V}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:x(t||"",r,"ROUND_DOWN"),maxConstraint:x(n||"",r,"ROUND_UP")}})({minPrice:Object(b.b)(F,"price_range")&&Object(b.b)(F.price_range,"min_price")&&Object(E.a)(F.price_range.min_price)?F.price_range.min_price:void 0,maxPrice:Object(b.b)(F,"price_range")&&Object(b.b)(F.price_range,"max_price")&&Object(E.a)(F.price_range.max_price)?F.price_range.max_price:void 0,minorUnit:R.minorUnit});Object(r.useEffect)(()=>{m||(L(C(f,R.minorUnit)),I(C(O,R.minorUnit)),d(!0))},[R.minorUnit,m,O,f,I,L]);const[W,D]=Object(r.useState)(S),Q=Object(r.useCallback)((e,t)=>{const n=t>=Number(V)?void 0:t,r=e<=Number(q)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(h.removeQueryArgs)(e,...Object.keys(t));return Object(h.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**R.minorUnit,max_price:n/10**R.minorUnit});window.location.href!==e&&Object(y.c)(e)}L(r),I(n)},[q,V,L,I,R.minorUnit]),Y=Object(p.a)(Q,500),K=Object(r.useCallback)(e=>{D(!0),e[0]!==A&&P(e[0]),e[1]!==M&&B(e[1]),l&&m&&!t.showFilterButton&&Y(e[0],e[1])},[A,M,P,B,l,m,Y,t.showFilterButton]);Object(r.useEffect)(()=>{t.showFilterButton||l||Y(A,M)},[A,M,t.showFilterButton,Y,l]);const z=Object(c.a)(U),J=Object(c.a)(T),X=Object(c.a)(q),$=Object(c.a)(V);if(Object(r.useEffect)(()=>{(!Number.isFinite(A)||U!==z&&U!==A||q!==X&&q!==A)&&P(Number.isFinite(U)?U:q),(!Number.isFinite(M)||T!==J&&T!==M||V!==$&&V!==M)&&B(Number.isFinite(T)?T:V)},[A,M,U,T,q,V,X,$,z,J]),!u)return a(!1),null;if(!S&&(null===q||null===V||q===V))return a(!1),null;const G="h"+t.headingLevel;a(!0),!S&&W&&D(!1);const H=Object(r.createElement)(G,{className:"wc-block-price-filter__title"},t.heading),Z=S&&W?Object(r.createElement)(g.a,null,H):H;return Object(r.createElement)(r.Fragment,null,!n&&t.heading&&Z,Object(r.createElement)("div",{className:"wc-block-price-slider"},Object(r.createElement)(_,{minConstraint:q,maxConstraint:V,minPrice:A,maxPrice:M,currency:R,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:K,onSubmit:()=>Q(A,M),isLoading:S,isUpdating:W,isEditor:n})))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},21:function(e,t,n){"use strict";var r=n(0),c=n(6),i=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:o,wrapperProps:a={}}=e;const u=null!=n,l=null!=c;return!u&&l?(t=o||"span",a={...a,className:i()(a.className,"screen-reader-text")},Object(r.createElement)(t,a,c)):(t=o||r.Fragment,u&&l&&n!==c?Object(r.createElement)(t,a,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,a,n))}},214:function(e,t){},225:function(e,t){},226:function(e,t){},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);const c=Object(r.createContext)("page"),i=()=>Object(r.useContext)(c);c.Provider},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(66),c=n(115),i=n(20),o=n(116);const a=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(i.a)(e)?e:{},n=Object(o.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:n})}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=n(13),i=n.n(c);function o(e){const t=Object(r.useRef)(e);return i()(e,t.current)||(t.current=e),t.current}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m}));var r=n(3),c=n(7),i=n(0),o=n(13),a=n.n(o),u=n(30),l=n(64),s=n(25);const b=e=>{const t=Object(s.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:o}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(i.useCallback)(t=>{o(e,t)},[e,o])]},p=(e,t,n)=>{const o=Object(s.a)();n=n||o;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:u}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(i.useCallback)(t=>{u(n,e,t)},[n,e,u])]},m=(e,t)=>{const n=Object(s.a)();t=t||n;const[r,c]=b(t),o=Object(u.a)(r),p=Object(u.a)(e),m=Object(l.a)(p),d=Object(i.useRef)(!1);return Object(i.useEffect)(()=>{a()(m,p)||(c(Object.assign({},o,p)),d.current=!0)},[o,p,m,c]),d.current?[r,c]:[e,c]}},484:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(287),i=n(23),o=n(158),a=n(154);t.default=e=>{const t=Object(c.a)(e);return Object(r.createElement)("div",{className:Object(i.a)(e.className)?e.className:"",style:{...t.style}},Object(r.createElement)(o.a,{isEditor:!1,attributes:Object(a.a)(e)}))}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t,n){var c=this,i=Object(r.useRef)(null),o=Object(r.useRef)(0),a=Object(r.useRef)(null),u=Object(r.useRef)([]),l=Object(r.useRef)(),s=Object(r.useRef)(),b=Object(r.useRef)(e),p=Object(r.useRef)(!0);b.current=e;var m=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var d=!!(n=n||{}).leading,f=!("trailing"in n)||!!n.trailing,O="maxWait"in n,j=O?Math.max(+n.maxWait||0,t):null;return Object(r.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]),Object(r.useMemo)((function(){var e=function(e){var t=u.current,n=l.current;return u.current=l.current=null,o.current=e,s.current=b.current.apply(n,t)},n=function(e,t){m&&cancelAnimationFrame(a.current),a.current=m?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!p.current)return!1;var n=e-i.current,r=e-o.current;return!i.current||n>=t||n<0||O&&r>=j},_=function(t){return a.current=null,f&&u.current?e(t):(u.current=l.current=null,s.current)},g=function(){var e=Date.now();if(r(e))return _(e);if(p.current){var c=e-i.current,a=e-o.current,u=t-c,l=O?Math.min(u,j-a):u;n(g,l)}},w=function(){for(var b=[],m=0;m<arguments.length;m++)b[m]=arguments[m];var f=Date.now(),j=r(f);if(u.current=b,l.current=c,i.current=f,j){if(!a.current&&p.current)return o.current=i.current,n(g,t),d?e(i.current):s.current;if(O)return n(g,t),e(i.current)}return a.current||n(g,t),s.current};return w.cancel=function(){a.current&&(m?cancelAnimationFrame(a.current):clearTimeout(a.current)),o.current=0,u.current=i.current=l.current=a.current=null},w.isPending=function(){return!!a.current},w.flush=function(){return a.current?_(Date.now()):s.current},w}),[d,O,t,j,f,m])}},6:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=c.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),c=n(7),i=n(0),o=n(30);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:u={},shouldSelect:l=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const s=Object(i.useRef)({results:[],isLoading:!0}),b=Object(o.a)(u),p=Object(o.a)(a),m=(()=>{const[,e]=Object(i.useState)();return Object(i.useCallback)(t=>{e(()=>{throw t})},[])})(),d=Object(c.useSelect)(e=>{if(!l)return null;const c=e(r.COLLECTIONS_STORE_KEY),i=[t,n,b,p],o=c.getCollectionError(...i);if(o){if(!(o instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(o)}return{results:c.getCollection(...i),isLoading:!c.hasFinishedResolution("getCollection",i)}},[t,n,p,b,l]);return null!==d&&(s.current=d),s.current}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},69:function(e,t,n){"use strict";var r=n(0);n(102),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},70:function(e,t,n){"use strict";var r=n(0),c=n(1),i=n(6),o=n.n(i),a=n(21);n(103),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:u=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:o()("wc-block-components-filter-reset-button",t),onClick:i},Object(r.createElement)(a.a,{label:n,screenReaderLabel:u}))}},71:function(e,t,n){"use strict";var r=n(0),c=n(1),i=n(6),o=n.n(i),a=n(21);n(104),t.a=e=>{let{className:t,isLoading:n,disabled:i,label:
/* translators: Submit button text for filters. */
u=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:l,screenReaderLabel:s=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:o()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:i,onClick:l},Object(r.createElement)(a.a,{label:u,screenReaderLabel:s}))}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n(14),c=n(2),i=n(74);const o=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,i.a),a="query_type_",u="filter_";function l(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function s(e){o?window.location.href=e:window.history.replaceState({},"",e)}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8),c=n(57);function i(e,t){return e===t}function o(e){return"function"==typeof e?function(){return e}:e}function a(e,t,n){var a=n&&n.equalityFn||i,u=function(e){var t=Object(r.useState)(o(e)),n=t[0],c=t[1];return[n,Object(r.useCallback)((function(e){return c(o(e))}),[])]}(e),l=u[0],s=u[1],b=Object(c.a)(Object(r.useCallback)((function(e){return s(e)}),[s]),t,n),p=Object(r.useRef)(e);return a(p.current,e)||(b(e),p.current=e),[l,b]}}}]);