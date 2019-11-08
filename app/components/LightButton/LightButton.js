import React, {Component} from 'react';
import {
  Animated,
  TouchableHighlight,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SvgComponent from '../../components/Icon';

import {faCoffee, faPlus} from '@fortawesome/free-solid-svg-icons';
import {styles} from './style';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const SIZE = 80;
class LightButton extends Component {
  state = {
    active: false,
  };
  mode = new Animated.Value(0);
  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300,
    }).start();
    this.setState({active: !this.state.active});
  };
  render() {
    const {active} = this.state;
    const activationScale = this.mode.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.25, 1],
    });
    return (
      <View pointerEvents="box-none" style={styles.container}>
        <AnimatedTouchable
          onPress={this.toggleView}
          activeOpacity={1}
          underlayColor="#2882D8">
          <Animated.View
            style={[
              styles.toggleButton,
              {
                transform: [{scale: activationScale}],
              },
              {
                width: SIZE,
                height: SIZE,
                borderRadius: SIZE / 2,
                backgroundColor: '#4f6de5',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            {/* <FontAwesomeIcon icon={faPlus} size={24} color="#F8F8F8" /> */}
            <SvgComponent
              width={48}
              height={48}
              fill={active ? 'yellow' : '#fff'}
            />
          </Animated.View>
        </AnimatedTouchable>
      </View>
    );
  }
}
export default LightButton;
