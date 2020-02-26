import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={userName => this.setState({userName})}
          placeholder="username"
          //   name="username"
          //   value={this.state.userName}
        />
        <TextInput
          onChangeText={password => this.setState({password})}
          placeholder="password"
          //   name="password"
          //   value={this.state.password}
        />

        <Text style={{marginTop: 40, fontSize: 40}}>{this.state.userName}</Text>
        <Text style={{marginTop: 20, fontSize: 40}}>{this.state.password}</Text>
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
});

export default Home;
