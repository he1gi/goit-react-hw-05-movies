"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[239],{6713:function(n,t,e){e.d(t,{TP:function(){return u},e2:function(){return i},qF:function(){return o},tx:function(){return l},zv:function(){return s}});var r=e(1044),a="126685e3c97a05ce8ea69747c86f816b",c="https://api.themoviedb.org/3/";function i(){return r.Z.get("".concat(c,"trending/movie/day?api_key=").concat(a)).then((function(n){return n.data.results}))}function o(n){return r.Z.get("".concat(c,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.data.results}))}function u(n){return r.Z.get("".concat(c,"movie/").concat(n,"?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data}))}function s(n){return r.Z.get("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data.cast}))}function l(n){return r.Z.get("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(n){return n.data.results}))}},4290:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(8966),a=e(184);function c(){return(0,a.jsx)("div",{className:"loader",children:(0,a.jsx)(r.p2,{height:"80",width:"80",color:"#3f51b5",wrapperStyle:{},wrapperClass:"",wrapperClassName:"loader",visible:!0})})}},239:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a=e(2982),c=e(885),i=e(6713),o=e(2791),u=e(7596),s=e(6731),l=e(168),f=e(921).Z.img(r||(r=(0,l.Z)(["\n  transition: transform 0.5s;\n  width: 290px;\n  height: 435px;\n\n  &:hover {\n    transform: scale(0.95);\n  }\n"]))),d=e(184);function h(n){return n.movies.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,d.jsx)("li",{children:(0,d.jsxs)(s.rU,{to:"/movies/".concat(t),children:[(0,d.jsx)("div",{children:(0,d.jsx)(f,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e})}),(0,d.jsx)("div",{children:(0,d.jsx)("h2",{children:e})})]})},t)}))}var p=e(4290),g=e(8977);function m(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],s=(0,o.useState)(null),l=(0,c.Z)(s,2),f=l[0],m=l[1],v=(0,o.useState)(!1),x=(0,c.Z)(v,2),j=x[0],Z=x[1];return(0,o.useEffect)((function(){Z(!0),(0,i.e2)().then((function(n){r((0,a.Z)(n))})).catch((function(n){m(n.message),null!==f&&u.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(f),{autoClose:1e3})})).finally((function(){return Z(!1)}))}),[f]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:[(0,d.jsx)(u.Ix,{}),j&&(0,d.jsx)(p.Z,{}),(0,d.jsx)("h1",{children:"Trending films"}),(0,d.jsx)(g.a,{children:(0,d.jsx)(h,{movies:e})})]})})}},8977:function(n,t,e){e.d(t,{E:function(){return u},a:function(){return o}});var r,a,c=e(168),i=e(921),o=i.Z.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 290px);\n  justify-content: center;\n  gap: 13px;\n"]))),u=i.Z.img(a||(a=(0,c.Z)(["\n  transition: transform 0.5s;\n  width: 290px;\n  height: 435px;\n\n  &:hover {\n    transform: scale(0.95);\n  }\n"])))}}]);
//# sourceMappingURL=239.f956d552.chunk.js.map