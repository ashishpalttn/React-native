import React from 'react'
import {SafeAreaView,Text,StyleSheet, View,TouchableOpacity,ScrollView} from 'react-native'
class Main extends React.Component{
render(){
    const {navigation}=this.props
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.scroll_view}>
                <Text style={{alignSelf:'center',fontSize:50,marginTop:30,justifyContent:"center",color:"blue"}}>Welcome</Text>
                <ScrollView contentContainerStyle={{alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Home </Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('tata_sky')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Tata Sky</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('image')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Touch Image</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('pass_value')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Profiles</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('section_list')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Section List</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('alert_box')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Alert</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('modal')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Modal</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('api_fetch')}}>
                    <View style={styles.button_view}><Text style={styles.button}>Api fetch</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('tab')}}>
                    <View style={styles.button_view}><Text style={styles.button}>tab</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <View style={styles.button_view}><Text style={styles.button}>Hello</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <View style={styles.button_view}><Text style={styles.button}>Hello</Text></View>                    
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <View style={styles.button_view}><Text style={styles.button}>Hello</Text></View>                    
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center"
    },
    scroll_view:{
        flex:1,
        backgroundColor:"white",
        width:'85%',
        borderRadius:30,
        marginVertical:30,
        paddingBottom:20,

    },
    button_view:{
        borderRadius:20,
        paddingHorizontal:15,
        marginVertical:10,
        backgroundColor:"blue"},
    
    button:{
        // width:'80%'
        backgroundColor:'blue',
        // width:100,
        fontSize:30,
        color:'white',
        paddingHorizontal:30,
        borderRadius:50,
        // marginTop:15,
        alignSelf:'center'
    }
})
export default Main;