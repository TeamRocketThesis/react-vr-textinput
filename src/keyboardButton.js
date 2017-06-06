import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';

var styles = StyleSheet.create({
  text: {
    fontSize: 0.04,
    textAlign: 'center',
    color: '#ffffff',
    opacity: 3,
    fontFamily: "HelveticaNeue-Light", 
    fontWeight: 'normal',
  },
  button: {
    height: 0.15,
    padding: 0.05,
    borderWidth: 0.005,
    flex: 1,
    transform: [{translate: [-1,0,-1.5]}],
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    opacity: 0.5,
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