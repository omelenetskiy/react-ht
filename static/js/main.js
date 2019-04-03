!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)i=c[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([169,1]),n()}({13:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return f}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return p}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return m});var r=n(60),o=n.n(r);function a(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,l,"next",e)}function l(e){a(i,r,o,c,l,"throw",e)}c(void 0)})}}var c="ACTION_TYPE_MOVIES_FETCH",l="ACTION_TYPE_MOVIES_FETCHING",u="ACTION_TYPE_SEARCH_CHANGE",f="ACTION_TYPE_SORT_CHANGE",s=function(e){return{type:u,searchBy:e}},p=function(e){return{type:f,sortBy:e}};function d(e){return function(){var t=i(regeneratorRuntime.mark(function t(n,r){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("https://reactjs-cdp.herokuapp.com/movies?filter=".concat(e));case 3:200===(a=t.sent).status?n({type:c,movies:a.data.data}):console.error(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,n){return t.apply(this,arguments)}}()}function m(e){return function(){var t=i(regeneratorRuntime.mark(function t(n,r){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&".concat(e));case 3:200===(a=t.sent).status?n({type:c,movies:a.data.data}):console.error(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,n){return t.apply(this,arguments)}}()}},157:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(58),i=n(23),c=n(381),l=n(39),u=n.n(l),f=n(13),s=n(35),p=n(3),d=n(57),m={title:"SEARCH BY",buttons:[{title:"Title",value:"title",name:"search",checked:!0},{title:"Genres",value:"genres",name:"search",checked:!1}]},h={title:"SORT BY",buttons:[{title:"release date",value:"release_date",name:"filter",checked:!0},{title:"rating",value:"vote_average",name:"filter",checked:!1}]},y=p.c.button.withConfig({displayName:"button",componentId:"sc-6cglmf-0"})(["border:0;padding:7px 15px;color:#fff;width:",";background-color:",";font-weight:bold;border-radius:3px;cursor:pointer;outline:none;display:inline-flex;align-items:center;justify-content:center;font-size:14px;&:hover{background-color:",";}"],function(e){return"large"===e.size&&"150px"},function(e){return e.theme.dangerColor},function(e){return e.theme.dangerColorDark}),b=p.c.input.withConfig({displayName:"checkbox",componentId:"akknp5-0"})(["position:absolute;height:0;width:0;overflow:hidden;&:checked + label{background-color:",";}& + label{background-color:",";}"],function(e){return e.theme.dangerColorDark},function(e){return e.theme.stylishColor}),g=function(e){var t=e.button,n=e.toggleSearchBy;return r.createElement(b,{type:"radio",value:t.value,id:t.title,name:t.name,defaultChecked:t.checked,onChange:n})},v=p.c.div.withConfig({displayName:"buttonGroup",componentId:"u1rbee-0"})(["display:flex;overflow:hidden;align-items:center;.filter-buttons{position:relative;margin:0 15px;label{background-color:",";color:",";}input:checked + label{color:",";}input + label{color:",";}}"],function(e){return"sort"===e.type&&"transparent"},function(e){return"sort"===e.type&&"#000"},function(e){return"sort"===e.type&&e.theme.dangerColorDark},function(e){return"sort"===e.type&&e.theme.stylishColor}),w=p.c.span.withConfig({displayName:"filterTitle",componentId:"sc-1nlnode-0"})(["color:",";font-weight:bold;font-size:13px;"],function(e){return"light"===e.color?"#fff":e.theme.stylishColor}),O=Object(p.c)(y).withConfig({displayName:"ButtonGroup__StyledLabel",componentId:"sc-1oytabq-0"})(["min-width:50px;padding:5px 15px;margin:0 5px;transition:all 0.1s ease-in-out;"]),j=function(e){var t=e.controls,n=e.toggleSearchBy,a=e.color,i=e.type;return o.a.createElement(v,{type:i},o.a.createElement(w,{color:a},t.title),o.a.createElement("div",{className:"filter-buttons"},t.buttons.map(function(e){return o.a.createElement(r.Fragment,{key:e.title},o.a.createElement(g,{button:e,toggleSearchBy:n}),o.a.createElement(O,{as:"label",htmlFor:e.title},e.title))})))};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=p.c.section.withConfig({displayName:"SortFilter__StyledFilter",componentId:"sc-17obb9r-0"})(["width:100%;background-color:rgb(245,245,245);padding:10px 20px;display:inline-flex;align-items:center;flex-direction:row;justify-content:space-between;flex-shrink:0;"]),N=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=_(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==E(o)&&"function"!=typeof o?S(r):o,k(S(n),"toggleSortBy",function(e){var t=n.props,r=t.location,o=t.changeSortBy,a=t.moviesFetch,i=t.movies;o(e.target.value);var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}({},u.a.parse(r.search),{sortBy:i.sortBy});a(u.a.stringify(c))}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r["PureComponent"]),n=t,(a=[{key:"render",value:function(){var e=this.props.movies.movies;return o.a.createElement(P,null,o.a.createElement(r.Fragment,null,o.a.createElement("span",null,"".concat(e&&e.length," movies found")),o.a.createElement(j,{controls:h,toggleSearchBy:this.toggleSortBy,type:"sort"})))}}])&&x(n.prototype,a),i&&x(n,i),t}(),I=Object(c.a)(Object(i.b)(function(e){return{movies:Object(s.b)(e)}},function(e){return{changeSortBy:function(t){return e(Object(f.h)(t))},moviesFetch:function(t){return e(Object(f.e)(t))}}})(N)),T=p.c.div.withConfig({displayName:"searchFilter",componentId:"hzqeh2-0"})(["width:100%;display:inline-flex;align-items:center;justify-content:space-between;padding:20px 0;"]),D=function(e){var t=e.children,n=e.onClick,o=e.size;return r.createElement(y,{size:o,onClick:n},t)};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){var e,n,r,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];return r=this,o=(e=M(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==B(o)&&"function"!=typeof o?R(r):o,a=R(n),c=function(e){(0,n.props.changeSearchBy)(e.target.value),console.log(e.target.value)},(i="toggleSearchBy")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.handleSearch;return o.a.createElement(T,null,o.a.createElement(j,{controls:m,toggleSearchBy:this.toggleSearchBy,color:"light"}),o.a.createElement(D,{size:"large",onClick:e},"Search"))}}])&&F(n.prototype,a),i&&F(n,i),t}(),L=Object(i.b)(null,function(e){return{changeSearchBy:function(t){return e(Object(f.g)(t))}}})(z),H=p.c.h2.withConfig({displayName:"title",componentId:"j50ko0-0"})(["color:#fff;"]),Y=function(e){var t=e.children;return o.a.createElement(H,null,t)},W=p.c.input.withConfig({displayName:"input",componentId:"r41hed-0"})(["width:100%;padding:15px 0px;text-indent:15px;background-color:black;border:none;border-bottom:5px solid ",";margin:10px 0px;color:#fff;&:focus{outline:2px solid ",";}"],function(e){return e.theme.dangerColor},function(e){return e.theme.dangerColor}),V=function(e){var t=e.placeholder,n=e.onChange;return o.a.createElement(W,{type:"text",placeholder:t,onChange:n})};function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=p.c.form.withConfig({displayName:"SearchForm__StyledSearchForm",componentId:"sc-13r8p86-0"})(["margin-top:40px;"]),Z=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=J(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==G(o)&&"function"!=typeof o?U(r):o,Q(U(n),"state",{inputValue:""}),Q(U(n),"handleSearch",function(e){e.preventDefault();var t=n.props,r=t.history,o=t.moviesFetch,a=t.movies,i=n.state.inputValue,c={searchBy:a.searchBy,search:i},l=u.a.stringify(c);o(l),r.push({pathname:"/search/",search:l})}),Q(U(n),"handleChange",function(e){var t=e.target.value;n.setState({inputValue:t})}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.movies.movies;return o.a.createElement(X,null,o.a.createElement(Y,null,d.b),o.a.createElement(V,{placeholder:"Find your movie...",onChange:this.handleChange}),o.a.createElement(L,{handleSearch:this.handleSearch}),e&&e.length&&o.a.createElement(I,null))}}])&&q(n.prototype,a),i&&q(n,i),t}(),$=Object(c.a)(Object(i.b)(function(e){return{movies:Object(s.b)(e)}},function(e){return{moviesFetch:function(t){return e(Object(f.e)(t))}}})(Z)),ee=n(86);function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e,t){return!t||"object"!==te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),re(this,oe(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,r["PureComponent"]),n=t,c=[{key:"fetchData",value:function(e){var t=e.store,n=e.params;if(n.query){var r=u.a.parse(n.query),o=u.a.stringify(r);return t.dispatch(Object(f.e)(o))}return t.dispatch(Object(f.e)())}}],(i=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.moviesData.movies;return o.a.createElement(r.Fragment,null,o.a.createElement(a.Helmet,null,o.a.createElement("title",null,"Movies")),o.a.createElement($,null),o.a.createElement("section",{className:"home"},o.a.createElement(ee.a,{movies:e})))}}])&&ne(n.prototype,i),c&&ne(n,c),t}();t.default=Object(c.a)(Object(i.b)(function(e){return{moviesData:Object(s.b)(e)}})(ie))},158:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(384),i=n(382),c=n(167),l=n(59),u=n.n(l),f=n(3),s=n(381),p=n(380),d=n(57),m=f.c.header.withConfig({displayName:"header",componentId:"sc-18zj5r6-0"})(["font-weight:bold;min-height:30px;padding:10px 0;display:inline-flex;justify-content:space-between;align-items:center;flex-shrink:0;"]),h=Object(f.c)(p.a).withConfig({displayName:"Header__StyledLink",componentId:"oulffg-0"})(["color:",";text-decoration:none;border:2px solid ",";padding:5px;border-radius:3px;"],function(e){return e.theme.stylishColorLight},function(e){return e.theme.stylishColorLight}),y=Object(s.a)(function(e){var t=e.location;return o.a.createElement(m,null,o.a.createElement(p.a,{to:"/"},d.a),"/"!==t.pathname&&o.a.createElement(h,{to:"/"},"Search"))}),b=f.c.footer.withConfig({displayName:"footer",componentId:"sc-19r548q-0"})(["font-weight:bold;min-height:30px;padding:10px 0;display:inline-flex;justify-content:space-between;align-items:center;flex-shrink:0;"]),g=function(){return o.a.createElement(b,null,o.a.createElement(p.a,{to:"/"},d.a))};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){var e,n,r,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];return r=this,n=!(o=(e=O(t)).call.apply(e,[this].concat(u)))||"object"!==v(o)&&"function"!=typeof o?j(r):o,a=j(n),c={hasError:!1},(i="state")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),n=t,i=[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}],(a=[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}])&&w(n.prototype,a),i&&w(n,i),t}(),_=n(58),S=f.c.div.withConfig({displayName:"NotFound__StyledNotFound",componentId:"dl2pg2-0"})(["color:",";p{font-size:45px;}"],function(e){return e.theme.dangerColor}),C=function(){return o.a.createElement(S,null,o.a.createElement(_.Helmet,null,o.a.createElement("title",null,"404")),o.a.createElement("p",null,"404 Page Not Found"),o.a.createElement(p.a,{as:"button",to:"/"},"Home"))},k=n(67),P={maxPageWidth:"1024px",minPageWidth:"360px",cardMaxWidth:"200px",dangerColor:"#ff4444",dangerColorDark:"#cc0000",successColor:"#00c851",successColorDark:" #007e33",infoColor:"#33b5e5",infoColorDark:"#0099cc",warningColor:"#ffbb33",warningColorDark:"#ff8800",stylishColor:"#4b515d",stylishColorLight:"#d2d5da",stylishColorDark:"#3e4551"};function N(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto\');\n\n  * {\n    box-sizing: border-box;\n  }\n  \n  html,\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: "Roboto", sans-serif;\n    min-width: ',";\n    line-height: 1;\n    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n      url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n  }\n\n  #root {\n    height: 100vh;\n    max-width: ",";\n    margin: 0 auto;\n    padding: 0 20px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n"]);return N=function(){return e},e}var I=Object(f.b)(N(),function(e){return e.theme.minPageWidth},"/images/1050d74669c77d00745ea4f97a32df44.jpg",function(e){return e.theme.maxPageWidth},function(e){return e.theme.dangerColor});function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}var D=u()({loader:function(){return Promise.resolve().then(function(){return T(n(157))})},modules:["./layout/home/Home"],webpack:function(){return[157]},loading:k.a}),B=u()({loader:function(){return Promise.resolve().then(function(){return T(n(159))})},modules:["./common/moviePreview/MoviePreview"],webpack:function(){return[159]},loading:k.a});t.default=Object(c.hot)(function(){return o.a.createElement(f.a,{theme:P},o.a.createElement(r.Fragment,null,o.a.createElement(I,null),o.a.createElement(y,null),o.a.createElement(x,null,o.a.createElement(a.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:D}),o.a.createElement(i.a,{path:"/search",component:D}),o.a.createElement(i.a,{path:"/movie/:id",component:B}),o.a.createElement(i.a,{component:C}))),o.a.createElement(g,null)))})},159:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(58),i=n(23),c=n(381),l=n(61),u=n(35),f=n(86),s=n(3).c.article.withConfig({displayName:"moviePreview",componentId:"sc-1xb8rp5-0"})(["color:#fff;background:transparent;display:flex;flex-direction:row;flex-shrink:0;padding:20px 0;.card-img{width:250px;height:100%;margin-right:30px;}.card-body{color:",";}.card-title{color:",";display:inline-flex;align-items:center;line-height:1;h1{font-size:2em;}span{display:flex;align-items:center;justify-content:center;border:1px solid ",";color:",";border-radius:50%;font-size:20px;width:45px;height:45px;margin:0 20px;}}.card-time{b:first-child{margin-right:30px;}}.card-text{line-height:1.35em;}"],function(e){return e.theme.stylishColorLight},function(e){return e.theme.dangerColor},function(e){return e.theme.stylishColorLight},function(e){return e.theme.stylishColorLight}),p=function(e){var t=e.movie,n=e.parsedDate;return t?o.a.createElement(s,null,o.a.createElement("img",{src:t.poster_path,className:"card-img",alt:t.title}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-title"},o.a.createElement("h1",null,t.title),t.vote_average&&o.a.createElement("span",null,t.vote_average)),o.a.createElement("div",{className:"card-tagline"},t.tagline&&o.a.createElement("small",null,t.tagline)),o.a.createElement("p",{className:"card-time"},o.a.createElement("b",null,"".concat(n)),t.runtime&&o.a.createElement("b",null,"".concat(t.runtime," min"))),o.a.createElement("p",{className:"card-text"},t.overview))):o.a.createElement("div",null,"Loading...")};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,c=[{key:"fetchData",value:function(e){var t=e.store,n=e.params;t.dispatch(Object(l.c)({id:parseInt(n.id)}))}}],(i=[{key:"fetchIfNeeded",value:function(){this.props.dispatch(Object(l.d)({id:parseInt(this.props.match.params.id)}))}},{key:"componentDidMount",value:function(){this.fetchIfNeeded()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.fetchIfNeeded()}},{key:"render",value:function(){var e=this.props.moviesData.movies,t=this.props.movieData.movie,n=Date.parse(t.release_date),i=new Date(n).getFullYear();return o.a.createElement(r.Fragment,null,o.a.createElement(a.Helmet,null,o.a.createElement("title",null,"".concat(t.title))),o.a.createElement(p,{movie:t,parsedDate:i}),o.a.createElement("section",{className:"home"},o.a.createElement(f.a,{movies:e})))}}])&&m(n.prototype,i),c&&m(n,c),t}();t.default=Object(c.a)(Object(i.b)(function(e){return{movieData:Object(u.a)(e),moviesData:Object(u.b)(e)}})(g))},169:function(e,t,n){n(170),e.exports=n(378)},35:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var r=n(118),o=Object(r.a)([function(e){return e.movies}],function(e){return e}),a=Object(r.a)([function(e){return e.movie}],function(e){return e})},378:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(59),i=n.n(a),c=n(82),l=n(23),u=n(383),f=n(161),s=n(38),p=n(162),d=n(13);function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={movies:[],searchBy:"title",sortBy:"vote_average",error:!1,loading:!1},b=n(61);function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={movie:{},error:!1,loading:!1},O=Object(s.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.c:return m({},e,{searchBy:t.searchBy});case d.d:return m({},e,{sortBy:t.sortBy});case d.b:return m({},e,{movies:[],error:!1,loading:!0});case d.a:return m({},e,{movies:t.movies,error:t.error,loading:!1});default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b:return g({},e,{movie:{},error:!1,loading:!0});case b.a:return g({},e,{movie:t.movie,error:t.error,loading:!1});default:return e}}}),j=function(e){return Object(s.createStore)(O,e,Object(p.composeWithDevTools)(Object(s.applyMiddleware)(f.a)))},E=n(67);var x=window.__INITIAL_STATE__;delete window.__INITIAL_STATE__;var _=j(x),S=i()({loader:function(){return Promise.resolve().then(function(){return function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(158))})},modules:["../shared/components/App"],webpack:function(){return[158]},loading:E.a}),C=function(){return o.a.createElement(l.a,{store:_},o.a.createElement(u.a,null,o.a.createElement(S,null)))};t.default=i.a.preloadReady().then(function(){Object(c.hydrate)(o.a.createElement(C,null),document.getElementById("root"))})},57:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="Netflixroulette",o="FIND YOUR MOVIE"},61:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return f});var r=n(60),o=n.n(r),a=n(13);function i(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var c="ACTION_TYPE_MOVIE_FETCH",l="ACTION_TYPE_MOVIE_FETCHING";function u(e){var t=e.id;return function(){var e,n=(e=regeneratorRuntime.mark(function e(n){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:l}),e.prev=1,e.next=4,o.a.get("https://reactjs-cdp.herokuapp.com/movies/".concat(t));case 4:r=e.sent,i=r.data,200===r.status?(n({type:c,movie:i}),n(Object(a.f)(i.genres))):console.error(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,l,"next",e)}function l(e){i(a,r,o,c,l,"throw",e)}c(void 0)})});return function(e){return n.apply(this,arguments)}}()}var f=function(e){var t=e.id;return function(e,n){if(n().movie.movie.id!==t)return e(u({id:t}))}}},67:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(){return o.a.createElement("div",null,"Loading...")}},86:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(3),i=n(380),c=a.c.div.withConfig({displayName:"card",componentId:"sc-56m0j6-0"})(["max-width:",";position:relative;display:flex;flex-direction:column;background-color:#fff;color:",";.card-img{width:100%;height:300px;}.card-body{display:inline-flex;align-items:center;justify-content:space-between;padding:5px;.card-title{margin:0;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-transform:uppercase;}.badge{font-size:12px;border:1px solid ",";border-radius:2px;padding:2px;}}.card-footer{max-width:100%;display:inline-flex;flex-wrap:wrap;justify-content:center;align-items:center;text-align:center;font-size:12px;padding:5px;}"],function(e){return e.theme.cardMaxWidth},function(e){return e.theme.stylishColor},function(e){return e.theme.stylishColorLight}),l=Object(a.c)(i.a).withConfig({displayName:"MovieCard__StyledLink",componentId:"utvq19-0"})(["border:1px solid ",";background-color:#fff;border-radius:3px;margin:5px;max-width:",";"],function(e){return e.theme.stylishColorLight},function(e){return e.theme.cardMaxWidth}),u=function(e){var t=e.movie,n=e.parsedDate;return o.a.createElement(l,{to:"/movie/".concat(t.id),key:t.id},o.a.createElement(c,null,o.a.createElement("img",{src:t.poster_path,className:"card-img",alt:t.title}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title),o.a.createElement("span",{className:"badge"},n)),o.a.createElement("div",{className:"card-footer"},t.genres.join(" & "))))},f=a.c.div.withConfig({displayName:"MovieList__StyledMovieCardWrapper",componentId:"sc-1nnrxgk-0"})(["display:flex;padding:15px 0;flex-flow:row wrap;justify-content:center;background:rgba(255,255,255,0.7);"]);t.a=function(e){var t=e.movies;return o.a.createElement(f,null,t&&t.length?t.map(function(e){var t=Date.parse(e.release_date),n=new Date(t).getFullYear();return o.a.createElement(u,{key:e.id,movie:e,parsedDate:n})}):o.a.createElement("p",null,"No films found"))}}});