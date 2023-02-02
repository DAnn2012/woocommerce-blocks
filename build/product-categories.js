this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-categories"]=function(e){function t(t){for(var r,n,l=t[0],s=t[1],i=t[2],p=0,b=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&b.push(c[n][0]),c[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);b.length;)b.shift()();return a.push.apply(a,i||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},c={23:0},a=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;return a.push([447,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},12:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wp.components},318:function(e,t){},337:function(e){e.exports=JSON.parse('{"name":"woocommerce/product-categories","title":"Product Categories List","category":"woocommerce","description":"Show all product categories as a list or dropdown.","keywords":["WooCommerce"],"supports":{"align":["wide","full"],"html":false,"color":{"background":false,"link":true},"typography":{"fontSize":true,"lineHeight":true}},"attributes":{"align":{"type":"string"},"hasCount":{"type":"boolean","default":true},"hasImage":{"type":"boolean","default":false},"hasEmpty":{"type":"boolean","default":false},"isDropdown":{"type":"boolean","default":false},"isHierarchical":{"type":"boolean","default":true}},"example":{"attributes":{"hasCount":true,"hasImage":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},447:function(e,t,o){e.exports=o(495)},448:function(e,t){},495:function(e,t,o){"use strict";o.r(t);var r=o(6),c=o.n(r),a=o(0),n=o(9),l=o(79),s=o(549),i=(o(318),o(337)),u=(o(448),o(5)),p=o(1),b=o(57),d=o.n(b),g=o(3);const h=()=>Object(a.createElement)(g.Placeholder,{icon:Object(a.createElement)(l.a,{icon:s.a}),label:Object(p.__)("Product Categories List","woo-gutenberg-products-block"),className:"wc-block-product-categories"},Object(p.__)("This block displays the product categories for your store. To use it you first need to create a product and assign it to a category.","woo-gutenberg-products-block"));var w=e=>{let{attributes:t,setAttributes:o,name:r}=e;const c=Object(u.useBlockProps)({className:"wc-block-product-categories"});return Object(a.createElement)("div",c,(()=>{const{hasCount:e,hasImage:r,hasEmpty:c,isDropdown:n,isHierarchical:l}=t;return Object(a.createElement)(u.InspectorControls,{key:"inspector"},Object(a.createElement)(g.PanelBody,{title:Object(p.__)("List Settings","woo-gutenberg-products-block"),initialOpen:!0},Object(a.createElement)(g.__experimentalToggleGroupControl,{label:Object(p.__)("Display style","woo-gutenberg-products-block"),value:n?"dropdown":"list",onChange:e=>o({isDropdown:"dropdown"===e})},Object(a.createElement)(g.__experimentalToggleGroupControlOption,{value:"list",label:Object(p.__)("List","woo-gutenberg-products-block")}),Object(a.createElement)(g.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(p.__)("Dropdown","woo-gutenberg-products-block")}))),Object(a.createElement)(g.PanelBody,{title:Object(p.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(a.createElement)(g.ToggleControl,{label:Object(p.__)("Show product count","woo-gutenberg-products-block"),checked:e,onChange:()=>o({hasCount:!e})}),!n&&Object(a.createElement)(g.ToggleControl,{label:Object(p.__)("Show category images","woo-gutenberg-products-block"),help:r?Object(p.__)("Category images are visible.","woo-gutenberg-products-block"):Object(p.__)("Category images are hidden.","woo-gutenberg-products-block"),checked:r,onChange:()=>o({hasImage:!r})}),Object(a.createElement)(g.ToggleControl,{label:Object(p.__)("Show hierarchy","woo-gutenberg-products-block"),checked:l,onChange:()=>o({isHierarchical:!l})}),Object(a.createElement)(g.ToggleControl,{label:Object(p.__)("Show empty categories","woo-gutenberg-products-block"),checked:c,onChange:()=>o({hasEmpty:!c})})))})(),Object(a.createElement)(g.Disabled,null,Object(a.createElement)(d.a,{block:r,attributes:t,EmptyResponsePlaceholder:h})))};Object(n.registerBlockType)(i,{icon:{src:Object(a.createElement)(l.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:o}=e;return"woocommerce_product_categories"===t&&!(null==o||!o.raw)},transform:e=>{let{instance:t}=e;return Object(n.createBlock)("woocommerce/product-categories",{hasCount:!!t.raw.count,hasEmpty:!t.raw.hide_empty,isDropdown:!!t.raw.dropdown,isHierarchical:!!t.raw.hierarchical})}}]},deprecated:[{attributes:{hasCount:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-has-count"},hasEmpty:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-has-empty"},isDropdown:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-is-dropdown"},isHierarchical:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-is-hierarchical"}},migrate:e=>e,save(e){const{hasCount:t,hasEmpty:o,isDropdown:r,isHierarchical:n}=e.attributes,l={};return t&&(l["data-has-count"]=!0),o&&(l["data-has-empty"]=!0),r&&(l["data-is-dropdown"]=!0),n&&(l["data-is-hierarchical"]=!0),Object(a.createElement)("div",c()({className:"is-loading"},l),r?Object(a.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}):Object(a.createElement)("ul",{"aria-hidden":!0},Object(a.createElement)("li",null,Object(a.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(a.createElement)("li",null,Object(a.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(a.createElement)("li",null,Object(a.createElement)("span",{className:"wc-block-product-categories__placeholder"}))))}}],edit:e=>{const t=Object(u.useBlockProps)();return Object(a.createElement)("div",t,Object(a.createElement)(w,e))},save:()=>null})},5:function(e,t){e.exports=window.wp.blockEditor},57:function(e,t){e.exports=window.wp.serverSideRender},9:function(e,t){e.exports=window.wp.blocks}});