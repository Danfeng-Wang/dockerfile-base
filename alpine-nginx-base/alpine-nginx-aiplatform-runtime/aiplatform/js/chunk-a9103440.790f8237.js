(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9103440"],{"0ccd":function(e,t,a){"use strict";var s=a("536a"),i=a.n(s);i.a},4421:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"public"},[a("CommonHead"),e._m(0),a("div",{staticClass:"public-wrap"},[a("div",{staticClass:"public-content"},[a("a-row",[a("a-col",{attrs:{span:12}},[a("div",{staticClass:"left-part"},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"选择模型",labelCol:{span:5},wrapperCol:{span:10}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["model",{rules:[{required:!0,message:"请选择模型"}]}],expression:"[\n                    'model',\n                    { rules: [{ required: true, message: '请选择模型' }] }\n                  ]"}],attrs:{options:e.modellist,placeholder:"请选择模型"},on:{change:e.modelChange}})],1),a("a-form-item",{attrs:{label:"应用类型",labelCol:{span:5},wrapperCol:{span:10}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["applicationType",{rules:[{required:!0,message:"请选择应用类型"}]}],expression:"[\n                    'applicationType',\n                    {\n                      rules: [{ required: true, message: '请选择应用类型' }]\n                    }\n                  ]"}],attrs:{options:e.applicationType,placeholder:"请选择应用类型"},on:{change:e.applicationTypeChange}})],1),e.publiced?e._e():a("a-form-item",{attrs:{label:"选择版本",labelCol:{span:5},wrapperCol:{span:10}}},[a("a-select",{attrs:{options:e.versionList,placeholder:"请选择版本号"},model:{value:e.versionKey,callback:function(t){e.versionKey=t},expression:"versionKey"}})],1),!e.publiced&&e.offline?a("a-form-item",{attrs:{label:"服务名称",labelCol:{span:5},wrapperCol:{span:10}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["servicename",{rules:[{required:!0,message:"服务名称必填"}]}],expression:"[\n                    'servicename',\n                    { rules: [{ required: true, message: '服务名称必填' }] }\n                  ]"}]})],1):e._e(),!e.publiced&&e.offline?a("a-form-item",{attrs:{label:"接口地址",labelCol:{span:5},wrapperCol:{span:18}}},[a("span",{staticStyle:{"word-wrap":"break-word",overflow:"hidden"}},[e._v("https://ai.shenlan.com/shenlanai/app/class/models")]),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["interface",{rules:[{required:!0,message:"接口地址必填"}]}],expression:"[\n                    'interface',\n                    { rules: [{ required: true, message: '接口地址必填' }] }\n                  ]"}],staticStyle:{display:"inline-block",width:"130px"}})],1):e._e(),!e.publiced&&e.offline?a("a-form-item",{attrs:{label:"其他要求","label-col":{span:5},"wrapper-col":{span:10}}},[a("div",{staticClass:"textarea-wrap"},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["otherRequire",{rules:[{validator:e.validateWordSum}]}],expression:"[\n                      'otherRequire',\n                      { rules: [{ validator: validateWordSum }] }\n                    ]"}],staticStyle:{width:"100%"},attrs:{autosize:{minRows:3,maxRows:6}},on:{change:e.inputText}}),a("span",{staticClass:"limit"},[e._v(e._s(e.currentLimit)+"/"+e._s(e.limit))])],1)]):e._e(),!e.publiced&&e.offline?a("a-form-item",{staticClass:"agree",attrs:{label:"","wrapper-col":{span:22}}},[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["agree",{rules:[{required:!0,message:"请选择"}]}],expression:"[\n                    'agree',\n                    { rules: [{ required: true, message: '请选择' }] }\n                  ]"}]},[e._v("同意云服务调用数据管理"),a("a",{attrs:{href:""}},[e._v("服务条款")]),e._v("并开通服务")])],1):e._e(),e.publiced||e.offline?e._e():a("a-form-item",{staticClass:"select-service",attrs:{label:"选择服务","label-col":{span:5},"wrapper-col":{span:10}}},[a("span",[e._v("Windows")])]),e.publiced?e._e():a("a-form-item",[a("a-button",{staticClass:"submitBtn",attrs:{type:"primary","html-type":"submit"}},[e._v("提交申请")])],1)],1),e.publiced?a("a-row",{staticClass:"empty-wrap",attrs:{type:"flex",justify:"center"}},[a("a-col",[a("img",{attrs:{src:e.EmptyImg,alt:""}}),a("br"),a("span",{staticClass:"oneline"},[e._v("模型尚未训练")]),a("br"),a("span",{staticClass:"secondline"},[e._v("请先去"),a("a",{attrs:{href:""}},[e._v("训练")]),e._v("/"),a("a",{attrs:{href:""}},[e._v("(创建)")]),e._v("模型")])])],1):e._e()],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"right-part"},[e.offline?a("div",[a("span",{staticClass:"one"},[e._v("标准接口规范参考")]),a("br"),a("span",{staticClass:"two"},[e._v("标准接口请求参考说明：")]),a("br"),a("table",{staticClass:"public-table",attrs:{width:"440",cellspacing:"0"}},[a("tr",{staticClass:"title"},[a("td",{attrs:{width:"20%"}},[e._v("字段名称")]),a("td",{attrs:{width:"20%"}},[e._v("必须")]),a("td",{attrs:{width:"20%"}},[e._v("类型")]),a("td",[e._v("说明")])]),a("tr",[a("td"),a("td"),a("td"),a("td")]),a("tr",[a("td"),a("td"),a("td"),a("td")]),a("tr",[a("td"),a("td"),a("td"),a("td")]),a("tr",[a("td"),a("td"),a("td"),a("td")])]),a("span",{staticClass:"three"},[e._v("标准接口响应字段说明：")]),a("br"),a("table",{staticClass:"public-table",attrs:{width:"440",cellspacing:"0"}},[a("tr",{staticClass:"title"},[a("td",{attrs:{width:"20%"}},[e._v("字段名称")]),a("td",{attrs:{width:"20%"}},[e._v("必须")]),a("td",{attrs:{width:"20%"}},[e._v("类型")]),a("td",[e._v("说明")])]),a("tr",[a("td"),a("td"),a("td"),a("td")]),a("tr",[a("td"),a("td"),a("td"),a("td")]),a("tr",[a("td"),a("td"),a("td"),a("td")]),a("tr",[a("td"),a("td"),a("td"),a("td")])])]):a("div",[a("span",{staticClass:"offline-one"},[e._v("说明")]),a("br"),a("span",{staticClass:"offline-two"},[e._v("离线SDK支持Andriod、ios、Windows、Linux操作系统，具体的系统、硬件环境支持请参考技术文档。")])])])])],1)],1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modules-url"},[a("span",[e._v("模型中心/模型发布")])])}],r=a("b45c"),l=a.n(r),n=a("63ef"),o=[{path:"model-list",breadcrumbName:"模型中心"},{path:"public",breadcrumbName:"发布模型"}],c=[{label:"云服务",value:"cloudService"},{label:"离线服务",value:"offlineService"}],d={name:"",data:function(){return{routes:o,modellist:[],changedModel:"",applicationType:c,changedApplicationType:"",versionList:[],limit:500,currentLimit:0,publiced:!0,offline:!0,EmptyImg:l.a,modelId:"",versionKey:"",serviceType:"cloudService"}},components:{CommonHead:n["a"]},beforeCreate:function(){this.form=this.$form.createForm(this)},created:function(){},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFieldsAndScroll((function(e,t){}))},applicationTypeChange:function(e){var t=this;this.changedApplicationType=e,this.publiced=!1,this.offline="offlineService"!==e,this.$api.modelList.getModelVersionList(this.changedModel,this.changedApplicationType,0,1e3).then((function(e){200===e.code&&(t.versionList=e.data.content.map((function(e){return{label:e.version,value:e.key}})))}))},modelChange:function(e){this.changedModel=e},inputText:function(e){var t=e.target.value;this.currentLimit=t.length},validateWordSum:function(e,t,a){if(t&&t.length>500){var s="字数不能超过500";a(s)}else a()}}},p=d,u=(a("c4b6"),a("2877")),m=Object(u["a"])(p,s,i,!1,null,"079e3930",null);t["default"]=m.exports},"536a":function(e,t,a){},"63ef":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auto-common-head"},[a("div",{staticClass:"head"},[a("p",[e._v(e._s(e.title))]),a("p",[e._v(e._s(e.info))])])])},i=[],r={data:function(){return{}},methods:{},props:{title:{default:"DeepBlue定制化AutoML"},info:{default:"零算法基础训练业务定制图像分类模型，可识别一张图中是否是某类物体/状态/场景，适用于图片中主体或者状态单一的场景"}}},l=r,n=(a("0ccd"),a("2877")),o=Object(n["a"])(l,s,i,!1,null,"04a4584a",null);t["a"]=o.exports},ab8f:function(e,t,a){},b45c:function(e,t,a){e.exports=a.p+"img/empty.aed2f263.png"},c4b6:function(e,t,a){"use strict";var s=a("ab8f"),i=a.n(s);i.a}}]);