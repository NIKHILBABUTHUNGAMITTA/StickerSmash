import { StyleSheet, View, Image, TouchableWithoutFeedback, Text, Pressable, TextInput, Keyboard, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';
// import logoOne from '../assets/LogoOne.png';
import { Ionicons } from '@expo/vector-icons';
import policy from '../assets/login/policy.png';
import microchip from '../assets/login/microchip.png';

//logos
import logo1 from '../assets/login/1.jpg';
import logo2 from '../assets/login/2.jpg';
import logo3 from '../assets/login/3.jpg';
import logo4 from '../assets/login/4.jpg';

const logos = [logo1,logo2,logo3,logo4];

const Login = () => {

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
    height : 50,
    borderColor: 'grey',
    alignItems : 'center',
    borderRadius: 30,
    flexDirection: toggleBt ? "row" : "row-reverse",
    flexWrap: 'wrap',
    paddingTop : 2,
  });

  const [logoIndex,setLogoIndex] = useState(0);

  //logo handler
  const imageChange = () => {
      setLogoIndex((logoIndex+1)%4);
  }

  //submit login details
  const submit = () => {
    alert(`${username} and ${password}`);
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
    
  }, [toggleBt, toggleStyle, showPassword, password,logoIndex])

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.containerLogin, { flexDirection: "column" }]}>
          <View style={{ flex: 0.4, backgroundColor: "white" }} ></View>
          <View style={{ flex: 4.5, backgroundColor: "white" }} >
            <Image style={styles.image} source={logos[logoIndex]} />
          </View>

          <View style={{ flex: 5, backgroundColor: "white" }} >
            <Text style={styles.textStyle}>Welcome to PetLyf!</Text>
            <View style={toggleStyle}>
              {
                toggleBt ?
                  <>
                    <Pressable onPress={toggleBtn} disabled={!toggleBt} style={styles.button} title="Policy Number" ><Text>Policy Number</Text></Pressable>
                    <Pressable onPress={toggleBtn} disabled={toggleBt} style={StyleSheet.flatten([styles.button, styles.noBorder])} title="Pet Microchip" ><Text>Pet Microchip</Text></Pressable>
                  </>
                  :
                  <>
                    <Pressable onPress={toggleBtn} disabled={toggleBt} style={styles.button} title="Pet Microchip" ><Text>Pet Microchip</Text></Pressable>
                    <Pressable onPress={toggleBtn} disabled={!toggleBt} style={StyleSheet.flatten([styles.button, styles.noBorder])} title="Policy Number" ><Text>Policy Number</Text></Pressable>
                  </>
              }
            </View>

            <View style={styles.form}>
              {
                toggleBt ?
                  <>
                    {/* -------- username --------- */}
                    <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Policy Number</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                      <Image style={styles.tinyLogo} source={policy} />
                      <TextInput style={StyleSheet.flatten([styles.input, { marginLeft: -50, paddingLeft: 60 }])} onChangeText={(uName) => setUsername(uName)} value={username}></TextInput>
                    </View>

                    {/* ----- password -------- */}
                    <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Password</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TextInput style={styles.input} onChangeText={pass => setPassword(pass)} secureTextEntry={!showPassword} value={password} ></TextInput>
                      {renderPasswordVisibilityToggle()}
                    </View>
                    <Text style={{ textAlign: 'right', fontWeight: 500, paddingRight: 10, }} onPress={()=>{}} >Forgot Password ?</Text>
                  </>
                  :
                  <>
                    {/* -------- username --------- */}
                    <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Pet Microchip</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                      <Image style={styles.tinyLogo} source={microchip} />
                      <TextInput style={StyleSheet.flatten([styles.input, { marginLeft: -50, paddingLeft: 60 }])} onChangeText={(uName) => setUsername(uName)} value={username}></TextInput>
                    </View>

                    {/* ----- password -------- */}
                    <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Password</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TextInput style={styles.input} onChangeText={pass => setPassword(pass)} secureTextEntry={!showPassword} value={password} ></TextInput>
                      {renderPasswordVisibilityToggle()}
                    </View>
                    <Text style={{ textAlign: 'right', fontWeight: 500, paddingRight: 10, }} onPress={``} >Forgot Password ?</Text>
                  </>
              }
            </View>

            <View style={{ alignItems: 'center', borderWidth: 0, paddingTop: 20 }}>
              <Pressable style={styles.loginBtn} onPress={submit}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
            </View>

          </View>

        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

//style
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    padding: 0,
    width: 393,
  },

  passwordPos: {
    marginLeft: -50,
    overflow: "hidden",
    position: "relative",
  },

  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 20,
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
  },

  form: {
    marginHorizontal: 20,
  },

  label: {
    paddingBottom: 10,
  },

  image: {
    width: 400,
    height: 380,
    borderBottomLeftRadius: 430,
    borderBottomRightRadius: 500,
    resizeMode: 'cover',
  },

  textStyle: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: 32,
    fontWeight: 600,
    margin: 10,
  },

  toggleDirection: {
    flexDirection: "row-reverse",
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 165,
    margin: 3,
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: 'center',
    
  },

  noBorder: {
    borderWidth: 0,
  },

  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },

  loginBtn: {
    backgroundColor: '#007FFF',
    borderRadius: 20,
    width: 120,
    margin: 3,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
  },

  loginText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  }
});

export default Login;
