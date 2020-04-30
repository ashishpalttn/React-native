import React from 'react';
import {StyleSheet, Text, SafeAreaView, View,TextInput} from 'react-native';
import Realm from 'realm';
import {TouchableOpacity} from 'react-native-gesture-handler';

class RealmClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        realm: null,
    };
  }
  saveData = () => {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}],
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'hello'});
      });
      this.setState({realm});
    });
  };

  deleteData = () => {
      if(this.state.realm){
    this.state.realm.write(() => {
      let dogs = this.state.realm.objects('Dog');
      this.state.realm.delete(dogs);
      this.setState({realm: this.state.realm});
    });
}
  };

  render() {
    const info = this.state.realm
    ? ' Stored Data : ' + this.state.realm.objects('Dog')[0].name
    : 'Loading...';
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Text>{info}</Text>
   
        </View>
        <View style={styles.bottomView}>
            
          <TouchableOpacity onPress={this.saveData}>
            <Text>Save Data</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={this.deleteData}>
            <Text>Delete Data</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    );
  }

  componentWillUnmount() {
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
}
const styles = StyleSheet.create({
    inputTxt:{
        backgroundColor:'white',
        padding:15,
        width:'50%'
    },
  topView: {
    flex: 0.5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 0.5,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default RealmClass;
