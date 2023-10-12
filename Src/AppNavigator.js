import React from "react";
import { Text, View, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Splashscreen } from "../Component/SplashScreen";
import { Login } from "../Src/Login";
import { Signup } from "./Signup";
import { Home } from "../Src/Home";
import { MainScreen } from '../Src/BottomPannel/MainScreen'
import { CartScreen } from '../Src/BottomPannel/CartScreen';
import { SearchScreen } from '../Src/BottomPannel/SearchScreen';
import { UserScreen } from '../Src/BottomPannel/UserScreen';
import { WishlistScreen } from '../Src/BottomPannel/WishlistScreen'
const Stack = createStackNavigator();
//alert("name");
export function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splashscreen}  />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Wishlist" component={WishlistScreen} />
                <Stack.Screen options={{ headerShown: false }} name="UserScreen" component={UserScreen} />

            </Stack.Navigator>
        </NavigationContainer>

    );
}

