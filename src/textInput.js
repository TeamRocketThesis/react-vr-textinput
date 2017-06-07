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
      textArrayCursorNo: [''],
      text: '',
      selected: false,
      rows: this.props.rows || 4,
      columns: this.props.cols || 50,
      submitHandler: this.props.onSubmit || null,
      showScroll
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
  this.setState()

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

paginate() {

}

  render() {
var array = this.paginate();
if(array.length > rows) {
  this.setState({
    showScroll: true
  });
}
return(<View>
  <View> {/* this view might need to be a VR button to handle focus / defocus */}
    <Text>{/* Need a way of showing the correct section of our paginated text*/}</Text>
    </View>

    <Scroll handleUp={this.handleUp.bind(this)} 
    handleDown={this.handleDown.bind(this)} />

    <Keyboard handleSubmit={this.handleSubmit.bind(this)} 
    handleAllLetters={this.handleAllLetters.bind(this)} 
    handleDelete={this.handleDelete.bind(this)} 
    handleForward={this.handleForward.bind(this)} 
    handleBack={this.handleBack.bind(this)} />

</View>);

  }
}

export default TextInput;