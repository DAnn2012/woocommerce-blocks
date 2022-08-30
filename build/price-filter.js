this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,l=t[0],a=t[1],s=t[2],b=0,p=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={17:0,1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;return o.push([389,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},100:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},11:function(e,t){e.exports=window.wp.primitives},12:function(e,t){e.exports=window.React},120:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(10),i=n(1);n(160),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:l,instanceId:a}=e;const s="h"+n;return Object(r.createElement)(s,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(r.createElement)(c.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:l,onChange:o}))})},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(17),c=n(9),o=n(0),i=n(49),l=n(124);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:s={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(i.a)(s),d=Object(i.a)(a),m=Object(l.a)(),f=Object(c.useSelect)(e=>{if(!u)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,d],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,d,p,u]);return null!==f&&(b.current=f),b.current}},131:function(e,t){},146:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),l=n(28);n(186),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:a=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(r.createElement)(l.a,{label:n,screenReaderLabel:a}))}},147:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),l=n(28);n(187),t.a=e=>{let{className:t,disabled:n,label:
/* translators: Submit button text for filters. */
o=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:a,screenReaderLabel:s=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:n,onClick:a},Object(r.createElement)(l.a,{label:o,screenReaderLabel:s}))}},15:function(e,t){e.exports=window.wp.url},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},160:function(e,t){},17:function(e,t){e.exports=window.wc.wcBlocksData},186:function(e,t){},187:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t){e.exports=window.wp.isShallowEqual},23:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return w})),n.d(t,"b",(function(){return _}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",l=o.pluginUrl+"build/",a=o.buildPhase,s=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),m=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,g=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),w=Object(c.getSetting)("shippingStates",{}),_=Object(c.getSetting)("allowedStates",{})},249:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(15),c=n(2),o=n(150);const i=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),l="query_type_",a="filter_";function s(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){i?window.location.href=e:window.history.replaceState({},"",e)}},26:function(e,t){e.exports=window.wc.priceFormat},28:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:i,wrapperProps:l={}}=e;const a=null!=n,s=null!=c;return!a&&s?(t=i||"span",l={...l,className:o()(l.className,"screen-reader-text")},Object(r.createElement)(t,l,c)):(t=i||r.Fragment,a&&s&&n!==c?Object(r.createElement)(t,l,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,l,n))}},280:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price","description":"Allow customers to filter products by price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false}},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},3:function(e,t){e.exports=window.wp.components},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(287),o=n(7),i=n(49),l=n(35),a=n(75),s=n(125),u=n(52);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryState:p}=e,d=Object(u.a)();d+="-collection-data";const[m]=Object(a.a)(d),[f,g]=Object(a.b)("calculate_attribute_counts",[],d),[O,w]=Object(a.b)("calculate_price_range",null,d),[_,j]=Object(a.b)("calculate_stock_status_counts",null,d),h=Object(i.a)(t||{}),v=Object(i.a)(n),k=Object(i.a)(b);Object(r.useEffect)(()=>{"object"==typeof h&&Object.keys(h).length&&(f.find(e=>Object(l.b)(h,"taxonomy")&&e.taxonomy===h.taxonomy)||g([...f,h]))},[h,f,g]),Object(r.useEffect)(()=>{O!==v&&void 0!==v&&w(v)},[v,w,O]),Object(r.useEffect)(()=>{_!==k&&void 0!==k&&j(k)},[k,j,_]);const[y,E]=Object(r.useState)(!1),[x]=Object(c.a)(y,200);y||E(!0);const S=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...S},shouldSelect:x})}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},38:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),i=n(126),l=n(4),a=n.n(l);n(131);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:r,onValueChange:l,displayType:u="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**r.minorUnit;if(!Number.isFinite(d))return null;const m=a()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...s(r),value:void 0,currency:void 0,onValueChange:void 0},g=l?e=>{const t=+e.value*10**r.minorUnit;l(t)}:()=>{};return Object(o.createElement)(i.a,c()({className:m,displayType:u},f,{value:d,onValueChange:g}))}},389:function(e,t,n){e.exports=n(463)},390:function(e,t){},391:function(e,t){},392:function(e,t){},463:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(1),l=n(8),a=n(4),s=n.n(a),u=n(113),b=n(519),p=n(5),d=n(2),m=n(23),f=n(99),g=n(120),O=n(239),w=n(3),_=n(109),j=n(75),h=n(312),v=n(38),k=n(35),y=n(112);n(392);const E=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const l=e=>Number.isFinite(e);return l(o)||(o=t||0),l(i)||(i=n||r),l(t)&&t>o&&(o=t),l(n)&&n<=o&&(o=n-r),l(t)&&t>=i&&(i=t+r),l(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]};var x=n(147);const S=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},C=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var N=n(146),F=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:c,onChange:l,step:a,currency:u,showInputFields:b=!0,showFilterButton:p=!1,inlineInput:d=!0,isLoading:m=!1,onSubmit:f=(()=>{})}=e;const g=Object(o.useRef)(null),O=Object(o.useRef)(null),w=a||10**u.minorUnit,[_,j]=Object(o.useState)(t),[h,F]=Object(o.useState)(n),P=Object(o.useRef)(null),[T,R]=Object(o.useState)(0);Object(o.useEffect)(()=>{j(t)},[t]),Object(o.useEffect)(()=>{F(n)},[n]),Object(o.useLayoutEffect)(()=>{var e;d&&P.current&&R(null===(e=P.current)||void 0===e?void 0:e.offsetWidth)},[d,R]);const L=Object(o.useMemo)(()=>isFinite(r)&&isFinite(c),[r,c]),U=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&L?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,c,L]),A=Object(o.useCallback)(e=>{if(m||!L||!g.current||!O.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=g.current.offsetWidth,o=+g.current.value,i=O.current.offsetWidth,l=+O.current.value,a=r*(o/c),s=i*(l/c);Math.abs(n-a)>Math.abs(n-s)?(g.current.style.zIndex="20",O.current.style.zIndex="21"):(g.current.style.zIndex="21",O.current.style.zIndex="20")},[m,c,L]),V=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,a=o?[Math.round(i/w)*w,n]:[t,Math.round(i/w)*w],s=E(a,r,c,w,o);l(s)},[l,t,n,r,c,w]),B=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(_>=h){const e=E([0,h],null,null,w,t);return l([parseInt(e[0],10),parseInt(e[1],10)])}const n=E([_,h],null,null,w,t);l(n)},[l,w,_,h]),I=Object(y.a)(f,600),M=s()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",m&&"is-loading",!L&&"is-disabled",(d||T<=300)&&"wc-block-components-price-slider--is-input-inline"),H=Object(k.a)(g.current)?g.current.ownerDocument.activeElement:void 0,z=H&&H===g.current?w:1,G=H&&H===O.current?w:1,q=String(_/10**u.minorUnit),D=String(h/10**u.minorUnit),Q=d&&T>300,W=Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",onMouseMove:A,onFocus:A},L&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:U}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":q,value:Number.isFinite(t)?t:r,onChange:V,step:z,min:r,max:c,ref:g,disabled:m&&!L,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":D,value:Number.isFinite(n)?n:c,onChange:V,step:G,min:r,max:c,ref:O,disabled:m,tabIndex:b?-1:0})));return Object(o.createElement)("div",{className:M,ref:P},(!Q||!b)&&W,b&&Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},Object(o.createElement)(v.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),allowNegative:!1,isAllowed:C({minConstraint:r,minorUnit:u.minorUnit,currentMaxValue:h}),onValueChange:e=>{e!==_&&j(e)},onBlur:B,disabled:m||!L,value:_}),Q&&W,Object(o.createElement)(v.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),isAllowed:S({maxConstraint:c,minorUnit:u.minorUnit}),onValueChange:e=>{e!==h&&F(e)},onBlur:B,disabled:m||!L,value:h})),!b&&!m&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(o.createElement)(v.a,{currency:u,value:t}),Object(o.createElement)(v.a,{currency:u,value:n})),Object(o.createElement)("div",{className:"wc-block-components-price-slider__actions"},(t!==r||n!==c)&&Object(o.createElement)(N.a,{onClick:()=>{l([r,c]),I()},screenReaderLabel:Object(i.__)("Reset price filter","woo-gutenberg-products-block")}),p&&Object(o.createElement)(x.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",disabled:m||!L,onClick:f,screenReaderLabel:Object(i.__)("Apply price filter","woo-gutenberg-products-block")})))},P=n(26),T=n(15),R=n(249),L=n(150),U=n(100);const A=(e,t,n)=>{const r=10*10**t;let c=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?c=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(c=Math.floor(o/r)*r));const i=Object(_.a)(c,Number.isFinite);return Number.isFinite(c)?c:i};function V(e,t){return Number(e)*10**t}n(391);var B=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(d.getSettingWithCoercion)("has_filterable_products",!1,L.a),c=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,L.a),[i,l]=Object(o.useState)(!1),a=Object(R.d)("min_price"),s=Object(R.d)("max_price"),[u]=Object(j.a)(),{results:b,isLoading:p}=Object(h.a)({queryPrices:!0,queryState:u}),m=Object(P.getCurrencyFromPriceResponse)(Object(k.b)(b,"price_range")?b.price_range:void 0),[f,g]=Object(j.b)("min_price"),[O,w]=Object(j.b)("max_price"),[v,E]=Object(o.useState)(V(a,m.minorUnit)||null),[x,S]=Object(o.useState)(V(s,m.minorUnit)||null),{minConstraint:C,maxConstraint:N}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:A(t||"",r,"ROUND_DOWN"),maxConstraint:A(n||"",r,"ROUND_UP")}})({minPrice:Object(k.b)(b,"price_range")&&Object(k.b)(b.price_range,"min_price")&&Object(U.a)(b.price_range.min_price)?b.price_range.min_price:void 0,maxPrice:Object(k.b)(b,"price_range")&&Object(k.b)(b.price_range,"max_price")&&Object(U.a)(b.price_range.max_price)?b.price_range.max_price:void 0,minorUnit:m.minorUnit});Object(o.useEffect)(()=>{i||(g(V(a,m.minorUnit)),w(V(s,m.minorUnit)),l(!0))},[m.minorUnit,i,s,a,w,g]);const B=Object(o.useCallback)((e,t)=>{const n=t>=Number(N)?void 0:t,r=e<=Number(C)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(T.removeQueryArgs)(e,...Object.keys(t));return Object(T.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**m.minorUnit,max_price:n/10**m.minorUnit});window.location.href!==e&&Object(R.c)(e)}g(r),w(n)},[C,N,g,w,m.minorUnit]),I=Object(y.a)(B,500),M=Object(o.useCallback)(e=>{e[0]!==v&&E(e[0]),e[1]!==x&&S(e[1]),c&&i&&!t.showFilterButton&&I(e[0],e[1])},[v,x,E,S,c,i,I,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||c||I(v,x)},[v,x,t.showFilterButton,I,c]);const H=Object(_.a)(f),z=Object(_.a)(O),G=Object(_.a)(C),q=Object(_.a)(N);if(Object(o.useEffect)(()=>{(!Number.isFinite(v)||f!==H&&f!==v||C!==G&&C!==v)&&E(Number.isFinite(f)?f:C),(!Number.isFinite(x)||O!==z&&O!==x||N!==q&&N!==x)&&S(Number.isFinite(O)?O:N)},[v,x,f,O,C,N,G,q,H,z]),!r)return null;if(!p&&(null===C||null===N||C===N))return null;const D="h"+t.headingLevel;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&Object(o.createElement)(D,{className:"wc-block-price-filter__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(F,{minConstraint:C,maxConstraint:N,minPrice:v,maxPrice:x,currency:m,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:M,onSubmit:()=>B(v,x),isLoading:p})))},I=(n(390),n(280));const M={heading:{type:"string",default:Object(i.__)("Filter by price","woo-gutenberg-products-block")}};Object(l.registerBlockType)(I,{title:Object(i.__)("Filter by Price","woo-gutenberg-products-block"),description:Object(i.__)("Allow customers to filter products by price range.","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(u.a,{icon:b.a,className:"wc-block-editor-components-block-icon"})},attributes:{...I.attributes,...M},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:n}=e;return"woocommerce_price_filter"===t&&!(null==n||!n.raw)},transform:e=>{var t;let{instance:n}=e;return Object(l.createBlock)("woocommerce/price-filter",{showInputFields:!1,showFilterButton:!0,heading:(null==n||null===(t=n.raw)||void 0===t?void 0:t.title)||Object(i.__)("Filter by price","woo-gutenberg-products-block"),headingLevel:3,inlineInput:!1})}}]},edit:function(e){let{attributes:t,setAttributes:n}=e;const{heading:r,headingLevel:c,showInputFields:l,inlineInput:a,showFilterButton:s}=t,_=Object(p.useBlockProps)();return Object(o.createElement)("div",_,0===m.o.productCount?Object(o.createElement)(w.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(u.a,{icon:b.a}),label:Object(i.__)("Filter by Price","woo-gutenberg-products-block"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woo-gutenberg-products-block")),Object(o.createElement)(w.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(u.a,{icon:O.a})),Object(o.createElement)(w.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.InspectorControls,{key:"inspector"},Object(o.createElement)(w.PanelBody,{title:Object(i.__)("Settings","woo-gutenberg-products-block")},Object(o.createElement)(w.__experimentalToggleGroupControl,{label:Object(i.__)("Price Range Selector","woo-gutenberg-products-block"),value:l?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(o.createElement)(w.__experimentalToggleGroupControlOption,{value:"editable",label:Object(i.__)("Editable","woo-gutenberg-products-block")}),Object(o.createElement)(w.__experimentalToggleGroupControlOption,{value:"text",label:Object(i.__)("Text","woo-gutenberg-products-block")})),l&&Object(o.createElement)(w.ToggleControl,{label:Object(i.__)("Inline input fields","woo-gutenberg-products-block"),checked:a,onChange:()=>n({inlineInput:!a}),help:Object(i.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),Object(o.createElement)(w.ToggleControl,{label:Object(i.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:s?Object(i.__)("Products will only update when the button is pressed.","woo-gutenberg-products-block"):Object(i.__)("Products will update when the slider is moved.","woo-gutenberg-products-block"),checked:s,onChange:()=>n({showFilterButton:!s})}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(f.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:c,onChange:e=>n({headingLevel:e})}))),Object(o.createElement)(g.a,{className:"wc-block-price-filter__title",headingLevel:c,heading:r,onChange:e=>n({heading:e})}),Object(o.createElement)(w.Disabled,null,Object(o.createElement)(B,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:i,heading:l,headingLevel:a}=t,u={"data-showinputfields":r,"data-showfilterbutton":i,"data-heading":l,"data-heading-level":a};return Object(o.createElement)("div",c()({},p.useBlockProps.save({className:s()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(22),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},5:function(e,t){e.exports=window.wp.blockEditor},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},7:function(e,t){e.exports=window.lodash},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(17),c=n(9),o=n(0),i=n(22),l=n.n(i),a=n(49),s=n(109),u=n(52);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const l=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:a}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[l,Object(o.useCallback)(t=>{a(n,e,t)},[n,e,a])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),i=Object(a.a)(r),p=Object(a.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{l()(d,p)||(c(Object.assign({},i,p)),m.current=!0)},[i,p,d,c]),m.current?[r,c]:[e,c]}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wp.data},99:function(e,t,n){"use strict";var r=n(0),c=n(7),o=n(1),i=n(3),l=n(11);function a(e){let{level:t}=e;const n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(r.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{d:n[t]})):null}class s extends r.Component{createLevelControl(e,t,n){const c=e===t;return{icon:Object(r.createElement)(a,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:c,onClick:()=>n(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:n,selectedLevel:o,onChange:l}=this.props;return Object(r.createElement)(i.ToolbarGroup,{isCollapsed:e,icon:Object(r.createElement)(a,{level:o}),controls:Object(c.range)(t,n).map(e=>this.createLevelControl(e,o,l))})}}t.a=s}});