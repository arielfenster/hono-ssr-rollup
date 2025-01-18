!function(e,r){"use strict";var t,n,o={exports:{}},a={};function i(){return t||(t=1,function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator;var h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=h.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(r+="%s",t=t.concat([o]));var a=t.map((function(e){return String(e)}));a.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,a)}("error",e,t)}var g;function x(e){return e.displayName||"Context"}function j(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case s:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return x(e)+".Consumer";case c:return x(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:j(e.type)||"Memo";case d:var t=e,a=t._payload,m=t._init;try{return j(m(a))}catch(e){return null}}return null}g=Symbol.for("react.module.reference");var k,w,S,_,O,R,E,N=Object.assign,P=0;function T(){}T.__reactDisabledLog=!0;var $,F=h.ReactCurrentDispatcher;function C(e,r,t){if(void 0===$)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);$=n&&n[1]||""}return"\n"+$+e}var D,I=!1,W="function"==typeof WeakMap?WeakMap:Map;function A(e,r){if(!e||I)return"";var t,n=D.get(e);if(void 0!==n)return n;I=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=F.current,F.current=null,function(){if(0===P){k=console.log,w=console.info,S=console.warn,_=console.error,O=console.group,R=console.groupCollapsed,E=console.groupEnd;var e={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}P++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var s=r.stack.split("\n"),c=t.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var f="\n"+s[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&D.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{I=!1,F.current=o,function(){if(0==--P){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},e,{value:k}),info:N({},e,{value:w}),warn:N({},e,{value:S}),error:N({},e,{value:_}),group:N({},e,{value:O}),groupCollapsed:N({},e,{value:R}),groupEnd:N({},e,{value:E})})}P<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?C(p):"";return"function"==typeof e&&D.set(e,y),y}function L(e,r,t){if(null==e)return"";if("function"==typeof e)return A(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return C(e);switch(e){case f:return C("Suspense");case p:return C("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return A(e.render,!1);case y:return L(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return L(i(a),r,t)}catch(e){}}return""}D=new W;var U=Object.prototype.hasOwnProperty,z={},B=h.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);B.setExtraStackFrame(t)}else B.setExtraStackFrame(null)}var Y=Array.isArray;function J(e){return Y(e)}function K(e){return""+e}function X(e){if(function(e){try{return K(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),K(e)}var q,V,H=h.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,r,n,o,a){var i,s={},c=null,l=null;for(i in void 0!==n&&(X(n),c=""+n),function(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(X(r.key),c=""+r.key),function(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(l=r.ref,function(e){"string"==typeof e.ref&&H.current}(r)),r)U.call(r,i)&&!G.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps){var u=e.defaultProps;for(i in u)void 0===s[i]&&(s[i]=u[i])}if(c||l){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){q||(q=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(s,f),l&&function(e,r){var t=function(){V||(V=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(s,f)}return function(e,r,n,o,a,i,s){var c={$$typeof:t,type:e,key:r,ref:n,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(e,c,l,a,o,H.current,s)}var Z,ee=h.ReactCurrentOwner,re=h.ReactDebugCurrentFrame;function te(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);re.setExtraStackFrame(t)}else re.setExtraStackFrame(null)}function ne(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function oe(){if(ee.current){var e=j(ee.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}Z=!1;var ae={};function ie(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=oe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ae[t]){ae[t]=!0;var n="";e&&e._owner&&e._owner!==ee.current&&(n=" It was passed a child from "+j(e._owner.type)+"."),te(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),te(null)}}}function se(e,r){if("object"==typeof e)if(J(e))for(var t=0;t<e.length;t++){var n=e[t];ne(n)&&ie(n,r)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=v&&e[v]||e["@@iterator"];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ne(a.value)&&ie(a.value,r)}}function ce(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=j(t);!function(e,r,t,n,o){var a=Function.call.bind(U);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(M(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),M(null)),s instanceof Error&&!(s.message in z)&&(z[s.message]=!0,M(o),b("Failed %s type: %s",t,s.message),M(null))}}(r,e.props,"prop",n,e)}else if(void 0!==t.PropTypes&&!Z){Z=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",j(t)||"Unknown")}"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var le={};function ue(e,r,n,a,v,h){var x=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===i||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===g||void 0!==e.getModuleId)}(e);if(!x){var k="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(k+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var w;k+=oe(),null===e?w="null":J(e)?w="array":void 0!==e&&e.$$typeof===t?(w="<"+(j(e.type)||"Unknown")+" />",k=" Did you accidentally export a JSX literal instead of a component?"):w=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",w,k)}var S=Q(e,r,n,v,h);if(null==S)return S;if(x){var _=r.children;if(void 0!==_)if(a)if(J(_)){for(var O=0;O<_.length;O++)se(_[O],e);Object.freeze&&Object.freeze(_)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else se(_,e)}if(U.call(r,"key")){var R=j(e),E=Object.keys(r).filter((function(e){return"key"!==e})),N=E.length>0?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}";if(!le[R+N])b('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',N,R,E.length>0?"{"+E.join(": ..., ")+": ...}":"{}",R),le[R+N]=!0}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){te(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),te(null);break}}null!==e.ref&&(te(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),te(null))}(S):ce(S),S}var fe=function(e,r,t){return ue(e,r,t,!1)},pe=function(e,r,t){return ue(e,r,t,!0)};a.Fragment=o,a.jsx=fe,a.jsxs=pe}()),a}var s=(n||(n=1,o.exports=i()),o.exports);function c(){return s.jsx("nav",{className:"bg-blue-600 p-4",children:s.jsxs("div",{className:"container mx-auto flex items-center",children:[s.jsx("a",{href:"/",className:"text-white text-2xl font-bold",children:"BookFinder"}),s.jsxs("div",{className:"ml-8 flex items-center",children:[s.jsx("a",{href:"/search",className:"text-white mr-4 hover:text-blue-200",children:"Search"}),s.jsx("a",{href:"/about",className:"text-white hover:text-blue-200",children:"About"})]})]})})}r.hydrateRoot(document.getElementById("app"),s.jsx((function(){return s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsx(c,{}),s.jsx("div",{className:"container mx-auto px-4 py-8",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[s.jsxs("div",{className:"md:w-1/2 mb-8 md:mb-0",children:[s.jsx("h1",{className:"text-4xl font-bold text-blue-600 mb-4",children:"Welcome to BookFinder"}),s.jsx("p",{className:"text-xl text-gray-700 mb-6",children:"Discover your next favorite book with our powerful search engine. Search by title, author, or genre to find the perfect read."}),s.jsx("a",{href:"/search",className:"bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300",children:"Start Searching"})]}),s.jsx("div",{className:"md:w-1/2",children:s.jsx("img",{src:(e="homepage-image.webp",`static/images/${e}`),alt:"Search your favorite books using BookFinder!",className:"rounded-lg shadow-lg",height:400,width:400})})]})})]});var e}),{}))}(React,ReactDOM);
//# sourceMappingURL=home.js.map
