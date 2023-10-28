import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, RefreshControl, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
export function AdminScreen() {
    let name = '';
    let password = '';
    let email = '';
    let number = '';
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    }, []);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        name = await AsyncStorage.getItem('NAME');
        password = await AsyncStorage.getItem('PASSWORD');
        email = await AsyncStorage.getItem('EMAIL');
        //console.log(name);
        // change number to name

    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth: 0.75, justifyContent: 'center' }}>
                    <Text style={styles.loginText}> Your email id is  {email}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth: 0.75, justifyContent: 'center' }}>
                    <Text style={styles.loginText}> Your password is {password}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth: 0.75, justifyContent: 'center' }}>
                    <Text style={styles.loginText}> Your number is {number}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#faebd7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'italic',
        left: 10
    }
});