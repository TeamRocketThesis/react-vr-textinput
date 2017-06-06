import React from 'react';
import { AppRegistry, asset, Pano, Text, View} from 'react-vr';
import Keyboard from './src/keyboard';
export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Keyboard />
      </View>
    );
  }
};

AppRegistry.registerComponent('Example', () => Example);
