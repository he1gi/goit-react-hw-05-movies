"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{6713:function(n,e,t){t.d(e,{TP:function(){return o},e2:function(){return u},qF:function(){return i},tx:function(){return l},zv:function(){return s}});var c=t(1044),a="126685e3c97a05ce8ea69747c86f816b",r="https://api.themoviedb.org/3/";function u(){return c.Z.get("".concat(r,"trending/movie/day?api_key=").concat(a)).then((function(n){return n.data.results}))}function i(n){return c.Z.get("".concat(r,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.data.results}))}function o(n){return c.Z.get("".concat(r,"movie/").concat(n,"?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data}))}function s(n){return c.Z.get("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data.cast}))}function l(n){return c.Z.get("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(n){return n.data.results}))}},6264:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var c=t(885),a=t(2791),r=t(7689),u=t(7596),i=t(6713),o=t(184);function s(n){var e=n.reviews;return(0,o.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.author,c=n.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Nickname: ",t]}),(0,o.jsx)("p",{children:c})]},e)}))})}function l(){var n=(0,a.useState)([]),e=(0,c.Z)(n,2),t=e[0],l=e[1],f=(0,a.useState)(null),d=(0,c.Z)(f,2),h=d[0],g=d[1],m=(0,r.UO)().movieId;return(0,a.useEffect)((function(){(0,i.tx)(m).then(l).catch((function(n){g(n.message),null!==h&&u.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(h),{autoClose:1e3})}))}),[m,h]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:[(0,o.jsx)(u.Ix,{}),(0,o.jsx)("h2",{children:"Additional Information"}),0!==t.length?(0,o.jsx)(s,{reviews:t}):(0,o.jsx)("h1",{children:"No information about Reviews"})]})})}}}]);
//# sourceMappingURL=264.d7c396e5.chunk.js.map