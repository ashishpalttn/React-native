import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
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
      const {navigation}=this.props
    return (
      <View style={styles.container}>
        <View style={[{backgroundColor: 'blue'},styles.child, {width: 100}]} />

        <TextInput
          style={{padding: 10, borderColor: 'red', borderWidth: 1, margin: 50}}
          onChangeText={userName => this.setState({userName})}
          placeholder="username"
          //   name="username"
          //   value={this.state.userName}
        />

        <TextInput
          style={{padding: 10, borderColor: 'red', borderWidth: 1}}
          onChangeText={password => this.setState({password})}
          placeholder="password"
        />

        <Text style={{marginTop: 40, fontSize: 40}}>{this.state.userName}</Text>
        <Text style={{marginTop: 20, fontSize: 40}}>{this.state.password}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home2');
          }}>
          <Text style={styles.text}>Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});

export default Home1;


// import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';
// import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// class Home1 extends React.Component {
//   render() {
//     const {navigation} = this.props;
//     return (
//       <SafeAreaView style={styles.parent}>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Home2');
//           }}>
//           <Text style={styles.text}>Hello</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
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
// export default Home1;
