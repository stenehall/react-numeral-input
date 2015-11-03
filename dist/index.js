!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory(require("React"),require("numeral")):"function"==typeof define&&define.amd?define(["React","numeral"],factory):"object"==typeof exports?exports.NumeralInput=factory(require("React"),require("numeral")):root.NumeralInput=factory(root.React,root.numeral)}(this,function(__WEBPACK_EXTERNAL_MODULE_17__,__WEBPACK_EXTERNAL_MODULE_18__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";var _extends=__webpack_require__(2)["default"],_interopRequireDefault=__webpack_require__(16)["default"];Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(17),_react2=_interopRequireDefault(_react),_numeral=__webpack_require__(18),_numeral2=_interopRequireDefault(_numeral),re=/[^0-9km,]+/,getCaretPosition=function(oField){var iCaretPos=0;return document.selection?(oField.focus(),oSel=document.selection.createRange(),oSel.moveStart("character",-oField.value.length),iCaretPos=oSel.text.length):(oField.selectionStart||"0"==oField.selectionStart)&&(iCaretPos=oField.selectionStart),iCaretPos},setCaretPosition=function(oField,index){oField.setSelectionRange?oField.setSelectionRange(index,index):(range=oField.createTextRange(),range.collapse(!0),range.moveEnd("character",index),range.moveStart("character",index),range.select())},NumeralInput=_react2["default"].createClass({displayName:"NumeralInput",propTypes:{onChange:_react2["default"].PropTypes.func,fmt:_react2["default"].PropTypes.string},getDefaultProps:function(){return{fmt:"0,0"}},formatPos:function(val,index){val=_numeral2["default"]().unformat(val),val=_numeral2["default"](val).format(this.props.fmt);var sub=val.substr(0,index-1),dotCount=sub.split(",").length,pos=index-dotCount;return 0>pos&&(pos=0),pos},focusOnChar:function(val,index){for(var formatVal=_numeral2["default"](val).format(this.props.fmt),dotCount=0,i=0,finalIndex=formatVal.length;i<formatVal.length;){var char=formatVal[i];if(i===index+dotCount){finalIndex=i;break}","===char&&dotCount++,i++}return finalIndex||(finalIndex=1),finalIndex},getInitialState:function(){return{inputStyle:this.props.inputStyle,placeholder:this.props.placeholder,value:this.getNumeralValue(this.props.value)}},getNumeralValue:function(val){return _numeral2["default"](val).format(this.props.fmt)},componentWillReceiveProps:function(nextProps){var _this=this;if(this.props.value!==nextProps.value){var val=nextProps.value,formatVal="";re.test(val)||(formatVal=this.getNumeralValue(val)),formatVal=this.getNumeralValue(val),this.setState({value:formatVal},function(){var node=_this.getDOMNode();setCaretPosition(node,_this.state.pos)})}},changeHandler:function(){var _this2=this,node=this.getDOMNode(),pos=getCaretPosition(node),val=node.value;pos=this.formatPos(this.state.value,pos);var reTest=re.test(val);if(!reTest){val=_numeral2["default"](val).value();var oVal=_numeral2["default"](this.state.val);pos=(oVal+"").length<(val+"").length?this.focusOnChar(val,++pos):(oVal+"").length>(val+"").length?this.focusOnChar(val,--pos):this.focusOnChar(val,pos)}val=_numeral2["default"](val).value(),this.setState({pos:pos,value:val},function(){_this2.props.onChange&&_this2.props.onChange(val)})},render:function(){return _react2["default"].createElement("input",_extends({type:"text"},this.props,{value:this.state.value,onChange:this.changeHandler}))}});exports["default"]=NumeralInput,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";var _Object$assign=__webpack_require__(3)["default"];exports["default"]=_Object$assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},exports.__esModule=!0},function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(4),__esModule:!0}},function(module,exports,__webpack_require__){__webpack_require__(5),module.exports=__webpack_require__(8).Object.assign},function(module,exports,__webpack_require__){var $def=__webpack_require__(6);$def($def.S+$def.F,"Object",{assign:__webpack_require__(9)})},function(module,exports,__webpack_require__){var global=__webpack_require__(7),core=__webpack_require__(8),PROTOTYPE="prototype",ctx=function(fn,that){return function(){return fn.apply(that,arguments)}},$def=function(type,name,source){var key,own,out,exp,isGlobal=type&$def.G,isProto=type&$def.P,target=isGlobal?global:type&$def.S?global[name]:(global[name]||{})[PROTOTYPE],exports=isGlobal?core:core[name]||(core[name]={});isGlobal&&(source=name);for(key in source)own=!(type&$def.F)&&target&&key in target,own&&key in exports||(out=own?target[key]:source[key],isGlobal&&"function"!=typeof target[key]?exp=source[key]:type&$def.B&&own?exp=ctx(out,global):type&$def.W&&target[key]==out?!function(C){exp=function(param){return this instanceof C?new C(param):C(param)},exp[PROTOTYPE]=C[PROTOTYPE]}(out):exp=isProto&&"function"==typeof out?ctx(Function.call,out):out,exports[key]=exp,isProto&&((exports[PROTOTYPE]||(exports[PROTOTYPE]={}))[key]=out))};$def.F=1,$def.G=2,$def.S=4,$def.P=8,$def.B=16,$def.W=32,module.exports=$def},function(module,exports){var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},function(module,exports){var core=module.exports={version:"1.2.5"};"number"==typeof __e&&(__e=core)},function(module,exports,__webpack_require__){var $=__webpack_require__(10),toObject=__webpack_require__(11),IObject=__webpack_require__(13);module.exports=__webpack_require__(15)(function(){var a=Object.assign,A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=a({},A)[S]||Object.keys(a({},B)).join("")!=K})?function(target,source){for(var T=toObject(target),$$=arguments,$$len=$$.length,index=1,getKeys=$.getKeys,getSymbols=$.getSymbols,isEnum=$.isEnum;$$len>index;)for(var key,S=IObject($$[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:Object.assign},function(module,exports){var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}},function(module,exports,__webpack_require__){var defined=__webpack_require__(12);module.exports=function(it){return Object(defined(it))}},function(module,exports){module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},function(module,exports,__webpack_require__){var cof=__webpack_require__(14);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},function(module,exports){"use strict";exports["default"]=function(obj){return obj&&obj.__esModule?obj:{"default":obj}},exports.__esModule=!0},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_17__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_18__}])});