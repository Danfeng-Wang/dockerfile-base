(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a0f45f2"],{"0485":function(t,e,a){},"0714":function(t,e,a){},"0b0e":function(t,e,a){},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auto-pagination"},[a("a-pagination",{attrs:{pageSizeOptions:t.pageSizeOptions,showSizeChanger:t.showSizeChanger,pageSize:t.pageSize,total:t.total,current:t.current,showQuickJumper:t.showQuickJumper,itemRender:t.itemRenderdefault},on:{change:t.change,showSizeChange:t.showSizeChange},scopedSlots:t._u([{key:"buildOptionText",fn:function(e){return[a("span",[t._v(t._s(e.value)+"条/页")])]}}])})],1)},i=[],r={name:"Pagination",data:function(){return{}},methods:{itemRenderdefault:function(t,e,a){var n=this.$createElement;return"prev"===e?n("a",["上一页"]):"next"===e?n("a",["下一页"]):a},showSizeChange:function(t,e){this.$emit("showSizeChange",t,e)},change:function(t){this.$emit("change",t)}},props:{pageSizeOptions:{type:Array,default:function(){return["10","20","30"]}},showSizeChanger:{default:!1},showQuickJumper:{default:!1},pageSize:{default:10},total:{default:0},current:{default:1}}},s=r,o=(a("b5cd"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"7e05edfa",null);e["a"]=c.exports},"25e5":function(t,e,a){"use strict";var n=a("925d"),i=a.n(n);i.a},"2fbc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auto-breadcrumb"},[a("a-breadcrumb",{attrs:{separator:">",routes:t.routes},scopedSlots:t._u([{key:"itemRender",fn:function(e){var n=e.route,i=(e.params,e.routes),r=e.paths;return[i.indexOf(n)===i.length-1||0===i.indexOf(n)?a("span",[t._v(" "+t._s(n.breadcrumbName)+" ")]):a("router-link",{attrs:{to:"/"+r.join("/")}},[t._v(" "+t._s(n.breadcrumbName)+" ")])]}}])}),t.isShowCommonQus?a("div",[a("span",{staticClass:"right-tips",on:{click:t.handleShowQues}},[t._v("常见问题?")])]):t._e(),t.isShowModelStrategy?a("div",[a("span",{staticClass:"right-tips goto"},[t._v("模型训练攻略>>")])]):t._e()],1)},i=[],r={data:function(){return{}},props:["routes","isShowCommonQus","isShowModelStrategy","handleShowQues"],methods:{goTo:function(t){this.$router.push({name:t})}}},s=r,o=(a("25e5"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"5f60bff4",null);e["a"]=c.exports},3073:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auto-spin-loading45454545454"},[a("a-spin")],1)},i=[],r={name:"Spin"},s=r,o=(a("794c"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"9f9f148c",null);e["a"]=c.exports},"794c":function(t,e,a){"use strict";var n=a("c357"),i=a.n(n);i.a},"925d":function(t,e,a){},a980:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auto-empty"},[a("img",{attrs:{src:t.EmptyImg,alt:""}}),a("div",{staticClass:"empty-train"},[a("div",{staticClass:"top"},[t._v(t._s(t.emptyData.topTitle))]),a("div",[t._v(" "+t._s(t.emptyData.beforeContent)+" "),a("span",{staticClass:"create-train",on:{click:t.goto}},[t._v(t._s(t.emptyData.btnContent))])])])])},i=[],r=a("b45c"),s=a.n(r),o={data:function(){return{EmptyImg:s.a}},methods:{goto:function(){console.log(),console.log(this.emptyData.goToPath),this.$router.push(this.emptyData.goToPath)}},props:["emptyData"]},c=o,l=(a("e845"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"90eeee98",null);e["a"]=u.exports},b45c:function(t,e,a){t.exports=a.p+"img/empty.aed2f263.png"},b5cd:function(t,e,a){"use strict";var n=a("0714"),i=a.n(n);i.a},c357:function(t,e,a){},e10b:function(t,e,a){"use strict";var n=a("0485"),i=a.n(n);i.a},e845:function(t,e,a){"use strict";var n=a("0b0e"),i=a.n(n);i.a},f13a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"train-content"},[a("Breadcrumb",{attrs:{routes:t.routes}}),a("a-row",{staticClass:"btns"},[a("a-col",{attrs:{span:20}},[a("div",{staticClass:"btns-list-right"},[a("a-button",{staticClass:"btn-right",attrs:{type:"primary"}},[a("router-link",{staticClass:"link-goto",attrs:{to:"/my-data/create-dataset"}},[t._v("创建数据集")])],1),a("a-button",{staticClass:"btn-right"},[t._v(" 数据上传API ")]),a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入数据集名称查询",allowClear:""},on:{change:t.onChange,search:t.onSearch},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}})],1)]),t.myDataList.length>0?a("a-col",{staticClass:"remove-btn",attrs:{span:4}},[a("a-button",{staticClass:"btn-right",attrs:{disabled:0===t.selectedRowKeys.length},on:{click:t.batchDeletion}},[t._v(" 批量删除 ")])],1):t._e()],1),t.myDataList.length>0?a("a-table",{staticClass:"my-data-table",attrs:{rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},pagination:!1,rowKey:function(t){return t.id},columns:t.columns,dataSource:t.myDataList,loading:t.tableLoading},scopedSlots:t._u([{key:"name",fn:function(e,n){return[a("div",{key:"name"},[n.editable?a("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:e},on:{change:function(e){return t.handleChange(e.target.value,n.id,"collectionName")}}}):t._e(),n.editable?a("span",[a("a",{staticClass:"edit-btn",on:{click:function(){return t.save(n)}}},[t._v("保存")]),a("a-popconfirm",{attrs:{title:"是否确定取消？",okText:"确定",cancelText:"取消"},on:{confirm:function(){return t.cancel(n.id)}}},[a("a",{staticClass:"edit-btn"},[t._v("取消")])])],1):[t._v(t._s(e)),a("a-icon",{staticClass:"edit",attrs:{type:"form"},on:{click:function(){return t.edit(n.id)}}})]],2)]}},t._l(["stateName"],(function(e){return{key:e,fn:function(n,i){return[a("div",{key:e},[a("div",[a("span",{style:{color:"异常"===i.stateName?"#df180e":"#474747",paddingRight:"5px"}},[t._v(t._s(n))]),"处理中"===i.stateName?a("a-tooltip",{attrs:{placement:"right",title:"当前数据集有数据处于训练状态，为保证训练效果， 暂时无法修改数据!"}},[a("a-icon",{staticClass:"data-tips",attrs:{type:"question-circle"}})],1):t._e(),"异常"===i.stateName?a("a-tooltip",{attrs:{placement:"right",title:""+(i.result?i.result[0]&&i.result[0].report:null)}},[a("a-icon",{staticClass:"data-tips",attrs:{type:"question-circle"}})],1):t._e()],1)])]}}})),{key:"operation",fn:function(e,n){return a("div",{},["处理中"===n.stateName||"正常"===n.stateName?a("a",{staticClass:"detail",attrs:{href:"javascript:;"},on:{click:function(e){return t.lookDetial(n)}}},[t._v("查看")]):t._e(),"异常"===n.stateName||"正常"===n.stateName?a("a",{staticClass:"detail",attrs:{href:"javascript:;"},on:{click:function(e){return t.uploadFile(n)}}},[t._v("上传")]):t._e(),"异常"===n.stateName||"正常"===n.stateName?a("a",{staticClass:"delete",attrs:{href:"javascript:;"},on:{click:function(e){return t.onDelete(n.id)}}},[t._v("删除")]):t._e()])}}],null,!0)},[a("template",{staticClass:"footer",slot:"footer"},[a("Pagination",{attrs:{pageSize:t.pageSize,current:t.current,total:t.total},on:{change:t.changePage,showSizeChange:t.onShowSizeChange}})],1)],2):t._e(),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.tableLoading,expression:"tableLoading"}]}),0===t.myDataList.length?a("EmptyModel",{attrs:{emptyData:t.emptyData}}):t._e()],1)},i=[],r=a("2fbc"),s=a("a980"),o=a("1799"),c=a("3073");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function h(t){return m(t)||g(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function m(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var f=[{dataIndex:"id",title:"ID",key:"id"},{title:"名称",dataIndex:"collectionName",key:"collectionName",scopedSlots:{customRender:"name"}},{title:"类型",dataIndex:"serviceCategory",key:"serviceCategory"},{title:"分类数",dataIndex:"labelNum",key:"labelNum"},{title:"图片数",dataIndex:"imgNum",key:"imgNum"},{title:"状态",dataIndex:"stateName",key:"stateName",scopedSlots:{customRender:"stateName"}},{title:"操作",key:"operation",scopedSlots:{customRender:"operation"}}],y={data:function(){return{columns:f,myDataList:[],cacheData:[],tableLoading:!1,selectedRowKeys:[],searchData:null,emptyData:{topTitle:"暂无可用数据集",goToPath:{path:"my-data/create-dataset"},btnContent:"创建数据集"},current:1,total:0,pageSize:10,routes:[{path:"/",breadcrumbName:"数据中心"},{path:"",breadcrumbName:"我的数据集"}],form:this.$form.createForm(this,{name:"check_rules"})}},created:function(){this.getMyDataList({currentPage:0,pageSize:this.pageSize,keyWord:this.searchData})},methods:{goTo:function(t,e){this.$router.push({name:t,params:e})},lookDetial:function(t){this.goTo("myDataDetail",{id:t.id,name:t.collectionName})},uploadFile:function(t){this.goTo("uploadFile",{id:t.id,name:t.collectionName,from:"myDataList"})},onDelete:function(t){var e=this,a=this.$createElement;this.$confirm({title:"信息提示",content:a("div",["是否确定删除该数据集？"]),onOk:function(){e.tableLoading=!0,e.$api.myDataModal.batchDeletion({ids:t.toString()}).then((function(t){e.tableLoading=!1,!1===t.success?e.$message.error(t.msg):e.$message.success("该数据集删除成功"),e.getMyDataList({currentPage:e.current-1,pageSize:e.pageSize,keyWord:e.searchData})})).catch((function(){e.$message.error("该数据集删除失败"),e.tableLoading=!1}))},okText:"确定",cancelText:"取消",centered:!0})},onSearch:function(t){this.getMyDataList({currentPage:0,pageSize:this.pageSize,keyWord:t})},onChange:function(t){""===t.target.value&&this.getMyDataList({currentPage:0,pageSize:this.pageSize,keyWord:t.target.value})},onSelectChange:function(t){this.selectedRowKeys=t},batchDeletion:function(){var t=this,e=this.$createElement;this.$confirm({title:"信息提示",content:e("div",["是否确定删除选中项？"]),onOk:function(){t.tableLoading=!0,t.$api.myDataModal.batchDeletion({ids:t.selectedRowKeys&&t.selectedRowKeys.join(",")}).then((function(e){t.tableLoading=!1,t.selectedRowKeys=[],t.getMyDataList({currentPage:t.current-1,pageSize:t.pageSize,keyWord:t.searchData})})).catch((function(){t.$message.error("数据集删除失败！",5)}))},okText:"确定",cancelText:"取消",centered:!0})},onShowSizeChange:function(t,e){this.pageSize=e,this.getMyDataList({currentPage:0,pageSize:e,keyWord:this.searchData})},changePage:function(t){this.current=t,this.getMyDataList({currentPage:t-1,pageSize:this.pageSize,keyWord:this.searchData})},handleChange:function(t,e,a){var n=h(this.myDataList),i=n.filter((function(t){return e===t.id}))[0];i&&(i[a]=t,this.myDataList=n)},edit:function(t){var e=h(this.myDataList),a=e.filter((function(e){return t===e.id}))[0];a&&(a.editable=!0,this.myDataList=e)},save:function(t){var e=this,a=h(this.myDataList),n=a.filter((function(e){return t.id===e.id}))[0];n&&(delete n.editable,this.myDataList=a,this.cacheData=a.map((function(t){return u({},t)}))),this.tableLoading=!0,this.$api.myDataModal.saveMyData({id:t.id,collectionName:t.collectionName}).then((function(t){e.tableLoading=!1,e.$message.success("数据集名称修改成功")})).catch((function(){e.tableLoading=!1,e.$message.error("数据集名称修改失败"),e.getMyDataList({currentPage:e.current-1,pageSize:e.pageSize,keyWord:e.searchData})}))},cancel:function(t){var e=h(this.myDataList),a=e.filter((function(e){return t===e.id}))[0];a&&(Object.assign(a,this.cacheData.filter((function(e){return t===e.id}))[0]),delete a.editable,this.myDataList=e)},getMyDataList:function(t){var e=this;this.tableLoading=!0,this.$api.myDataModal.getMyDataList(u({},t),1).then((function(a){if(e.tableLoading=!1,a&&a.data){var n=t.currentPage;e.myDataList=a.data.content.map((function(t){if(t.result&&t.result.length>0){var e=t.result.filter((function(t){return!1===t.success}));return u({},t,{result:e})}return u({},t)})),e.cacheData=a.data.content,e.total=a.data.count,e.pageSize=a.data.pageSize,0===a.data.content.length&&0!==n&&(e.current=1,e.getMyDataList({currentPage:0,pageSize:e.pageSize,keyWord:e.searchData}))}else e.myDataList=[]}))}},components:{Breadcrumb:r["a"],EmptyModel:s["a"],Pagination:o["a"],Spin:c["a"]}},b=y,v=(a("e10b"),a("2877")),D=Object(v["a"])(b,n,i,!1,null,"424ba193",null);e["default"]=D.exports}}]);