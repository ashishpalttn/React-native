import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
class Animation extends React.Component {
  constructor(props) {
    super(props);
    opacity = 0;
    this.animationValue = new Animated.Value(opacity);
  }

  animation = () => {
    this.opacity = this.opacity == 0 ? 1 : 0;
    Animated.timing(this.animationValue, {
      toValue: this.opacity,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewTop}>
          <Animated.Text
            style={{
            //   opacity: this.animationValue,
              //   marginTop: this.animationValue.interpolate({
              //     inputRange: [0, 1],
              //     outputRange: [0, 100],
              //   }),
              //   marginStart: this.animationValue.interpolate({
              //     inputRange: [0, 1],
              //     outputRange: [0, 100],
              //   }),

              transform: [
                // {
                //   translateX: this.animationValue.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: [0, 100],
                //   }),
                // },
                // {
                //   translateY: this.animationValue.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: [0, 100],
                //   }),
                // },
                {
                    rotate:this.animationValue
                    .interpolate({
                        inputRange:[ 0, 1],
                        outputRange: ['360deg', '0deg' ]
                         
                    })
                },
                {
                    scale: this.animationValue
                    .interpolate({
                        inputRange:[ 0, 1 ],
                        outputRange: [ 0, 4 ]
                         
                    })
                }

              ],
            }}>
            Hello
          </Animated.Text>
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={() => this.animation()}>
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  viewTop: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBottom: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default Animation;
