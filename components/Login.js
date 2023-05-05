import { StyleSheet, View, Image, Text, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from 'react';
import logoOne from '../assets/LogoOne.png';

const Login = () => {

  const [toggleBt, setToggleBt] = useState(true);
  const [toggleStyle, setToggleStyle] = useState({
    backgroundColor: "#EDF1F4",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 0,
    borderRadius: 30,
    flexDirection: toggleBt ? "row" : "row-reverse",
    flexWrap: 'wrap',
  })
  //password visibility
  const [hidePwd, setHidePwd] = useState(true);

  //Toggle password visibility
  const managePasswordVisibility = () => {
    setHidePwd(!hidePwd);
  };

  const toggleBtn = () => {
    // toggleStyle.flexDirection = !toggleBt ? "row" : "row-reverse";
    setToggleStyle({ ...toggleStyle, flexDirection: !toggleBt ? "row" : "row-reverse" })
    setToggleBt(!toggleBt);
  }

  useEffect(() => {

  }, [toggleBt, toggleStyle, hidePwd])

  return (
    <>
      <View style={[styles.containerLogin, { flexDirection: "column" }]}>
        <View style={{ flex: 0.5, backgroundColor: "black" }} >

        </View>
        <View style={{ flex: 4.5, backgroundColor: "white" }} >
          <Image style={styles.image} source={logoOne} />
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
                  <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Policy Number</Text>
                  <TextInput style={styles.input} onChangeText={""} value={""}></TextInput>

                  <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Password</Text>
                  <TextInput style={styles.input} onChangeText={""} value={""}></TextInput>
                  <Text style={{ textAlign: 'right', fontWeight: 500, paddingRight: 10, }} onPress={""} >Forgot Password ?</Text>
                </>
                :
                <>
                  <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Pet Microchip</Text>
                  <TextInput style={styles.input} onChangeText={""} value={""}></TextInput>

                  <Text style={{ fontSize: 15, paddingBottom: 5, paddingLeft: 10 }}>Password</Text>
                  <TextInput style={styles.input} onChangeText={""} value={""}></TextInput>
                  <Text style={{ textAlign: 'right', fontWeight: 500, paddingRight: 10, }} onPress={""} >Forgot Password ?</Text>
                </>
            }
          </View>
          <View style={{ alignItems: 'center', borderWidth: 0, paddingTop: 20 }}>
            <Pressable style={styles.loginBtn} onPress={"#"}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>

        </View>

      </View>
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

  input: {
    height: 50,
    paddingLeft: 20,
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 5,
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
    borderBottomLeftRadius: 530,
    borderBottomRightRadius: 600,
    resizeMode: 'cover',
  },

  textStyle: {
    textAlign: "center",
    fontFamily: "",
    fontSize: 35,
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
