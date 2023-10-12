import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { View, Text, StatusBar, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Back } from '/Program Folder/Musicapp/CommonElement/BackHandle';
import { Myproduct } from "./MyProductItem";
import { Theme } from "../../CommonElement/Apperence";
export function MainScreen() {
    const [categoryList, setCategoryList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [jackettList, setJacketList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [trouserList, setTrouserList] = useState([]);
    const [slipperList, setSlipperList] = useState([]);
    useEffect(() => {
        //console.log(Product);
        let tempCategory = [];
        Product.category.map(item => {
            tempCategory.push(item)
        });
        setCategoryList(tempCategory);
        setTshirtList(Product.category[0].data);
        setJacketList(Product.category[1].data);
        setSlipperList(Product.category[2].data);
        setJeansList(Product.category[3].data);
        setTrouserList(Product.category[4].data);
        setShoesList(Product.category[5].data);
    }, [])
    return (

        <ScrollView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <Theme/>
                <StatusBar />
                <View style={{ width: '100%', height: '5.5%', backgroundColor: '#8AFFFF', position: 'relative', top: 0, flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={require("/Program Folder/Musicapp/Images/appstore3.png")} style = {{width:40,height:40,borderRadius:100,top:12,left:13}}/>
                    <Text style={styles.header}> Shop Hub</Text>
                </View>
                <View style={{ alignItems: 'center', paddingTop: 10 }}>
                    <Image source={require('/Program Folder/Musicapp/Images/banner3.jpg')} style={{ width: '90%', height: 200, borderRadius: 10 }} />
                </View>
                <View style={{ paddingTop: 15, }}>
                    <FlatList data={categoryList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ borderWidth: 1, padding: 10, marginLeft: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ fontStyle: 'italic', fontWeight: '500' }}>{item.category}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontSize: 16, fontWeight: '600' }}>New Tshirt</Text>
                <View style={{ paddingTop: 15, }}>
                    <FlatList data={tshirtList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Myproduct item={item} />
                            )
                        }} />

                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontSize: 16, fontWeight: '600' }}>Shoes</Text>
                <View style={{ paddingTop: 15, }}>
                    <FlatList data={shoesList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Myproduct item={item} />
                            )
                        }} />

                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontSize: 16, fontWeight: '600' }}>Trouser</Text>
                <View style={{ paddingTop: 15, }}>
                    <FlatList data={trouserList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Myproduct item={item} />
                            )
                        }} />

                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontSize: 16, fontWeight: '600' }}>Jacket</Text>
                <View style={{ paddingTop: 15, }}>
                    <FlatList data={jackettList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Myproduct item={item} />
                            )
                        }} />

                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontSize: 16, fontWeight: '600' }}>Slipper</Text>
                <View style={{ paddingTop: 15, }}>
                    <FlatList data={slipperList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Myproduct item={item} />
                            )
                        }} />
                    <View style={{ paddingBottom: 100 }}>
                        <Text></Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        left:5,
        fontSize: 25,
        fontStyle: 'italic',
        paddingTop: 20,
        marginLeft: 10,

    }
})