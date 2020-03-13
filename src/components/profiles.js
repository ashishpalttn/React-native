import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
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
        <View style={[styles.profiles, {flexDirection: 'row'}]}>
          <View style={styles.imag}>
            <View style={styles.imag}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail', {
                    keyes: require('./assets/download.jpeg'),

                    keyes2: 'Ankit',
                  });
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('./assets/download.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.name}>
            <Text>Ankit</Text>
          </View>
        </View>
        <View style={[styles.profiles, {backgroundColor: 'red'}]}>
          <View style={[styles.profiles, {flexDirection: 'row'}]}>
            <View style={styles.imag}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail', {
                    keyes: require('./assets/profile.jpg'),
                    keyes: 'Reema',
                  });
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('./assets/profile.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.name}>
              <Text>Reema</Text>
            </View>
          </View>
        </View>
        <View style={styles.profiles}>
          <View style={[styles.profiles, {flexDirection: 'row'}]}>
            <View style={styles.imag}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail', {
                    keyes: require('./assets/profile2.jpg'),
                    keyes2: 'Maohit',
                  });
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('./assets/profile2.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.name}>
              <Text>mohit</Text>
            </View>
          </View>
        </View>
        <View style={[styles.profiles, {backgroundColor: 'red'}]}>
          <View style={[styles.profiles, {flexDirection: 'row'}]}>
            <View style={styles.imag}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detail', {
                    keyes: require('./assets/profile3.jpg'),
                    keyes2: 'Sumit',
                  });
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('./assets/profile3.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.name}>
              <Text>sumit</Text>
            </View>
          </View>
        </View>

        <View style={[styles.profiles, {backgroundColor: 'red'}]}>
          <View style={[styles.profiles, {flexDirection: 'row'}]}>
            <View style={styles.imag}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('sectionList')
                }}>
                 <View style={styles.name}>
              <Text>SectionList</Text>
            </View>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  profiles: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  imag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home1;
