import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import Keyboard from './keyboard';

class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      cursorPosition: '0',
      textArray: ['*'],
      text: '',
      selected: false,
      rows: this.props.rows || 4,
      columns: this.props.cols || 50,
      submitHandler: this.props.onSubmit || null
    }
  }

handleAllLetters(value) {

}

handleDelete() {

}

handleForward() {

}

handleBack() {

}

handleSubmit() {
  
}

paginate() {

}
  render() {
var array = this.paginate();
return(<View>
  <View> 
    <Text></Text>
    </View>
    <Scroll />
    <Keyboard />
</View>);

  }
}