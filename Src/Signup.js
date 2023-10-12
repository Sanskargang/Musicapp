import React, { useState } from "react";
import { View, Vibration, Text, StyleSheet, StatusBar, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { TextConatainer } from '../CommonElement/TextConatainer';
import { Button } from '../CommonElement/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { Login } from "./Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfrimPassword] = useState('')
  const [badEmail, setBadEmail] = useState(false);
  const [badName, setBadName] = useState(false);
  const [badNumber, setBadNumber] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfrirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signupp = () => {
    // console.log('yes'); // this is only for checking whether the button or function work or not
    setButtonDisabled(true);

    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    }
    else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      }
      else {
        setBadEmail(false);
        if (number == '') {
          setBadNumber(true);
          setButtonDisabled(false);
        }
        else if (number.length < 10) {
          alert("Enter 10 digit number");
          setButtonDisabled(false);
        }
        else {
          setBadNumber(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          }
          else {
            setBadPassword(false);
            if (confirmpassword == '') {
              setBadConfrirmPassword(true)
              setButtonDisabled(false);
            }
            else {
              setBadConfrirmPassword(false);
              if (password !== confirmpassword) {
                setBadConfrirmPassword(true);
                setButtonDisabled(false);
                //alert("Your Password Does Not Match");
              }
              else {
                setBadConfrirmPassword(false);
                saveData();
              }
            }
          }

        }
      }
    }
  };
  const saveData = async () => {

    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('NUMBER', number);
    await AsyncStorage.setItem('PASSWORD', password);
    await AsyncStorage.setItem('EMAIL', email);
    navigation.navigate("Login");
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <StatusBar animated={true} backgroundColor='#faebd7' />
        <Image source={require('../Images/Login.png')} style={styles.image} />
        <Text style={styles.text1}>Signup</Text>
        <Text style={{ paddingTop: 10 }}>Create a new account </Text>
        <TextConatainer placeholder={"Enter User Name"} icon={require('../Images/user.png')}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {
          badName === true && (<Text style={{ marginLeft: '10%', color: 'red', alignSelf: 'flex-start' }} >Please Enter User Name</Text>)
        }
        <TextConatainer placeholder={'Enter Email ID'} icon={require('../Images/email.png')} type={''}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }} />
        {
          badEmail === true && (<Text style={{ marginLeft: '10%', color: 'red', alignSelf: 'flex-start' }} >Please Enter Email Id</Text>)
        }
        <TextConatainer placeholder={'Enter Mobile Number'} icon={require('../Images/number.png')} keyboard={'true'}
          value={number}
          legth={10}
          onChangeText={(txt) => {
            setNumber(txt);
          }} />
        {
          badNumber === true && (<Text style={{ marginLeft: '10%', color: 'red', alignSelf: 'flex-start' }} >Please Enter Mobile Number</Text>)
        }
        <TextConatainer placeholder={'Enter Password'} icon={require('../Images/password.png')} type={'password'}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }} />
        {
          badPassword === true && (<Text style={{ marginLeft: '10%', color: 'red', alignSelf: 'flex-start' }} >Please Enter Password</Text>)
        }
        <TextConatainer placeholder={'Confirm Password'} icon={require('../Images/password.png')} type={'password'}
          value={confirmpassword}
          onChangeText={(txt) => {
            setConfrimPassword(txt);
          }} />
        {
          badConfirmPassword === true && (<Text style={{ marginLeft: '10%', color: 'red', alignSelf: 'flex-start' }} >Confirm Password Not Match</Text>)
        }


        <Button title={'Save'} onPress={() => { signupp() }} disabled={buttonDisabled} />
        <View style={{ marginTop: '5%' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
            <Text style={styles.text2}>You already have account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  view: {
    //  flex: 1,
    alignItems: 'center',
    marginTop: '3%',
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