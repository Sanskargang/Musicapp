import React from "react";
import { View, Text, StatusBar,StyleSheet } from 'react-native';
export function Headers() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <View style={{ width: '100%', height: '12%', backgroundColor: '#8AFFFF', position: 'relative', top: 0, flexDirection: 'row', alignItems: 'center', }}>
                <Text style = {styles.header}> Shop Hub</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        fontSize:25,
        fontFamily:'',
        fontStyle:'italic',
        paddingTop:15,
        
    }
})