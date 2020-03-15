import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
class SectionHeader extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Home</Text>
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
});
export default SectionHeader;
