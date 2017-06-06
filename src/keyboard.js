import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import KeyboardButton from './keyboardButton';
import layout from './layout';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPosition: 0,
      textString: '',
      isShiftSelected: false,
      isSymbolSelected: false
    } 
  }
  
getLayout () {
  if(this.state.isSymbolSelected) return layout.symbol.layout; 
  else {
    if(! this.state.isShiftSelected) return layout.alphabet.layout; else {
      return layout.alphabet.layout.map(keyRow => keyRow.map(key => key.toUpperCase()));
    }
  }
}

  render() {
    var layoutArray = this.getLayout();
    return (
      <View>

      </View>
    );
  }
}

export default Keyboard;