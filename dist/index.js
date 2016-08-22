!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory(require("React"),require("ReactDOM"),require("numeral")):"function"==typeof define&&define.amd?define(["React","ReactDOM","numeral"],factory):"object"==typeof exports?exports.NumeralInput=factory(require("React"),require("ReactDOM"),require("numeral")):root.NumeralInput=factory(root.React,root.ReactDOM,root.numeral)}(this,function(__WEBPACK_EXTERNAL_MODULE_20__,__WEBPACK_EXTERNAL_MODULE_21__,__WEBPACK_EXTERNAL_MODULE_22__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";var _objectWithoutProperties=__webpack_require__(2)["default"],_extends=__webpack_require__(3)["default"],_interopRequireDefault=__webpack_require__(19)["default"];Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(20),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(21),_reactDom2=_interopRequireDefault(_reactDom),_numeral=__webpack_require__(22),_numeral2=_interopRequireDefault(_numeral),re=/[^0-9km,]+/,getCaretPosition=function(oField){var iCaretPos=0;return document.selection?(oField.focus(),oSel=document.selection.createRange(),oSel.moveStart("character",-oField.value.length),iCaretPos=oSel.text.length):(oField.selectionStart||"0"==oField.selectionStart)&&(iCaretPos=oField.selectionStart),iCaretPos},setCaretPosition=function(oField,index){oField.setSelectionRange?oField.setSelectionRange(index,index):(range=oField.createTextRange(),range.collapse(!0),range.moveEnd("character",index),range.moveStart("character",index),range.select())},NumeralInput=_react2["default"].createClass({displayName:"NumeralInput",propTypes:{onChange:_react2["default"].PropTypes.func,fmt:_react2["default"].PropTypes.string},getDefaultProps:function(){return{fmt:"0,0"}},formatPos:function(val,index){val=_numeral2["default"]().unformat(val),val=_numeral2["default"](val).format(this.props.fmt);var sub=val.substr(0,index-1),dotCount=sub.split(",").length,pos=index-dotCount;return 0>pos&&(pos=0),pos},focusOnChar:function(val,index){for(var formatVal=_numeral2["default"](val).format(this.props.fmt),dotCount=0,i=0,finalIndex=formatVal.length;i<formatVal.length;){var char=formatVal[i];if(i===index+dotCount){finalIndex=i;break}","===char&&dotCount++,i++}return finalIndex||(finalIndex=1),finalIndex},getInitialState:function(){return{inputStyle:this.props.inputStyle,placeholder:this.props.placeholder,value:this.getNumeralValue(this.props.value)}},getNumeralValue:function(val){return _numeral2["default"](val).format(this.props.fmt)},componentWillReceiveProps:function(nextProps){var _this=this;if(this.props.value!==nextProps.value){var val=nextProps.value,formatVal="";re.test(val)||(formatVal=this.getNumeralValue(val)),formatVal=this.getNumeralValue(val),this.setState({value:formatVal},function(){var node=_reactDom2["default"].findDOMNode(_this);setCaretPosition(node,_this.state.pos)})}},changeHandler:function(){var _this2=this,node=_reactDom2["default"].findDOMNode(this),pos=getCaretPosition(node),val=node.value;pos=this.formatPos(this.state.value,pos);var reTest=re.test(val);if(!reTest){val=_numeral2["default"](val).value();var oVal=_numeral2["default"](this.state.val);pos=(oVal+"").length<(val+"").length?this.focusOnChar(val,++pos):(oVal+"").length>(val+"").length?this.focusOnChar(val,--pos):this.focusOnChar(val,pos)}val=_numeral2["default"](val).value(),this.setState({pos:pos,value:val},function(){_this2.props.onChange&&_this2.props.onChange(val)})},render:function(){var _props=this.props,rest=(_props.fmt,_objectWithoutProperties(_props,["fmt"]));return _react2["default"].createElement("input",_extends({type:"text"},rest,{value:this.state.value,onChange:this.changeHandler}))}});exports["default"]=NumeralInput,module.exports=exports["default"]},function(module,exports){"use strict";exports["default"]=function(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target},exports.__esModule=!0},function(module,exports,__webpack_require__){"use strict";var _Object$assign=__webpack_require__(4)["default"];exports["default"]=_Object$assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},exports.__esModule=!0},function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(5),__esModule:!0}},function(module,exports,__webpack_require__){__webpack_require__(6),module.exports=__webpack_require__(9).Object.assign},function(module,exports,__webpack_require__){var $export=__webpack_require__(7);$export($export.S+$export.F,"Object",{assign:__webpack_require__(12)})},function(module,exports,__webpack_require__){var global=__webpack_require__(8),core=__webpack_require__(9),ctx=__webpack_require__(10),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)own=!IS_FORCED&&target&&key in target,own&&key in exports||(out=own?target[key]:source[key],exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(param){return this instanceof C?new C(param):C(param)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,IS_PROTO&&((exports[PROTOTYPE]||(exports[PROTOTYPE]={}))[key]=out))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,module.exports=$export},function(module,exports){var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},function(module,exports){var core=module.exports={version:"1.2.6"};"number"==typeof __e&&(__e=core)},function(module,exports,__webpack_require__){var aFunction=__webpack_require__(11);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},function(module,exports,__webpack_require__){var $=__webpack_require__(13),toObject=__webpack_require__(14),IObject=__webpack_require__(16);module.exports=__webpack_require__(18)(function(){var a=Object.assign,A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=a({},A)[S]||Object.keys(a({},B)).join("")!=K})?function(target,source){for(var T=toObject(target),$$=arguments,$$len=$$.length,index=1,getKeys=$.getKeys,getSymbols=$.getSymbols,isEnum=$.isEnum;$$len>index;)for(var key,S=IObject($$[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:Object.assign},function(module,exports){var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}},function(module,exports,__webpack_require__){var defined=__webpack_require__(15);module.exports=function(it){return Object(defined(it))}},function(module,exports){module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},function(module,exports,__webpack_require__){var cof=__webpack_require__(17);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},function(module,exports){"use strict";exports["default"]=function(obj){return obj&&obj.__esModule?obj:{"default":obj}},exports.__esModule=!0},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_20__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_21__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_22__}])});