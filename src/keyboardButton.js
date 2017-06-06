import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';

var styles = StyleSheet.create({
  text: {
<<<<<<< HEAD
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
=======
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontSize = 0.2,
  },
  button: {
    borderWidth: 0.5,
    borderColor: '#A9A9A9',
>>>>>>> working on vrbutton for keyboard
  }
})

class KeyboardButton extends Component {
  render() {
    return (
<<<<<<< HEAD
        <VrButton style={styles.button}>
        <Text style={styles.text}>A</Text>
=======
        <VrButton styles={styles.button}>
          <Text style={styles.text}>{this.props.something}</Text>
>>>>>>> working on vrbutton for keyboard
        </VrButton>  
    );
  }
}

export default KeyboardButton;