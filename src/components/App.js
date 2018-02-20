/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import Styles from '../Styles/Styles'
import CalcButton from './calculatebutton'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {
  constructor(props)
  {
    super(props);
    this.state = { text: 'input your equation here'};
     this.equation_history = ([]);
     this.equation_results=([]);
     this.equationnumb=0;
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Styles.container}>
            <Text>Text Calculator</Text>
            <ScrollView 
                style={Styles.scroll} 
                contentContainerStyle={Styles.scrollContent}
            >
            </ScrollView>
            <View style={Styles.calcContainer}>
            <TextInput
          style={{width: 200,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
          placeholder='input your equation here'
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.syCalculate(this.state.text)}
        />

        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
  checkUsability(focus)
  {
    return (!isNaN(parseFloat(focus))&& isFinite(focus));
  }
  
  //uses a shunting yard algorithm, based on https://www.thepolyglotdeveloper.com/2015/03/parse-with-the-shunting-yard-algorithm-using-javascript/
  syCalculate(expression)
  {
    this.equationnumb+1;
    keyvalue=this.equationnumb;
    var original=expression;
    //our finished product at the end of the parsing function
    var equationProduct="";
    var operatorstack=[];
    // an object that holds the precedence values of the needed operators
    var operatorsystem={
      '^':{
        //highest precendence other than parenthesis, therefore its 4
        precedence: 4,
        associativity: 'right'
      },
      '/':{
        //third highest precedence, therefore its 3
        precendence: 3,
        associativity: 'left'

      },
      '*':{
                //third highest precedence along with division, therefore its 3
        precedence:3,
        associativity: 'left'
      },
      '-':{
        //fourth highest precedence along with subtraction, therefore its 2
        precedence:2,
        associativity: 'left'
      },
      '+':{
        //fourth highest precedence along with subtraction, therefore its 2
        precendence: 2,
        associativity: 'left'
      },

    };
    //cleans up the expression array/string for further use
    expression=expression.replace("/\s+/g", "");
    //splits up the expression array when an operator or parenthises  is found
    expression=expression.split("/([\+\-\*\/\^\(\)])/");
    // cleans up the expression, adding 1's 
    for(let i=0;i<expression.length;i++)
    {
      if(this[i]===''){
        expression.splice(i,1);
      }
    }
    for(let i=0;i<expression.length;i++){
    var focus=expression[i];
    //checks if the character in question is numeric
    //check here if it doesn't return correctly
    if(this.checkUsability(focus)){
      //if the focus is numeric, append it to our equation product string for later use
      equationProduct+= focus+' ';
    }
    //else if the character is any of the operators needed for this calculator, break this apart and push onto the operatorstack array 
    else if("^/*-+".indexOf(focus)!== -1)
    {
      var currentoperator= focus;
      var stackposition=operatorstack[operatorstack.length-1];
      // gets the operator stack sorted correctly based on precedence
      while("^*/+-".indexOf(stackposition) !== -1 && ((operators[currentoperator].associativity === "Left" && operators[currentoperator].precedence <= operators[stackposition].precedence) || (operators[o1].associativity === "Right" && operators[currentoperator].precedence < operators[stackposition].precedence)))
      {
        equationProduct += operatorstack.pop + ' ';
        stackposition=operatorstack[operatorstack.length-1];
      }
      operatorstack.push(currentoperator);
    }
    //sets up the precedence of wrapping parenthises
    //if character is an opening parenthises, we just add it to the stack
    else if(focus==='('){
      operatorstack.push(focus);
    }
    // if the character is the closing parentheses, we find where to put it using a while loop much like the normal operator while loop
    else if(focus===')'){
      while(operatorstack[operatorstack.length-1]!=='('){

        equationProduct +=operatorstack.pop()+' ';
      }
      operatorstack.pop();
    }
    }
    while(operatorstack.length>0){
      equationProduct+=operatorstack.pop()+' ';
    }
    var equation={
      before: original,
      value: equationProduct
    }
    this.equation_history.push(original, key={keyvalue});
    this.equation_results.push(equationProduct, key={keyvalue});
  }

}   


