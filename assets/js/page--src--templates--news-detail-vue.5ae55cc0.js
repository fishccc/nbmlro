(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{J1pN:function(t,e,n){"use strict";n.r(e);n("FNk8");var i={metaInfo(){return{title:this.$context.title,meta:[{name:"description",content:this.$context.title},{name:"keywords",content:this.$context.keyWords||""}]}},data:()=>({items:[{text:"Admin",href:"#"},{text:"Manage",href:"#"},{text:"Library",active:!0}]}),computed:{breadcrumbItems(){return[{text:"首页",href:"/"},{text:this.$context.category,href:this.$context.listUrl},this.$context.subListUrl?{text:this.$context.subCategory,href:this.$context.subListUrl}:{},{text:"正文",active:!0}].filter(t=>t.text)}},mounted(){},methods:{handleGoBack(){this.$router.go(-1)},getDate:t=>new Date(t).getDate(),getMonthDate(t){let e=(t=new Date(t)).getMonth()+1;return t.getFullYear()+"."+(e.length>1?e:"0"+e)},handleNavigate(t){t.includes("http")?window.open(t):this.$router.push({path:t})},formatDate(t){let e=(t=new Date(t)).getMonth()+1;return e=e.length>1?e:"0"+e,t.getFullYear()+"-"+e+"-"+t.getDate()}}},s=(n("YWed"),n("KHd+")),a=null,c=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{isAtTop:!1,tabActive:"researchers"}},[e("div",{staticStyle:{"min-height":"516px"}},[e("div",{staticClass:"content-box position-fixed",staticStyle:{top:"0"}},[e("div",{staticClass:"content position-relative"},[e("div",{staticClass:"container"},[e("div",{staticStyle:{height:"210px"}}),e("div",{staticClass:"row"},[e("b-breadcrumb",{staticStyle:{"margin-left":"12px","z-index":"999"},attrs:{items:t.breadcrumbItems}}),e("div",{staticClass:"col-9"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1",width:"85%"}},[t._v("\n                  "+t._s(t.$context.title)+"\n                ")]),e("div",{staticClass:"text-nb-more nb-text-xs-bold cursor-pointer",staticStyle:{"z-index":"1"},on:{click:function(e){return t.handleNavigate(t.$context.listUrl)}}},[t._v("\n                  更多\n                ")])]),e("div",{staticClass:"nb-card nb-content-box"},[e("b-container",{staticClass:"bv-example-row",staticStyle:{"padding-bottom":"2.5rem"}},[e("div",{staticClass:"d-flex justify-content-between my-2"},[e("div",{staticStyle:{"z-index":"999"}},[t.$context.author?e("span",[t._v(t._s(t.$context.author)+" / 文")]):t._e(),t.$context.photographer?e("span",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.$context.author)+" / 图")]):t._e()]),e("div",{staticStyle:{"z-index":"999"}},[e("b-icon",{attrs:{icon:"eye"}}),e("span",{staticStyle:{margin:"0 12px 0 6px"},attrs:{id:"busuanzi_page_pv"}}),e("b-icon",{attrs:{icon:"clock"}}),e("span",{staticStyle:{"margin-left":"6px"}},[t._v(t._s(t.formatDate(t.$context.publishDate)))])],1)]),e("hr"),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$context.content)}}),e("div",{staticClass:"back-button",on:{click:t.handleGoBack}},[e("span",{staticClass:"arrow"},[t._v("←")])])])],1)]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"nb-text-md-bold text-nb-black",staticStyle:{"z-index":"1"}},[t._v("\n                  最新动态\n                ")])]),e("div",{staticStyle:{height:"20px"}}),e("div",{staticClass:"nb-card nb-recomment-card"},t._l(t.$page.recommends.edges,(function(n,i){return e("div",{key:i,staticClass:"d-flex align-tems-center mb-3"},[e("div",{staticClass:"nb-recomment-box nb-mr-sm"},[e("div",{staticClass:"nb-text-xxxs-bold text-nb-primary nb-recomment-date"},[t._v("\n                      "+t._s(t.getDate(n.node.publishDate))+"\n                    ")]),e("div",{staticClass:"nb-line-pure bg-nb-primary",staticStyle:{height:"1px"}}),e("div",{staticClass:"nb-text-xxxxxs"},[t._v("\n                      "+t._s(t.getMonthDate(n.node.publishDate))+"\n                    ")])]),e("div",{staticClass:"nb-text-xxxxs cursor-pointer recomment-title",on:{click:function(e){return t.handleNavigate(n.node.url)}}},[t._v("\n                    "+t._s(n.node.title)+"\n                  ")])])})),0)])],1),e("div",{staticStyle:{height:"135px"}})])]),e("Footer")],1)])])}),[],!1,null,null,null);"function"==typeof a&&a(c);e.default=c.exports},YWed:function(t,e,n){"use strict";n("gn6h")},gn6h:function(t,e,n){}}]);