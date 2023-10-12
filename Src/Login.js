import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Vibration, Alert } from 'react-native'
import { TextConatainer } from '../CommonElement/TextConatainer';
import { Button } from '../CommonElement/CommonButton';
import { Signup } from './Signup';
import { Theme } from '../CommonElement/Apperence';
import { Home } from './Home';
import { Loader } from '../CommonElement/Loader';
import AsyncStorage from "@react-native-async-storage/async-storage";
export function Login({ navigation }) {
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
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    if (email === mEmail && password === mPass) {
      setModalVisible(false);
      navigation.navigate('Home');
    }
    else {
      if (email !== mEmail) {
        Alert.alert("Email ID", "Please Enter correct email id ")
      }
      setModalVisible(false);
      // alert("Wrong Password");
      //   console.log(email,'',mEmail);
    }
  }


  return (
    <View style={styles.view}>
      <StatusBar animated={true} backgroundColor='#faebd7' />
      <Image source={require('../Images/Login.png')} style={styles.image} />
      <Text style={styles.text1}>Login</Text>
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
      <View style={{ marginTop: '35%' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.text2}>Create New Account?</Text>
        </TouchableOpacity>
        <Theme />
      </View>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}
// to navigate to other screen you must use navgation from function like function make ({navigation}) and the use navigation.navigate('Signup')


const styles = StyleSheet.create({
  view: {
    //  flex: 1,
    alignItems: 'center',
    marginTop: '30%',
  },
  image: {
    borderRadius: 50,
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
})

// const validate = () => {
  //   // console.log('sanskar');
  //   if (email == '') {
  //     setBadEmail(true);
  //   }
  //   else {
  //     setBadEmail(false);
  //   }
  //   if (password == '') {
  //     setBadPassword(true);
  //   }
  //   else {
  //     setBadPassword(false);
  //   }
  //   getData();
  // };