import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';

var styles = StyleSheet.create({
  text: {
    fontSize: 0.075,
    textAlign: 'center',
    color: '#ffffff',
    opacity: 3
  },
  button: {
    padding: 0.05,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 0.005,
    flex: 1,
    transform: [{translate: [-.5,0,-2]}],
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 0.2,
    opacity: .7
  }
})

class KeyboardButton extends Component {
  render() {
    return (
      <VrButton onClick={this.props.clickHandler.bind(this, this.props.value)} style={styles.button}>
          <Text style={styles.text}>{this.props.value}</Text>
        </VrButton>  
    );
  }
}

export default KeyboardButton;