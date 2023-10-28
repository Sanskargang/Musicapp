import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Vibration, Alert,ImageBackground } from 'react-native'
import { TextConatainer } from '../CommonElement/TextConatainer';
import { Button } from '../CommonElement/CommonButton';
import { Theme } from '../CommonElement/Apperence';
import { Home } from './Home';
import { Loader } from '../CommonElement/Loader';
//import AsyncStorage from "@react-native-async-storage/async-storage";
export function ADMIN({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setBadEmail(true);
      setModalVisible(false);
    }
    else {
      setBadEmail(false);
      if (password == '') {
        setBadPassword(true);
        setModalVisible(false);
      }
      else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);

      }
    }

  }

  const getData = async () => {
    
    if (email === 'sanskar' && password === '1234') {
      setModalVisible(false);
      navigation.navigate('AdminScreen');
      Alert.alert("Admin","You are sucessfull login to admin pannel ");
    }
    else {
      if (email !== 'sanskar') {
        Alert.alert("Email ID", "Please Enter correct email id ");
      }
      setModalVisible(false);
      alert("Wrong Password");
      // console.log(email,'',mEmail);
      // console.log(mEmail,mPass);
    }
  }


  return (
      <View style={styles.view}>
      <StatusBar animated={true} backgroundColor='black' />
        
      <Image source={require('../Images/appstore4.png')} style={styles.image} />
      <Text style={styles.text1}>Admin Login</Text>
      <TextConatainer placeholder={"Enter Email ID"} icon={require('../Images/mail.png')}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}

      />
      {
        badEmail === true && (<Text style={{ marginLeft: '10%', color: 'red', alignSelf: 'flex-start' }} >Please Enter Email Id</Text>)
      }
      <TextConatainer placeholder={'Enter Password'} icon={require('../Images/lock.png')} type={'password'}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      {
        badPassword === true && (<Text style={{ alignSelf: 'flex-start', color: 'red', marginLeft: '10%' }} >Please Enter Password</Text>)
      }
      <Button title={'Login'} onPress={() => { login() }} />
      <View style={{ marginTop: '30%' }}>
        <Theme />
      </View>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
    // <Button title={'Login'} onPress={() => { login() }} />
    // <Button title={'Login'} onPress={() => { navigation.navigate('AdminScreen'); }} />
  )
}
// to navigate to other screen you must use navgation from function like function make ({navigation}) and the use navigation.navigate('Signup')


const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    marginTop: '25%',
  },
  image: {
    borderRadius: 20,
    height:100,
    width:100,
  },
  text1: {
    paddingTop: 20,
    fontSize: 29,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 19,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignSelf: 'center',
    //  paddingTop: '30%', // this is done through touchable view section style
    textDecorationLine: 'underline',
  },
  admin: {
    height: 50,
    width: 50,
    borderRadius: 20,
    alignSelf: 'flex-end',
    bottom:25,
    right:5,
  },
})

