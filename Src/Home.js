import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, StyleSheet, TouchableOpacity, Image, BackHandler, Alert } from "react-native";
import { Theme } from "../CommonElement/Apperence";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { MainScreen } from '../Src/BottomPannel/MainScreen'
import { SearchScreen } from "./BottomPannel/SearchScreen";
import { CartScreen } from "./BottomPannel/CartScreen";
import { WishlistScreen } from "./BottomPannel/WishlistScreen";
import { UserScreen } from "./BottomPannel/UserScreen";
import { useNavigation, useRoute } from "@react-navigation/native";

export function Home({ navigation }) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [showText, setShowText] = useState(false);
    const [showSeacrhText, setshowSeacrhText] = useState(false);
    const [showWishText, setshowWishText] = useState(false);
    const [showUserText, setshowUserText] = useState(false);
    const [showCartText, setshowCartText] = useState(false);
    // const Check = () => {
    //     setTimeout(() => {
    //         setShowText(false);
    //         setshowSeacrhText(false);
    //         setshowWishText(false);
    //         setshowCartText(false)
    //     }, 4000)
    // }
    const navigations = useNavigation();
    useEffect(() => {
        const backGesture = navigations.addListener('beforeRemove',(e) =>{
            e.preventDefault();
            navigation.navigate('Home');
        })
        return backGesture;
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            {
                selectedTab == 0 ? (<MainScreen />) : selectedTab == 1 ? (<SearchScreen />) : selectedTab == 2 ? (<CartScreen />) : selectedTab == 3 ? (<WishlistScreen />) : (<UserScreen />)
            }
            <Theme />
            <StatusBar animated={true} backgroundColor='#8AFFFF' translucent={true} />
            <View style={{ width: '100%', height: 65, backgroundColor: 'white', position: 'absolute', bottom: 1, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 7 }}
                    onPress={() => {
                        setSelectedTab(0); setShowText(true); setshowSeacrhText(false); setshowWishText(false); setshowUserText(false); setshowCartText(false);
                    }}
                >
                    <Image source={require('../Images/home.png')} style={{ width: '45%', height: '58%' }} />
                    {showText == true && <Text style={styles.bottomtext}>Home</Text>}

                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 7 }}
                    onPress={() => {
                        setSelectedTab(1); setshowSeacrhText(true);
                        setShowText(false); setshowWishText(false); setshowUserText(false); setshowCartText(false);
                    }}
                >
                    <Image source={require('../Images/search.png')} style={{ width: '45%', height: '58%' }}
                    />
                    {showSeacrhText == true && <Text style={styles.bottomtext}>Search</Text>}
                </TouchableOpacity>
                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 25 }}>
                    <TouchableOpacity style={{ width: 45, height: 45, backgroundColor: 'black', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            setSelectedTab(2);
                            setshowCartText(true);
                            setshowSeacrhText(false);
                            setShowText(false); setshowWishText(false); setshowUserText(false)
                        }}
                    >
                        <Image source={require('../Images/bag.png')} style={{ width: '50%', height: '60%' }} />
                    </TouchableOpacity>
                    {showCartText == true && <Text style={styles.bottomtext}>Cart</Text>}
                </View>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 7 }}
                    onPress={() => {
                        setSelectedTab(3);
                        setshowWishText(true); setshowCartText(false);
                        setshowSeacrhText(false);
                        setShowText(false); setshowUserText(false)
                    }}
                >
                    <Image source={require('../Images/love.png')} style={{ width: '45%', height: '55%' }} />
                    {showWishText == true && <Text style={styles.bottomtext}>WishList</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 7 }}
                    onPress={() => {
                        navigation.navigate('UserScreen');
                    }}
                >
                    <Image source={require('../Images/user.png')} style={{ width: '43%', height: '53%' }} />

                </TouchableOpacity>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    bottomtext: {
        fontStyle: 'italic',
    },

});
