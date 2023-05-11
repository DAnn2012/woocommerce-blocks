(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[5],{105:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));const n=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},114:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s(26),o=s(20);const i=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(o.a)(e)?e:{}},117:function(e,t){},120:function(e,t){},135:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var n=s(0),o=s(83),i=s(20),a=s(105),r=s(42),c=s(27),l=s(31),u=s(54),d=s(25);const p=e=>{let{queryAttribute:t,queryPrices:s,queryStock:p,queryRating:h,queryState:b,productIds:g,isEditor:m=!1}=e,k=Object(d.a)();k+="-collection-data";const[f]=Object(l.a)(k),[O,v]=Object(l.b)("calculate_attribute_counts",[],k),[j,S]=Object(l.b)("calculate_price_range",null,k),[_,T]=Object(l.b)("calculate_stock_status_counts",null,k),[I,y]=Object(l.b)("calculate_rating_counts",null,k),w=Object(c.a)(t||{}),x=Object(c.a)(s),E=Object(c.a)(p),C=Object(c.a)(h);Object(n.useEffect)(()=>{"object"==typeof w&&Object.keys(w).length&&(O.find(e=>Object(i.b)(w,"taxonomy")&&e.taxonomy===w.taxonomy)||v([...O,w]))},[w,O,v]),Object(n.useEffect)(()=>{j!==x&&void 0!==x&&S(x)},[x,S,j]),Object(n.useEffect)(()=>{_!==E&&void 0!==E&&T(E)},[E,T,_]),Object(n.useEffect)(()=>{I!==C&&void 0!==C&&y(C)},[C,y,I]);const[A,N]=Object(n.useState)(m),[V]=Object(o.a)(A,200);A||N(!0);const F=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(r.a)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:s}=e;return{taxonomy:t,query_type:s}})).asc(["taxonomy","query_type"])),t})(f),[f]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...b,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(a.a)(g)&&{include:g},...F},shouldSelect:V})}},148:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(57),o=s(20),i=s(114);const a=e=>{const t=Object(o.a)(e)?e:{},s=Object(i.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:s})}},150:function(e,t,s){"use strict";var n=s(0),o=s(12);const i=Object(n.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(o.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}));t.a=i},63:function(e,t,s){"use strict";var n=s(0),o=s(1),i=s(4),a=s.n(i),r=s(21);s(91),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
s=Object(o.__)("Reset","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:c=Object(o.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:a()("wc-block-components-filter-reset-button",t),onClick:i},Object(n.createElement)(r.a,{label:s,screenReaderLabel:c}))}},64:function(e,t,s){"use strict";var n=s(0),o=s(1),i=s(4),a=s.n(i),r=s(21);s(92),t.a=e=>{let{className:t,isLoading:s,disabled:i,label:
/* translators: Submit button text for filters. */
c=Object(o.__)("Apply","woo-gutenberg-products-block"),onClick:l,screenReaderLabel:u=Object(o.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:a()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":s},t),disabled:i,onClick:l},Object(n.createElement)(r.a,{label:c,screenReaderLabel:u}))}},80:function(e,t,s){"use strict";var n=s(0);t.a=function(e){let{icon:t,size:s=24,...o}=e;return Object(n.cloneElement)(t,{width:s,height:s,...o})}},81:function(e,t,s){"use strict";var n=s(0),o=s(1),i=s(4),a=s.n(i),r=s(11);s(120),t.a=e=>{let{className:t,onChange:s,options:i=[],checked:c=[],isLoading:l=!1,isDisabled:u=!1,limit:d=10}=e;const[p,h]=Object(n.useState)(!1),b=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),g=Object(n.useMemo)(()=>{const e=i.length-d;return!p&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{h(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(o.sprintf)(
/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[i,d,p]),m=Object(n.useMemo)(()=>p&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{h(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options","woo-gutenberg-products-block")},Object(o.__)("Show less","woo-gutenberg-products-block"))),[p]),k=Object(n.useMemo)(()=>{const e=i.length>d+5;return Object(n.createElement)(n.Fragment,null,i.map((t,o)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!p&&o>=d&&{hidden:!0},Object(n.createElement)(r.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:c.includes(t.value),onChange:()=>{s(t.value)},disabled:u})),e&&o===d-1&&g)),e&&m)},[i,s,c,p,d,m,g,u]),f=a()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":l},t);return Object(n.createElement)("ul",{className:f},l?b:k)}},82:function(e,t,s){"use strict";var n=s(13),o=s.n(n),i=s(0),a=s(7),r=s(4),c=s.n(r),l=s(1),u=s(10),d=s(23),p=s(14),h=s.n(p),b=s(136),g=s(65),m=s(39);function k({value:e,status:t,title:s,displayTransform:n,isBorderless:o=!1,disabled:r=!1,onClickRemove:d=a.noop,onMouseEnter:p,onMouseLeave:h,messages:f,termPosition:O,termsCount:v}){const j=Object(u.useInstanceId)(k),S=c()("components-form-token-field__token",{"is-error":"error"===t,"is-success":"success"===t,"is-validating":"validating"===t,"is-borderless":o,"is-disabled":r}),_=n(e),T=Object(l.sprintf)(
/* translators: 1: term name, 2: term position in a set of terms, 3: total term set count. */
Object(l.__)("%1$s (%2$s of %3$s)"),_,O,v);return Object(i.createElement)("span",{className:S,onMouseEnter:p,onMouseLeave:h,title:s},Object(i.createElement)("span",{className:"components-form-token-field__token-text",id:"components-form-token-field__token-text-"+j},Object(i.createElement)(m.a,{as:"span"},T),Object(i.createElement)("span",{"aria-hidden":"true"},_)),Object(i.createElement)(g.a,{className:"components-form-token-field__remove-token",icon:b.a,onClick:!r&&(()=>d({value:e})),label:f.remove,"aria-describedby":"components-form-token-field__token-text-"+j}))}var f=s(78),O=s(79),v=s(9),j=s(29),S=Object(u.createHigherOrderComponent)(e=>t=>Object(i.createElement)(e,Object(v.a)({},t,{speak:j.speak,debouncedSpeak:Object(u.useDebounce)(j.speak,500)})),"withSpokenMessages");const _={incompleteTokenValue:"",inputOffsetFromEnd:0,isActive:!1,isExpanded:!1,selectedSuggestionIndex:-1,selectedSuggestionScroll:!1};class T extends i.Component{constructor(){super(...arguments),this.state=_,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyPress=this.onKeyPress.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.deleteTokenBeforeInput=this.deleteTokenBeforeInput.bind(this),this.deleteTokenAfterInput=this.deleteTokenAfterInput.bind(this),this.addCurrentToken=this.addCurrentToken.bind(this),this.onContainerTouched=this.onContainerTouched.bind(this),this.renderToken=this.renderToken.bind(this),this.onTokenClickRemove=this.onTokenClickRemove.bind(this),this.onSuggestionHovered=this.onSuggestionHovered.bind(this),this.onSuggestionSelected=this.onSuggestionSelected.bind(this),this.onInputChange=this.onInputChange.bind(this),this.bindInput=this.bindInput.bind(this),this.bindTokensAndInput=this.bindTokensAndInput.bind(this),this.updateSuggestions=this.updateSuggestions.bind(this)}componentDidUpdate(e){this.state.isActive&&!this.input.hasFocus()&&this.input.focus();const{suggestions:t,value:s}=this.props,n=!h()(t,e.suggestions);(n||s!==e.value)&&this.updateSuggestions(n)}static getDerivedStateFromProps(e,t){return e.disabled&&t.isActive?{isActive:!1,incompleteTokenValue:""}:null}bindInput(e){this.input=e}bindTokensAndInput(e){this.tokensAndInput=e}onFocus(e){const{__experimentalExpandOnFocus:t}=this.props;this.input.hasFocus()||e.target===this.tokensAndInput?this.setState({isActive:!0,isExpanded:!!t||this.state.isExpanded}):this.setState({isActive:!1}),"function"==typeof this.props.onFocus&&this.props.onFocus(e)}onBlur(){this.inputHasValidValue()?this.setState({isActive:!1}):this.setState(_)}onKeyDown(e){let t=!1;switch(e.keyCode){case d.BACKSPACE:t=this.handleDeleteKey(this.deleteTokenBeforeInput);break;case d.ENTER:t=this.addCurrentToken();break;case d.LEFT:t=this.handleLeftArrowKey();break;case d.UP:t=this.handleUpArrowKey();break;case d.RIGHT:t=this.handleRightArrowKey();break;case d.DOWN:t=this.handleDownArrowKey();break;case d.DELETE:t=this.handleDeleteKey(this.deleteTokenAfterInput);break;case d.SPACE:this.props.tokenizeOnSpace&&(t=this.addCurrentToken());break;case d.ESCAPE:t=this.handleEscapeKey(e),e.stopPropagation()}t&&e.preventDefault()}onKeyPress(e){let t=!1;switch(e.charCode){case 44:t=this.handleCommaKey()}t&&e.preventDefault()}onContainerTouched(e){e.target===this.tokensAndInput&&this.state.isActive&&e.preventDefault()}onTokenClickRemove(e){this.deleteToken(e.value),this.input.focus()}onSuggestionHovered(e){const t=this.getMatchingSuggestions().indexOf(e);t>=0&&this.setState({selectedSuggestionIndex:t,selectedSuggestionScroll:!1})}onSuggestionSelected(e){this.addNewToken(e)}onInputChange(e){const t=e.value,s=this.props.tokenizeOnSpace?/[ ,\t]+/:/[,\t]+/,n=t.split(s),o=Object(a.last)(n)||"";n.length>1&&this.addNewTokens(n.slice(0,-1)),this.setState({incompleteTokenValue:o},this.updateSuggestions),this.props.onInputChange(o)}handleDeleteKey(e){let t=!1;return this.input.hasFocus()&&this.isInputEmpty()&&(e(),t=!0),t}handleLeftArrowKey(){let e=!1;return this.isInputEmpty()&&(this.moveInputBeforePreviousToken(),e=!0),e}handleRightArrowKey(){let e=!1;return this.isInputEmpty()&&(this.moveInputAfterNextToken(),e=!0),e}handleUpArrowKey(){return this.setState((e,t)=>({selectedSuggestionIndex:(0===e.selectedSuggestionIndex?this.getMatchingSuggestions(e.incompleteTokenValue,t.suggestions,t.value,t.maxSuggestions,t.saveTransform).length:e.selectedSuggestionIndex)-1,selectedSuggestionScroll:!0})),!0}handleDownArrowKey(){return this.setState((e,t)=>({selectedSuggestionIndex:(e.selectedSuggestionIndex+1)%this.getMatchingSuggestions(e.incompleteTokenValue,t.suggestions,t.value,t.maxSuggestions,t.saveTransform).length,selectedSuggestionScroll:!0})),!0}handleEscapeKey(e){return this.setState({incompleteTokenValue:e.target.value,isExpanded:!1,selectedSuggestionIndex:-1,selectedSuggestionScroll:!1}),!0}handleCommaKey(){return this.inputHasValidValue()&&this.addNewToken(this.state.incompleteTokenValue),!0}moveInputToIndex(e){this.setState((t,s)=>({inputOffsetFromEnd:s.value.length-Math.max(e,-1)-1}))}moveInputBeforePreviousToken(){this.setState((e,t)=>({inputOffsetFromEnd:Math.min(e.inputOffsetFromEnd+1,t.value.length)}))}moveInputAfterNextToken(){this.setState(e=>({inputOffsetFromEnd:Math.max(e.inputOffsetFromEnd-1,0)}))}deleteTokenBeforeInput(){const e=this.getIndexOfInput()-1;e>-1&&this.deleteToken(this.props.value[e])}deleteTokenAfterInput(){const e=this.getIndexOfInput();e<this.props.value.length&&(this.deleteToken(this.props.value[e]),this.moveInputToIndex(e))}addCurrentToken(){let e=!1;const t=this.getSelectedSuggestion();return t?(this.addNewToken(t),e=!0):this.inputHasValidValue()&&(this.addNewToken(this.state.incompleteTokenValue),e=!0),e}addNewTokens(e){const t=Object(a.uniq)(e.map(this.props.saveTransform).filter(Boolean).filter(e=>!this.valueContainsToken(e)));if(t.length>0){const e=Object(a.clone)(this.props.value);e.splice.apply(e,[this.getIndexOfInput(),0].concat(t)),this.props.onChange(e)}}addNewToken(e){const{__experimentalExpandOnFocus:t,__experimentalValidateInput:s}=this.props;s(e)?(this.addNewTokens([e]),this.props.speak(this.props.messages.added,"assertive"),this.setState({incompleteTokenValue:"",selectedSuggestionIndex:-1,selectedSuggestionScroll:!1,isExpanded:!t}),this.state.isActive&&this.input.focus()):this.props.speak(this.props.messages.__experimentalInvalid,"assertive")}deleteToken(e){const t=this.props.value.filter(t=>this.getTokenValue(t)!==this.getTokenValue(e));this.props.onChange(t),this.props.speak(this.props.messages.removed,"assertive")}getTokenValue(e){return"object"==typeof e?e.value:e}getMatchingSuggestions(e=this.state.incompleteTokenValue,t=this.props.suggestions,s=this.props.value,n=this.props.maxSuggestions,o=this.props.saveTransform){let i=o(e);const r=[],c=[];return 0===i.length?t=Object(a.difference)(t,s):(i=i.toLocaleLowerCase(),Object(a.each)(t,e=>{const t=e.toLocaleLowerCase().indexOf(i);-1===s.indexOf(e)&&(0===t?r.push(e):t>0&&c.push(e))}),t=r.concat(c)),Object(a.take)(t,n)}getSelectedSuggestion(){if(-1!==this.state.selectedSuggestionIndex)return this.getMatchingSuggestions()[this.state.selectedSuggestionIndex]}valueContainsToken(e){return Object(a.some)(this.props.value,t=>this.getTokenValue(e)===this.getTokenValue(t))}getIndexOfInput(){return this.props.value.length-this.state.inputOffsetFromEnd}isInputEmpty(){return 0===this.state.incompleteTokenValue.length}inputHasValidValue(){return this.props.saveTransform(this.state.incompleteTokenValue).length>0}updateSuggestions(e=!0){const{__experimentalExpandOnFocus:t}=this.props,{incompleteTokenValue:s}=this.state,n=s.trim().length>1,o=this.getMatchingSuggestions(s),i=o.length>0,a={isExpanded:t||n&&i};if(e&&(a.selectedSuggestionIndex=-1,a.selectedSuggestionScroll=!1),this.setState(a),n){const{debouncedSpeak:e}=this.props;e(i?Object(l.sprintf)(
/* translators: %d: number of results. */
Object(l._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",o.length),o.length):Object(l.__)("No results."),"assertive")}}renderTokensAndInput(){const e=Object(a.map)(this.props.value,this.renderToken);return e.splice(this.getIndexOfInput(),0,this.renderInput()),e}renderToken(e,t,s){const n=this.getTokenValue(e),o=e.status?e.status:void 0,a=t+1,r=s.length;return Object(i.createElement)(k,{key:"token-"+n,value:n,status:o,title:e.title,displayTransform:this.props.displayTransform,onClickRemove:this.onTokenClickRemove,isBorderless:e.isBorderless||this.props.isBorderless,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,disabled:"error"!==o&&this.props.disabled,messages:this.props.messages,termsCount:r,termPosition:a})}renderInput(){const{autoCapitalize:e,autoComplete:t,maxLength:s,placeholder:n,value:o,instanceId:a}=this.props;let r={instanceId:a,autoCapitalize:e,autoComplete:t,placeholder:0===o.length?n:"",ref:this.bindInput,key:"input",disabled:this.props.disabled,value:this.state.incompleteTokenValue,onBlur:this.onBlur,isExpanded:this.state.isExpanded,selectedSuggestionIndex:this.state.selectedSuggestionIndex};return s&&o.length>=s||(r={...r,onChange:this.onInputChange}),Object(i.createElement)(f.a,r)}render(){const{disabled:e,label:t=Object(l.__)("Add item"),instanceId:s,className:n,__experimentalShowHowTo:o}=this.props,{isExpanded:a}=this.state,r=c()(n,"components-form-token-field__input-container",{"is-active":this.state.isActive,"is-disabled":e});let u={className:"components-form-token-field",tabIndex:"-1"};const d=this.getMatchingSuggestions();return e||(u=Object.assign({},u,{onKeyDown:this.onKeyDown,onKeyPress:this.onKeyPress,onFocus:this.onFocus})),Object(i.createElement)("div",u,Object(i.createElement)("label",{htmlFor:"components-form-token-input-"+s,className:"components-form-token-field__label"},t),Object(i.createElement)("div",{ref:this.bindTokensAndInput,className:r,tabIndex:"-1",onMouseDown:this.onContainerTouched,onTouchStart:this.onContainerTouched},this.renderTokensAndInput(),a&&Object(i.createElement)(O.a,{instanceId:s,match:this.props.saveTransform(this.state.incompleteTokenValue),displayTransform:this.props.displayTransform,suggestions:d,selectedIndex:this.state.selectedSuggestionIndex,scrollIntoView:this.state.selectedSuggestionScroll,onHover:this.onSuggestionHovered,onSelect:this.onSuggestionSelected})),o&&Object(i.createElement)("p",{id:"components-form-token-suggestions-howto-"+s,className:"components-form-token-field__help"},this.props.tokenizeOnSpace?Object(l.__)("Separate with commas, spaces, or the Enter key."):Object(l.__)("Separate with commas or the Enter key.")))}}T.defaultProps={suggestions:Object.freeze([]),maxSuggestions:100,value:Object.freeze([]),displayTransform:a.identity,saveTransform:e=>e.trim(),onChange:()=>{},onInputChange:()=>{},isBorderless:!1,disabled:!1,tokenizeOnSpace:!1,messages:{added:Object(l.__)("Item added."),removed:Object(l.__)("Item removed."),remove:Object(l.__)("Remove item"),__experimentalInvalid:Object(l.__)("Invalid item")},__experimentalExpandOnFocus:!1,__experimentalValidateInput:()=>!0,__experimentalShowHowTo:!0};var I=S(Object(u.withInstanceId)(T));s(117),t.a=e=>{let{className:t,style:s,suggestions:n,multiple:a=!0,saveTransform:r=(e=>e.trim().replace(/\s/g,"-")),messages:l={},validateInput:u=(e=>n.includes(e)),label:d="",...p}=e;return Object(i.createElement)("div",{className:c()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!a}),style:s},Object(i.createElement)(I,o()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:u,saveTransform:r,maxLength:a?void 0:1,suggestions:n,messages:l},p)))}},83:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(8),o=s(53);function i(e,t){return e===t}function a(e){return"function"==typeof e?function(){return e}:e}function r(e,t,s){var r=s&&s.equalityFn||i,c=function(e){var t=Object(n.useState)(a(e)),s=t[0],o=t[1];return[s,Object(n.useCallback)((function(e){return o(a(e))}),[])]}(e),l=c[0],u=c[1],d=Object(o.a)(Object(n.useCallback)((function(e){return u(e)}),[u]),t,s),p=Object(n.useRef)(e);return r(p.current,e)||(d(e),p.current=e),[l,d]}},91:function(e,t){},92:function(e,t){}}]);