this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["mini-cart"]=function(e){function t(t){for(var c,l,i=t[0],a=t[1],u=t[2],d=0,b=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(s&&s(t);b.length;)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={16:0},o=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=a;return o.push([470,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){e.exports=window.wp.primitives},13:function(e,t){e.exports=window.wp.blocks},2:function(e,t){e.exports=window.wc.wcSettings},218:function(e,t,n){"use strict";var c=n(0),r=n(11);const o=Object(c.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}));t.a=o},22:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return l})),n.d(t,"l",(function(){return i})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"k",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return w})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return C})),n.d(t,"b",(function(){return g}));var c,r=n(2);const o=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",i=o.pluginUrl+"build/",a=o.buildPhase,u=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,s=r.STORE_PAGES.checkout.id,d=r.STORE_PAGES.checkout.permalink,b=r.STORE_PAGES.privacy.permalink,p=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),m=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),f=r.STORE_PAGES.cart.permalink,w=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),O=Object(r.getSetting)("allowedCountries",{}),C=Object(r.getSetting)("shippingStates",{}),g=Object(r.getSetting)("allowedStates",{})},27:function(e,t){e.exports=window.wc.priceFormat},3:function(e,t){e.exports=window.wp.components},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(0),r=n(3),o=n(1),l=n(2);const i=[];var a=n(6),u=n.n(a),s=e=>Object(c.createElement)("div",u()({className:"wc-block-welcome-guide__image",style:{display:"flex",justifyContent:"center",alignItems:"center"}},e),Object(c.createElement)("svg",{height:"120",viewBox:"0 0 170 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("g",{filter:"url(#filter0_ddd)"},Object(c.createElement)("rect",{x:"5.5",y:"18",width:"159",height:"96",rx:"3",fill:"white"}),Object(c.createElement)("rect",{x:"24.5",y:"4",width:"51",height:"22",rx:"3",fill:"white"}),Object(c.createElement)("rect",{x:"94.5",y:"4",width:"51",height:"22",rx:"3",fill:"white"})),Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.8908 42H125.078C129.899 42 133.802 45.9231 133.802 50.7692V80C133.802 84.8462 129.899 88.7692 125.078 88.7692H97.756L101.506 98L85.0135 88.7692H48.929C44.1076 88.7692 40.2045 84.8462 40.2045 80V50.7692C40.1662 45.9615 44.0693 42 48.8908 42Z",fill:"#7F54B3"}),Object(c.createElement)("path",{d:"M44.8709 50.723C45.4039 50.0175 46.2033 49.6462 47.2693 49.5719C49.2108 49.4234 50.3149 50.3145 50.5814 52.2453C51.7615 60.0056 53.0559 66.5778 54.4264 71.9617L62.7637 56.4782C63.5251 55.0673 64.4768 54.3246 65.6189 54.2504C67.294 54.139 68.3219 55.1786 68.7406 57.3694C69.6924 62.3077 70.9106 66.5035 72.3573 70.0681C73.3471 60.6369 75.0222 53.8419 77.3825 49.6462C77.9535 48.6065 78.7911 48.0867 79.8951 48.0124C80.7707 47.9382 81.5702 48.1981 82.2935 48.755C83.0168 49.312 83.3975 50.0175 83.4736 50.8715C83.5117 51.5398 83.3975 52.0968 83.0929 52.6538C81.6082 55.3272 80.39 59.82 79.4002 66.0579C78.4484 72.1102 78.1058 76.8258 78.3342 80.2047C78.4104 81.133 78.2581 81.9499 77.8774 82.6553C77.4205 83.4722 76.7353 83.9178 75.8597 83.9921C74.8699 84.0663 73.842 83.6207 72.8522 82.6182C69.3117 79.0908 66.4945 73.8183 64.4388 66.8006C61.9642 71.5533 60.1369 75.1178 58.9567 77.4942C56.7106 81.69 54.8071 83.8435 53.2082 83.9549C52.1803 84.0292 51.3047 83.1752 50.5433 81.3929C48.6017 76.5288 46.5079 67.1347 44.2618 53.2107C44.1476 52.2453 44.3379 51.3913 44.8709 50.723Z",fill:"white"}),Object(c.createElement)("path",{d:"M126.922 56.5426C125.536 54.1968 123.495 52.7819 120.761 52.2234C120.029 52.0745 119.336 52 118.681 52C114.985 52 111.981 53.8617 109.632 57.5851C107.63 60.75 106.629 64.25 106.629 68.0851C106.629 70.9521 107.245 73.4096 108.477 75.4574C109.863 77.8032 111.904 79.2181 114.638 79.7766C115.37 79.9255 116.063 80 116.717 80C120.453 80 123.456 78.1383 125.767 74.4149C127.769 71.2128 128.77 67.7128 128.77 63.8777C128.77 60.9734 128.154 58.5532 126.922 56.5426ZM122.07 66.8564C121.531 69.3138 120.568 71.1383 119.143 72.367C118.027 73.3351 116.987 73.7447 116.024 73.5585C115.1 73.3723 114.33 72.5904 113.752 71.1383C113.29 69.984 113.059 68.8298 113.059 67.75C113.059 66.8192 113.136 65.8883 113.329 65.0319C113.675 63.5053 114.33 62.016 115.37 60.6011C116.64 58.7766 117.988 58.0319 119.374 58.2925C120.299 58.4787 121.069 59.2606 121.646 60.7128C122.108 61.867 122.339 63.0213 122.339 64.1011C122.339 65.0691 122.224 66 122.07 66.8564Z",fill:"white"}),Object(c.createElement)("path",{d:"M102.767 56.5426C101.381 54.1968 99.3018 52.7819 96.6063 52.2234C95.8747 52.0745 95.1816 52 94.5269 52C90.8303 52 87.8267 53.8617 85.4778 57.5851C83.4755 60.75 82.4743 64.25 82.4743 68.0851C82.4743 70.9521 83.0904 73.4096 84.3226 75.4574C85.7089 77.8032 87.7497 79.2181 90.4837 79.7766C91.2153 79.9255 91.9085 80 92.5631 80C96.2983 80 99.3018 78.1383 101.612 74.4149C103.615 71.2128 104.616 67.7128 104.616 63.8777C104.616 60.9734 104 58.5532 102.767 56.5426ZM97.9155 66.8564C97.3765 69.3138 96.4138 71.1383 94.989 72.367C93.8723 73.3351 92.8326 73.7447 91.87 73.5585C90.9458 73.3723 90.1757 72.5904 89.5981 71.1383C89.136 69.984 88.9049 68.8298 88.9049 67.75C88.9049 66.8192 88.9819 65.8883 89.1745 65.0319C89.521 63.5053 90.1757 62.016 91.2153 60.6011C92.4861 58.7766 93.8338 58.0319 95.2201 58.2925C96.1442 58.4787 96.9144 59.2606 97.492 60.7128C97.9541 61.867 98.1851 63.0213 98.1851 64.1011C98.1851 65.0691 98.1081 66 97.9155 66.8564Z",fill:"white"}),Object(c.createElement)("defs",null,Object(c.createElement)("filter",{id:"filter0_ddd",x:"0.5",y:"0",width:"169",height:"120",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},Object(c.createElement)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(c.createElement)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(c.createElement)("feOffset",{dy:"1"}),Object(c.createElement)("feGaussianBlur",{stdDeviation:"1.5"}),Object(c.createElement)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),Object(c.createElement)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(c.createElement)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(c.createElement)("feOffset",{dy:"1"}),Object(c.createElement)("feGaussianBlur",{stdDeviation:"2.5"}),Object(c.createElement)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),Object(c.createElement)("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),Object(c.createElement)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(c.createElement)("feOffset",{dy:"2"}),Object(c.createElement)("feGaussianBlur",{stdDeviation:"1"}),Object(c.createElement)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"}),Object(c.createElement)("feBlend",{mode:"normal",in2:"effect2_dropShadow",result:"effect3_dropShadow"}),Object(c.createElement)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect3_dropShadow",result:"shape"})))));function d(e){let{blockName:t}=e;const[n,a]=(e=>{const[t,n]=((e,t)=>{const[n,r]=Object(c.useState)(()=>{const n=window.localStorage.getItem(e);if(n)try{return JSON.parse(n)}catch{console.error(`Value for key '${e}' could not be retrieved from localStorage because it can't be parsed.`)}return t});return Object(c.useEffect)(()=>{try{window.localStorage.setItem(e,JSON.stringify(n))}catch{console.error(`Value for key '${e}' could not be saved in localStorage because it can't be converted into a string.`)}},[e,n]),[n,r]})("wc-blocks_dismissed_compatibility_notices",i),[r,o]=Object(c.useState)(!1),l=t.includes(e);return Object(c.useEffect)(()=>{o(!l)},[l]),[r,()=>{const c=new Set(t);c.add(e),n([...c])}]})(t);return Object(l.isWpVersion)("5.4","<=")||!n?null:Object(c.createElement)(r.Guide,{className:"wc-block-welcome-guide",contentLabel:Object(o.__)("Compatibility notice","woo-gutenberg-products-block"),onFinish:()=>a(),finishButtonText:Object(o.__)("Got it!","woo-gutenberg-products-block"),pages:[{image:Object(c.createElement)(s,null),content:Object(c.createElement)(c.Fragment,null,Object(c.createElement)("h1",{className:"wc-block-welcome-guide__heading"},Object(o.__)("Compatibility notice","woo-gutenberg-products-block")),Object(c.createElement)("p",{className:"wc-block-welcome-guide__text"},Object(c.createInterpolateElement)(Object(o.__)("This block may not be compatible with <em>all</em> checkout extensions and integrations.","woo-gutenberg-products-block"),{em:Object(c.createElement)("em",null)})),Object(c.createElement)("p",{className:"wc-block-welcome-guide__text"},Object(c.createInterpolateElement)(Object(o.__)("We recommend reviewing our <a>expanding list</a> of compatible extensions prior to using this block on a live store.","woo-gutenberg-products-block"),{a:Object(c.createElement)("a",{href:"https://docs.woocommerce.com/document/cart-checkout-blocks-support-status/",target:"_blank",rel:"noopener noreferrer"})})))}]})}},44:function(e,t,n){"use strict";var c=n(6),r=n.n(c),o=n(0),l=n(73),i=n(113);const a=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"];t.a=e=>{let{children:t,style:n={},...c}=e;const u=Object(o.useRef)(null),s=()=>{u.current&&l.focus.focusable.find(u.current).forEach(e=>{a.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")})},d=Object(i.a)(s,0,{leading:!0});return Object(o.useLayoutEffect)(()=>{let e;return s(),u.current&&(e=new window.MutationObserver(d),e.observe(u.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),d.cancel()}},[d]),Object(o.createElement)("div",r()({ref:u,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...n}},c),t)}},470:function(e,t,n){e.exports=n(495)},471:function(e,t){},495:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n(218),l=n(114),i=n(13),a=n(66),u=n(5),s=n(27),d=n(301),b=n(3),p=n(2),m=n(44),f=n(11),w=Object(c.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none"},Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.84614 18.2769C7.89712 18.2769 7.93845 18.2356 7.93845 18.1846C7.93845 18.1336 7.89712 18.0923 7.84614 18.0923C7.79516 18.0923 7.75384 18.1336 7.75384 18.1846C7.75384 18.2356 7.79516 18.2769 7.84614 18.2769ZM6.03076 18.1846C6.03076 17.182 6.84353 16.3692 7.84614 16.3692C8.84875 16.3692 9.66152 17.182 9.66152 18.1846C9.66152 19.1872 8.84875 20 7.84614 20C6.84353 20 6.03076 19.1872 6.03076 18.1846Z",fill:"currentColor"}),Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.3231 18.2769C17.3741 18.2769 17.4154 18.2356 17.4154 18.1846C17.4154 18.1336 17.3741 18.0923 17.3231 18.0923C17.2721 18.0923 17.2308 18.1336 17.2308 18.1846C17.2308 18.2356 17.2721 18.2769 17.3231 18.2769ZM15.5077 18.1846C15.5077 17.182 16.3205 16.3692 17.3231 16.3692C18.3257 16.3692 19.1385 17.182 19.1385 18.1846C19.1385 19.1872 18.3257 20 17.3231 20C16.3205 20 15.5077 19.1872 15.5077 18.1846Z",fill:"currentColor"}),Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0631 9.53835L19.4662 12.6685L19.4648 12.6757L19.4648 12.6757C19.3424 13.2919 19.0072 13.8454 18.5178 14.2394C18.031 14.6312 17.4226 14.8404 16.798 14.8308H8.44017C7.81556 14.8404 7.20714 14.6312 6.72038 14.2394C6.2312 13.8456 5.89605 13.2924 5.77352 12.6765L5.77335 12.6757L4.33477 5.48814C4.3286 5.46282 4.32345 5.43711 4.31934 5.41104L3.61815 1.90768H0.953842C0.42705 1.90768 0 1.48063 0 0.953842C0 0.42705 0.42705 0 0.953842 0H4.4C4.85462 0 5.24607 0.320858 5.33529 0.766644L6.04403 4.30769H12.785C13.0114 4.99157 13.3319 5.63258 13.7312 6.21538H6.42585L7.64421 12.3026L7.64449 12.304C7.67966 12.4811 7.77599 12.6402 7.91662 12.7534C8.05725 12.8666 8.23322 12.9267 8.41372 12.9233L8.432 12.9231H16.8062L16.8244 12.9233C17.0049 12.9267 17.1809 12.8666 17.3215 12.7534C17.4614 12.6408 17.5575 12.4828 17.5931 12.3068L17.5937 12.304L18.1649 9.30867C18.762 9.45873 19.387 9.53842 20.0307 9.53842C20.0415 9.53842 20.0523 9.5384 20.0631 9.53835Z",fill:"currentColor"}));n(471);var O=e=>{let{count:t,colorClassNames:n,style:r}=e;return Object(c.createElement)("span",{className:"wc-block-mini-cart__quantity-badge"},Object(c.createElement)(l.a,{className:"wc-block-mini-cart__icon",size:20,icon:w}),Object(c.createElement)("span",{className:"wc-block-mini-cart__badge "+n,style:r},t))};const C={apiVersion:2,title:Object(r.__)("Mini Cart","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(l.a,{icon:o.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(r.__)("Display a mini cart widget.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1,color:!0,typography:{fontSize:!0,...Object(a.b)()&&{__experimentalFontFamily:!0}}},example:{attributes:{isPreview:!0}},attributes:{isPreview:{type:"boolean",default:!1,save:!1},addToCartBehaviour:{type:"string",default:"none"}},edit:e=>{let{attributes:t,setAttributes:n}=e;const{addToCartBehaviour:o}=t,l=Object(u.useBlockProps)({className:"wc-block-mini-cart"}),i=Object(p.getSetting)("templatePartEditUri","");return Object(c.createElement)("div",l,Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(b.PanelBody,{title:Object(r.__)("Mini Cart Settings","woo-gutenberg-products-block")},Object(c.createElement)(b.SelectControl,{label:Object(r.__)("Add-to-Cart behaviour","woo-gutenberg-products-block"),value:o,onChange:e=>{n({addToCartBehaviour:e})},help:Object(r.__)("Select what happens when a customer adds a product to the cart.","woo-gutenberg-products-block"),options:[{value:"none",label:Object(r.__)("Do nothing","woo-gutenberg-products-block")},{value:"open_drawer",label:Object(r.__)("Open cart drawer","woo-gutenberg-products-block")}]})),i&&Object(c.createElement)(b.PanelBody,{title:Object(r.__)("Template settings","woo-gutenberg-products-block")},Object(c.createElement)("p",null,Object(r.__)("Edit the appearance of your empty and filled mini cart contents.","woo-gutenberg-products-block")),Object(c.createElement)(b.ExternalLink,{href:i},Object(r.__)("Edit Mini Cart template part","woo-gutenberg-products-block")))),Object(c.createElement)(m.a,null,Object(c.createElement)("button",{className:"wc-block-mini-cart__button"},Object(c.createElement)("span",{className:"wc-block-mini-cart__amount"},Object(s.formatPrice)(0)),Object(c.createElement)(O,{count:0}))),Object(c.createElement)(d.a,{blockName:"mini-cart"}))},save:()=>null};Object(i.registerBlockType)("woocommerce/mini-cart",C)},5:function(e,t){e.exports=window.wp.blockEditor},66:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var c=n(13),r=n(22);const o=(e,t)=>{if(r.n>2)return Object(c.registerBlockType)(e,t)},l=(e,t)=>{if(r.n>1)return Object(c.registerBlockType)(e,t)},i=()=>r.n>2,a=()=>r.n>1},73:function(e,t){e.exports=window.wp.dom},8:function(e,t){e.exports=window.React}});