(this.webpackJsonppersonal_site=this.webpackJsonppersonal_site||[]).push([[5],{202:function(e,t,r){"use strict";r.r(t);r(0);var n=r(41),i=r(3);t.default=function(){return Object(i.jsx)(n.a,{title:"Easter Egg",description:"Jacob Morris' Easter",children:Object(i.jsx)("p",{children:"Hello World: This is an Egg"})})}},32:function(e,t,r){"use strict";r(0);var n=r(14),i=r(3);t.a=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{id:"footer",className:"wrapper alt",children:Object(i.jsxs)("div",{className:"inner",children:[Object(i.jsxs)("div",{className:"sitemap",children:[Object(i.jsx)("h4",{children:"Sitemap"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/",children:"Index"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/resume",children:"Resume"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/easter",children:"Something Special"})})]})]}),Object(i.jsxs)("ul",{className:"menu",children:[Object(i.jsx)("li",{children:"\xa9 Jacob Morris. Licensed with MIT."}),Object(i.jsxs)("li",{children:["Design: ",Object(i.jsx)("a",{href:"http://html5up.net",children:"HTML5 UP"}),", lovingly edited by me =3"]}),Object(i.jsx)("li",{children:Object(i.jsxs)("ul",{className:"icons",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/govern01",target:"_blank",rel:"noreferrer",className:"icon brands fa-github",children:Object(i.jsx)("span",{className:"label",children:"GitHub"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/jjamorris/",target:"_blank",rel:"noreferrer",className:"icon brands fa-linkedin-in",children:Object(i.jsx)("span",{className:"label",children:"LinkedIn"})})})]})})]})]})})})}},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return U})),r.d(t,"b",(function(){return R}));var n=r(0),i=r.n(n),a=r(8),c=r.n(a),o=r(38),s=r.n(o),l=r(39),u=r.n(l),f=r(40),d=r.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function b(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}var j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},m=Object.keys(j).map((function(e){return j[e]})),y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O=Object.keys(y).reduce((function(e,t){return e[y[t]]=t,e}),{}),g=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},T=function(e){var t=g(e,j.TITLE),r=g(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(function(){return t}));var n=g(e,"defaultTitle");return t||n||void 0},v=function(e){return g(e,"onChangeClientState")||function(){}},x=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return h({},e,t)}),{})},A=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},C=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r,a=Object.keys(e),c=0;c<a.length;c+=1){var o=a[c],s=o.toLowerCase();-1===t.indexOf(s)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===s&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(o)||"innerHTML"!==o&&"cssText"!==o&&"itemprop"!==o||(r=o)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),c=0;c<a.length;c+=1){var o=a[c],s=h({},n[o],i[o]);n[o]=s}return e}),[]).reverse()},E=function(e){return Array.isArray(e)?e.join(""):e},S=[j.NOSCRIPT,j.SCRIPT,j.STYLE],w=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},I=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},P=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,r){return t[y[r]||r]=e[r],t}),t)},k=function(e,t,r){switch(e){case j.TITLE:return{toComponent:function(){return r=t.titleAttributes,(n={key:e=t.title})["data-rh"]=!0,a=P(r,n),[i.a.createElement(j.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var i=I(r),a=E(t);return i?"<"+e+' data-rh="true" '+i+">"+w(a,n)+"</"+e+">":"<"+e+' data-rh="true">'+w(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return P(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-rh"]=!0,n);return Object.keys(t).forEach((function(e){var r=y[e]||e;"innerHTML"===r||"cssText"===r?a.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:a[r]=t[e]})),i.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+w(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",c=-1===S.indexOf(e);return t+"<"+e+' data-rh="true" '+i+(c?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},L=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,o=e.scriptTags,s=e.styleTags,l=e.title,u=void 0===l?"":l,f=e.titleAttributes;return{base:k(j.BASE,e.baseTag,r),bodyAttributes:k("bodyAttributes",t,r),htmlAttributes:k("htmlAttributes",n,r),link:k(j.LINK,i,r),meta:k(j.META,a,r),noscript:k(j.NOSCRIPT,c,r),script:k(j.SCRIPT,o,r),style:k(j.STYLE,s,r),title:k(j.TITLE,{title:u,titleAttributes:f},r)}},N=i.a.createContext({}),M=c.a.shape({setHelmet:c.a.func,helmetInstances:c.a.shape({get:c.a.func,add:c.a.func,remove:c.a.func})}),H="undefined"!=typeof document,R=function(e){function t(r){var n;return(n=e.call(this,r)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM||(r.context.helmet=L({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n}return p(t,e),t.prototype.render=function(){return i.a.createElement(N.Provider,{value:this.value},this.props.children)},t}(n.Component);R.canUseDOM=H,R.propTypes={context:c.a.shape({helmet:c.a.shape()}),children:c.a.node.isRequired},R.defaultProps={context:{}},R.displayName="HelmetProvider";var _=function(e,t){var r,n=document.head||document.querySelector(j.HEAD),i=n.querySelectorAll(e+"[data-rh]"),a=[].slice.call(i),c=[];return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&("innerHTML"===i?n.innerHTML=t.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(i,void 0===t[i]?"":t[i]));n.setAttribute("data-rh","true"),a.some((function(e,t){return r=t,n.isEqualNode(e)}))?a.splice(r,1):c.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),c.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:c}},B=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],a=[].concat(i),c=Object.keys(t),o=0;o<c.length;o+=1){var s=c[o],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===i.indexOf(s)&&i.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f-=1)r.removeAttribute(a[f]);i.length===a.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==c.join(",")&&r.setAttribute("data-rh",c.join(","))}},D=function(e,t){var r=e.baseTag,n=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,o=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,u=e.title,f=e.titleAttributes;B(j.BODY,e.bodyAttributes),B(j.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=E(e)),B(j.TITLE,t)}(u,f);var d={baseTag:_(j.BASE,r),linkTags:_(j.LINK,i),metaTags:_(j.META,a),noscriptTags:_(j.NOSCRIPT,c),scriptTags:_(j.SCRIPT,s),styleTags:_(j.STYLE,l)},h={},p={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(p[e]=d[e].oldTags)})),t&&t(),o(e,h,p)},Y=null,q=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}p(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!d()(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,i=null,a=(e=r.helmetInstances.get().map((function(e){var t=h({},e.props);return delete t.context,t})),{baseTag:A(["href"],e),bodyAttributes:x("bodyAttributes",e),defer:g(e,"defer"),encode:g(e,"encodeSpecialCharacters"),htmlAttributes:x("htmlAttributes",e),linkTags:C(j.LINK,["rel","href"],e),metaTags:C(j.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:C(j.NOSCRIPT,["innerHTML"],e),onChangeClientState:v(e),scriptTags:C(j.SCRIPT,["src","innerHTML"],e),styleTags:C(j.STYLE,["cssText"],e),title:T(e),titleAttributes:x("titleAttributes",e)});R.canUseDOM?(t=a,Y&&cancelAnimationFrame(Y),t.defer?Y=requestAnimationFrame((function(){D(t,(function(){Y=null}))})):(D(t),Y=null)):L&&(i=L(a)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(n.Component);q.propTypes={context:M.isRequired},q.displayName="HelmetDispatcher";var U=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!s()(this.props,e)},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return h({},n,((t={})[r.type]=[].concat(n[r.type]||[],[h({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(n.type){case j.TITLE:return h({},i,((t={})[n.type]=c,t.titleAttributes=h({},a),t));case j.BODY:return h({},i,{bodyAttributes:h({},a)});case j.HTML:return h({},i,{htmlAttributes:h({},a)});default:return h({},i,((r={})[n.type]=h({},a),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=h({},t);return Object.keys(e).forEach((function(t){var n;r=h({},r,((n={})[t]=e[t],n))})),r},r.warnOnInvalidChildren=function(e,t){return u()(m.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+m.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),u()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,n={};return i.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,c=b(i,["children"]),o=Object.keys(c).reduce((function(e,t){return e[O[t]||t]=c[t],e}),{}),s=e.type;switch("symbol"==typeof s?s=s.toString():r.warnOnInvalidChildren(e,a),s){case j.FRAGMENT:t=r.mapChildrenToProps(a,t);break;case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),this.mapArrayTypeChildrenToProps(n,t)},r.render=function(){var e=this.props,t=e.children,r=h({},b(e,["children"]));return t&&(r=this.mapChildrenToProps(t,r)),i.a.createElement(N.Consumer,null,(function(e){return i.a.createElement(q,h({},r,{context:e}))}))},t}(n.Component);U.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},U.defaultProps={defer:!0,encodeSpecialCharacters:!0},U.displayName="Helmet"},38:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,i="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function c(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var o,s,l,u;if(Array.isArray(e)){if((o=e.length)!=t.length)return!1;for(s=o;0!==s--;)if(!c(e[s],t[s]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!t.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!c(s.value[1],t.get(s.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!t.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((o=e.length)!=t.length)return!1;for(s=o;0!==s--;)if(e[s]!==t[s])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((o=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(s=o;0!==s--;)if(!Object.prototype.hasOwnProperty.call(t,l[s]))return!1;if(r&&e instanceof Element)return!1;for(s=o;0!==s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!c(e[l[s]],t[l[s]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return c(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},39:function(e,t,r){"use strict";e.exports=function(e,t,r,n,i,a,c,o){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,i,a,c,o],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},40:function(e,t){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),c=Object.keys(t);if(a.length!==c.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var l=a[s];if(!o(l))return!1;var u=e[l],f=t[l];if(!1===(i=r?r.call(n,u,f,l):void 0)||void 0===i&&u!==f)return!1}return!0}},41:function(e,t,r){"use strict";var n=r(34),i=(r(0),r(14)),a=r(3);var c=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("header",{id:"header",children:[Object(a.jsx)(i.b,{to:"/",className:"title",children:"GOVE"}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/resume",children:"Resume"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/projects",children:"Projects"})})]})})]})})},o=r(32),s=function(e){return Object(a.jsxs)("div",{id:"contact",className:"contact",children:[Object(a.jsx)("h2",{children:"Jacob Morris"}),Object(a.jsxs)("ul",{className:"contact",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("h3",{children:"Email"}),Object(a.jsx)("a",{href:"mailto:jacob.morris118@gmail.com",children:"jacob.morris118@gmail.com"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h3",{children:"Socials"}),Object(a.jsxs)("ul",{className:"icons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/govern01",target:"_blank",rel:"noreferrer",className:"icon brands fa-github",children:Object(a.jsx)("span",{className:"label",children:"GitHub"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/jjamorris/",target:"_blank",rel:"noreferrer",className:"icon brands fa-linkedin-in",children:Object(a.jsx)("span",{className:"label",children:"LinkedIn"})})})]})]})]})]})};t.a=function(e){return Object(a.jsxs)(n.b,{children:[Object(a.jsxs)(n.a,{titleTemplate:"%s | Jacob Morris",defaultTitle:"Jacob Morris",children:[e.title&&Object(a.jsx)("title",{children:e.title}),Object(a.jsx)("meta",{name:"description",content:e.description})]}),Object(a.jsxs)("div",{id:"wrapper",children:[Object(a.jsx)(c,{}),Object(a.jsx)("div",{id:"main",className:"wrapper",children:Object(a.jsxs)("div",{className:"inner",children:[e.children,Object(a.jsx)(s,{})]})}),Object(a.jsx)(o.a,{})]})]})}}}]);
//# sourceMappingURL=5.9de524b6.chunk.js.map