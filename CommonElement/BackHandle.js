import React from "react";
import {View,Text,Alert,BackHandler,StyleSheet} from 'react-native'
import { useEffect } from 'react';
export function Back  ()  {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Exit App', 'Are you sure you want to exit', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
    return(
        <Text>same</Text>
    )
 
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
//{ text: 'YES', onPress: () => BackHandler.exitApp() },