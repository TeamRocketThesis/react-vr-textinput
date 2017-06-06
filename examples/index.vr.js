import React from 'react';
import { AppRegistry, asset, Pano, Text, View} from 'react-vr';
<<<<<<< HEAD
import Keyboard from '../src/keyboard';
=======
import Keyboard from './src/keyboard';
>>>>>>> working on vrbutton for keyboard
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
