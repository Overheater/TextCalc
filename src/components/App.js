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
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  FlatList
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
          <View style={{flex:6,backgroundColor:'blue'}}>
          <FlatList
          data={this.equation_results}
          renderItem={(this._renderItem)}
          style={{alignSelf: 'stretch', width:400}}
          keyExtractor={(item, index) => item.number}
          shouldComponentUpdate={()=>{return true}}
          onScroll={()=>Keyboard.dismiss()}
        >
        </FlatList>
        </View>
            
            <View style={Styles.calcContainer}>
            <TextInput
          style={{width: 200,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
          placeholder='input your equation here'
          onChangeText={(intext) => this.setState({text:intext})}
          onSubmitEditing={()=>this.syCalculate()}
          
        />
        </View>
       
      </View>

      </TouchableWithoutFeedback>
      
    );
  }
  _renderItem = ({item}) => {
    return (
      <View style={Styles.itemContainer}>
        <Text style={Styles.textItem}>{item.number}                            {item.value}</Text>
      </View>
    );
  }

  checkUsability(focus)
  {
    return (!isNaN(parseFloat(focus))&& isFinite(focus));
  }
  syCalculate()
  {
    if(this.state.text==='clear'){
      this.equation_results=[];
      return;
    }
    this.equationnumb=this.equationnumb+1;
    keyvalue=this.equationnumb;
    var original=this.state.text;
    this.equation_history.push(<Text>{original}</Text>);
    //convert number to string
    this.equation_results.push({value:(eval(original)),number:keyvalue});    
    this.setState({text:""})
  }
  //uses a shunting yard algorithm, based on https://www.thepolyglotdeveloper.com/2015/03/parse-with-the-shunting-yard-algorithm-using-javascript/
  //This version is commented out because I can't get my associativity variable of my operator objects to be recognized
  /*syCalculate()
  {
    this.equationnumb+1;
    keyvalue=this.equationnumb;
    var original=this.state.text;
    if(this.state.text==='clear'){
      this.equation_history=[];
      this.equation_results=[];
      this.equationnumb=0;
      return;
    }

    //our finished product at the end of the parsing function
    var equationProduct="";
    var operatorstack=[];
    // an object that holds the precedence values of the needed operators
    var operatorsystem={
      '^':{
        //highest precendence other than parenthesis, therefore its 4
        precedence: 4,
        associativity: 'Right'
      },
      '/':{
        //third highest precedence, therefore its 3
        precendence: 3,
        associativity: 'Left'

      },
      '*':{
                //third highest precedence along with division, therefore its 3
        precedence:3,
        associativity: 'Left'
      },
      '-':{
        //fourth highest precedence along with subtraction, therefore its 2
        precedence:2,
        associativity: 'Left'
      },
      '+':{
        //fourth highest precedence along with subtraction, therefore its 2
        precendence: 2,
        associativity: 'Left'
      },

    };
    //cleans up the expression array of any spaces for further use
    this.state.text = this.state.text.replace(/\s+/g, "");
    //splits up the expression array when an operator or parenthises  is found
    this.state.text=this.state.text.split(/([\+\-\*\/\^\(\)])/);
    // cleans up the expression, adding 1's 
    for(let i=0;i<this.state.text.length;i++)
    {
      if(this[i]===''){
        this.state.text.splice(i,1);
      }
    }
    for(let i=0;i<this.state.text.length;i++){
    var focus=this.state.text[i];
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
      while("^/*+-".indexOf(stackposition) !== -1 && ((operatorsystem.currentoperator.associativity === 'Left' && operatorsystem.currentoperator.precedence <= operatorsystem.stackposition.precedence) || (operatorsystem.currentoperator.associativity === Right' && operatorsystem.currentoperator.precedence < operatorsystem.tackposition.precedence)))
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

    this.equation_history.push(<Text>{original}</Text>);
    this.equation_results.push(<Text>{equationProduct}</Text>);
  }
*/
}   


