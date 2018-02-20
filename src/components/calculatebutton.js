import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Styles from '../Styles/Styles';

export default class Calcbutton extends Component {
    render() {
        return (
            
                <TouchableOpacity
                   onPress={() => this.props.Calculate()}
                    style={Styles.CalculateStyling}>
                    <Text style={Styles.equalsign}>=</Text>
                </TouchableOpacity>
            
        );
    }
}