/*!
 * @project        Example Project
 * @name           vuetable.1d1a59c6f3bae537b270.js
 * @author         Andrew Welch
 * @build          Wed, Mar 18, 2020 1:33 AM ET
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{116:function(t,e,a){"use strict";var i=a(44);a.n(i).a},119:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isFixedHeader?a("div",[a("div",{staticClass:"vuetable-head-wrapper"},[a("table",{class:["vuetable",t.css.tableClass,t.css.tableHeaderClass]},[a("thead",[a("tr",[t._l(t.tableFields,(function(e,i){return[e.visible?[t.isSpecialField(e.name)?["__checkbox"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-checkbox-"+t.trackBy,e.titleClass],style:{width:e.width}},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.checkCheckboxesState(e.name)},on:{change:function(a){return t.toggleAllCheckboxes(e.name,a)}}})]):t._e(),t._v(" "),"__component"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-component-"+t.trackBy,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){return t.orderBy(e,a)}}}):t._e(),t._v(" "),"__slot"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-slot-"+t.extractArgs(e.name),e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){return t.orderBy(e,a)}}}):t._e(),t._v(" "),"__sequence"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-sequence",e.titleClass||""],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e(),t._v(" "),t.notIn(t.extractName(e.name),["__sequence","__checkbox","__component","__slot"])?a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass||""],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e()]:[a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},attrs:{id:"_"+e.name},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){return t.orderBy(e,a)}}})]]:t._e()]})),t._v(" "),t.scrollVisible?a("th",{staticClass:"vuetable-gutter-col",style:{width:t.scrollBarWidth}}):t._e()],2)])])]),t._v(" "),a("div",{staticClass:"vuetable-body-wrapper",style:{height:t.tableHeight}},[a("table",{class:["vuetable",t.css.tableClass,t.css.tableBodyClass]},[a("colgroup",[t._l(t.tableFields,(function(e,i){return[e.visible?[a("col",{key:i,class:["vuetable-th-"+e.name,e.titleClass],style:{width:e.width},attrs:{id:"_col_"+e.name}})]:t._e()]}))],2),t._v(" "),a("tbody",{staticClass:"vuetable-body"},[t._l(t.tableData,(function(e,i){return[a("tr",{key:i,class:t.onRowClass(e,i),attrs:{"item-index":i,render:t.onRowChanged(e)},on:{click:function(a){return t.onRowClicked(e,a)},dblclick:function(a){return t.onRowDoubleClicked(e,a)}}},[t._l(t.tableFields,(function(s,l){return[s.visible?[t.isSpecialField(s.name)?["__sequence"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-sequence",s.dataClass],domProps:{innerHTML:t._s(t.renderSequence(i))}}):t._e(),t._v(" "),"__handle"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-handle",s.dataClass],domProps:{innerHTML:t._s(t.renderIconTag(["handle-icon",t.css.handleIcon]))}}):t._e(),t._v(" "),"__checkbox"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-checkboxes",s.dataClass]},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.rowSelected(e,s.name)},on:{change:function(a){return t.toggleCheckbox(e,s.name,a)}}})]):t._e(),t._v(" "),"__component"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-component",s.dataClass]},[a(t.extractArgs(s.name),{tag:"component",attrs:{"row-data":e,"row-index":i,"row-field":s.sortField}})],1):t._e(),t._v(" "),"__slot"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-slot",s.dataClass]},[t._t(t.extractArgs(s.name),null,{rowData:e,rowIndex:i,rowField:s.sortField})],2):t._e()]:[a("td",{key:l,class:s.dataClass,domProps:{innerHTML:t._s(t.renderNormalField(s,e))},on:{click:function(a){return t.onCellClicked(e,s,a)},dblclick:function(a){return t.onCellDoubleClicked(e,s,a)},contextmenu:function(a){return t.onCellRightClicked(e,s,a)}}})]]:t._e()]}))],2),t._v(" "),t.useDetailRow?[a("transition",{key:i,attrs:{name:t.detailRowTransition}},[t.isVisibleDetailRow(e[t.trackBy])?a("tr",{class:[t.css.detailRowClass],on:{click:function(a){return t.onDetailRowClick(e,a)}}},[a("td",{attrs:{colspan:t.countVisibleFields}},[a(t.detailRowComponent,{tag:"component",attrs:{"row-data":e,"row-index":i}})],1)]):t._e()])]:t._e()]})),t._v(" "),t.displayEmptyDataRow?[a("tr",[a("td",{staticClass:"vuetable-empty-result",attrs:{colspan:t.countVisibleFields},domProps:{innerHTML:t._s(t.noDataTemplate)}})])]:t._e(),t._v(" "),t.lessThanMinRows?t._l(t.blankRows,(function(e){return a("tr",{key:e,staticClass:"blank-row"},[t._l(t.tableFields,(function(e,i){return[e.visible?a("td",{key:i},[t._v(" ")]):t._e()]}))],2)})):t._e()],2)])])]):a("table",{class:["vuetable",t.css.tableClass]},[a("thead",[a("tr",[t._l(t.tableFields,(function(e,i){return[e.visible?[t.isSpecialField(e.name)?["__checkbox"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-checkbox-"+t.trackBy,e.titleClass],style:{width:e.width}},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.checkCheckboxesState(e.name)},on:{change:function(a){return t.toggleAllCheckboxes(e.name,a)}}})]):t._e(),t._v(" "),"__component"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-component-"+t.trackBy,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){return t.orderBy(e,a)}}}):t._e(),t._v(" "),"__slot"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-slot-"+t.extractArgs(e.name),e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){return t.orderBy(e,a)}}}):t._e(),t._v(" "),"__sequence"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-sequence",e.titleClass||"",t.sortClass(e)],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e(),t._v(" "),t.notIn(t.extractName(e.name),["__sequence","__checkbox","__component","__slot"])?a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass||"",t.sortClass(e)],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e()]:[a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},attrs:{id:"_"+e.name},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){return t.orderBy(e,a)}}})]]:t._e()]}))],2)]),t._v(" "),a("tbody",{staticClass:"vuetable-body"},[t._l(t.tableData,(function(e,i){return[a("tr",{key:i,class:t.onRowClass(e,i),attrs:{"item-index":i,render:t.onRowChanged(e)},on:{dblclick:function(a){return t.onRowDoubleClicked(e,a)},click:function(a){return t.onRowClicked(e,a)}}},[t._l(t.tableFields,(function(s,l){return[s.visible?[t.isSpecialField(s.name)?["__sequence"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-sequence",s.dataClass],domProps:{innerHTML:t._s(t.renderSequence(i))}}):t._e(),t._v(" "),"__handle"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-handle",s.dataClass],domProps:{innerHTML:t._s(t.renderIconTag(["handle-icon",t.css.handleIcon]))}}):t._e(),t._v(" "),"__checkbox"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-checkboxes",s.dataClass]},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.rowSelected(e,s.name)},on:{change:function(a){return t.toggleCheckbox(e,s.name,a)}}})]):t._e(),t._v(" "),"__component"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-component",s.dataClass]},[a(t.extractArgs(s.name),{tag:"component",attrs:{"row-data":e,"row-index":i,"row-field":s.sortField}})],1):t._e(),t._v(" "),"__slot"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-slot",s.dataClass]},[t._t(t.extractArgs(s.name),null,{rowData:e,rowIndex:i,rowField:s.sortField})],2):t._e()]:[t.hasCallback(s)?a("td",{key:l,class:s.dataClass,domProps:{innerHTML:t._s(t.callCallback(s,e))},on:{click:function(a){return t.onCellClicked(e,s,a)},dblclick:function(a){return t.onCellDoubleClicked(e,s,a)},contextmenu:function(a){return t.onCellRightClicked(e,s,a)}}}):a("td",{key:l,class:s.dataClass,domProps:{innerHTML:t._s(t.getObjectValue(e,s.name,""))},on:{click:function(a){return t.onCellClicked(e,s,a)},dblclick:function(a){return t.onCellDoubleClicked(e,s,a)},contextmenu:function(a){return t.onCellRightClicked(e,s,a)}}})]]:t._e()]}))],2),t._v(" "),t.useDetailRow?[a("transition",{key:i,attrs:{name:t.detailRowTransition}},[t.isVisibleDetailRow(e[t.trackBy])?a("tr",{class:[t.css.detailRowClass],on:{click:function(a){return t.onDetailRowClick(e,a)}}},[a("td",{attrs:{colspan:t.countVisibleFields}},[a(t.detailRowComponent,{tag:"component",attrs:{"row-data":e,"row-index":i}})],1)]):t._e()])]:t._e()]})),t._v(" "),t.displayEmptyDataRow?[a("tr",[a("td",{staticClass:"vuetable-empty-result",attrs:{colspan:t.countVisibleFields},domProps:{innerHTML:t._s(t.noDataTemplate)}})])]:t._e(),t._v(" "),t.lessThanMinRows?t._l(t.blankRows,(function(e){return a("tr",{key:e,staticClass:"blank-row"},[t._l(t.tableFields,(function(e,i){return[e.visible?a("td",{key:i},[t._v(" ")]):t._e()]}))],2)})):t._e()],2)])};i._withStripped=!0;a(45);var s=a(99),l=a.n(s),r={props:{fields:{type:Array,required:!0},loadOnStart:{type:Boolean,default:!0},apiUrl:{type:String,default:""},httpMethod:{type:String,default:"get",validator:t=>["get","post"].indexOf(t)>-1},reactiveApiUrl:{type:Boolean,default:!0},apiMode:{type:Boolean,default:!0},data:{type:[Array,Object],default:null},dataTotal:{type:Number,default:0},dataManager:{type:Function,default:null},dataPath:{type:String,default:"data"},paginationPath:{type:[String],default:"links.pagination"},queryParams:{type:[Object,Function],default:()=>({sort:"sort",page:"page",perPage:"per_page"})},appendParams:{type:Object,default:()=>({})},httpOptions:{type:Object,default:()=>({})},httpFetch:{type:Function,default:null},perPage:{type:Number,default:10},initialPage:{type:Number,default:1},sortOrder:{type:Array,default:()=>[]},multiSort:{type:Boolean,default:()=>!1},tableHeight:{type:String,default:null},multiSortKey:{type:String,default:"alt"},rowClassCallback:{type:[String,Function],default:""},rowClass:{type:[String,Function],default:""},detailRowComponent:{type:String,default:""},detailRowTransition:{type:String,default:""},trackBy:{type:String,default:"id"},css:{type:Object,default:()=>({tableClass:"ui blue selectable celled stackable attached table",loadingClass:"loading",ascendingIcon:"blue chevron up icon",descendingIcon:"blue chevron down icon",ascendingClass:"sorted-asc",descendingClass:"sorted-desc",sortableIcon:"",detailRowClass:"vuetable-detail-row",handleIcon:"gray-500 sidebar icon",tableBodyClass:"vuetable-semantic-no-top vuetable-fixed-layout",tableHeaderClass:"vuetable-fixed-layout"})},minRows:{type:Number,default:0},silent:{type:Boolean,default:!1},noDataTemplate:{type:String,default:()=>"No matching episodes"},showSortIcons:{type:Boolean,default:!0}},data(){return{eventPrefix:"vuetable:",tableFields:[],tableData:null,tablePagination:null,currentPage:this.initialPage,selectedTo:[],visibleDetailRows:[],lastScrollPosition:0,scrollBarWidth:"17px",scrollVisible:!1}},mounted(){if(this.normalizeFields(),this.normalizeSortOrder(),this.isFixedHeader&&(this.scrollBarWidth=this.getScrollBarWidth()+"px"),this.$nextTick((function(){this.fireEvent("initialized",this.tableFields)})),this.loadOnStart&&this.loadData(),this.isFixedHeader){let t=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=t&&t.addEventListener("scroll",this.handleScroll)}},destroyed(){let t=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=t&&t.removeEventListener("scroll",this.handleScroll)},computed:{version:()=>VERSION,useDetailRow(){return this.tableData&&this.tableData[0]&&""!==this.detailRowComponent&&void 0===this.tableData[0][this.trackBy]?(this.warn("You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!"),!1):""!==this.detailRowComponent},countVisibleFields(){return this.tableFields.filter((function(t){return t.visible})).length},countTableData(){return null===this.tableData?0:this.tableData.length},displayEmptyDataRow(){return 0===this.countTableData&&this.noDataTemplate.length>0},lessThanMinRows(){return null===this.tableData||0===this.tableData.length||this.tableData.length<this.minRows},blankRows(){return null===this.tableData||0===this.tableData.length?this.minRows:this.tableData.length>=this.minRows?0:this.minRows-this.tableData.length},isApiMode(){return this.apiMode},isDataMode(){return!this.apiMode},isFixedHeader(){return null!=this.tableHeight}},methods:{getScrollBarWidth(){const t=document.createElement("div"),e=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",e.style.width="100%",t.appendChild(e),document.body.appendChild(t);const a=t.offsetWidth;t.style.overflow="scroll";const i=e.offsetWidth;return document.body.removeChild(t),a-i},handleScroll(t){let e=t.currentTarget.scrollLeft;if(e!=this.lastScrollPosition){let t=this.$el.getElementsByClassName("vuetable-head-wrapper")[0];null!=t&&(t.scrollLeft=e),this.lastScrollPosition=e}},normalizeFields(){if(void 0===this.fields)return void this.warn('You need to provide "fields" prop.');this.tableFields=[];let t,e=this;this.fields.forEach((function(a,i){t="string"==typeof a?{name:a,title:e.setTitle(a),titleClass:"",dataClass:"",callback:null,visible:!0}:{name:a.name,width:a.width,title:void 0===a.title?e.setTitle(a.name):a.title,sortField:a.sortField,titleClass:void 0===a.titleClass?"":a.titleClass,dataClass:void 0===a.dataClass?"":a.dataClass,callback:void 0===a.callback?"":a.callback,visible:void 0===a.visible||a.visible},e.tableFields.push(t)}))},setData(t){if(null!=t){if(this.fireEvent("loading"),Array.isArray(t))return this.tableData=t,void this.fireEvent("loaded");this.tableData=this.getObjectValue(t,this.dataPath,null),this.tablePagination=this.getObjectValue(t,this.paginationPath,null),this.$nextTick((function(){this.fixHeader(),this.fireEvent("pagination-data",this.tablePagination),this.fireEvent("loaded")}))}},setTitle(t){return this.isSpecialField(t)?"":this.titleCase(t)},getTitle:t=>"function"==typeof t.title?t.title():void 0===t.title?t.name.replace("."," "):t.title,renderTitle(t){let e=this.getTitle(t);if(e.length>0&&this.isInCurrentSortGroup(t)||this.hasSortableIcon(t)){let a="opacity:".concat(this.sortIconOpacity(t),";position:relative;float:right");return e+" "+(this.showSortIcons?this.renderIconTag(["sort-icon",this.sortIcon(t)],'style="'.concat(a,'"')):"")}return e},renderSequence(t){return this.tablePagination?this.tablePagination.from+t:t},renderNormalField(t,e){return this.hasCallback(t)?this.callCallback(t,e):this.getObjectValue(e,t.name,"")},isSpecialField:t=>"__"===t.slice(0,2),titleCase:t=>t.replace(/\w+/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})),camelCase(t,e="_"){let a=this;return t.split(e).map((function(t){return a.titleCase(t)})).join("")},notIn:(t,e)=>-1===e.indexOf(t),loadData(t=this.loadSuccess,e=this.loadFailed){if(!this.isDataMode)return this.fireEvent("loading"),this.httpOptions.params=this.getAppendParams(this.getAllQueryParams()),this.fetch(this.apiUrl,this.httpOptions).then(t,e).catch(()=>e());this.callDataManager()},fetch(t,e){return this.httpFetch?this.httpFetch(t,e):l.a[this.httpMethod](t,e)},loadSuccess(t){this.fireEvent("load-success",t);let e=this.transform(t.data);this.tableData=this.getObjectValue(e,this.dataPath,null),this.tablePagination=this.getObjectValue(e,this.paginationPath,null),null===this.tablePagination&&this.warn('vuetable: pagination-path "'+this.paginationPath+'" not found. It looks like the data returned from the sever does not have pagination information or you may have set it incorrectly.\nYou can explicitly suppress this warning by setting pagination-path="".'),this.$nextTick((function(){this.fixHeader(),this.fireEvent("pagination-data",this.tablePagination),this.fireEvent("loaded")}))},fixHeader(){if(!this.isFixedHeader)return;let t=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=t&&(t.scrollHeight>t.clientHeight?this.scrollVisible=!0:this.scrollVisible=!1)},loadFailed(t){console.error("load-error",t),this.fireEvent("load-error",t),this.fireEvent("loaded")},transform(t){return this.parentFunctionExists("transform")?this.$parent.transform.call(this.$parent,t):t},parentFunctionExists(t){return""!==t&&"function"==typeof this.$parent[t]},callParentFunction(t,e,a=null){return this.parentFunctionExists(t)?this.$parent[t].call(this.$parent,e):a},fireEvent(t,e){this.$emit(this.eventPrefix+t,e)},warn(t){this.silent||console.warn(t)},getAllQueryParams(){let t={};return"function"==typeof this.queryParams?(t=this.queryParams(this.sortOrder,this.currentPage,this.perPage),"object"!=typeof t?{}:t):(t[this.queryParams.sort]=this.getSortParam(),t[this.queryParams.page]=this.currentPage,t[this.queryParams.perPage]=this.perPage,t)},getSortParam(){return this.sortOrder&&""!=this.sortOrder.field?"function"==typeof this.$parent.getSortParam?this.$parent.getSortParam.call(this.$parent,this.sortOrder):this.getDefaultSortParam():""},getDefaultSortParam(){let t="";for(let e=0;e<this.sortOrder.length;e++){t+=(void 0===this.sortOrder[e].sortField?this.sortOrder[e].field:this.sortOrder[e].sortField)+"|"+this.sortOrder[e].direction+(e+1<this.sortOrder.length?",":"")}return t},getAppendParams(t){for(let e in this.appendParams)t[e]=this.appendParams[e];return t},extractName:t=>t.split(":")[0].trim(),extractArgs:t=>t.split(":")[1],isSortable:t=>!(void 0===t.sortField),isInCurrentSortGroup(t){return!1!==this.currentSortOrderPosition(t)},hasSortableIcon(t){return this.isSortable(t)&&""!=this.css.sortableIcon},currentSortOrderPosition(t){if(!this.isSortable(t))return!1;for(let e=0;e<this.sortOrder.length;e++)if(this.fieldIsInSortOrderPosition(t,e))return e;return!1},fieldIsInSortOrderPosition(t,e){return this.sortOrder[e].field===t.name&&this.sortOrder[e].sortField===t.sortField},orderBy(t,e){if(!this.isSortable(t))return;let a=this.multiSortKey.toLowerCase()+"Key";this.multiSort&&e[a]?this.multiColumnSort(t):this.singleColumnSort(t),this.currentPage=1,(this.apiMode||this.dataManager)&&this.loadData()},multiColumnSort(t){let e=this.currentSortOrderPosition(t);!1===e?this.sortOrder.push({field:t.name,sortField:t.sortField,direction:"asc"}):"asc"===this.sortOrder[e].direction?this.sortOrder[e].direction="desc":this.sortOrder.splice(e,1)},singleColumnSort(t){0===this.sortOrder.length&&this.clearSortOrder(),this.sortOrder.splice(1),this.fieldIsInSortOrderPosition(t,0)?this.sortOrder[0].direction="asc"===this.sortOrder[0].direction?"desc":"asc":this.sortOrder[0].direction="asc",this.sortOrder[0].field=t.name,this.sortOrder[0].sortField=t.sortField},clearSortOrder(){this.sortOrder.push({field:"",sortField:"",direction:"asc"})},sortClass(t){let e="",a=this.currentSortOrderPosition(t);return!1!==a&&(e="asc"==this.sortOrder[a].direction?this.css.ascendingClass:this.css.descendingClass),e},sortIcon(t){let e=this.css.sortableIcon,a=this.currentSortOrderPosition(t);return!1!==a&&(e="asc"==this.sortOrder[a].direction?this.css.ascendingIcon:this.css.descendingIcon),e},sortIconOpacity(t){let e=.3,a=this.sortOrder.length;return 1-a*e<.3&&(e=.7/(a-1)),1-this.currentSortOrderPosition(t)*e},hasCallback:t=>!!t.callback,callCallback(t,e){if(!this.hasCallback(t))return;if("function"==typeof t.callback)return t.callback(this.getObjectValue(e,t.name));let a=t.callback.split("|"),i=a.shift();if("function"==typeof this.$parent[i]){let s=this.getObjectValue(e,t.name);return a.length>0?this.$parent[i].apply(this.$parent,[s].concat(a)):this.$parent[i].call(this.$parent,s)}return null},getObjectValue(t,e,a){a=void 0===a?null:a;let i=t;if(""!=e.trim()){e.split(".").forEach((function(t){i=null!==i&&void 0!==i[t]&&null!==i[t]?i[t]:a}))}return i},toggleCheckbox(t,e,a){let i=a.target.checked,s=this.trackBy;if(void 0===t[s])return void this.warn('__checkbox field: The "'+this.trackBy+'" field does not exist! Make sure the field you specify in "track-by" prop does exist.');let l=t[s];i?this.selectId(l):this.unselectId(l),this.$emit("vuetable:checkbox-toggled",i,t)},selectId(t){this.isSelectedRow(t)||this.selectedTo.push(t)},unselectId(t){this.selectedTo=this.selectedTo.filter((function(e){return e!==t}))},isSelectedRow(t){return this.selectedTo.indexOf(t)>=0},rowSelected(t,e){let a=t[this.trackBy];return this.isSelectedRow(a)},checkCheckboxesState(t){if(!this.tableData)return;let e=this,a=this.trackBy,i="th.vuetable-th-checkbox-"+a+" input[type=checkbox]",s=document.querySelectorAll(i);void 0===s.forEach&&(s.forEach=function(t){[].forEach.call(s,t)});let l=this.tableData.filter((function(t){return e.selectedTo.indexOf(t[a])>=0}));return l.length<=0?(s.forEach((function(t){t.indeterminate=!1})),!1):l.length<this.perPage?(s.forEach((function(t){t.indeterminate=!0})),!0):(s.forEach((function(t){t.indeterminate=!1})),!0)},toggleAllCheckboxes(t,e){let a=this,i=e.target.checked,s=this.trackBy;i?this.tableData.forEach((function(t){a.selectId(t[s])})):this.tableData.forEach((function(t){a.unselectId(t[s])})),this.$emit("vuetable:checkbox-toggled-all",i)},gotoPreviousPage(){this.currentPage>1&&(this.currentPage--,this.loadData())},gotoNextPage(){this.currentPage<this.tablePagination.last_page&&(this.currentPage++,this.loadData())},gotoPage(t){t!=this.currentPage&&t>0&&t<=this.tablePagination.last_page&&(this.currentPage=t,this.loadData())},isVisibleDetailRow(t){return this.visibleDetailRows.indexOf(t)>=0},showDetailRow(t){this.isVisibleDetailRow(t)||this.visibleDetailRows.push(t)},hideDetailRow(t){this.isVisibleDetailRow(t)&&this.visibleDetailRows.splice(this.visibleDetailRows.indexOf(t),1)},toggleDetailRow(t){this.isVisibleDetailRow(t)?this.hideDetailRow(t):this.showDetailRow(t)},showField(t){t<0||t>this.tableFields.length||(this.tableFields[t].visible=!0)},hideField(t){t<0||t>this.tableFields.length||(this.tableFields[t].visible=!1)},toggleField(t){t<0||t>this.tableFields.length||(this.tableFields[t].visible=!this.tableFields[t].visible)},renderIconTag(t,e=""){return void 0===this.css.renderIcon?'<i class="'.concat(t.join(" "),'" ').concat(e,"></i>"):this.css.renderIcon(t,e)},makePagination(t=null,e=null,a=null){return{total:t=null===t?this.dataTotal:t,per_page:e=null===e?this.perPage:e,current_page:a=null===a?this.currentPage:a,last_page:Math.ceil(t/e)||0,next_page_url:"",prev_page_url:"",from:(a-1)*e+1,to:Math.min(a*e,t)}},normalizeSortOrder(){this.sortOrder.forEach((function(t){t.sortField=t.sortField||t.field}))},callDataManager(){if(null!==this.dataManager||null!==this.data)return Array.isArray(this.data)?this.setData(this.data):(this.normalizeSortOrder(),this.setData(this.dataManager?this.dataManager(this.sortOrder,this.makePagination()):this.data))},onRowClass(t,e){if(""===this.rowClassCallback)return"function"==typeof this.rowClass?this.rowClass(t,e):this.rowClass;this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.')},onRowChanged(t){return this.fireEvent("row-changed",t),!0},onRowClicked(t,e){return this.$emit(this.eventPrefix+"row-clicked",t,e),!0},onRowDoubleClicked(t,e){this.$emit(this.eventPrefix+"row-dblclicked",t,e)},onDetailRowClick(t,e){this.$emit(this.eventPrefix+"detail-row-clicked",t,e)},onCellClicked(t,e,a){this.$emit(this.eventPrefix+"cell-clicked",t,e,a)},onCellDoubleClicked(t,e,a){this.$emit(this.eventPrefix+"cell-dblclicked",t,e,a)},onCellRightClicked(t,e,a){this.$emit(this.eventPrefix+"cell-rightclicked",t,e,a)},changePage(t){"prev"===t?this.gotoPreviousPage():"next"===t?this.gotoNextPage():this.gotoPage(t)},reload(){return this.loadData()},refresh(){return this.currentPage=1,this.loadData()},resetData(){this.tableData=null,this.tablePagination=null,this.fireEvent("data-reset")}},watch:{multiSort(t,e){!1===t&&this.sortOrder.length>1&&(this.sortOrder.splice(1),this.loadData())},apiUrl(t,e){this.reactiveApiUrl&&t!==e&&this.refresh()},data(t,e){this.setData(t)},tableHeight(t,e){this.fixHeader()}}},n=(a(116),a(1)),o=Object(n.a)(r,i,[],!1,null,"ec786f2c",null);o.options.__file="src/vue/Vuetable.vue";e.default=o.exports},44:function(t,e){}}]);
//# sourceMappingURL=vuetable.1d1a59c6f3bae537b270.js.map