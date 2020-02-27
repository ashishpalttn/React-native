import React from 'react';
import {View, Text, Image} from 'react-native';
class Home2 extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#cfd4d1', flex: 1}}>
        <View style={{backgroundColor: '#6b35de', width: '100%', flex: 1}}>
          <Text
            style={{
              marginTop: 70,
              marginLeft: 20,
              fontSize: 30,
              color: 'white',
            }}>
            Recharge
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#ffffff',
            flex: 1,
            marginLeft: 13,
            marginRight: 13,
            marginTop: -100,
            borderRadius: 10,
          }}>
          <Text
            style={{
              marginTop: 15,
              fontSize: 25,
              fontWeight: 'bold',
              color: '#303030',
            }}>
            Enter Amount
          </Text>
          <Text style={{fontSize: 20, color: '#4a4a4a', marginTop: 5}}>
            Recommended Recharge
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontSize: 50,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              color: '#303030',
            }}>
            ₹999
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#ffffff',
              marginTop: 25,
              backgroundColor: '#ed5353',
              paddingRight: 25,
              paddingLeft: 25,
              paddingBottom: 8,
              paddingTop: 8,
            }}>
            Proceed to Payment
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 2,
            marginLeft: 13,
            marginRight: 13,
            borderRadius: 10,
            marginBottom: 50,
            marginTop: 50,
          }}>
              <Image
            source={require('./imag.png')}
            style={{marginLeft:0,marginTop:0,width: '100%', height: 300, resizeMode: 'contain'}}
          />
          {/* <Text style={{fontSize: 20, flex: 1, marginTop: 15, marginLeft: 15}}>
            Unlimited Data
          </Text>
          
          <Text style={{fontSize: 20, flex: 1, marginTop: 15, marginLeft: 15}}>
            Unlimited Data
          </Text> */}
        </View>
      </View>
    );
  }
}

export default Home2;
