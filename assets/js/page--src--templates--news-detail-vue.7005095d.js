(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{J1pN:function(t,e,i){"use strict";i.r(e);i("FNk8");var n={metaInfo(){return{title:this.$context.title,meta:[{name:"description",content:this.$context.title},{name:"keywords",content:this.$context.keyWords||""}]}},data:()=>({items:[{text:"Admin",href:"#"},{text:"Manage",href:"#"},{text:"Library",active:!0}]}),computed:{breadcrumbItems(){return[{text:"首页",href:"/"},{text:this.$context.category,href:this.$context.listUrl},this.$context.subListUrl?{text:this.$context.subCategory,href:this.$context.subListUrl}:{},{text:"正文",active:!0}].filter(t=>t.text)}},mounted(){},methods:{handleGoBack(){this.$router.go(-1)},getDate:t=>new Date(t).getDate(),getMonthDate(t){let e=(t=new Date(t)).getMonth()+1;return t.getFullYear()+"."+(e.length>1?e:"0"+e)},handleNavigate(t){t.includes("http")?window.open(t):this.$router.push({path:t})},formatDate(t){let e=(t=new Date(t)).getMonth()+1;return e=e.length>1?e:"0"+e,t.getFullYear()+"-"+e+"-"+t.getDate()}}},a=(i("QdTr"),i("KHd+")),s=null,c=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{isAtTop:!1,tabActive:"researchers"}},[e("div",{staticStyle:{"min-height":"516px"}},[e("div",{staticClass:"content-box position-fixed",staticStyle:{top:"0"}},[e("div",{staticClass:"content position-relative"},[e("div",{staticClass:"container"},[e("div",{staticStyle:{height:"204px"}}),e("div",{staticClass:"row"},[e("b-breadcrumb",{staticStyle:{"margin-left":"12px","z-index":"999"},attrs:{items:t.breadcrumbItems}}),e("div",{staticClass:"col-8"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1",width:"85%"}},[t._v("\n                  "+t._s(t.$context.title)+"\n                ")]),e("div",{staticClass:"text-nb-more nb-text-xs-bold cursor-pointer",staticStyle:{"z-index":"1"},on:{click:function(e){return t.handleNavigate(t.$context.listUrl)}}},[t._v("\n                  更多\n                ")])]),e("div",{staticClass:"nb-card",staticStyle:{"margin-left":"0",padding:"12px","min-height":"758px","box-shadow":"0px 11px 21px 11px #adadad","margin-top":"20px"}},[e("b-container",{staticClass:"bv-example-row",staticStyle:{"padding-bottom":"2.5rem"}},[e("div",{staticClass:"d-flex justify-content-between my-2"},[e("div",{staticStyle:{"z-index":"999"}},[t.$context.author?e("span",[t._v(t._s(t.$context.author)+" / 文")]):t._e(),t.$context.photographer?e("span",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.$context.author)+" / 图")]):t._e()]),e("div",{staticStyle:{"z-index":"999"}},[e("b-icon",{attrs:{icon:"clock"}}),e("span",{staticStyle:{"margin-left":"6px"}},[t._v(t._s(t.formatDate(t.$context.publishDate)))])],1)]),e("hr"),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$context.content)}}),e("div",{staticClass:"back-button",on:{click:t.handleGoBack}},[e("span",{staticClass:"arrow"},[t._v("←")])])])],1)]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1"}},[t._v("\n                  最新动态\n                ")])]),e("div",{staticStyle:{height:"20px"}}),e("div",{staticClass:"nb-card",staticStyle:{"margin-left":"0",padding:"40px","min-height":"758px box-shadow: 0px 11px 21px 11px #adadad"}},t._l(t.$page.recommends.edges,(function(i,n){return e("div",{key:n,staticClass:"d-flex align-tems-center mb-3 cursor-pointer",on:{click:function(e){return t.handleNavigate(i.node.url)}}},[e("div",{staticStyle:{padding:"9px 12px",border:"1px solid #b00e16"}},[e("div",{staticClass:"nb-text-xxxs-bold text-nb-primary",staticStyle:{"text-align":"right","font-size":"20px"}},[t._v("\n                      "+t._s(t.getDate(i.node.publishDate))+"\n                    ")]),e("div",{staticClass:"nb-line-pure bg-nb-primary"}),e("div",{staticStyle:{"font-size":"14px"}},[t._v("\n                      "+t._s(t.getMonthDate(i.node.publishDate))+"\n                    ")])]),e("div",{staticStyle:{width:"17px"}}),e("div",{staticClass:"nb-ml-xs nb-text-xxxs"},[t._v("\n                    "+t._s(i.node.title)+"\n                  ")])])})),0)])],1),e("div",{staticStyle:{height:"135px"}})])]),e("Footer")],1)])])}),[],!1,null,null,null);"function"==typeof s&&s(c);e.default=c.exports},QdTr:function(t,e,i){"use strict";i("vCng")},vCng:function(t,e,i){}}]);