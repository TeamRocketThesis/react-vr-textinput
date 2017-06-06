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

handleAllValues(value) {
  if(this.state.cursorPosition === this.state.textString.length + 1) {
    this.setState({
      textString: this.state.textString + value,
      cursorPosition: this.state.cursorPosition + 1
    });
  } else {
    this.setState({
      textString: this.state.textString.splice(this.state.cursorPosition, 0, value),
      cursorPosition: this.state.cursorPosition + 1
    });
  }
}

handleDelete() {
 
}

handleShift() {

}

handleSymbolSelector() {

}

handleBack() {

}

handleForward() {

}

handleSpacebar() {

}

handleSubmit() {

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
    numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return (
      <View>
      <View>
        {numberArray.map((number) => <KeyboardButton value={number} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
        <KeyboardButton value={'Delete'} clickHandler={this.handleDelete.bind(this)} isDisabled={false} />
      </View>
      <View>
        {layoutArray[0].map((value) => <KeyboardButton value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
      </View>
      <View>
        {layoutArray[1].map((value) => <KeyboardButton value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
      </View>
      <View>
        <KeyboardButton value={'Shift'} clickHandler={this.handleShift.bind(this)} isDisabled={this.state.isShiftSelected}/>
        {layoutArray[2].map((value) => <KeyboardButton value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
        <KeyboardButton value={this.state.isSymbolSelected ? layout.alphabet.displayValue : layout.symbol.displayValue} clickHandler={this.handleSymbolSelector.bind(this)} isDisabled={false} />
      </View>
      <View>
        <KeyboardButton value={'Back'} clickHandler={this.handleBack.bind(this)} isDisabled={false} />
        <KeyboardButton value={'Forward'} clickHandler={this.handleForward.bind(this)} isDisabled={false} />
        <KeyboardButton value={''} clickHandler={this.handleSpacebar.bind(this)} isDisabled={false} />
        <KeyboardButton value={'Submit'} clickHandler={this.handleSubmit.bind(this)} isDisabled={false} />
      </View>
      </View>
    );
  }
}

export default Keyboard;