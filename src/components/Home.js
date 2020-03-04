import React from 'react';
import {View, TextInput, Text, StyleSheet, SafeAreaView} from 'react-native';
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
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{marginTop: 20, fontSize: 20}}>{this.state.userName}</Text>
        <TextInput
          style={[styles.text_input]}
          onChangeText={userName => this.setState({userName})}
          placeholder="username"
        />
        <Text style={{marginTop: 20, fontSize: 20}}>{this.state.password}</Text>
        <TextInput
          style={[styles.text_input]}
          onChangeText={password => this.setState({password})}
          placeholder="password"
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Tata_sky');
          }}>
          <Text style={styles.tata_sky}>Go to Tata Sky</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  text_input: {
    margin: 10,
    width: 150,
    height: 30,
    backgroundColor: 'white',
  },
  tata_sky: {
    fontSize: 20,
    margin:20
  },
});

export default Home1;
