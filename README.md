# react-vr-textinput

> Text Input and Virtual Keyboard for React VR

## Team

  - Arseniy Kotov
  - Sim Kang
  - Rishi Raje

## Installation 

```
npm install react-vr-textinput
```

## Usage

> import TextInput from 'react-vr-textinput'

  - Exposed Props
    1. onSubmit() - provide a call back function that will accept the text from the text input component
    2. rows - provide the number of lines you wish the text box to be
    3. cols - provide the number of columns you wish the tex box to be
    4. x - coordinate for positioniong of all 3 elements (all related off the placement of the text input area)
    5. y - coordinate for above
    6. z - coordinate for above
    7. textColor - color for the text inside the input field
    8. backgroundColor - color for the background of the input field
    9. keyboardColor - color for keys on keyboard
    10. keyboardOnHover - color for the keys when the mouse or vr controller hover over.
    
    If not specified, all props except onSubmit will use default values.
  
  - Click the TextBox Component to activate it.
  - When the user is finished, the keyboard will hide itself after the submit button has been pressed.
  

## Sample code 

The following example palces the textInput inside the View Component. Note the props that can be passed in. Beyond these, the text input box can be fully customized by directly accessinf the component source code.

```js
import React from 'react';
import {View} from 'react-vr';
import TextInput from 'react-vr-textinput'

export default class Example extends React.Component {

  constructor(props) {
    super(props);
  }  
  
  submitHandler(string) {
    console.log('the text received by the submitHandler is ' + string);
  }
   
  render() {
    return (
      <View>
        <TextInput onSubmit={this.submitHandler.bind(this)} rows={2} 
        cols={20} x={-1} y={0.2} z={-1.5} textColor={'white'} backgroundColor={'grey'} keyboardColor={null} keyboardOnHover={null}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Example', () => Example);

```

## Requirements

> React VR

## Current Issues

- This module is fully functional. Our next goal is to refactor for speed and also further enhance customizability through providing users even more props. We are also working on adding auto-complete support for faster typing. This will be an optional component that users can select to enable with their text input box and virtual keyboard. Please feel free to ask for additional functionality and we will try to add features as soon as possible.

## Contributing

  - Fork the repository.
  - npm install
  - Create a pull request
  - Provide info on changes/updates on pull request

## Tips
  - Any additional styling options can be applied to the component. Remember that rotate can be used to help place the entire component anywhere in 3D space. 
  - Scroll keys show after only if the number of typed in rows exceeds the number of rows specified for the text box
  - The cursor can be moved via forward and backward keys.
