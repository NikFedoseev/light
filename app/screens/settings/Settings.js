import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, TextInput, ScrollView} from 'react-native';

import {styles} from './style.js';

export default class Settings extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={styles.container}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Настройки</Text>
            </View>
            <View style={styles.inputsContainer} >
              <View style={styles.textInputContainer}>
                <TextInput placeholder="Адрес" editable style={styles.textInput}/>
              </View>
              <View style={styles.textInputContainer}>
                <TextInput placeholder="Порт" editable style={styles.textInput}/>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Применить</Text>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
