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
    alignItems: 'center',
    opacity: 0.5,
  }
})
class KeyboardButton extends Component {
    constructor(props){
      super(props);
      this.state = {
        backgroundColor: '#0d0d0d'
      }
    }
  render() {
    return (
      <VrButton 
      onClick={this.props.isDisabled === false ? this.props.clickHandler.bind(this, this.props.value) : null}
      style={[styles.button, {backgroundColor: this.state.backgroundColor}]}
      onEnter={() => this.setState({backgroundColor: 'red'})}
      onExit={() => this.setState({backgroundColor: '#0d0d0d'})}
      >
        <Text style={styles.text}>{this.props.value}</Text>
      </VrButton>  
    );
  }
}

export default KeyboardButton;