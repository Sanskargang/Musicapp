import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Home } from "../Home";
let name = '';
export function UserScreen({ navigation }) {
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        name = await AsyncStorage.getItem('EMAIL');
        //console.log(name);
        // change number to name

    };
    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: '100%', height: '9%', backgroundColor: '#8AFFFF', position: 'relative', flexDirection: 'row', alignItems: 'center', top: 18 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Home');
                }}>
                    <Image source={require('/Program Folder/Musicapp/Images/homes.png')} style={{ height: 35, width: 35, marginLeft: 15 }} />
                </TouchableOpacity>
                <Text style={{ paddingLeft: 5, fontStyle: 'italic', fontWeight: '400', fontSize: 22 }}> User Login</Text>
                <TouchableOpacity>
                    <Image source={require('/Program Folder/Musicapp/Images/setting.png')} style={{ height: 28, width: 28, left: 160, top: 4 }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', paddingTop: '10%' }}>
                <Image source={require('/Program Folder/Musicapp/Images/profile.png')} style={{ width: 100, height: 100, alignItems: "center", justifyContent: 'center', }} />
                <Text style={{ alignSelf: 'center', fontSize: 18, marginTop: 20 }}>{name}</Text>
            </View>
            <View>
                <TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth: 0.75, marginTop: 18, justifyContent: 'center' }}>
                    <Text style={styles.loginText}>ADDRESS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth: 0.75, marginTop: 18, justifyContent: 'center' }}>
                    <Text style={styles.loginText}>MY ORDER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth: 0.75, marginTop: 18, justifyContent: 'center' }}>
                    <Text style={styles.loginText}>OFFER</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '60%', height: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 20 }}
                onPress = {()=>{
                    navigation.navigate('Login')
                }}
                >
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        paddingLeft: 15,
        fontStyle: 'italic',
        fontWeight: '600',
    },
})