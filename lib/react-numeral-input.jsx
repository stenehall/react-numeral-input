import React from 'react';
import ReactDOM from 'react-dom';

import numeral from 'numeral';

const re = /[^0-9km,]+/;
const fmt = '0,0';

const getCaretPosition = function(oField) {
  let iCaretPos = 0;
  if(document.selection){
    oField.focus();
    oSel = document.selection.createRange();
    oSel.moveStart( 'character', -oField.value.length)
    iCaretPos = oSel.text.length;
  }else if (oField.selectionStart || oField.selectionStart == '0') {
    iCaretPos = oField.selectionStart;
  }
  return iCaretPos;
};

const setCaretPosition = function(oField, index) {
  if (oField.setSelectionRange) {
    oField.setSelectionRange(index, index);
  } else {
    range = oField.createTextRange();
    range.collapse(true);
    range.moveEnd('character', index);
    range.moveStart('character', index);
    range.select();
  }
};

const NumeralInput = React.createClass({
  displayName: 'NumeralInput',
  propTypes: {
    onChange: React.PropTypes.func
  },
  formatPos: function(val, index) {
    //unformat
    val = numeral().unformat(val);
    //format
    val = numeral(val).format(fmt);
    let sub = val.substr(0, index-1);
    let dotCount  = sub.split(',').length;
    let pos = index-dotCount;
    if (pos<0) {
      pos = 0;
    }
    return pos;
  },
  focusOnChar: function(val, index) {
    let formatVal = numeral(val).format(fmt);
    let dotCount=0;

    let i = 0;
    let finalIndex = formatVal.length;
    while( i < formatVal.length) {
      let char = formatVal[i];
      if( i === (index + dotCount)) {
        finalIndex = i;
        break
      }
      if( char === ','){
        dotCount++;
      }
      i++;
    }
    if (!finalIndex) {
      finalIndex = 1;
    }
    return finalIndex;
  },
  getInitialState: function() {
    return {
      inputStyle: this.props.inputStyle,
      placeholder: this.props.placeholder,
      value: this.getNumeralValue(this.props.value)
    };
  },
  getNumeralValue: function(val) {
    return numeral(val).format(fmt);
  },
  componentWillReceiveProps: function(nextProps) {
    if( this.props.value === nextProps.value){
      return;
    }
    let val = nextProps.value;
    let formatVal = '';

    if (!re.test(val)) {
      formatVal = this.getNumeralValue(val);
    }
    formatVal = this.getNumeralValue(val);

    this.setState( {
      value: formatVal
    }, () => {
      const node = ReactDOM.findDOMNode(this);
      setCaretPosition(node, this.state.pos);
    });
  },
  changeHandler: function() {
    const node = ReactDOM.findDOMNode(this);
    let pos = getCaretPosition(node);
    let val = node.value;
    pos = this.formatPos(this.state.value, pos);


    //1,000,000 -> 1000000
    const reTest = re.test(val);
    if (!reTest) {
      val = numeral(val).value();
      let oVal = numeral(this.state.val);
      if ((oVal+'').length < (val+'').length) {
        pos = this.focusOnChar(val, ++pos);
      } else if ((oVal+'').length > (val+'').length) {
        pos = this.focusOnChar(val, --pos);
      } else {
        pos = this.focusOnChar(val, pos);
      }
    }
    val = numeral(val).value();

    //parentNode onChange function
    this.setState( {
      pos: pos,
      value: val
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(val);
      }
    })
  },
  render: function() {
    return (
      <input type="text" {...this.props}
        value={this.state.value}
        onChange = {this.changeHandler}
      />
    );
  }
});

export default NumeralInput;
