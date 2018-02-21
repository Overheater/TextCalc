import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    FlatList
} from 'react-native';

import Styles from '../Styles/Styles';

export default class Flatequate extends Component {
    render() {
        return (
            <FlatList
          data={this.props.data}
          renderItem={(this._renderItem)}
          style={{alignSelf: 'stretch',backgroundColor:'black'}}
          keyExtractor={(item, index) => item.id}
          shouldComponentUpdate={true}
        >
        </FlatList>
        );
    }
    _renderItem = ({item}) => {
        return (
          <View style={Styles.itemContainer}>
            <Text style={Styles.textItem}>{item.value}</Text>
          </View>
        );
      }
}