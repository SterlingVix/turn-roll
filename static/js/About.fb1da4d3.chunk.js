webpackJsonp([4],{392:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(403);a.d(t,"default",function(){return n.a})},395:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.classes,a=e.className,n=(0,s.default)(e,["classes","className"]);return c.default.createElement("div",(0,u.default)({className:(0,p.default)(t.root,a)},n))}Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=a(2),u=n(o),i=a(3),s=n(i),l=a(0),c=n(l),d=a(1),f=(n(d),a(5)),p=n(f),m=a(4),y=n(m),b=t.styles=function(e){return{root:{padding:2*e.spacing.unit,"&:last-child":{paddingBottom:3*e.spacing.unit}}}};r.propTypes={},t.default=(0,y.default)(b,{name:"MuiCardContent"})(r)},396:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(397);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}});var o=a(395);Object.defineProperty(t,"CardContent",{enumerable:!0,get:function(){return n(o).default}});var u=a(398);Object.defineProperty(t,"CardActions",{enumerable:!0,get:function(){return n(u).default}});var i=a(399);Object.defineProperty(t,"CardMedia",{enumerable:!0,get:function(){return n(i).default}});var s=a(400);Object.defineProperty(t,"CardHeader",{enumerable:!0,get:function(){return n(s).default}})},397:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.raised,a=(0,s.default)(e,["raised"]);return c.default.createElement(p.default,(0,u.default)({elevation:t?8:2},a))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),u=n(o),i=a(3),s=n(i),l=a(0),c=n(l),d=a(1),f=(n(d),a(55)),p=n(f);r.propTypes={},r.defaultProps={raised:!1},t.default=r},398:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.disableActionSpacing,a=e.children,n=e.classes,r=e.className,o=(0,s.default)(e,["disableActionSpacing","children","classes","className"]);return c.default.createElement("div",(0,u.default)({className:(0,p.default)(n.root,r)},o),t?a:(0,b.cloneChildrenWithClassName)(a,n.action))}Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=a(2),u=n(o),i=a(3),s=n(i),l=a(0),c=n(l),d=a(1),f=(n(d),a(5)),p=n(f),m=a(4),y=n(m),b=a(89),g=t.styles={root:{height:52,display:"flex",alignItems:"center",padding:"2px 4px"},action:{margin:"0 4px"}};r.propTypes={},r.defaultProps={disableActionSpacing:!1},t.default=(0,y.default)(g,{name:"MuiCardActions"})(r)},399:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t,a=e.classes,n=e.className,r=e.component,o=e.image,i=e.src,l=e.style,d=(0,c.default)(e,["classes","className","component","image","src","style"]),p=-1!==_.indexOf(r),m=!p&&o?(0,s.default)({backgroundImage:"url("+o+")"},l):l,b=(0,y.default)((t={},(0,u.default)(t,a.root,!p),(0,u.default)(t,a.rootMedia,p),t),n);return f.default.createElement(r,(0,s.default)({className:b,style:m,src:p?o||i:void 0},d))}Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=a(6),u=n(o),i=a(2),s=n(i),l=a(3),c=n(l),d=a(0),f=n(d),p=a(1),m=(n(p),a(5)),y=n(m),b=a(7),g=(n(b),a(4)),v=n(g),h=t.styles={root:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},rootMedia:{width:"100%"}},_=["video","audio","picture","iframe","img"];r.propTypes={},r.defaultProps={component:"div"},t.default=(0,v.default)(h,{name:"MuiCardMedia"})(r)},400:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.avatar,a=e.action,n=e.classes,r=e.className,o=e.subheader,i=e.title,l=(0,s.default)(e,["avatar","action","classes","className","subheader","title"]);return c.default.createElement(h.default,(0,u.default)({className:(0,p.default)(n.root,r)},l),t&&c.default.createElement("div",{className:n.avatar},t),c.default.createElement("div",{className:n.content},c.default.createElement(g.default,{type:t?"body2":"headline",component:"span",className:n.title},i),c.default.createElement(g.default,{type:t?"body2":"body1",component:"span",color:"secondary",className:n.subheader},o)),a&&c.default.createElement("div",{className:n.action},a))}Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=a(2),u=n(o),i=a(3),s=n(i),l=a(0),c=n(l),d=a(1),f=(n(d),a(5)),p=n(f),m=a(4),y=n(m),b=a(54),g=n(b),v=a(395),h=n(v),_=t.styles=function(e){return{root:{display:"flex",alignItems:"center"},avatar:{flex:"0 0 auto",marginRight:2*e.spacing.unit},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-1*e.spacing.unit,marginRight:-2*e.spacing.unit},content:{flex:"1 1 auto"},title:{},subheader:{}}};r.propTypes={},t.default=(0,y.default)(_,{name:"MuiCardHeader"})(r)},403:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=a(0),i=a.n(u),s=a(37),l=a(396),c=a.n(l),d=a(54),f=a.n(d),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=s.a.div.withConfig({displayName:"About__Container"})(["max-width:600px;box-sizing:border-box;margin:0 auto;"]),y=Object(s.a)(c.a).withConfig({displayName:"About__Content"})(["padding:1em 2em;margin:2em 0;"]),b=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){return i.a.createElement(m,null,i.a.createElement(y,null,i.a.createElement(f.a,{type:"headline",gutterBottom:!0},"About Us"),i.a.createElement(f.a,{type:"body1",paragraph:!0},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))}}]),t}(i.a.Component);t.a=b}});
//# sourceMappingURL=About.fb1da4d3.chunk.js.map