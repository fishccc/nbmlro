(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/KKF":function(t,e,a){},XGVr:function(t,e,a){"use strict";a.r(e);a("FNk8");var s=a("QwAw"),i=a("9yg1"),n={data:()=>({isAtTop:!0,style:{backgroundColor:"rgba(0, 0, 0, 0.38)"},perPage:6,currentPage:1,query:"",data:[]}),computed:{rows(){var t;return(null===(t=this.data)||void 0===t?void 0:t.length)||0},currentData(){var t;return(null===(t=this.data)||void 0===t?void 0:t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage))||[]}},watch:{"$route.query"(t){this.query=(null==t?void 0:t.keywords)||"",this.searchData()}},mounted(){var t;this.query=(null===(t=this.$route.query)||void 0===t?void 0:t.keywords)||"",this.searchData()},methods:{searchData(){if(this.query){var t;const e={keys:["title","content"],includeMatches:!0,threshold:.3},a=new s.a(i.data,e);this.data=null===(t=a.search(this.query))||void 0===t?void 0:t.map(t=>t.item),this.$forceUpdate()}},contentFilter:t=>t.replace(/<\/?[^>]+(>|$)/g,"").replace("&ldquo;",'"'),getDate:t=>new Date(t).getDate(),getMonthDate(t){let e=(t=new Date(t)).getMonth()+1;return t.getFullYear()+"."+(e.length>1?e:"0"+e)},handleNavigate(t){t.includes("http")?window.open(t):this.$router.push({path:t})}}},r=(a("pjkj"),a("KHd+")),l=null,c=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{isAtTop:!1,tabActive:"newsInfo"}},[e("div",{staticStyle:{"min-height":"516px"}},[e("div",{staticClass:"content-box position-fixed",staticStyle:{top:"0"}},[e("div",{staticClass:"content position-relative"},[e("div",{staticClass:"container"},[e("div",{staticStyle:{height:"228px"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-9"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1"}},[t._v("\n                  搜索结果\n                ")])]),e("div",{staticClass:"nb-card nb-content-box"},[t.currentData.length?[t._l(t.currentData,(function(a,s){return e("div",{key:s,staticClass:"d-flex align-items-start mb-3 cursor-pointer border-line",on:{click:function(e){return t.handleNavigate(a.url)}}},[e("div",[e("div",{staticClass:"text-nb-primary nb-text-xs-bold nb-content-date"},[t._v("\n                        "+t._s(t.getDate(a.publishDate))+"\n                      ")]),e("div",{staticClass:"nb-line-pure bg-nb-primary"}),e("div",{staticClass:"text-nb-date nb-text-xxxs-bold"},[t._v("\n                        "+t._s(t.getMonthDate(a.publishDate))+"\n                      ")])]),e("div",{staticClass:"nb-ml-xs nb-text-xxxs-bold"},[e("div",{staticClass:"nb-text-xs-bold"},[t._v("\n                        "+t._s(a.title)+"\n                      ")]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-nb-date nb-text-xxxs list-content",domProps:{innerHTML:t._s(t.contentFilter(a.content))}})])])})),e("b-pagination",{staticStyle:{position:"absolute",bottom:"-6px"},attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})]:e("div",{staticClass:"d-flex justify-content-center"},[e("div",[e("img",{attrs:{src:a("8/bI")}}),e("div",{staticClass:"text-center nb-text-sm-bold"},[t._v("暂无相关信息")])])])],2)]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1"}},[t._v("\n                  最新动态\n                ")])]),e("div",{staticStyle:{height:"20px"}}),e("div",{staticClass:"nb-card",staticStyle:{"margin-left":"0",padding:"20px",height:"758px"}},t._l(t.$page.recommends.edges,(function(a,s){return e("div",{key:s,staticClass:"d-flex mb-3",on:{click:function(e){return t.handleNavigate(a.node.url)}}},[e("div",{staticClass:"nb-recomment-box nb-mr-sm"},[e("div",{staticClass:"nb-text-xxxs-bold text-nb-primary nb-recomment-date"},[t._v("\n                      "+t._s(t.getDate(a.node.publishDate))+"\n                    ")]),e("div",{staticClass:"nb-line-pure bg-nb-primary",staticStyle:{height:"1px"}}),e("div",{staticClass:"nb-text-xxxxxs"},[t._v("\n                      "+t._s(t.getMonthDate(a.node.publishDate))+"\n                    ")])]),e("div",{staticClass:"nb-text-xxxxs cursor-pointer recomment-title"},[t._v("\n                    "+t._s(a.node.title)+"\n                  ")])])})),0)])]),e("div",{staticStyle:{height:"135px"}})])]),e("Footer")],1)])])}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},pjkj:function(t,e,a){"use strict";a("/KKF")}}]);