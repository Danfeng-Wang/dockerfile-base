(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b95414e"],{"07f1":function(t,e,a){"use strict";var n=a("6bbf"),s=a.n(n);s.a},"0d71":function(t,e,a){"use strict";var n=a("2dac"),s=a.n(n);s.a},2037:function(t,e,a){},"2dac":function(t,e,a){},"463a":function(t,e,a){"use strict";var n=a("2037"),s=a.n(n);s.a},"530a":function(t,e,a){"use strict";var n=a("b936"),s=a.n(n);s.a},"6bbf":function(t,e,a){},"6d94":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"source-file-setting"},[a("header",[t._v("源文件设置")]),a("hr"),a("div",{staticClass:"setting-wrap"},[a("a-form",[a("a-form-item",{attrs:{label:"文件格式","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-select",{on:{change:function(e){return t.handleChange(e,"fileType")}}},t._l(t.fileType,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.value}},[t._v(" "+t._s(e.key)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"缺失值","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-input",{on:{change:function(e){return t.handleChange(e.target.value,"missVal")}}}),a("a-tooltip",{attrs:{placement:"right",title:"说明：多个缺失值以“|”分割，点击继续添加或修改"}},[a("a-icon",{staticStyle:{position:"absolute",top:"2px",right:"-20px"},attrs:{type:"question-circle"}})],1)],1),a("br"),a("a-form-item",{attrs:{label:"分隔符","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-select",{on:{change:function(e){return t.handleChange(e,"separator")}}},t._l(t.separator,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.value}},[t._v(" "+t._s(e.key)+" ")])})),1),a("a-tooltip",{attrs:{placement:"right",title:"说明："}},[a("a-icon",{staticStyle:{position:"absolute",top:"2px",right:"-20px"},attrs:{type:"question-circle"}})],1)],1),a("a-form-item",{attrs:{label:"字符集","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-select",{on:{change:function(e){return t.handleChange(e,"char")}}},t._l(t.char,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.value}},[t._v(" "+t._s(e.key)+" ")])})),1)],1),a("a-form-item",{staticClass:"custom-date",attrs:{label:"时间日期","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-select",{attrs:{getPopupContainer:function(t){return t.parentNode}},on:{change:function(e){return t.handleChange(e,"date")}},scopedSlots:t._u([{key:"dropdownRender",fn:function(e){return a("div",{},[a("v-nodes",{attrs:{vnodes:e}}),a("a-divider",{staticStyle:{margin:"4px 0"}}),a("div",{staticClass:"add",staticStyle:{padding:"0 5px"},on:{mousedown:function(t){return t.preventDefault()}}},[a("a-input",{attrs:{placeholder:"自定义时间日期"},model:{value:t.customDate,callback:function(e){t.customDate=e},expression:"customDate"}}),a("a-icon",{attrs:{type:"plus"},on:{click:function(e){return t.addDate(e)}}})],1)],1)}}])},t._l(t.date,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.value}},[t._v(" "+t._s(e.key)+" ")])})),1),a("a-tooltip",{attrs:{placement:"right",title:"说明："}},[a("a-icon",{staticStyle:{position:"absolute",top:"2px",right:"-20px"},attrs:{type:"question-circle"}})],1)],1),a("br"),a("a-form-item",{staticClass:"checkbox-form-item"},[a("a-checkbox",{staticClass:"first",on:{change:function(e){return t.onCheckBoxChange(e.target.checked,"check1")}}},[t._v(" 第一行为列名 "),a("a-tooltip",{attrs:{placement:"right",title:"说明："}},[a("a-icon",{staticStyle:{position:"absolute",top:"2px",right:"-20px"},attrs:{type:"question-circle"}})],1)],1),a("a-checkbox",{on:{change:function(e){return t.onCheckBoxChange(e.target.checked,"check2")}}},[t._v("引号字符")])],1),a("a-form-item",{staticClass:"btn-form-item",attrs:{"wrapper-col":{span:12}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.handleParse}},[t._v(" 文件解析 ")])],1)],1)],1)])},s=[],o={name:"sourceFileSetting",components:{VNodes:{functional:!0,render:function(t,e){return e.props.vnodes}}},data:function(){return{formData:{},checkboxResult:{},customDate:"",fileType:[{key:"zip",value:"zip"},{key:"rar",value:"rar"}],separator:[{key:"/",value:"/"},{key:"-",value:"-"}],char:[{key:"A",value:"A"},{key:"a",value:"a"}],date:[{key:"YYYY",value:"YYYY"},{key:"YYYY-MM",value:"YYYY-MM"}]}},methods:{handleChange:function(t,e){var a=this.formData;a[e]=t,this.formData=a,console.log(this.formData)},onCheckBoxChange:function(t,e){var a=this.checkboxResult;a[e]=t,this.checkboxResult=a,console.log(this.checkboxResult)},addDate:function(t){console.log(this.customDate);var e=this.date.length;this.date.push({key:this.customDate+e,value:this.customDate})},onDateInput:function(t){t.preventDefault(),console.log(t.target.value)},handleParse:function(){this.$emit("handleParse")}}},r=o,i=(a("530a"),a("2877")),c=Object(i["a"])(r,n,s,!1,null,"f2b8e1fe",null);e["a"]=c.exports},"80b1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-data-set"},[a("Breadcrumbml",{attrs:{routes:t.routes}}),a("div",{staticClass:"data-set-wrap"},[a("drag-upload",{attrs:{supportMsg:t.supportMsg}}),a("source-file-setting",{on:{handleParse:t.handleParse}})],1)],1)},s=[],o=a("9715"),r=a("f3e1"),i=a("6d94"),c={components:{dragUpload:o["a"],Breadcrumbml:r["a"],sourceFileSetting:i["a"]},data:function(){return{supportMsg:{hint1:"zip包里面最多支持源文件和配置文件两个文件上传；源文件未训练数据，配置文件为训练数据对应的特征类型；",hint2:"源文件仅支持csv、tsv、txt、excel格式，配置文件支持上传arff格式"},routes:[{breadcrumbName:"数据管理",path:"automl/data-management"},{breadcrumbName:"上传数据集",path:""}]}},methods:{handleParse:function(){console.log("111"),this.$router.push({name:"ParseFile"})}}},l=c,u=(a("0d71"),a("2877")),p=Object(u["a"])(l,n,s,!1,null,"3f6b7f75",null);e["default"]=p.exports},9715:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drag-upload"},[a("a-upload-dragger",{attrs:{name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},on:{change:t.handleChange}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("点击上传"+t._s(t.fileType)+"文件，或将"+t._s(t.fileType)+"文件拖拽到此处")]),t.supportMsg.hint1?a("p",{staticClass:"ant-upload-hint hint1"},[t._v(t._s(t.supportMsg.hint1))]):t._e(),t.supportMsg.hint2?a("p",{staticClass:"ant-upload-hint hint2"},[t._v(t._s(t.supportMsg.hint2))]):t._e()])],1)},s=[],o={name:"dragUpload",components:{},props:{fileType:{type:String,default:"zip"},supportMsg:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{handleChange:function(t){}}},r=o,i=(a("07f1"),a("2877")),c=Object(i["a"])(r,n,s,!1,null,"5df4592e",null);e["a"]=c.exports},b936:function(t,e,a){},f3e1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auto-breadcrumb"},[a("a-breadcrumb",{attrs:{separator:"/",routes:t.routes},scopedSlots:t._u([{key:"itemRender",fn:function(e){var n=e.route,s=(e.params,e.routes),o=e.paths;return[s.indexOf(n)===s.length-1?a("span",[t._v(" "+t._s(n.breadcrumbName)+" ")]):a("router-link",{attrs:{to:"/"+o.join("/")}},[0===s.indexOf(n)?a("i",{staticClass:"iconfont iconico- home"}):t._e(),t._v(" "+t._s(n.breadcrumbName)+" ")])]}}])})],1)},s=[],o={data:function(){return{}},props:["routes"],methods:{goTo:function(t){this.$router.push({name:t})}}},r=o,i=(a("463a"),a("2877")),c=Object(i["a"])(r,n,s,!1,null,"99b89550",null);e["a"]=c.exports}}]);