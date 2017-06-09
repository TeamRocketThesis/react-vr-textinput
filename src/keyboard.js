import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import KeyboardButton from './keyboardButton';

import layout from './layout';

var styles = StyleSheet.create({
  container : {
  },
  numbers : {
  },
  row1 : {
  },
  row2 : {
  },
  row3 : {
  },
  bottom : {
    
  },
  row: {
    flexDirection: 'row'
  }
})


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
  // if(this.state.cursorPosition === this.state.textString.length + 1) {
  //   this.setState({
  //     textString: this.state.textString + value,
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // } else {
  //   this.setState({
  //     textString: this.state.textString.slice(0,this.state.cursorPosition) + value + this.state.textString.slice(this.state.cursorPosition),
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // }
  // console.log(this.state.textString);
  this.props.handleAllLetters(value);
}

handleDelete() {

  // if (this.state.cursorPosition === this.state.textString.length + 1) {
  //   this.setState({
  //     textString: this.state.textString.slice(0,this.state.cursorPosition - 1),
  //     cursorPosition: this.state.cursorPosition - 1
  //   });
  // } else {
  //   this.setState({
  //     textString: this.state.textString.slice(0, this.state.cursorPosition - 1) + this.state.textString.slice(this.state.cursorPosition),
  //     cursorPosition: this.state.cursorPosition
  //   });
  // }
  this.props.handleDelete();
}

handleShift() {

  
  this.setState({
    isShiftSelected: !this.state.isShiftSelected
  });
}

handleSymbolSelector() {
  this.setState({
    isSymbolSelected: !this.state.isSymbolSelected,
    isShiftSelected: false
  });
}

handleBack() {
  // if (!this.state.cursorPosition === 0) {
  //   this.setState({
  //     cursorPosition: this.state.cursorPosition - 1
  //   });
  // }
  this.props.handleBack();
}

handleForward() {
  // if (!this.state.cursorPosition === this.state.textString.length) {
  //   this.setState({
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // }
  this.props.handleForward();
}

handleSpacebar() {
  // if (this.state.cursorPosition === this.state.textString.length + 1) {
  //   this.setState({
  //     textString: this.state.textString + ' ',
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // } else {
  //   this.setState({
  //     textString: this.state.textString.slice(0, this.state.cursorPosition) + ' ' + this.state.textString.slice(this.state.cursorPosition),
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // }
  this.props.handleSpace();
}

handleReturn() {
  // if (this.state.cursorPosition === this.state.textString.length + 1) {
  //   this.setState({
  //     textString: this.state.textString + '\n',
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // } else {
  //   this.setState({
  //     textString: this.state.textString.slice(0, this.state.cursorPosition) + '\n' + this.state.textString.slice(this.state.cursorPosition),
  //     cursorPosition: this.state.cursorPosition + 1
  //   });
  // }
  this.props.handleReturn();
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
      <View style={styles.row}>
        {numberArray.map((number) => <KeyboardButton this={this} value={number} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
        <KeyboardButton value={'Delete'} clickHandler={this.handleDelete.bind(this)} isDisabled={false} />
      </View>
      <View style={styles.row}>
        {layoutArray[0].map((value) => <KeyboardButton value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
      </View>
      <View style={styles.row}>
        {layoutArray[1].map((value) => <KeyboardButton value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
      </View>
      <View style={styles.row}>
        <KeyboardButton value={'Shift'} clickHandler={this.handleShift.bind(this)} isDisabled={this.state.isSymbolSelected}/>
        {layoutArray[2].map((value) => <KeyboardButton value={value} clickHandler={this.handleAllValues.bind(this)} isDisabled={false}/> )}
        <KeyboardButton value={this.state.isSymbolSelected ? layout.alphabet.displayValue : layout.symbol.displayValue} clickHandler={this.handleSymbolSelector.bind(this)} isDisabled={false} />
      </View>
      <View style={styles.row}>
        <KeyboardButton value={'<-'} clickHandler={this.handleBack.bind(this)} isDisabled={false} />
        <KeyboardButton value={'->'} clickHandler={this.handleForward.bind(this)} isDisabled={false} />
        <KeyboardButton value={' '} clickHandler={this.handleSpacebar.bind(this)} isDisabled={false} />
        <KeyboardButton value={'Submit'} clickHandler={this.handleReturn.bind(this)} isDisabled={false} />
      </View>
    </View>
    );
  }
}

export default Keyboard;