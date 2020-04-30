import React from 'react';
import {StyleSheet, Text, SafeAreaView,SectionList, ActivityIndicator,View} from 'react-native';
class SectionHeader extends React.Component {
  constructor() {
    super();
    this.state={isLoading:true, newDB:null}
  }
componentDidMount(){
    fetch('https://api.myjson.com/bins/oylfu')
    .then((response) => {
return response.json();
})
.then((data) => {
    new_data =[]
    data.forEach(item=>{
    var list={}
    list.title=item.primaryCategory.categoryName
    list.data=[]
    obj={volume:item.volume}
    // list.data.push(item.volume)
    // list.data.push(item.productName)
    // list.data.push(item.price)
    // list.data.push(item.measurementUnit.unitId)
    list.data.push(obj)
    obj={Name:item.productName}
    list.data.push(obj)
    obj={price:item.price}
    list.data.push(obj)
    obj={unitId:item.measurementUnit.unitId}
    list.data.push(obj)
    new_data.push(list)
})
      this.setState({newDB:new_data})
      this.setState({isLoading:false})
});
}
    Item({title}) {
      console.log(title)
              return (
        <View style={styles.item}>
            {/* <Text style={styles.title}>{title.category_No}</Text> */} 
            <Text style={styles.title}>{Object.keys(title)[0]}</Text>
            <Text style={styles.title}>{Object.values(title)[0]}</Text>
            {/* <Text style={styles.title}>{title.Name}</Text>
            <Text style={styles.title}>{title.price}</Text>
            <Text style={styles.title}>{title.unitId}</Text> */}
        
            

        </View>
        );
    }
  render() {
    // console.log(this.state.newDB)
    if(this.state.isLoading)
    return(
      <SafeAreaView style={{flex:1,backgroundColor:"green"}}>
        <ActivityIndicator size='large' color='red'></ActivityIndicator>
      </SafeAreaView>
    )
    return (
        <SafeAreaView style={styles.container}>
        <SectionList
          sections={this.state.newDB}
          renderItem={({ item }) => <this.Item title={item} />}
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
