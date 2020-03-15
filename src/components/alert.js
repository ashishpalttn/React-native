import React from 'react';
import {StyleSheet, Text, SafeAreaView,Alert,BackHandler,TouchableOpacity,Clipboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
class alert extends React.Component {
  constructor() {
    super();
    this.state={
      count:0,
      txt:'',
      text:'',
    }
  };
  readFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString(); 
    this.setState({ clipboardContent }); 
  };
  writeToClipboard = async () => {
      await Clipboard.setString(this.state.text);
      alert('Copied to Clipboard!');
  };
  abc=()=> {
    Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => this.props.navigation.navigate('next')},
    ],
    {cancelable: false},
  );
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Text >{this.state.txt}</Text>
        <TextInput style={styles.textInput} onChangeText={text=>this.setState({text})} value={this.state.text} placeholder='Tyle here....'></TextInput>
        <TouchableOpacity onPress={this.writeToClipboard}><Text>Copy content</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.abc}>
        <Text style={styles.text}>Home</Text>
        <Text>{this.state.clipboardContent}</Text>
        <TouchableOpacity onPress={this.readFromClipboard}><Text>Paste</Text></TouchableOpacity>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  componentDidMount(){
    this.hello = BackHandler.addEventListener('hardwareBackPress', ()=> {
      this.setState({txt:'Backhandler Triggered'})
      this.setState({count:this.state.count+1})
      setTimeout(()=>{
        this.setState({txt:''})
        this.setState({count:0})
      },2000)
      if(this.state.count==2){
        this.abc()
        this.setState({count:0})
      }
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
    fontSize:35,
    margin:10

  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
export default alert;
