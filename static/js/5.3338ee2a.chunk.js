(this.webpackJsonppersonal_site=this.webpackJsonppersonal_site||[]).push([[5],{201:function(e,t,r){"use strict";r.r(t);r(0);var n=r(41),i=r(3);t.default=function(){return Object(i.jsx)(n.a,{description:"Jacob Morris' projects",children:Object(i.jsx)("p",{children:"Hello World: This is an Projects"})})}},32:function(e,t,r){"use strict";r(0);var n=r(14),i=r(3);t.a=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{id:"footer",className:"wrapper alt",children:Object(i.jsxs)("div",{className:"inner",children:[Object(i.jsxs)("div",{className:"sitemap",children:[Object(i.jsx)("h4",{children:"Sitemap"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/",children:"Index"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/resume",children:"Resume"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/easter",children:"Something Special"})})]})]}),Object(i.jsxs)("ul",{className:"menu",children:[Object(i.jsx)("li",{children:"\xa9 Jacob Morris. Licensed with MIT."}),Object(i.jsxs)("li",{children:["Design: ",Object(i.jsx)("a",{href:"http://html5up.net",children:"HTML5 UP"}),", lovingly edited by me =3"]})]})]})})})}},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return U})),r.d(t,"b",(function(){return R}));var n=r(0),i=r.n(n),o=r(8),a=r.n(o),c=r(38),s=r.n(c),u=r(39),l=r.n(u),f=r(40),d=r.n(f);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function b(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},y=Object.keys(m).map((function(e){return m[e]})),j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},T=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),v=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},g=function(e){var t=v(e,m.TITLE),r=v(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(function(){return t}));var n=v(e,"defaultTitle");return t||n||void 0},O=function(e){return v(e,"onChangeClientState")||function(){}},x=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return p({},e,t)}),{})},A=function(e,t){return t.filter((function(e){return void 0!==e[m.BASE]})).map((function(e){return e[m.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},C=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r,o=Object.keys(e),a=0;a<o.length;a+=1){var c=o[a],s=c.toLowerCase();-1===t.indexOf(s)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===s&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||"innerHTML"!==c&&"cssText"!==c&&"itemprop"!==c||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var c=o[a],s=p({},n[c],i[c]);n[c]=s}return e}),[]).reverse()},S=function(e){return Array.isArray(e)?e.join(""):e},E=[m.NOSCRIPT,m.SCRIPT,m.STYLE],w=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},L=function(e,t,r){switch(e){case m.TITLE:return{toComponent:function(){return r=t.titleAttributes,(n={key:e=t.title})["data-rh"]=!0,o=I(r,n),[i.a.createElement(m.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var i=P(r),o=S(t);return i?"<"+e+' data-rh="true" '+i+">"+w(o,n)+"</"+e+">":"<"+e+' data-rh="true">'+w(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-rh"]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:o[r]=t[e]})),i.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+w(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===E.indexOf(e);return t+"<"+e+' data-rh="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},M=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,l=void 0===u?"":u,f=e.titleAttributes;return{base:L(m.BASE,e.baseTag,r),bodyAttributes:L("bodyAttributes",t,r),htmlAttributes:L("htmlAttributes",n,r),link:L(m.LINK,i,r),meta:L(m.META,o,r),noscript:L(m.NOSCRIPT,a,r),script:L(m.SCRIPT,c,r),style:L(m.STYLE,s,r),title:L(m.TITLE,{title:l,titleAttributes:f},r)}},k=i.a.createContext({}),N=a.a.shape({setHelmet:a.a.func,helmetInstances:a.a.shape({get:a.a.func,add:a.a.func,remove:a.a.func})}),H="undefined"!=typeof document,R=function(e){function t(r){var n;return(n=e.call(this,r)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM||(r.context.helmet=M({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n}return h(t,e),t.prototype.render=function(){return i.a.createElement(k.Provider,{value:this.value},this.props.children)},t}(n.Component);R.canUseDOM=H,R.propTypes={context:a.a.shape({helmet:a.a.shape()}),children:a.a.node.isRequired},R.defaultProps={context:{}},R.displayName="HelmetProvider";var B=function(e,t){var r,n=document.head||document.querySelector(m.HEAD),i=n.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&("innerHTML"===i?n.innerHTML=t.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(i,void 0===t[i]?"":t[i]));n.setAttribute("data-rh","true"),o.some((function(e,t){return r=t,n.isEqualNode(e)}))?o.splice(r,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},_=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c+=1){var s=a[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f-=1)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},D=function(e,t){var r=e.baseTag,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;_(m.BODY,e.bodyAttributes),_(m.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),_(m.TITLE,t)}(l,f);var d={baseTag:B(m.BASE,r),linkTags:B(m.LINK,i),metaTags:B(m.META,o),noscriptTags:B(m.NOSCRIPT,a),scriptTags:B(m.SCRIPT,s),styleTags:B(m.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,p,h)},Y=null,q=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}h(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!d()(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,i=null,o=(e=r.helmetInstances.get().map((function(e){var t=p({},e.props);return delete t.context,t})),{baseTag:A(["href"],e),bodyAttributes:x("bodyAttributes",e),defer:v(e,"defer"),encode:v(e,"encodeSpecialCharacters"),htmlAttributes:x("htmlAttributes",e),linkTags:C(m.LINK,["rel","href"],e),metaTags:C(m.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:C(m.NOSCRIPT,["innerHTML"],e),onChangeClientState:O(e),scriptTags:C(m.SCRIPT,["src","innerHTML"],e),styleTags:C(m.STYLE,["cssText"],e),title:g(e),titleAttributes:x("titleAttributes",e)});R.canUseDOM?(t=o,Y&&cancelAnimationFrame(Y),t.defer?Y=requestAnimationFrame((function(){D(t,(function(){Y=null}))})):(D(t),Y=null)):M&&(i=M(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(n.Component);q.propTypes={context:N.isRequired},q.displayName="HelmetDispatcher";var U=function(e){function t(){return e.apply(this,arguments)||this}h(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!s()(this.props,e)},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:t};case m.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return p({},n,((t={})[r.type]=[].concat(n[r.type]||[],[p({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case m.TITLE:return p({},i,((t={})[n.type]=a,t.titleAttributes=p({},o),t));case m.BODY:return p({},i,{bodyAttributes:p({},o)});case m.HTML:return p({},i,{htmlAttributes:p({},o)});default:return p({},i,((r={})[n.type]=p({},o),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=p({},t);return Object.keys(e).forEach((function(t){var n;r=p({},r,((n={})[t]=e[t],n))})),r},r.warnOnInvalidChildren=function(e,t){return l()(y.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+y.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),l()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,n={};return i.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=b(i,["children"]),c=Object.keys(a).reduce((function(e,t){return e[T[t]||t]=a[t],e}),{}),s=e.type;switch("symbol"==typeof s?s=s.toString():r.warnOnInvalidChildren(e,o),s){case m.FRAGMENT:t=r.mapChildrenToProps(o,t);break;case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(n,t)},r.render=function(){var e=this.props,t=e.children,r=p({},b(e,["children"]));return t&&(r=this.mapChildrenToProps(t,r)),i.a.createElement(k.Consumer,null,(function(e){return i.a.createElement(q,p({},r,{context:e}))}))},t}(n.Component);U.propTypes={base:a.a.object,bodyAttributes:a.a.object,children:a.a.oneOfType([a.a.arrayOf(a.a.node),a.a.node]),defaultTitle:a.a.string,defer:a.a.bool,encodeSpecialCharacters:a.a.bool,htmlAttributes:a.a.object,link:a.a.arrayOf(a.a.object),meta:a.a.arrayOf(a.a.object),noscript:a.a.arrayOf(a.a.object),onChangeClientState:a.a.func,script:a.a.arrayOf(a.a.object),style:a.a.arrayOf(a.a.object),title:a.a.string,titleAttributes:a.a.object,titleTemplate:a.a.string},U.defaultProps={defer:!0,encodeSpecialCharacters:!0},U.displayName="Helmet"},38:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,i="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=t.length)return!1;for(s=c;0!==s--;)if(!a(e[s],t[s]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!t.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],t.get(s.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!t.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((c=e.length)!=t.length)return!1;for(s=c;0!==s--;)if(e[s]!==t[s])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(s=c;0!==s--;)if(!Object.prototype.hasOwnProperty.call(t,u[s]))return!1;if(r&&e instanceof Element)return!1;for(s=c;0!==s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],t[u[s]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},39:function(e,t,r){"use strict";e.exports=function(e,t,r,n,i,o,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,a,c],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},40:function(e,t){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!c(u))return!1;var l=e[u],f=t[u];if(!1===(i=r?r.call(n,l,f,u):void 0)||void 0===i&&l!==f)return!1}return!0}},41:function(e,t,r){"use strict";var n=r(34),i=(r(0),r(14)),o=r(3);var a=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("header",{id:"header",children:[Object(o.jsx)(i.b,{to:"/",className:"title",children:"GOVE"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/resume",children:"Resume"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/projects",children:"Projects"})})]})})]})})},c=r(32);t.a=function(e){return Object(o.jsxs)(n.b,{children:[Object(o.jsxs)(n.a,{titleTemplate:"%s | Jacob Morris",defaultTitle:"Jacob Morris",children:[e.title&&Object(o.jsx)("title",{children:e.title}),Object(o.jsx)("meta",{name:"description",content:e.description})]}),Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsx)(a,{}),Object(o.jsx)("div",{id:"main",className:"wrapper",children:Object(o.jsx)("div",{className:"inner",children:e.children})}),Object(o.jsx)(c.a,{})]})]})}}}]);
//# sourceMappingURL=5.3338ee2a.chunk.js.map