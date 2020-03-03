import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Test extends React.Component {
  render() {
      const {navigation}=this.props
    return (
      <View style={styles.parent}>
        <View style={[styles.children, {flex: 30}]}>
          <Text style={[styles.recharge]}>Recharge</Text>
        </View>
        <View
          style={[styles.children, {backgroundColor: '#c0c2c4'}, {flex: 61}]}
        />
        <View style={[styles.children, {flex: 9}]} />
        <View style={[styles.children3]}>
          <View
            style={[
              styles.children2,
              {alignItems: 'center'},
              {backgroundColor: '#ffffff'},
            ]}>
            <Text style={styles.amount}>Enter Amount</Text>
            <Text style={[styles.recomend]}>Recomended Recharge</Text>
            <Text style={[styles.r999]}>₹999</Text>
            <View style={styles.line} />
            <View style={styles.botton}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Touch_image')}}>
              <Text style={styles.proceed}>Proceed to Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.children2,
              {backgroundColor: '#c0c2c4'},
              {marginTop: '0%'},
              {flex: 0.1},
              {color: '#423e45'},
              
            ]}>
              <View style={{
              justifyContent:"space-between",
              flexDirection:'row',
              }}>
              <View><Text style={styles.recomended_plan}>Recomended Plans</Text></View>
              <View><Text style={styles.view}>View All Plans ></Text></View>
              </View>
            
            
          </View>
          <View style={[styles.children2,{backgroundColor:"white"},{flex: 0.49}]} >
          <View style={styles.unlimited}>
            <View style={styles.unlimited_data}><Text>hello</Text></View>
            <View style={styles.unlimited_data}><Text style={styles.proceed}>₹ 1249</Text></View>
          </View>
          <View style={styles.unlimited}></View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'black',
    flex: 1,
    // position:"relative"
  },
  children: {
    backgroundColor: '#9425f5',
    flex: 1,
  },
  children2: {
    backgroundColor: 'brown',
    flex: 0.4,
    borderRadius: 12,
  },
  children3: {
    color: '#423e45',
    top: 150,
    position: 'absolute',
    width: '92%',
    height: '73%',
    borderRadius: 10,
    backgroundColor: '#c0c2c4',
    marginHorizontal: '4%',
  },
  recharge: {
    fontSize: 30,
    marginTop: '20%',
    marginLeft: '5%',
    color: 'white',
  },
  amount: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#423e45',
  },
  recomend: {
    marginTop: 0,
    color: '#716b75',
    fontSize: 23,
  },
  r999: {
    marginTop: 10,
    fontSize: 50,
    color: '#423e45',
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: 'blue',
    borderBottomWidth: 3,
    alignSelf: 'center',
    width: '50%',
  },
  botton: {
    top: 30,
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#f51b60',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  proceed: {
    fontSize: 20,
    margin: 10,
    color: 'white',
    backgroundColor: '#f51b60',

    borderRadius: 50,
  },
  recomended_plan: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 35,
  },
  view:{
    color :"blue",
    marginTop:38,
    marginRight: 10,
    fontSize:15
  },
  unlimited:{
    flex :1,
    backgroundColor:"green",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  unlimited_data:{
  backgroundColor:"yellow"
  },
});
export default Test;
