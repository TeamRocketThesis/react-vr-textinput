import React, { Component } from 'react';
import { View, VrButton, StyleSheet, Text } from 'react-vr';
import Keyboard from './keyboard';
import Scroll from './scroll'

class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      cursorPosition: 0,
      textArrayCursorYes: '|',
      textArrayCursorNo: ' ',
      text: '',
      selected: false,
      rows: this.props.rows || 4,
      columns: this.props.cols || 50,
      submitHandler: this.props.onSubmit || null,
      showScroll: false,
      toggleCursor: true,
      x: -1,
      y: 0.2,
      z: -1.5,
      pages : 0,
      start : 0,
      end: (this.props.rows || 4) * (this.props.cols || 50),
      focus: false
    }
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       toggleCursor: !this.state.toggleCursor
  //     })
  //   }, 500)
  // }
  focus() {
    this.setState({focus: true});
  }
  generateText() {
    var string = '';
    for(var i =0; i < this.state.textArrayCursorYes.length; i++) {
      if(this.state.textArrayCursorYes[i] !== '|') string += this.state.textArrayCursorYes[i];
    }
    return string;
  }

  handleSpace() {
    var newArrYes = this.state.textArrayCursorYes.slice(0, this.state.cursorPosition) + ' ' + this.state.textArrayCursorYes.slice(this.state.cursorPosition);
    var newArrNo = this.state.textArrayCursorNo.slice(0, this.state.cursorPosition) + ' ' + this.state.textArrayCursorNo.slice(this.state.cursorPosition);
    this.setState({
      textArrayCursorYes: newArrYes,
      textArrayCursorNo: newArrNo,
      cursorPosition: this.state.cursorPosition + 1,
      text: this.generateText()
    }, () => {
      this.handleCursorFollow.bind(this)();
    });
  }

  handleReturn() {
    // var me = this;
    // if(this.state.cursorPosition + 1 + this.state.columns*(this.state.returnCount +1) > this.state.end) var start = this.state.start + this.state.columns; else start = this.state.start;
    // if(this.state.cursorPosition + 1 + this.state.columns*(this.state.returnCount +1) > this.state.end) var end = this.state.end + this.state.columns; else end = this.state.end;
    // console.log('calculated start and end ', start, end);

    var newArrYes = this.state.textArrayCursorYes.slice(0, this.state.cursorPosition) + '\n' + this.state.textArrayCursorYes.slice(this.state.cursorPosition);
    var newArrNo = this.state.textArrayCursorNo.slice(0, this.state.cursorPosition) + '\n' + this.state.textArrayCursorNo.slice(this.state.cursorPosition);
    this.setState({
      textArrayCursorYes: newArrYes,
      textArrayCursorNo: newArrNo,
      cursorPosition: this.state.cursorPosition + 1,
      text: this.generateText()
    }, () => {
      // console.log('this.state.start ', this.state.start);
      // console.log('this.state.end ', this.state.end);
      this.handleCursorFollow.bind(this)();
    });
  }

  handleAllLetters(value) {
    var newArrYes = this.state.textArrayCursorYes.slice(0, this.state.cursorPosition) + value + this.state.textArrayCursorYes.slice(this.state.cursorPosition);
    var newArrNo = this.state.textArrayCursorNo.slice(0, this.state.cursorPosition) + value + this.state.textArrayCursorNo.slice(this.state.cursorPosition);
    this.setState({
      textArrayCursorYes: newArrYes,
      textArrayCursorNo: newArrNo,
      cursorPosition: this.state.cursorPosition + 1,
      text: this.generateText()
    }, () => {
      this.handleCursorFollow.bind(this)();
    });
  }

  handleDelete() {
    var arr = this.state.textArrayCursorYes.slice(0, this.state.cursorPosition - 1) + this.state.textArrayCursorYes.slice(this.state.cursorPosition);
    var arr2 = this.state.textArrayCursorNo.slice(0, this.state.cursorPosition - 1) + this.state.textArrayCursorNo.slice(this.state.cursorPosition);

    this.setState({
      textArrayCursorYes: arr,
      textArrayCursorNo: arr2,
      cursorPosition: this.state.cursorPosition - 1
    }, () => {
      // this.handleCursorFollow.bind(this)();
      if (this.state.textArrayCursorYes.length > this.state.rows * this.state.columns) {
        // console.log('total space, LENGTH , start, end', this.state.rows*this.state.columns, this.state.textArrayCursorYes.length, this.state.start, this.state.end);
        if ((this.state.cursorPosition + 1) % this.state.columns === 0) {
          // console.log('CURSOR AT SPOT ', this.state.cursorPosition);
          // console.log('start, end ', this.state.start, this.state.end);
          this.setState({
            start: this.state.start - this.state.columns,
            end: this.state.end - this.state.columns
          });
        }
      } else {
        this.setState({
          start: 0,
          end: (this.props.rows || 4) * (this.props.cols || 50)
        })
      }
    });

  }

  handleForward() {
    if (this.state.cursorPosition < this.state.textArrayCursorYes.length - 1) {
      var cp = this.state.cursorPosition;
      var s = this.state.textArrayCursorYes;
      var s2 = this.state.textArrayCursorNo;

      s = s.slice(0, cp) + s.slice(cp + 1, cp + 2) + s.slice(cp, cp + 1) + s.slice(cp + 2);
      s2 = s2.slice(0, cp) + s2.slice(cp + 1, cp + 2) + s2.slice(cp, cp + 1) + s2.slice(cp + 2);

      this.setState({
        textArrayCursorYes: s,
        textArrayCursorNo: s2,
        cursorPosition: this.state.cursorPosition + 1
      }, () => {
        // this.handleCursorFollow.bind(this)();
        if (this.state.cursorPosition > this.state.rows * this.state.columns) {
          // console.log('total space, LENGTH , start, end', this.state.rows * this.state.columns, this.state.textArrayCursorYes.length, this.state.start, this.state.end);
          // console.log('CP ', this.state.cursorPosition);
          if ((this.state.cursorPosition - 1) % this.state.columns === 0) {
            // console.log('CURSOR AT SPOT ', this.state.cursorPosition);
            // console.log('start, end ', this.state.start, this.state.end);
            this.setState({
              start: this.state.start + this.state.columns,
              end: this.state.end + this.state.columns
            });
          }
        } else {
          this.setState({
            start: 0,
            end: (this.props.rows || 4) * (this.props.cols || 50)
          })
        }
      });
    }
  }

  handleBack() {

    if (this.state.cursorPosition !== 0) {
      var cp = this.state.cursorPosition;
      var s = this.state.textArrayCursorYes;
      var s2 = this.state.textArrayCursorNo;
      // console.log('s',s)
      // console.log('s2',s2)

      s = s.slice(0, cp-1) + s.slice(cp, cp+1) + s.slice(cp-1, cp) + s.slice(cp+1);
      s2 = s2.slice(0, cp - 1) + s2.slice(cp, cp + 1) + s2.slice(cp - 1, cp) + s2.slice(cp + 1);

      this.setState({
        textArrayCursorYes : s,
        textArrayCursorNo: s2,
        cursorPosition: this.state.cursorPosition - 1
      }, () => {
        // this.handleCursorFollow.bind(this)();
        if (this.state.cursorPosition > this.state.rows * this.state.columns) {
          // console.log('total space, LENGTH , start, end', this.state.rows * this.state.columns, this.state.textArrayCursorYes.length, this.state.start, this.state.end);
          if ((this.state.cursorPosition + 1) % this.state.columns === 0) {
            // console.log('CURSOR AT SPOT ', this.state.cursorPosition);
            // console.log('start, end ', this.state.start, this.state.end);
            this.setState({
              start: this.state.start - this.state.columns,
              end: this.state.end - this.state.columns
            });
          }
        } else {
          this.setState({
            start: 0,
            end: (this.props.rows || 4) * (this.props.cols || 50)
          })
        }
      });
    }
  }

  handleSubmit() {

  }

  handleUp() {
    if(this.state.start!== 0) {
    if (this.state.pages !== 0) {
      var pages = this.state.pages - 1;
      var start = this.state.start - this.state.columns;
      var end = this.state.end - this.state.columns;
      this.setState({
        pages: pages,
        start: start,
        end : end
      })
    } 
    }
  }

  handleDown() {
    if(this.state.end < this.state.textArrayCursorYes.length) {
    var pages = this.state.pages + 1;
    var start = this.state.start + this.state.columns;
    var end = this.state.end + this.state.columns;
    this.setState({
      pages: pages,
      start: start,
      end: end
    })
    }
  }


  paginate(s) {

    if(s.length <= this.state.columns) return [s];

    var array = [];
    var pointer1 = 0;
    var pointer2 = this.state.columns;
    var done = false;

    while(!done) {
      // get string from pointer 1 to pointer 2 
      var sub = s.slice(pointer1, pointer2);
      // if(sub.includes(' ')&&
      //   s[pointer2] !== ' '&&
      //   sub[sub.length - 1] !== ' '&&
      //   sub[sub.length - 1] !== '|') {

      //   //move pointer 2 to after the last space in the substring and chop off there 
      //   for(var i = sub.length-1; i>=0; i--) {
      //     if(sub[i] === ' ') {
      //       pointer2 = i+1;
      //       break;
      //     }
      //   }
      //   //push to array
      //   array.push(s.slice(pointer1, pointer2));
      //   //move pointer 1 to post pointer2
      //   pointer1 = pointer2;
      //   //move pointer2 appropriately 
      //   if(pointer1 + this.state.columns < s.length) {
      //   pointer2 = pointer1 + this.state.columns;
      //   } else {
      //   pointer2 = s.length;
      //   done = true;
      //  }
      //  continue;
      // }
      //check if it contains * ... if yes if asterisk is at last position then pointer2++
      if(sub.includes('|')) pointer2++;

     
      array.push(s.slice(pointer1, pointer2));
      //move pointer 1 to pointer2
      pointer1 = pointer2;
      //check if pointer1 + cols is less than s length. If yes then pointer2 = length and done is true. Else pointer2 = pointer1 + cols
      if(pointer1 + this.state.columns < s.length) {
        pointer2 = pointer1 + this.state.columns;
      } else {
        pointer2 = s.length;
        done = true;
      }

    }
      
    if(s.slice(pointer1).length!== 0) array.push(s.slice(pointer1));
    return array;
  }

  handleCursorFollow() {

    if (this.state.cursorPosition > this.state.end) {
      var start = this.state.start;
      var end = this.state.end;
      var pages = this.state.pages;
      while (end <= this.state.cursorPosition) {
        pages = pages + 1;
        start = start + this.state.columns;
        end = end + this.state.columns;
      }
    } else if (this.state.cursorPosition < this.state.start) {
      var start = this.state.start;
      var end = this.state.end;
      var pages = this.state.pages;
      while (start  >= this.state.cursorPosition) {
        pages = pages - 1;
        start = start - this.state.columns;
        end = end - this.state.columns;
      }
    } else {
      var pages = this.state.pages;
      start = this.state.start;
      end = this.state.end;
    }

    this.setState({
      start: start,
      end: end,
      pages: pages
    })

  }

  render() {
    var arrayCursorYes = this.paginate(this.state.textArrayCursorYes);
    var arrayCursorNo = this.paginate(this.state.textArrayCursorNo);
    var displayString = '';
    var displayArray = this.paginate(this.state.textArrayCursorYes.slice(this.state.start, this.state.end));
    console.log('current display array ', displayArray);
    displayArray.forEach(function (element, index) {
      displayString += element + '\n';
    })

    displayString = displayString.slice(0, displayString.length - 1);
   
    return(
      <View>
        <View>
          <VrButton onClick={this.focus.bind(this)}>
          <Text style={{backgroundColor: 'lightblue', width: this.state.columns / 15, height: this.state.rows / 10, transform: [{ translate: [this.state.x, this.state.y, this.state.z] }]}}>
            {displayString}
          </Text>
          </VrButton>
          <View style={{ transform: [{ translate: [this.state.x + 2, this.state.y + 0.2, this.state.z] }] }}>
          {this.state.textArrayCursorYes.length > this.state.rows*this.state.columns &&
          this.state.cursorPosition % this.state.columns !== 0 ? <Scroll 
            handleUp={this.handleUp.bind(this)} 
            handleDown={this.handleDown.bind(this)}
          />: null}
          </View>
        </View>
        {this.state.focus ? (
        <View style={{transform: [{ translate: [this.state.x, this.state.y, this.state.z] }, {rotateX: -30}] }}>
          <Keyboard 
            handleAllLetters={this.handleAllLetters.bind(this)} 
            handleDelete={this.handleDelete.bind(this)} 
            handleForward={this.handleForward.bind(this)} 
            handleBack={this.handleBack.bind(this)} 
            handleSpace={this.handleSpace.bind(this)}
            handleReturn={this.handleReturn.bind(this)}
          />
        </View> ) : (<View/>)}
      </View>);
    }
}

export default TextInput;