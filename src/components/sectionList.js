import React from 'react';
import {StyleSheet, Text, SafeAreaView,SectionList,View} from 'react-native';
arrayObj=[{category_No:1,name:"mohit",quantity:5},
        {category_No:1,name:"sobit",quantity:6},
        {category_No:1,name:"molly",quantity:2},
        {category_No:2,name:"toffey",quantity:9},
        {category_No:2,name:"niraj",quantity:6},
        {category_No:3,name:"raynesh",quantity:3},
        {category_No:3,name:"sonu",quantity:2},
        {category_No:4,name:"subham",quantity:1},
        {category_No:4,name:"pankaj",quantity:36}]

var data=[]
arrayObj.forEach(item => {
if(!data.includes(item.category_No))
data.push(item.category_No)
})
var update_data =[]
data.forEach(item=>{
  var list={}
  list.title=item
  list.data=[]
  arrayObj.filter((arr_item)=>{
    if(arr_item.category_No==item)
    list.data.push(arr_item)
  })
  update_data.push(list)
})




function Item({title}) {
    
    return (
      <View style={styles.item}>
        {/* <Text style={styles.title}>{title.category_No}</Text> */}
        <Text style={styles.title}>{title.name}</Text>
       
        <Text style={styles.title}>{title.quantity}</Text>

      </View>
    );
}
class SectionHeader extends React.Component {
  constructor() {
    super();
  }
  render() {
    // console.warn(update_data) 
    return (
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={update_data}
            // keyExtractor={(item, index) => item + index}    //Ask.........why this line
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 16,
      },
      item: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: 'green',
        padding: 20,
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
      },
      title: {
        fontSize: 24,
      },
});
export default SectionHeader;
