import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import Keyboard from './keyboard';
import Scroll from './scroll'

class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      cursorPosition: 0,
      textArrayCursorYes: '|',
      textArrayCursorNo: ' ',
      text: '',
      selected: false,
      rows: this.props.rows || 4,
      columns: this.props.cols || 50,
      submitHandler: this.props.onSubmit || null,
      showScroll: false,
      toggleCursor: true
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        toggleCursor: !this.state.toggleCursor
      })
    }, 500)
  }

generateText() {
  var string = '';
  for(var i =0; i < this.state.textArrayCursorYes.length; i++) {
    if(this.state.textArrayCursorYes[i] !== '|') string += this.state.textArrayCursorYes[i];
  }
  return string;
}

handleAllLetters(value) {
  var newArrYes = this.state.textArrayCursorYes.slice(0, this.state.cursorPosition) + value + this.state.textArrayCursorYes.slice(this.state.cursorPosition);
  var newArrNo = this.state.textArrayCursorNo.slice(0, this.state.cursorPosition) + value + this.state.textArrayCursorNo.slice(this.state.cursorPosition);
  this.setState({
    textArrayCursorYes: newArrYes,
    textArrayCursorNo: newArrNo,
    cursorPosition: this.state.cursorPosition + 1,
    text: this.generateText()
  });
}

handleDelete() {
  var arr = this.state.textArrayCursorYes.slice(0, this.state.cursorPosition - 1) + this.state.textArrayCursorYes.slice(this.state.cursorPosition);
  var arr2 = this.state.textArrayCursorNo.slice(0, this.state.cursorPosition - 1) + this.state.textArrayCursorNo.slice(this.state.cursorPosition);
  
  this.setState({
    textArrayCursorYes: arr,
    textArrayCursorNo: arr2,
    cursorPosition: this.state.cursorPosition - 1
  });

}

handleForward() {
  var cp = this.state.cursorPosition;
  var s = this.state.textArrayCursorYes;
  var s2 = this.state.textArrayCursorNo;

  s = s.slice(0, cp) + s.slice(cp + 1, cp + 2) + s.slice(cp, cp + 1) + s.slice(cp + 2);
  s2 = s2.slice(0, cp) + s2.slice(cp + 1, cp + 2) + s2.slice(cp, cp + 1) + s2.slice(cp + 2);

  this.setState({
    textArrayCursorYes: s,
    textArrayCursorNo: s2,
    cursorPosition: this.state.cursorPosition + 1
  });
}

handleBack() {
var cp = this.state.cursorPosition;
var s = this.state.textArrayCursorYes;
var s2 = this.state.textArrayCursorNo;
console.log('s',s)
console.log('s2',s2)

s = s.slice(0, cp-1) + s.slice(cp, cp+1) + s.slice(cp-1, cp) + s.slice(cp+1);
s2 = s2.slice(0, cp - 1) + s2.slice(cp, cp + 1) + s2.slice(cp - 1, cp) + s2.slice(cp + 1);

this.setState({
  textArrayCursorYes : s,
  textArrayCursorNo: s2,
  cursorPosition: this.state.cursorPosition - 1
});
}

handleSubmit() {

}

handleUp() {

}

handleDown() {

}

paginate(s) {
  if(s.length <= this.state.columns) return [s];
  
  var array = [];
  var pointer1 = 0;
  var pointer2 = this.state.columns;
  var done = false;
  
  while(!done) {
    // get string from pointer 1 to pointer 2 
    var sub = s.slice(pointer1, pointer2);
    //check if it contains * ... if yes if asterisk is at last position then pointer2++
    if(sub.includes('|')) pointer2++;
    //push pointer 1 - pointer2 string to array
    array.push(s.slice(pointer1, pointer2));
    //move pointer 1 to pointer2
    pointer1 = pointer2;
    //check if pointer1 + cols is less than s length. If yes then pointer2 = length and done is true. Else pointer2 = pointer1 + cols
    if(pointer1 + this.state.columns < s.length) {
      pointer2 = pointer1 + this.state.columns;
    } else {
      pointer2 = s.length;
      done = true;
    }

  }
      
  if(s.slice(pointer1).length!== 0) array.push(s.slice(pointer1));
  return array;
}

  render() {
    var arrayCursorYes = this.paginate(this.state.textArrayCursorYes);
    // console.log('arrayCursorYes ', arrayCursorYes);
    var arrayCursorNo = this.paginate(this.state.textArrayCursorNo);
    // console.log('arrayCursorNo ', arrayCursorNo);
// if(array.length > rows) {
//   this.setState({
//     showScroll: true
//   });
// }
return(
    <View>
      <View style={{ transform: [{ translate: [0, 0.2, -2] }] }}>
        <Text>{this.state.toggleCursor ? this.state.textArrayCursorYes : this.state.textArrayCursorNo}</Text> 
        <Scroll handleUp={this.handleUp.bind(this)} handleDown={this.handleDown.bind(this)} />
      </View>
      <View>
        <Keyboard handleSubmit={this.handleSubmit.bind(this)} handleAllLetters={this.handleAllLetters.bind(this)} handleDelete={this.handleDelete.bind(this)} handleForward={this.handleForward.bind(this)} handleBack={this.handleBack.bind(this)} />
      </View>
    </View>);
  }
}

export default TextInput;