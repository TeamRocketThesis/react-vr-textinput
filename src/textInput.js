import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import Keyboard from './keyboard';
import Scroll from './scroll'

class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      cursorPosition: '0',
      textArrayCursorYes: ['*'],
      textArrayCursorNo: [' '],
      text: '',
      selected: false,
      rows: this.props.rows || 4,
      columns: this.props.cols || 50,
      submitHandler: this.props.onSubmit || null,
      showScroll: false
    }
  }

generateText() {
  var string = '';
  for(var i =0; i < this.state.textArrayCursorYes.length; i++) {
    if(this.state.textArrayCursorYes[i] != '*') string += this.state.textArrayCursorYes[i];
  }
  return string;
}

handleAllLetters(value) {
  this.setState({
    textArrayCursorYes: this.state.textArrayCursorYes.splice(this.state.cursorPosition, 0, value),
    textArrayCursorNo: this.state.textArrayCursorNo.splice(this.state.cursorPosition, 0, value),
    cursorPosition: this.state.cursorPosition + 1,
    text: this.generateText()
  });
}

handleDelete() {

  this.setState({

    textArrayCursorYes: function(){
      var newArray = this.state.textArrayCursorYes.slice();
      newArray.splice(this.state.cursorPosition -1, 1, '*');
      newArray.splice(this.state.cursorPosition, 1);
      return newArray;
    }(),

    textArrayCursorNo: function() {
      var newArray = this.state.textArrayCursorNo.slice();
      newArray.splice(this.state.cursorPosition -1, 1, '*');
      newArray.splice(this.state.cursorPosition, 1);
      return newArray;
    }(),

    cursorPosition: this.state.cursorPosition - 1,

    text: this.generateText()

  });

}

handleForward() {

}

handleBack() {

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
    if(sub.includes('*')) pointer2 ++;
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
console.log('arrayCursorYes ', arrayCursorYes);
var arrayCursorNo = this.paginate(this.state.textArrayCursorNo);
console.log('arrayCursorNo ', arrayCursorNo);
// if(array.length > rows) {
//   this.setState({
//     showScroll: true
//   });
// }
return(<View>
  <View>
    <Text>{this.state.text}</Text>
    </View>
    <Scroll handleUp={this.handleUp.bind(this)} handleDown={this.handleDown.bind(this)} />
    <Keyboard handleSubmit={this.handleSubmit.bind(this)} handleAllLetters={this.handleAllLetters.bind(this)} handleDelete={this.handleDelete.bind(this)} handleForward={this.handleForward.bind(this)} handleBack={this.handleBack.bind(this)} />
</View>);
  }
}

export default TextInput;