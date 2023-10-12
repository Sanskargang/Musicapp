import React from "react";
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
export function Myproduct({ item }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 200, width: 200, backgroundColor: 'white', elevation: 8, marginLeft: 20, marginBottom: 10, borderRadius: 25 }}>
                <Image source={item.Image} style={{ width: '100%', height: '55%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <Text style={styles.text}>{item.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10,alignItems:'center'}}>
                    <Text>{'₹'+item.price}</Text>
                    <TouchableOpacity style = {{borderWidth:1,borderRadius:10,padding:5}}>
                        <Text>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style = {{width:35,height:35,backgroundColor:'white',borderRadius:20,elevation:10,position:'absolute',top:5,right:8,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('/Program Folder/Musicapp/Images/love.png')} style = {{width:20,height:20}}/>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: '600',
        fontStyle: 'italic',
        paddingTop: 15,
        padding: 10,

    }
})