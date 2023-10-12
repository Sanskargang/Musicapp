import React, { useEffect } from "react";
import {View,StyleSheet,Image,Text,StatusBar} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {Login} from "../Src/Login";
import { Home } from "../Src/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
export  function Splashscreen(){
    const navigation = useNavigation();
    useEffect(()=>{  
        setTimeout(() =>{
            //navigation.navigate('Login');
            getData();
        },2000)
    },[]);

    const getData = async()=>{
        const email = await AsyncStorage.getItem('EMAIL');
        if(email !== '' || email !== null || email !== undefined){
            navigation.navigate('Home');
            //console.log(email);
        }
        else{
            navigation.navigate('Login');
        }
        
    }
    return(
        <View style = {styles.view}>
            <StatusBar animated = {true} backgroundColor = "#adff2f"
            />
            <Image source={require("../Images/appstore1.png")}
            style = {styles.images}
            />
            {/* <Text>hi my name is sanskar</Text> */}

        </View>
    )
};

// export function Login(){
//     return(
//         <View>
//             <Text>
//                 sanskar
//             </Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(5,5,20)',
    },
    images:{
        height:160,
        width:160,
        borderRadius:10,
    }
});