(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43d3da12"],{"0b0e":function(t,e,i){},3073:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"auto-spin-loading45454545454"},[i("a-spin")],1)},s=[],n={name:"Spin"},o=n,r=(i("794c"),i("2877")),l=Object(r["a"])(o,a,s,!1,null,"9f9f148c",null);e["a"]=l.exports},4564:function(t,e,i){"use strict";var a=i("b6a0"),s=i.n(a);s.a},"794c":function(t,e,i){"use strict";var a=i("c357"),s=i.n(a);s.a},a980:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"auto-empty"},[i("img",{attrs:{src:t.EmptyImg,alt:""}}),i("div",{staticClass:"empty-train"},[i("div",{staticClass:"top"},[t._v(t._s(t.emptyData.topTitle))]),i("div",[t._v(" "+t._s(t.emptyData.beforeContent)+" "),i("span",{staticClass:"create-train",on:{click:t.goto}},[t._v(t._s(t.emptyData.btnContent))])])])])},s=[],n=i("b45c"),o=i.n(n),r={data:function(){return{EmptyImg:o.a}},methods:{goto:function(){console.log(),console.log(this.emptyData.goToPath),this.$router.push(this.emptyData.goToPath)}},props:["emptyData"]},l=r,c=(i("e845"),i("2877")),d=Object(c["a"])(l,a,s,!1,null,"90eeee98",null);e["a"]=d.exports},b45c:function(t,e,i){t.exports=i.p+"img/empty.aed2f263.png"},b6a0:function(t,e,i){},bdc6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"train-content"},[i("div",{staticClass:"breadcrumb"},[i("span",[t._v(" 模型中心 ")]),i("span",{staticClass:"arrow"},[t._v(" > ")]),i("span",{staticClass:"breadcrumb-last"},[t._v(" 校验模型 ")]),i("a-tooltip",{attrs:{placement:"right",title:"目前仅支持经过云服务训练的模型进行校验"}},[t.isShowTips?i("a-icon",{staticClass:"model-tips",attrs:{type:"question-circle"}}):t._e()],1)],1),i("div",{staticClass:"check-body"},[i("a-form",{attrs:{layout:"inline",form:t.form}},[i("a-form-item",{attrs:{label:"选择模型"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["mode",{initialValue:t.modelId}],expression:"['mode', { initialValue: modelId }]"}],staticStyle:{width:"230px"},attrs:{showSearch:"",optionFilterProp:"children",placeholder:"请选择模型",filterOption:t.filterOption},on:{change:t.handleModelChange}},t._l(t.modelList,(function(e){return i("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1),i("a-form-item",{attrs:{label:"应用类型"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:t.serviceType}],expression:"['type', { initialValue: serviceType }]"}],staticStyle:{width:"230px"},attrs:{placeholder:"请应用类型",filterOption:t.filterOption},on:{change:t.handleTypeChange}},t._l(t.typeList,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id,disabled:e.disabled}},[t._v(t._s(e.name))])})),1)],1),i("a-form-item",{attrs:{label:"选择版本"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["versions",{initialValue:t.versionId}],expression:"['versions', { initialValue: versionId }]"}],staticStyle:{width:"230px"},attrs:{placeholder:"请选择版本"},on:{change:t.handleSelectChange}},t._l(t.versionsList,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id}},[t._v(t._s(e.version))])})),1)],1)],1)],1),t.isShowStartUp?i("div",{staticClass:"check-btn"},[i("a-button",{attrs:{type:"primary",loading:t.startUpLoading,disabled:t.startUpBtnDisabled},on:{click:t.startUp}},[t._v(t._s(t.startUpContent))])],1):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowStartUp,expression:"!isShowStartUp"}],staticClass:"check-images"},[i("a-row",[i("a-col",{attrs:{span:16}},[i("div",[t._v(" 当前模型准确率: "),i("span",[t._v(t._s(t.Percentage+"%"))]),i("span",{staticClass:"look-report",on:{click:function(e){return t.goToReport("checkModelReport")}}},[t._v("查看完整评估报告")])])]),i("a-col",{attrs:{span:8}},[i("div",[t._v(" 识别结果: "),i("span",{staticClass:"look-report"},[t._v("如何优化结果？")])])])],1)],1),i("DataList",{directives:[{name:"show",rawName:"v-show",value:!t.isShowStartUp,expression:"!isShowStartUp"}],attrs:{checkId:t.checkId,type:this.form.getFieldsValue().type,mode:this.form.getFieldsValue().mode,versions:this.form.getFieldsValue().versions,historyImgList:t.historyImgList}}),0===t.modelList.length?i("EmptyModel",{attrs:{emptyData:t.emptyData}}):t._e(),t.isShowSpinLoading?i("Spin"):t._e()],1)},s=[],n=i("3073"),o=i("a980"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"auto-select-image"},[i("a-row",[i("a-col",{staticClass:"left-outer",attrs:{span:16}},[i("div",{staticClass:"upload-image-left"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.imagesDataList.length,expression:"imagesDataList.length == 0"}],staticClass:"upload-before"},[i("i",{staticClass:"iconfont icontupian images-icon",attrs:{type:"upload"}}),i("a-button",{attrs:{type:"primary"},on:{click:t.showImgModal}},[i("a-icon",{attrs:{type:"upload"}}),t._v(" 添加图片")],1)],1),t.imagesDataList.length>0?i("div",{staticClass:"images-list"},[i("div",{staticClass:"image-big"},[i("a-icon",{staticClass:"icon-left icon-left-big",attrs:{type:"left"},on:{click:t.Prev}}),i("div",{staticClass:"image-big-body"},[i("img",{attrs:{src:"data:image/png;base64,"+t.bigImageUrl,alt:""}})]),i("a-icon",{staticClass:"icon-left icon-left-big",attrs:{type:"right"},on:{click:t.Next}})],1),i("div",{staticClass:"image-small-list"},[i("a-icon",{staticClass:"icon-left",attrs:{type:"left"},on:{click:t.Prev}}),i("div",{staticClass:"small-outer"},[i("div",{staticClass:"small-inner",style:{width:108*t.imagesDataList.length+"px",left:t.smallImageleft+"px"}},t._l(t.imagesDataList,(function(e,a){return i("div",{key:a,staticClass:"image-inner",style:{border:t.currentIndex===a?"2px solid #54A0FB":"2px solid #969696"},on:{click:function(e){return t.clickCurrentIndex(a)}}},[i("img",{attrs:{src:"data:image/png;base64,"+e.imgUrl,alt:""}})])})),0)]),i("a-icon",{staticClass:"icon-left",attrs:{type:"right"},on:{click:t.Next}})],1)]):t._e(),t.isShowSpinLoading?i("Spin"):t._e()],1)]),i("a-col",{staticClass:"right-outer",attrs:{span:8}},[i("div",{staticClass:"image-report"},[i("div",{staticClass:"header"},[i("div",[t._v("预测分类")]),i("div",[t._v("置信度")])]),t.PredictionList&&t.PredictionList.length>0?i("div",{staticClass:"type-body"},t._l(t.PredictionList,(function(e,a){return i("a-row",{key:a},[i("a-col",{staticClass:"type-list",attrs:{span:12}},[t._v(t._s(e.trainLabel))]),i("a-col",{staticClass:"type-list",attrs:{span:12}},[t._v(t._s(e.confidence?e.confidence+"%":""))])],1)})),1):t._e(),t.PredictionList&&0==t.PredictionList.length?i("div",{staticClass:"body"},[i("div",[t._v(" 请上传文件后查看识别结果 ")])]):i("div",{staticClass:"type-btn"},[i("a-button",{staticClass:"btn-right",on:{click:t.showCorrectModal}},[t._v("纠正识别结果")])],1)])])],1),0==t.imagesDataList.length?i("div",{staticClass:"tips"},[i("div",[t._v(" 注意： ")]),t._m(0)]):t._e(),t.imagesDataList.length>0?i("div",{staticClass:"btns-list"},[i("a-row",[i("a-col",{attrs:{span:16}},[i("a-button",{attrs:{disabled:t.isShowSpinLoading,type:"primary"},on:{click:t.showImgModal}},[t._v("继续添加图片")])],1),i("a-col",{attrs:{span:8}},[i("div",{staticClass:"btns-list-right"},[i("a-button",{staticClass:"btn-left"},[i("router-link",{staticClass:"link-goto",attrs:{to:"/train"}},[t._v("重 新 训 练")])],1),i("a-button",{staticClass:"btn-right",attrs:{type:"primary"},on:{click:t.goToPublic}},[t._v("发 布 上 线")])],1)])],1)],1):t._e(),i("a-modal",{attrs:{title:"纠正识别结果",visible:t.correctModalVisible,confirmLoading:t.confirmLoading,cancelText:"取消",okText:"提交"},on:{ok:t.handleOk,cancel:t.handleCancel}},[i("p",[t._v(t._s(t.ModalText))]),i("a-form",{attrs:{layout:"inline",form:t.form}},[i("a-form-item",{attrs:{label:"当前图片对应训练集应为"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["mode"],expression:"['mode']"}],staticStyle:{width:"270px"},attrs:{showSearch:"",optionFilterProp:"children",placeholder:"请选择数据集",filterOption:t.filterOption},on:{change:t.handleDataChange}},t._l(t.collectionList,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1),i("a-form-item",{attrs:{label:"当前图片的识别结果应为"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type"],expression:"['type']"}],staticStyle:{width:"270px"},attrs:{showSearch:"",placeholder:"请选择分类",filterOption:t.filterOption,notFoundContent:t.notFoundContent},on:{search:t.selectTypeChange},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return i("div",{},[i("v-nodes",{attrs:{vnodes:e}}),i("a-divider",{staticStyle:{margin:"2px 0"}}),i("div",{staticStyle:{padding:"8px",cursor:"pointer","text-align":"center"},on:{click:t.createType}},[i("a-icon",{attrs:{type:"plus"}}),t._v(" 创建分类 ")],1)],1)}}])},t._l(t.typeList,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1),i("a-form-item",[i("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["synchro"],expression:"['synchro']"}]},[i("span",{style:{"font-size":"12px"}},[t._v("纠正的识别结果同步到我的训练集中")])])],1)],1)],1),i("a-modal",{attrs:{title:"纠正识别结果",visible:t.visibleResult,width:700,footer:null},on:{cancel:t.handleResultCancel}},[i("div",{staticClass:"correct-modal-auto-close00000"},[t._v(" "+t._s(t.countDownNum)+"s后自动关闭 ")]),i("div",{staticClass:"modal-correct-result11111"},[i("a-row",[i("a-col",{staticClass:"modal-result-left22222",attrs:{span:8}},[i("i",{staticClass:"iconfont iconcheck-circle result-icon"})]),i("a-col",{staticClass:"modal-result-right33333",attrs:{span:16}},[i("div",{staticClass:"title"},[t._v(" 提交成功! ")]),i("div",{staticClass:"result-info"},[t._v(" 我们已经当前选中图片移动至"),i("span",{staticClass:"data-name"},[t._v(t._s(t.dataModeName))]),t._v("之中； ")])])],1)],1)]),i("a-modal",{attrs:{title:"上传图片",visible:t.correctModalVisibleImg,confirmLoading:t.confirmLoadingImg,width:740},on:{cancel:t.handleCancelImg}},[i("template",{slot:"footer"},[i("span",{staticClass:"model-add-images-num1212111"},[t._v("共计"+t._s(t.fileListImg.length)+"张图片")]),i("a-button",{key:"submit",attrs:{loading:t.confirmLoadingImg,type:"primary"},on:{click:t.customRequest}},[t._v(" 上传 ")]),i("a-button",{on:{click:t.handleCancelImg}},[t._v(" 取消 ")])],1),0===t.fileListImg.length?i("div",{staticClass:"auto-upload-modal-body-img"},[i("i",{staticClass:"iconfont icontupian images-icon",attrs:{type:"upload"}}),i("a-upload",{staticClass:"avatar-uploader",attrs:{multiple:!0,showUploadList:!1,fileList:t.fileListImg,action:"/aiplatform/modelcheck/file/upload",beforeUpload:t.beforeUploadImg,accept:"image/*"},on:{change:t.handleChangeImg}},[i("a-button",{attrs:{type:"primary"}},[t._v("点击添加图片")])],1),i("div",{staticClass:"tips-21"},[t._v(" 按住Ctrl可选多个文件 ")])],1):i("div",{staticClass:"auto-upload-modal-body-img"},[i("a-upload",{attrs:{action:"/aiplatform/modelcheck/file/upload",beforeUpload:t.beforeUploadImg,accept:"image/*",fileList:t.fileListImg,listType:"picture-card",multiple:!0},on:{preview:t.handlePreview,change:t.handleChangeImg}},[i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1)]),i("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleImgCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)],2)],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tips-info"},[t._v("1.图片支持的格式为jpg, jepg, png, bmp等；")]),i("div",{staticClass:"tips-info"},[t._v("2.图片大小请限制在4M以内；")])])}],c=i("bc3a"),d=i.n(c),m=i("c968");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(i,!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function g(t){return y(t)||v(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function y(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var I={data:function(){var t=this.$createElement,e=JSON.parse(localStorage.getItem("userInfo")),i=e.token;return{correctModalVisible:!1,confirmLoading:!1,confirmLoadingImg:!1,visibleResult:!1,isShowSpinLoading:!1,previewVisible:!1,correctModalVisibleImg:!1,timeoutHistoryImgList:null,previewImage:"",dataModeName:"",currentIndex:0,smallImageWidth:1e4,smallImageleft:0,countDownNum:3,bigImageUrl:"",collectionList:[],typeList:[],beforeData:{modelCheckId:this.checkId},headers:{token:i},token:i,ModalText:"纠正错误的识别结果并保存在训练集中，方便重新训练模型",columns:[{dataIndex:"dataName",title:"预测分类",key:"dataName"},{title:"置信度",dataIndex:"report",key:"report"}],data:[],fileList:[],fileListImg:[],imagesDataList:[],PredictionList:[],resultData:{title:"纠正识别结果",visible:!0,resultTitle:"提交成功！",okText:""},notFoundContent:t("div",[t("a-row",[t("a-col",{class:"not-data-select",attrs:{span:"24"}},["暂无数据"])])]),form:this.$form.createForm(this,{name:"correct_list_rules"})}},beforeDestroy:function(){console.log("xiaohuidingshi",this.timeoutHistoryImgList),clearTimeout(this.timeoutHistoryImgList),this.timeoutHistoryImgList=null},methods:{goTo:function(t,e){this.$router.push({name:t,params:e})},createType:function(t){this.form.setFieldsValue({type:this.selectTypeValue})},selectTypeChange:function(t){this.selectTypeValue=t},goToPublic:function(){this.goTo("public",{modelId:this.mode,typeId:this.type.join(""),checkId:this.checkId})},handleResultCancel:function(){this.visibleResult=!1,this.countDownNum=3},handlePreview:function(t){this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0},handleImgCancel:function(t){this.previewVisible=!1},customRequest:function(){var t=this,e=this,i=this.fileListImg,a=new FormData;i.forEach((function(e){a.append("imgFiles",e.originFileObj),a.append("modelCheckId",t.checkId)})),this.confirmLoadingImg=!0;var s={headers:{"Content-Type":"multipart/form-data;boundary="+(new Date).getTime(),token:this.token}},n=d.a.create({withCredentials:!0});i.length>0?n.post("/aiplatform/modelcheck/file/upload",a,s).then((function(i){i.data.success?(e.fileListImg=[],e.confirmLoadingImg=!1,e.correctModalVisibleImg=!1,e.$message.success("文件上传成功"),t.gethistoryImgList({modelcheckid:t.checkId,currentPage:0,pageSize:t.fileList.length})):(e.confirmLoadingImg=!1,e.$message.error(i.data.msg))})).catch((function(){e.confirmLoadingImg=!1,e.correctModalVisibleImg=!1,e.$message.error("文件上传失败")})):this.$message.error("请先选择图片")},gethistoryImgList:function(t){var e=this;this.isShowSpinLoading=!0,clearTimeout(this.timeoutHistoryImgList),this.$api.trainModel.gethistoryImgList(t).then((function(i){i.success&&i.data&&i.data.content?(0===i.data.content[0].confidences.length?e.timeoutHistoryImgList=setTimeout((function(){e.gethistoryImgList(t)}),1e3):(e.isShowSpinLoading=!1,clearTimeout(e.timeoutHistoryImgList)),e.imagesDataList=i.data.content,e.currentIndex=0,e.bigImageUrl=e.imagesDataList[0].imgUrl,e.PredictionList=e.imagesDataList[0].confidences,e.smallImageWidth=-108*i.data.content.length,e.smallImageleft=0):(e.isShowSpinLoading=!1,e.imagesDataList=[])}))},handleDataChange:function(t){var e=this;this.$api.trainModel.getLabelList(t).then((function(t){t&&t.data&&(e.typeList=t.data)}))},showCorrectModal:function(){this.correctModalVisible=!0},showImgModal:function(){this.correctModalVisibleImg=!0},handleCancelImg:function(t){this.correctModalVisibleImg=!1},beforeUpload:function(t){var e=["image/jpeg","image/png","image/jpg","image/bmp","image/gif","image/svg","image/webp"],i=-1!==e.indexOf(t.type);if(!i)return this.$message.error("只图片支持的格式为jpg, jepg, png, bmp等!"),!1;var a=t.size/1024/1024<4;return!a&&(this.$message.error("图片大小请限制在4M以内!"),!1)},beforeUploadImg:function(t){return this.fileListImg=[].concat(g(this.fileListImg),[t]),this.fileList=[].concat(g(this.fileList),[t]),!1},handleChangeImg:function(t){var e=t.fileList;t.file;e=e.map((function(t){var e=Object(m["a"])(t.originFileObj);return p({},t,{thumbUrl:e})})),this.fileListImg=e},handleOk:function(t){var e=this;this.confirmLoading=!0;var i=this.form.getFieldsValue(),a=i.mode,s=i.type,n=i.synchro,o=this.collectionList.filter((function(t){return t.id===a}))[0];if(!a||!s)return this.$message.error("请选择训练集和分类!"),void(this.confirmLoading=!1);this.dataModeName=o.collectionName,this.$api.trainModel.getCorrectiveResultList({modelCheckImgId:this.imagesDataList[this.currentIndex].id,trainLabelId:s,isSync:!!n}).then((function(t){e.visible=!1,e.confirmLoading=!1,e.correctModalVisible=!1,e.visibleResult=!0;var i=setInterval((function(){e.countDownNum=e.countDownNum-1,e.countDownNum<0&&(clearInterval(i),e.visibleResult=!1,e.countDownNum=3)}),1e3)})).catch((function(){e.confirmLoading=!1}))},handleCancel:function(t){this.correctModalVisible=!1},filterOption:function(t,e){if(e&&e.componentOptions&&e.componentOptions.children&&e.componentOptions.children[0].text)return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},clickCurrentIndex:function(t){this.currentIndex=t,this.bigImageUrl=this.imagesDataList[t].imgUrl,this.PredictionList=this.imagesDataList[t].confidences},Prev:function(){this.currentIndex=this.currentIndex-1,this.CalcIndex("Prev")},Next:function(){this.currentIndex=this.currentIndex+1,this.CalcIndex("Next")},CalcIndex:function(t){var e=this.imagesDataList.length;this.currentIndex<0?this.currentIndex=e-1:this.currentIndex>e-1&&(this.currentIndex=0),"Next"===t?this.currentIndex>=0&&this.currentIndex<=4||this.currentIndex>e-1?this.smallImageleft=0:this.smallImageleft=this.smallImageleft-108:"Prev"===t&&(this.currentIndex>=0&&this.currentIndex<=4||this.currentIndex>e-1?this.smallImageleft=0:this.currentIndex>=e-1?this.smallImageleft=-108*(e-5):this.smallImageleft=this.smallImageleft+108),this.bigImageUrl=this.imagesDataList[this.currentIndex].imgUrl,this.PredictionList=this.imagesDataList[this.currentIndex].confidences}},watch:{checkId:function(t){this.beforeData={modelCheckId:t}},historyImgList:function(t){this.imagesDataList=t,this.currentIndex=0,t.length>0&&(this.bigImageUrl=t[0].imgUrl,this.PredictionList=t[0].confidences)},versions:function(t){var e=this;t&&this.$api.trainModel.getCheckList(t).then((function(t){t&&t.data&&(e.collectionList=t.data)}))}},components:{Spin:n["a"],VNodes:{functional:!0,render:function(t,e){return e.props.vnodes}}},props:["checkId","type","mode","versions","historyImgList"]},L=I,b=(i("4564"),i("2877")),w=Object(b["a"])(L,r,l,!1,null,"1f987596",null),C=w.exports,_={data:function(){var t=this.$route.params,e=t.id,i=t.key,a=t.serviceType;return{loading:!1,isShowTips:!0,startUpLoading:!1,startUpBtnDisabled:!0,isShowStartUp:!0,isShowSpinLoading:!0,checkId:null,modelTrainId:null,modelId:e,versionId:i,serviceType:a||1,startUpContent:"启动模型校验服务",Percentage:"",emptyData:{topTitle:"暂无模型可使用",goToPath:{path:"train"},beforeContent:"请先去(创建)",btnContent:"训练模型"},modelList:[],typeList:[],versionsList:[],historyImgList:[],form:this.$form.createForm(this,{name:"check_rules"})}},created:function(){var t=this;this.isShowSpinLoading=!0;var e=this.$route.params.serviceType;this.$api.trainModel.getModelList(1).then((function(e){t.isShowSpinLoading=!1,e&&e.data&&(t.modelList=e.data)})).catch((function(){t.isShowSpinLoading=!1})),this.$api.trainModel.getApplicationTypeList().then((function(e){e&&e.data&&(t.typeList=e.data)})),e&&this.getVersionsList({modelId:this.modelId,applicationId:e})},beforeDestroy:function(){clearTimeout(this.timeoutHistoryImgList)},methods:{goToReport:function(t){var e=this.form.getFieldsValue(),i=e.mode,a=e.versions,s=e.type,n=this.modelList.filter((function(t){return t.id===i}))[0];this.$router.push({name:t,params:{id:i,modelName:n.modelName,versionId:a,serviceType:s}})},handleTypeChange:function(t){this.checkId=null,this.historyImgList=[];var e=this.form.getFieldsValue(),i=e.mode;this.form.setFieldsValue({versions:""}),i&&this.getVersionsList({modelId:i,applicationId:t.toString()})},handleSelectChange:function(t){console.log(t,"value"),this.modelTrainId=t,this.checkId=null,this.historyImgList=[];var e=this.form.getFieldsValue(),i=e.mode,a=e.type;i&&a&&t&&(this.startUpBtnDisabled=!1,this.checkModelStatus({modelTrainId:t}))},handleModelChange:function(t){var e=this,i=this.form.getFieldsValue(),a=i.type;this.form.setFieldsValue({versions:""}),this.startUpLoading=!1,this.checkId=null,this.historyImgList=[],this.$api.trainModel.getVersionsList({modelId:t,applicationId:a.toString()}).then((function(i){i&&i.data&&(e.versionsList=i.data,i.data.length>0?(e.form.setFieldsValue({versions:i.data[0].id}),t&&a&&i.data[0].id&&e.checkModelStatus({modelTrainId:i.data[0].id})):(e.isShowStartUp=!0,e.startUpLoading=!1,e.startUpContent="启动模型校验服务",e.startUpBtnDisabled=!0))}))},getVersionsList:function(t){var e=this;this.$api.trainModel.getVersionsList(t).then((function(t){t&&t.data&&(e.versionsList=t.data,t.data.length>0?(e.form.setFieldsValue({versions:t.data[0].id}),t.data[0].id&&e.checkModelStatus({modelTrainId:t.data[0].id})):(e.isShowStartUp=!0,e.startUpLoading=!1,e.startUpContent="启动模型校验服务",e.startUpBtnDisabled=!0))}))},checkModelStatus:function(t){var e=this;this.$api.trainModel.getModelcheckimg(t).then((function(i){e.startUpBtnDisabled=!1,i.success?(e.checkId=i.data.checkId,!i.data||"关闭"!==i.data.stateName&&"未启动"!==i.data.stateName?i.data&&"运行中"===i.data.stateName?(e.startUpLoading=!0,e.isShowStartUp=!1,e.startUpContent="运行中",e.getCheckedmodeltraintype(t.modelTrainId)):(e.startUpContent="状态异常",e.startUpLoading=!1,e.isShowStartUp=!0):(e.startUpLoading=!1,e.startUpContent="启动模型校验服务",e.isShowStartUp=!0)):e.$message.error(i.msg)}))},gethistoryImgList:function(t){var e=this;this.isShowSpinLoading=!0,this.$api.trainModel.gethistoryImgList(t).then((function(i){i.success&&i.data&&i.data.content?(e.historyImgList=i.data.content,0===i.data.content[0].confidences.length?e.timeoutHistoryImgList=setTimeout((function(){e.gethistoryImgList(t)}),1e3):(clearTimeout(e.timeoutHistoryImgList),e.isShowSpinLoading=!1)):(e.isShowSpinLoading=!1,e.historyImgList=[])})).catch((function(){e.isShowSpinLoading=!1}))},getCheckedmodeltraintype:function(t){var e=this;this.$api.trainModel.getCheckedmodeltraintype(t).then((function(t){t.success&&t.data?e.Percentage=t.data:e.Percentage=0}))},filterOption:function(t,e){if(e&&e.componentOptions&&e.componentOptions.children&&e.componentOptions.children[0].text)return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},startUp:function(t){var e=this,i=this.form.getFieldsValue(),a=i.versions;this.startUpLoading=!0,this.startUpContent="启动中",this.$api.trainModel.checkModelTrain({modelTrainId:a}).then((function(t){e.startUpLoading=!1,e.isShowStartUp=!1,e.startUpContent="启动模型校验服务",e.checkModelStatus({modelTrainId:a})})).catch((function(){e.startUpLoading=!1,e.startUpContent="启动模型校验服务"}))}},components:{Spin:n["a"],EmptyModel:o["a"],DataList:C}},k=_,S=(i("e4a7"),Object(b["a"])(k,a,s,!1,null,"02c5cb34",null));e["default"]=S.exports},c357:function(t,e,i){},c968:function(t,e,i){"use strict";function a(t){var e=null;return void 0!==window.createObjectURL?e=window.createObjectURL(t):void 0!==window.URL?e=window.URL.createObjectURL(t):void 0!==window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e}i.d(e,"a",(function(){return a}))},cf61:function(t,e,i){},e4a7:function(t,e,i){"use strict";var a=i("cf61"),s=i.n(a);s.a},e845:function(t,e,i){"use strict";var a=i("0b0e"),s=i.n(a);s.a}}]);