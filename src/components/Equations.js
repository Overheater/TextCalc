import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/Styles';

export default class Equations extends Component {

    render() {
        return (
            <View style={styles.container}>
            <Text>Text Calculator</Text>
            <ScrollView 
                style={styles.scroll} 
                contentContainerStyle={styles.scrollContent}
              >
                {this.historyList()}
              </ScrollView>
            </View>
        );
    }

    
}