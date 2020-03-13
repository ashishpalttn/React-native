// import React from 'react';
// import {StyleSheet, Text, SafeAreaView, SectionList} from 'react-native';
// class SectionHeader extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     const {title} = this.props;
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Home</Text>
//       </SafeAreaView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//   },
// });
// export default SectionHeader;







import React from "react";
// import SectionListHeader from './SectionListHeader'
// import SectionListItem from './SectionListItem'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  SectionList
} from "react-native";

arrObj=[{categoryId:1,name:"Fruits",quantity:2},
        {categoryId:1,name:"Fruits",quantity:3},
        {categoryId:2,name:"Mobile",quantity:39},
        {categoryId:2,name:"Laptops",quantity:62},
        {categoryId:3,name:"Toys",quantity:39},
        {categoryId:3,name:"Chairs",quantity:62},
        {categoryId:4,name:"Bottles",quantity:21},
        {categoryId:4,name:"Tables",quantity:36}]


let datas =[]
arrObj.forEach((item)=>{
if(!datas.includes(item.categoryId)){
    datas.push(item.categoryId)
}
})

var newList=[]
datas.forEach((item) => {
   var dataList ={};
   dataList.title = item;
   dataList.data = []
   arrObj.filter((value) => {

    if(value.categoryId === item){
       dataList.data.push(value);
     }
   })
   newList.push(dataList)
})

console.log(newList)

import Modal from "react-native-modal";

class demoScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { route } = this.props;
    return (
      <SafeAreaView style={{flex:1}} >
          <View style={styles.container}>
        {/* <Text>{route.params.datas}</Text> */}
        <SectionList
        sections={newList}
        renderItem={({item})=>{
        return(<SectionListItem name={item.name} categName={item.categName} quantity={item.quantity}/>)
        }}
        renderSectionHeader={
            ({section})=>
        <SectionListHeader titles={section.title}
        />
        }
        
        />
           </View> 
       
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "#5ead97"  
    },  
    sectionHeader: {  
        
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "black",  
        backgroundColor: '#8fb1aa',
       marginTop:20
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    }  
})  
export default demoScreen;
