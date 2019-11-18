import React, {Component} from 'react';
import {connect} from 'react-redux'
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import SvgComponent from '../../components/Icon';

import {styles} from './style.js';

class Main extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            alignContent: 'space-around',
          }}>
          <Text>OLOLO</Text>
          <SvgComponent />
        </View>
      </SafeAreaView>
    );
  }
}



export default Main
