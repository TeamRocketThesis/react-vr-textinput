import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';

var styles = StyleSheet.create({
  text: {
    fontSize: 0.075,
    textAlign: 'center',
    color: '#f5f5f5',
    opacity: 1
  },
  button: {
    padding: 0.05,
    borderStyle: 'solid',
    borderColor: 'white',
    flex: 1,
    flexDirection: 'column',
    transform: [{translate: [0,0,-2]}],
    backgroundColor: 'black',
    opacity: .65,
  }
})

class KeyboardButton extends Component {
  render() {
    return (
        <VrButton style={styles.button}>
        <Text style={styles.text}>A</Text>
        </VrButton>  
    );
  }
}

export default KeyboardButton;