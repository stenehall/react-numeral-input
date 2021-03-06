var React = require('react');
var ReactDOM = require('react-dom');
var numeral = require('numeral');
var NumeralInput = React.createFactory(require('../lib'));
/* jshint undef:false */
var Forms = React.createClass({
  getInitialState: function(){
    return {
      numeralVal: 1000000,
      numeralVal2: 2000000
    };
  },
  onChange: function(val){
    this.setState({numeralVal: val})
  },
  onChange2: function(val){
    this.setState({numeralVal2: val})
  },
  render: function(){
    return React.DOM.div( {},
      NumeralInput({
        value: this.state.numeralVal,
        className: "form-control input-lg",
        placeholder: "feed me number",
        onChange:this.onChange
      }),
      NumeralInput({
        value: this.state.numeralVal2,
        className: "form-control input-lg",
        placeholder: "feed me number",
        onChange:this.onChange2
      })
    )
  }
});
//React.render(React.createElement(ReactNumeralInput), document.getElementById('main'));
ReactDOM.render( React.createElement(Forms) , document.querySelector('#app'));
