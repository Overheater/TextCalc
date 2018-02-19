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
     this.equation_history = ([]);
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
            {this.equation_history}
            </ScrollView>
            <View style={Styles.calcContainer}>
            <TextInput
          style={{width: 200,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
          placeholder='input your equation here'
        />
        <CalcButton style={{height:55}}/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
  checkUsability()
  {
    return (!isNaN(parseFloat(this))&& isFinite(this));
  }
  syCalculate()
  {


  }

}   


