import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import Keyboard from '../src/keyboard';
import TextInput from '../src/textInput';
import chai, {expect, should} from 'chai';



describe('handleAllLetters', ()=>{
  it('should add one letter to output string', () =>{

  });
  it('should add multiple letters correctly', () =>{

  });
  it('should add symbols correctly', () =>{

  });
});
describe('handleDelete', ()=>{
  it('should delete characters when cursor is at last position', () =>{

  });
  it('should delete characters when the cursor is located somewhere in the string', () =>{

  });

});
describe('handleShift', ()=>{
  it('should on first press return an all upper case keyboard', () =>{

  });
  it('should on re-press give you an all lower case keyboard', () =>{

  });
  it('should not fire when pressed when keyboard is showing symbols', () =>{

  });
});
describe('handleBack', ()=>{
  it('should on one press move the cursor one position back', () =>{

  });
  it('should not move the cursor past position 0', () =>{

  });
});
describe('handleForward', ()=>{
  it('should on one press move the cursor one position forward', () =>{

  });
  it('should not move the cursor beyond the last position', () =>{

  });
});
describe('handleDown', ()=>{
 it('should shows you the correct displayed text', () =>{

  });
});
describe('handleUp', ()=>{
  it('should shows you the correct displayed text', () =>{

  });
});
describe('paginate', ()=>{
  it('should return the right array when text < display area', () =>{

  });
  it('should return right array when text > display area', () =>{

  });
});
describe('client', () => {
  it('should generate the specified height and width', () => {

  });
  it('should fall back to defaults if no specified height or width', () => {

  });
  it('should show keyboard only when the textbox is selected', () => {

  });
})