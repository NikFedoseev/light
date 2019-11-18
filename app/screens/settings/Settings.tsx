import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setDeviceConfig} from '../../actions/settings'
import {SafeAreaView, TouchableOpacity, View, Text, TextInput, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';

import {styles} from './style';

interface Props {  
  setDeviceConfig: (ip:string, port: string) => void
}

interface State {
  ip: string | null,
  port: string | null
}

class Settings extends Component<Props, State> {
  state = {
    ip: '',
    port: ''
  }
  
  onSubmit = () => {
    const {ip, port} = this.state;
    if(ip !== '' && port !== '') {
      this.props.setDeviceConfig(ip!, port!)
      Alert.alert(
        "Готово!",
        "Конфигурация успешно сохранена"
      )
    }
  }

  onChangeIpText = (ip:string) => {
    this.setState({ip})
  }

  onChangePortText = (port:string) => {
    this.setState({port})
  }

  isButtonActive = () => {
    const {ip, port} = this.state;
    if(ip !== '' && port !== '') return true
    return false
  }

  render() {
    const isButtonActive = this.isButtonActive()
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View
          style={styles.container}>
            <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-start', paddingTop:'10%'}}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Настройки</Text>
              </View>
              <View style={styles.inputsContainer} >
                <View style={styles.textInputContainer}>
                  <TextInput 
                    placeholder="Адрес" 
                    editable 
                    style={styles.textInput} 
                    onChangeText={this.onChangeIpText}/>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput 
                    placeholder="Порт" 
                    editable 
                    style={styles.textInput} 
                    onChangeText={this.onChangePortText}/>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={[styles.button, {opacity: isButtonActive ? 1 : 0.5}]} 
                  onPress={this.onSubmit} 
                  disabled={isButtonActive ? false : true}>
                    <Text style={styles.buttonText}>Применить</Text>
                </TouchableOpacity>
              </View>

            </View>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state:any) => ({
    settings: state.settings
})

const mapDispatchToProps = (dispatch:any) => ({
  setDeviceConfig: (ip:string, port:string) => dispatch(setDeviceConfig(ip, port))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
