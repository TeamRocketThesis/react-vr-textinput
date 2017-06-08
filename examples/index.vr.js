import React from 'react';
import { AppRegistry, asset, Pano, Text, View} from 'react-vr';
import Keyboard from '../src/keyboard';
import TextInput from '../src/textInput'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <TextInput rows={4} col={40}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Example', () => Example);
