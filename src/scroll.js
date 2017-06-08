import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';

class Scroll extends Component {
  constructor(props) {
    super(props);
  }
componentWillMount(){
  this.props.coordx;
  this.props.coordy;
  this.props.coordx;
}
  render() {
    console.log("YO YO", this.props.coords);
    return(<View>
      <VrButton onClick = {this.props.handleUp.bind(this)}>
        <Text> ^ </Text>
        </VrButton>
        <VrButton onClick = {this.props.handleDown.bind(this)}>
          <Text> v </Text>
          </VrButton>
     </View>);
  }

}

export default Scroll;