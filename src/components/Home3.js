import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Home extends React.Component {
  // constructor(prop){
  //   super(props);
  //   this.state={
  //     text:' ',
  //     input:' ',
  //   };
  // }
  check = id => {
    switch (id) {
      case 1:
        Alert.alert('Top Left Pressed');
        break;
      case 2:
        Alert.alert('Top right Pressed');
      case 3:
        Alert.alert('Bottom left Pressed');
        break;
      case 4:
        Alert.alert('Bottom Right Pressed');
        break;
      case 5:
        Alert.alert('Center botton Pressed');
    }
  };
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <View
          style={[
            styles.child,
            {flexDirection: 'row'},
            {justifyContent: 'space-between'},
          ]}>
          <TouchableOpacity onPress={() => this.check(1)}>
            <View style={styles.child2}>
              <Image
                style={styles.img}
                source={require('./assets/download.jpeg')}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.child2}>
            <Text style={styles.helo}>Hello</Text>
          </View>
          <TouchableOpacity onPress={() => this.check(2)}>
            <View style={styles.child2}>
              <Image
                style={styles.img}
                source={require('./assets/download.jpeg')}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.child,
            {flexDirection: 'row'},
            {justifyContent: 'space-between'},
          ]}>
          <View style={styles.child2}>
            <Text style={styles.helo}>Hello</Text>
          </View>
          <TouchableOpacity onPress={() => this.check(5)}>
            <View style={styles.child2}>
              <Button style={styles.btn} title="button"></Button>
            </View>
          </TouchableOpacity>
          <View style={styles.child2}>
            <Text style={styles.helo}>Hello</Text>
          </View>
        </View>
        <View
          style={[
            styles.child,
            {flexDirection: 'row'},
            {justifyContent: 'space-between'},
          ]}>
          <TouchableOpacity onPress={() => this.check(3)}>
            <View style={styles.child2}>
              <Image
                style={styles.img}
                source={require('./assets/download.jpeg')}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.child2}>
            <Text style={styles.helo}>Hello</Text>
          </View>
          <TouchableOpacity onPress={() => this.check(4)}>
            <View style={styles.child2}>
              <Image
                style={styles.img}
                source={require('./assets/download.jpeg')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',
    backgroundColor: '#ccb8e6',
  },
  child: {
    height: 80,
    backgroundColor: '#ccb8e6',
    alignItems: 'center',
  },
  child2: {
    width: 80,
    height: 80,
    backgroundColor: '#ccb8e6',
  },
  img: {
    //   resizeMode:"cover",
    flex: 1,
    width: 80,
  },
  helo: {
    alignSelf: 'center',
    fontSize: 30,
  },
});

export default Home;


// import {View, StyleSheet, Text, Image} from 'react-native';
// import React from 'react';
// // import Icon from 'react-native-vector-icons/MaterialIcons';

// class Home3 extends React.Component {
//   render() {
//     return (
//       <View style={styles.parent}>
//         <Text style={styles.text}>Hello Navigation 2.........</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   parent: {
//     backgroundColor: 'white',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 30,
//   },
// });
// export default Home3;
