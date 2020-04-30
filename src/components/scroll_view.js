import React from 'react';
import {StyleSheet, Text, SafeAreaView,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class SectionHeader extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <ScrollView horizontal={true}
       pagingEnabled={true}>
       <View style={styles.container}>
        <Text style={styles.txt}>hellodfsdfsfsdffdsfsdfsdfdadffsdfsdfdsfd</Text>
       </View>
       <View style={styles.container}>
        <Text style={styles.txt}>hellosgdfghfgdhdgfhhgfhfghfgghghgfhffsdfsdfsdfsdfsdfgfdg</Text>
       </View>
     
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width:'100%',
    height:'100%'

  },
  txt:{
    textAlign:'center',
    width:'100%',
    height:'100%'
  }
});
export default SectionHeader;