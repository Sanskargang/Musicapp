import React from "react";
import { View, Text, Appearance,useColorScheme, } from "react-native";
import { Alert } from "react-native";
export function Theme() {
    const colorScheme = useColorScheme();
    if(colorScheme === 'dark'){
        // console.log('hi');
        return<ThemeDark/>
    }
    else{
        //console.log("light Theme");
        // return<ThemeDark/>
    }

}

const  ThemeDark = ()=> {
    Alert.alert('Dark Mode', 'This app cant work properly on  dark mode option please change to (light mode)', [
        {
            text: 'Ok',
            onPress: () => null,
            style: 'Ok',

        }

    ])
    // console.log('light');
}
