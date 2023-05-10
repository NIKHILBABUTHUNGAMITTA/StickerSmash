import { StyleSheet, View, Image, Text, Pressable, TextInput, Keyboard, TouchableOpacity, useWindowDimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from 'react';
import logo5 from '../assets/LogoOne.png';
import { Ionicons } from '@expo/vector-icons';

//logos
import logo1 from '../assets/login/1.jpg';
import logo2 from '../assets/login/2.jpg';
import logo3 from '../assets/login/3.jpg';
import logo4 from '../assets/login/4.jpg';
import { useNavigation } from "@react-navigation/core";
import { FontFamily } from "../GlobalStyles";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Login = () => {

  const navigation = useNavigation();

  const { width, height, fontScale } = useWindowDimensions();

  const [logoDimension, setLogoDimension] = useState({
    width: width,
    height: width,
    borderBottomLeftRadius: 2*height,
    borderBottomRightRadius: 2*height,
    resizeMode: 'cover',
  })

  //useState
  const [toggleBt, setToggleBt] = useState(true);
  const [username, setUsername] = useState('Sridharshree303');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('Asdf@123');
  const [toggleStyle, setToggleStyle] = useState({
    backgroundColor: "#EDF1F4",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    borderColor: 'grey',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: toggleBt ? "row" : "row-reverse",
    flexWrap: 'wrap',
    paddingTop: 2,
    justifyContent: 'space-between',
  });

  const [logoIndex, setLogoIndex] = useState(0);

  //logo handler
  const imageChange = () => {
    setLogoIndex((logoIndex + 1) % 5);
  }

  //submit login details
  const submit = () => {
    // alert(`${username} and ${password}`);
    navigation.navigate("Dashboard")
  }

  //password view and hide
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordVisibilityToggle = () => {
    const iconName = showPassword ? 'eye-outline' : 'eye-off-outline';

    return (
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Ionicons style={styles.passwordPos} name={iconName} size={25} />
      </TouchableOpacity>
    );
  };

  //toggle button
  const toggleBtn = () => {
    setToggleStyle({ ...toggleStyle, flexDirection: !toggleBt ? "row" : "row-reverse" })
    setToggleBt(!toggleBt);
    imageChange();
  }

  //useefffect
  useEffect(() => {
    setLogoDimension({
      width: width,
      height: width,
      borderBottomLeftRadius: 2*height,
      borderBottomRightRadius: 2*height,
      resizeMode: 'cover',
    })
  }, [toggleBt, toggleStyle, showPassword, password, width])

  return (
    <ScrollView style={[styles.containerLogin, { flexDirection: "column" }]} onPress={() => { Keyboard.dismiss }}>

      <View style={{ backgroundColor: "white" }} >
        <Image style={logoDimension} source={logos[logoIndex]} />
      </View>

      <View style={{ backgroundColor: "white", justifyContent: 'center' }} >
        {/* ------- sliding button && PolicyNumber and Pet Microchip -------------- */}
        <Text style={styles.textStyle}>Welcome to PetLyf!</Text>
        <View style={toggleStyle}>
          {
            toggleBt ?
              <>
                <Pressable onPress={toggleBtn} disabled={toggleBt} style={[styles.button, { width: width / 2.3 }]} title="Policy Number" ><Text>Policy Number</Text></Pressable>
                <Pressable onPress={toggleBtn} disabled={!toggleBt} style={StyleSheet.flatten([styles.button, styles.noBorder, { width: width / 2.3 }])} title="Pet Microchip" ><Text>Pet Microchip</Text></Pressable>
              </>
              :
              <>
                <Pressable onPress={toggleBtn} disabled={!toggleBt} style={[styles.button, { width: width / 2.3 }]} title="Pet Microchip" ><Text>Pet Microchip</Text></Pressable>
                <Pressable onPress={toggleBtn} disabled={toggleBt} style={StyleSheet.flatten([styles.button, styles.noBorder, { width: width / 2.3 }])} title="Policy Number" ><Text>Policy Number</Text></Pressable>
              </>
          }
        </View>

        {/*Input form*/}
        <View style={styles.form}>
          {
            toggleBt ?
              <>
                {/*username*/}
                <Text style={{ fontSize: 15, marginVertical: 5, paddingLeft: 10 }}>Policy Number</Text>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <Image style={styles.tinyLogo} source={require('../assets/assets/ellipse-31.png')} />
                  <TextInput style={StyleSheet.flatten([styles.input, { paddingLeft: 60, }])} onChangeText={(uName) => setUsername(uName)} value={username} />
                </View>

                {/*password*/}
                <Text style={{ fontSize: 15, marginVertical: 7, paddingLeft: 10 }}>Password</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput style={styles.input} onChangeText={pass => setPassword(pass)} secureTextEntry={!showPassword} value={password} ></TextInput>
                  {renderPasswordVisibilityToggle()}
                </View>
                <Text style={{ textAlign: 'right', fontWeight: 500, paddingRight: 10, }} onPress={() => { }} >Forgot Password ?</Text>
              </>
              :
              <>
                {/* username*/}
                <Text style={{ fontSize: 15, marginVertical: 7, paddingLeft: 10 }}>Pet Microchip</Text>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <Image style={styles.tinyLogo} source={require('../assets/assets/ellipse-30.png')} />
                  <TextInput style={StyleSheet.flatten([styles.input, { paddingLeft: 60 }])} onChangeText={(uName) => setUsername(uName)} value={username}></TextInput>
                </View>

                {/* --- Password --- */}
                <Text style={{ fontSize: 15, marginVertical: 7, paddingLeft: 10 }}>Password</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput style={styles.input} onChangeText={pass => setPassword(pass)} secureTextEntry={!showPassword} value={password} ></TextInput>
                  {renderPasswordVisibilityToggle()}
                </View>
                <Text style={{ textAlign: 'right', fontWeight: 500, paddingRight: 10, }} onPress={() => { console.log("forgot password") }} >Forgot Password ?</Text>
              </>
          }
        </View>

        {/* -- Login button -- */}
        <View style={{ alignItems: 'center', borderWidth: 0, paddingTop: 20 }}>
          <Pressable style={styles.loginBtn} onPress={submit}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>

    </ScrollView >
  );
};

//style
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: 'white'
  },

  passwordPos: {
    marginLeft: -50,
    overflow: "hidden",
    position: "relative",
    zIndex: -2,
  },

  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 20,
    position: 'absolute',
    zIndex: 1,
  },

  input: {
    height: 50,
    paddingLeft: 30,
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 5,
    width: '100%',
    fontSize: 17,
    backgroundColor: 'white',
    position: 'relative',
  },

  form: {
    marginHorizontal: 20,
  },

  label: {
    paddingBottom: 10,
  },


  textStyle: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontSize: 25,
    fontWeight: 600,
    margin: 10,
  },

  toggleDirection: {
    flexDirection: "row-reverse",
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 2,
    height: 42,
    marginLeft: 2,
    marginRight: 2,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: 'center',
  },

  noBorder: {
    borderWidth: 0,
    backgroundColor: "#EDF1F4",
  },

  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },

  loginBtn: {
    backgroundColor: '#016DAB',
    borderRadius: 20,
    width: 120,
    margin: 3,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },

  loginText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  }
});

export default Login;
