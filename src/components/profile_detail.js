import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
class Home1 extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    };
  }
  render() {
    const {navigation, route} = this.props;
    const {keyes, keyes2} = route.params;
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.img, {justifyContent: 'center'}]}>
          <Image style={{width: 300, height: 300}} source={keyes} />
        </View>
        <View style={styles.img}>
          <Text style={styles.txt}>{keyes2}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  img: {
    flex: 1,
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
  },
});
export default Home1;
