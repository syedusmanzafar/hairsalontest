(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{308:function(t,e,c){var content=c(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(35).default)("083745fe",content,!0,{sourceMap:!1})},330:function(t,e,c){"use strict";c(308)},331:function(t,e,c){var l=c(34)(!1);l.push([t.i,"article{line-height:2}",""]),t.exports=l},344:function(t,e,c){"use strict";c.r(e);var l=c(7),n=(c(168),{asyncData:t=>Object(l.a)((function*(){var{$content:e,params:c}=t;return{article:yield e("blog",c.slug).fetch()}}))(),head(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}}}),r=(c(330),c(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("article",[c("div",{staticClass:"appointment pattern mb-5"},[c("div",{staticClass:"container py-5"},[c("h1",{staticClass:"h1"},[t._v(t._s(t.article.title))])])]),t._v(" "),c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-8 offset-lg-2"},[c("div",{staticClass:"mb-5"},[c("b-img-lazy",{attrs:{src:"/"+t.article.img,alt:t.article.title,fluid:""}})],1),t._v(" "),c("div",{staticClass:"pb-5"}),t._v(" "),c("nuxt-content",{attrs:{document:t.article}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);