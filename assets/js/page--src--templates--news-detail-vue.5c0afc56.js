(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Ths":function(t,e,i){},J1pN:function(t,e,i){"use strict";i.r(e);i("FNk8");var a={metaInfo:{title:"详情"},mounted(){},methods:{handleGoBack(){this.$router.go(-1)},getDate:t=>new Date(t).getDate(),getMonthDate:t=>(t=new Date(t)).getFullYear()+"."+(t.getMonth().length>1?t.getMonth():"0"+t.getMonth()),handleNavigate(t){t.includes("http")?window.open(t):this.$router.push({path:t})},formatDate:t=>(t=new Date(t)).getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},s=(i("s+z4"),i("KHd+")),n=null,c=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{isAtTop:!1,tabActive:"researchers"}},[e("div",{staticStyle:{"min-height":"516px"}},[e("div",{staticClass:"content-box position-fixed",staticStyle:{top:"0"}},[e("div",{staticClass:"content position-relative"},[e("div",{staticClass:"container"},[e("div",{staticStyle:{height:"228px"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1",width:"85%"}},[t._v("\n                  "+t._s(t.$context.title)+"\n                ")]),e("div",{staticClass:"text-nb-more nb-text-xs-bold cursor-pointer",staticStyle:{"z-index":"1"},on:{click:function(e){return t.handleNavigate(t.$context.listUrl)}}},[t._v("\n                  更多\n                ")])]),e("hr"),e("div",{staticClass:"d-flex justify-content-between my-2"},[e("div",{staticStyle:{"z-index":"999"}},[t.$context.author?e("span",[t._v(t._s(t.$context.author)+" / 文")]):t._e(),t.$context.photographer?e("span",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.$context.author)+" / 图")]):t._e()]),e("div",{staticStyle:{"z-index":"999"}},[e("b-icon",{attrs:{icon:"clock"}}),e("span",{staticStyle:{"margin-left":"6px"}},[t._v(t._s(t.formatDate(t.$context.publishDate)))])],1)]),e("div",{staticClass:"nb-card",staticStyle:{"margin-left":"0",padding:"12px","min-height":"758px","box-shadow":"0px 11px 21px 11px #adadad"}},[e("b-container",{staticClass:"bv-example-row py-3"},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$context.content)}}),e("div",{staticClass:"back-button",on:{click:t.handleGoBack}},[e("span",{staticClass:"arrow"},[t._v("←")])])])],1)]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1"}},[t._v("\n                  最新动态\n                ")])]),e("div",{staticStyle:{height:"20px"}}),e("div",{staticClass:"nb-card",staticStyle:{"margin-left":"0",padding:"40px","min-height":"758px box-shadow: 0px 11px 21px 11px #adadad"}},t._l(t.$page.recommends.edges,(function(i,a){return e("div",{key:a,staticClass:"d-flex align-tems-center mb-3 cursor-pointer",on:{click:function(e){return t.handleNavigate(i.node.url)}}},[e("div",{staticClass:"bg-nb-primary",staticStyle:{padding:"9px 12px"}},[e("div",{staticClass:"nb-text-xxxs-bold text-white",staticStyle:{"text-align":"right","font-size":"20px"}},[t._v("\n                      "+t._s(t.getDate(i.node.publishDate))+"\n                    ")]),e("div",{staticClass:"nb-line-pure bg-nb-white"}),e("div",{staticClass:"text-white",staticStyle:{"font-size":"14px","font-weight":"500"}},[t._v("\n                      "+t._s(t.getMonthDate(i.node.publishDate))+"\n                    ")])]),e("div",{staticStyle:{width:"17px"}}),e("div",{staticClass:"nb-ml-xs nb-text-xxxs-bold"},[t._v("\n                    "+t._s(i.node.title)+"\n                  ")])])})),0)])]),e("div",{staticStyle:{height:"350px"}})])])])])])}),[],!1,null,"288ae653",null);"function"==typeof n&&n(c);e.default=c.exports},"s+z4":function(t,e,i){"use strict";i("4Ths")}}]);