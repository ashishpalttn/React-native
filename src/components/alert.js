import React from 'react';
import {StyleSheet, Text, SafeAreaView,Alert,BackHandler,TouchableOpacity } from 'react-native';
class alert extends React.Component {
  constructor() {
    super();
  }
  abc=()=> {
    Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
  }
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.abc}>
        <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  componentDidMount(){
    this.hello = BackHandler.addEventListener('hardwareBackPress', ()=> {
      this.abc()
      return true;
    });
  }
  componentWillUnmount(){
    // console.log(this.backHandler); 
    this.hello.remove(); 
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text:{
    width:100,
    height:50,
    backgroundColor:"white",
    fontSize:35

  }
});
export default alert;
