import React from 'react';
import { AppRegistry, asset, Pano, Text, View} from 'react-vr';
import Keyboard from '../src/keyboard';
import TextInput2 from '../src/textInput2'

export default class Example extends React.Component {
  
  handleBoss(string) {
    console.log('yo this is my string', string)
  }
  
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <TextInput2 onSubmit={this.handleBoss.bind(this)} rows={2} cols={10}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Example', () => Example);
