import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text, Animated } from 'react-vr';
var AnimatedVrButton = Animated.createAnimatedComponent(VrButton);
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
  }
})
class KeyboardButton extends Component {
    constructor(props){
      super(props);
      this.state = {
        backgroundColor: '#0d0d0d',
        opacity: 0.5,
        fade: new Animated.Value(0.5),
        clicked: false
      }
    }
  fade() {
    console.log("HEY");
    this.setState({clicked: true},
    Animated.timing(this.state.fade, {   // and twirl
      toValue: 0,
      duration: 1000
    }),
    Animated.timing(this.state.fade, {
      toValue: 0.5,
      duration: 100
    }).start)
    this.setState({clicked:false});
  }
  render() {
    return (
      <AnimatedVrButton 
      onClick={this.props.isDisabled === false ? this.props.clickHandler.bind(this, this.props.value) : null}
      style={[styles.button, {backgroundColor: this.props.isDisabled === false? this.state.backgroundColor: 'red'}, {opacity: this.state.clicked === false? this.state.opacity:this.state.fade}]}
      onEnter={() => this.setState({backgroundColor: 'green'})}
      onExit={() => this.setState({backgroundColor: '#0d0d0d'})}
      >
        <Text style={styles.text} onClick={()=>this.fade()}>{this.props.value}</Text>
      </AnimatedVrButton>  
    );
  }
}

export default KeyboardButton;