this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["customer-account"]=function(e){function t(t){for(var c,l,a=t[0],i=t[1],s=t[2],b=0,p=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],c=!0,a=1;a<o.length;a++){var i=o[a];0!==n[i]&&(c=!1)}c&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var c={},n={13:0},r=[];function l(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=c,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(o,c,function(t){return e[t]}.bind(null,c));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return r.push([453,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},2:function(e,t){e.exports=window.wp.components},262:function(e){e.exports=JSON.parse('{"name":"woocommerce/customer-account","version":"1.0.0","title":"Customer account","description":"A block that allows your customers to log in and out of their accounts in your store.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"color":{"text":true},"typography":{"fontSize":true,"__experimentalFontFamily":true},"spacing":{"margin":true}},"attributes":{"displayStyle":{"type":"string","default":"icon_and_text"},"iconStyle":{"type":"string","default":"default"},"iconClass":{"type":"string","default":"icon"}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},3:function(e,t){e.exports=window.wc.wcSettings},453:function(e,t,o){e.exports=o(512)},454:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},512:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o(8),r=o(75),l=o(10),a=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)("path",{id:"icon/action/account_circle_24px_2",fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z"})),i=o(1),s=o(262),u=o(4),b=o.n(u),p=o(5),d=o(2),m=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},Object(c.createElement)("path",{d:"M9 0C4.03579 0 0 4.03579 0 9C0 13.9642 4.03579 18 9 18C13.9642 18 18 13.9642 18 9C18 4.03579 13.9642 0 9 0ZM9 4.32C10.5347 4.32 11.7664 5.57056 11.7664 7.08638C11.7664 8.62109 10.5158 9.85277 9 9.85277C7.4653 9.85277 6.23362 8.60221 6.23362 7.08638C6.23362 5.57056 7.46526 4.32 9 4.32ZM9 10.7242C11.1221 10.7242 12.96 12.2021 13.7937 14.4189C12.5242 15.5559 10.8379 16.238 9 16.238C7.16207 16.238 5.49474 15.5369 4.20632 14.4189C5.05891 12.2021 6.87793 10.7242 9 10.7242Z",fill:"currentColor"})),w=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.00009 8.34785C10.3096 8.34785 12.1819 6.47909 12.1819 4.17393C12.1819 1.86876 10.3096 0 8.00009 0C5.69055 0 3.81824 1.86876 3.81824 4.17393C3.81824 6.47909 5.69055 8.34785 8.00009 8.34785ZM0.333496 15.6522C0.333496 15.8444 0.489412 16 0.681933 16H15.3184C15.5109 16 15.6668 15.8444 15.6668 15.6522V14.9565C15.6668 12.1428 13.7821 9.73911 10.0912 9.73911H5.90931C2.21828 9.73911 0.333645 12.1428 0.333645 14.9565L0.333496 15.6522Z",fill:"currentColor"})),g=o(3);let O,_;!function(e){e.ICON_AND_TEXT="icon_and_text",e.TEXT_ONLY="text_only",e.ICON_ONLY="icon_only"}(O||(O={})),function(e){e.DEFAULT="default",e.ALT="alt"}(_||(_={}));const C=e=>{let{iconStyle:t,displayStyle:o,iconClass:n}=e;const l=t===_.ALT?m:w;return o===O.TEXT_ONLY?null:Object(c.createElement)(r.a,{className:n,icon:l,size:18})},y=e=>{let{displayStyle:t}=e;if(t===O.ICON_ONLY)return null;const o=Object(g.getSetting)("currentUserId",null);return Object(c.createElement)("span",{className:"label"},o?Object(i.__)("My Account","woo-gutenberg-products-block"):Object(i.__)("Log in","woo-gutenberg-products-block"))};var f=e=>{let{attributes:t}=e;const{displayStyle:o,iconStyle:n,iconClass:r}=t;return Object(c.createElement)("a",{href:Object(g.getSetting)("dashboardUrl",Object(g.getSetting)("wpLoginUrl","/wp-login.php"))},Object(c.createElement)(C,{iconStyle:n,displayStyle:o,iconClass:r}),Object(c.createElement)(y,{displayStyle:o}))};const j=()=>{const e=Object(g.getSetting)("adminUrl")+"admin.php?page=wc-settings&tab=account",t=Object(c.createInterpolateElement)(`<a>${Object(i.__)("Manage account settings","woo-gutenberg-products-block")}</a>`,{a:Object(c.createElement)(d.ExternalLink,{href:e})});return Object(c.createElement)("div",{className:"wc-block-editor-customer-account__link"},t)},h=e=>{let{attributes:t,setAttributes:o}=e;const{displayStyle:n,iconStyle:l}=t,a=[O.ICON_ONLY,O.ICON_AND_TEXT].includes(n);return Object(c.createElement)(p.InspectorControls,{key:"inspector"},Object(c.createElement)(d.PanelBody,null,Object(c.createElement)(j,null)),Object(c.createElement)(d.PanelBody,{title:Object(i.__)("Display settings","woo-gutenberg-products-block")},Object(c.createElement)(d.SelectControl,{className:"customer-account-display-style",label:Object(i.__)("Icon options","woo-gutenberg-products-block"),value:n,onChange:e=>{o({displayStyle:e})},help:Object(i.__)("Choose if you want to include an icon with the customer account link.","woo-gutenberg-products-block"),options:[{value:O.ICON_AND_TEXT,label:Object(i.__)("Icon and text","woo-gutenberg-products-block")},{value:O.TEXT_ONLY,label:Object(i.__)("Text-only","woo-gutenberg-products-block")},{value:O.ICON_ONLY,label:Object(i.__)("Icon-only","woo-gutenberg-products-block")}]}),a?Object(c.createElement)(d.__experimentalToggleGroupControl,{label:Object(i.__)("Display Style","woo-gutenberg-products-block"),value:l,onChange:e=>o({iconStyle:e}),className:"wc-block-editor-customer-account__icon-style-toggle"},Object(c.createElement)(d.__experimentalToggleGroupControlOption,{value:_.DEFAULT,label:Object(c.createElement)(r.a,{icon:w,size:16,className:b()("wc-block-editor-customer-account__icon-option",{active:l===_.DEFAULT})})}),Object(c.createElement)(d.__experimentalToggleGroupControlOption,{value:_.ALT,label:Object(c.createElement)(r.a,{icon:m,size:20,className:b()("wc-block-editor-customer-account__icon-option",{active:l===_.ALT})})})):null))};o(454);Object(n.registerBlockType)(s,{icon:{src:Object(c.createElement)(r.a,{icon:a,className:"wc-block-editor-components-block-icon"})},attributes:{...s.attributes},edit:e=>{let{attributes:t,setAttributes:o}=e;const{className:n}=t,r=Object(p.useBlockProps)({className:b()("wc-block-editor-customer-account",n)});return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",r,Object(c.createElement)(p.InspectorControls,null,Object(c.createElement)(h,{attributes:t,setAttributes:o})),Object(c.createElement)(d.Disabled,null,Object(c.createElement)(f,{attributes:t}))))},save:()=>null}),Object(n.registerBlockVariation)("woocommerce/customer-account",{name:"woocommerce/customer-account",title:Object(i.__)("Customer account","woo-gutenberg-products-block"),isDefault:!0,attributes:{...s.attributes,displayStyle:"icon_and_text",iconStyle:"default",iconClass:"wc-block-customer-account__account-icon"}})},8:function(e,t){e.exports=window.wp.blocks}});