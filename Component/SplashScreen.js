import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Login } from "../Src/Login";
import { Home } from "../Src/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function Splashscreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            //navigation.navigate('Login');
            getData();
        }, 2000)
    }, []);

    const getData = async () => {
        const email = await AsyncStorage.getItem('EMAIL');
        if (email !== '' || email !== null || email !== undefined) {
             navigation.navigate('Home');
            //console.log(email);
        }
        else {
            navigation.navigate('Login');
        }

    }
    return (
        <View style={styles.view}>
            <StatusBar animated={true} backgroundColor="#00ced1"
            />
            <Image source={require("../Images/appstore4.png")}
                style={styles.images}
            />
            <Text style={styles.text}>Shop Hub</Text>

        </View>
    )
};


const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10,10,10)',
    },
    images: {
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    text: {
        color: 'white',
        top: 10,
        fontSize: 22,
        fontStyle: "italic",
    }
});