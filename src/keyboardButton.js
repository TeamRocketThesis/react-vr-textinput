import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';

var styles = StyleSheet.create({
  text: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontSize = 0.2,
  },
  button: {
    borderWidth: 0.5,
    borderColor: '#A9A9A9',
  }
})

class KeyboardButton extends Component {
  render() {
    return (
        <VrButton styles={styles.button}>
          <Text style={styles.text}>{this.props.something}</Text>
        </VrButton>  
    );
  }
}

export default KeyboardButton;