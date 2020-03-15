import React from 'react';
import {StyleSheet, Text, SafeAreaView, Modal, View, TouchableOpacity} from 'react-native';

class SectionHeader extends React.Component {
  
  state={isVisible:false}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text>Home</Text> */}
        <Modal animationType={"slide"} 
        transparent={false}
        visible={this.state.isVisible}
        onRequestClose={()=>{console.log('closed')}}>
            <View style={styles.modal}>
            <Text>Modal is Open</Text>
            <TouchableOpacity onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}><Text>Close Modal</Text></TouchableOpacity>
            </View>
        </Modal>
        <TouchableOpacity onPress={()=> this.setState({isVisible:true})}><Text>Open Modal</Text></TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  modal: {
    flex: .5,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  }
});
export default SectionHeader;
