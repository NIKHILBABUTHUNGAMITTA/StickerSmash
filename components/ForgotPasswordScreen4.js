import { useNavigation } from "@react-navigation/core";
import React from "react";
import {View,Text,Pressable,Image, StyleSheet,ScrollView, TextInput,} from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";

const ForgotPasswordScreen4 = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container}>
        <View
          style={{ backgroundColor: "#FFFFFF", padding: 20, marginBottom: 7 }}
        ></View>
        <View>
          <Pressable
            style={{ width: 60, marginLeft: 10 }}
            onPress={() => navigation.navigate("ForgotPasswordScreen3")}
          >
            <Image
              source={require("../assets/assets/group.png")}
              style={styles.backbutton}
            />
          </Pressable>
        </View>

        {/* ----- image -------- */}
        <View style={styles.userImage}>
          <Image
            style={styles.userLogo}
            source={require("../assets/assets/forgot-password-illustration.png")}
          />
        </View>

        {/* ----------- ForgotPasswordScreen4 ------------- */}

        <Text style={styles.reset}>Reset successful</Text>
        <Text style={styles.text}>
          {`You can now log in to your account `}
        </Text>
        
        {/* -------VERIFYbutton---- */}
        <View style={{ alignItems: "center", borderWidth: 0, paddingTop: 20 }}>
        
        </View>
        
        <View>
                <Pressable style={styles.verifyBtn} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.verifyOtp}>Return to login screen </Text>
                </Pressable>
            </View>
      </ScrollView>
    </>
  );
};

export default ForgotPasswordScreen4;

const styles = StyleSheet.create({
  backbutton: {
    width: 35,
    height: 40,
    marginHorizontal: 10,
    tintColor: "black",
  },

  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },

  userImage: {
    alignSelf: "center",
    left: 13.07,
    right: 14.44,
    padding:10
  },
  userLogo: {
    width: 200,
    height: 200,
  },
  reset: {
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: "#000000",
    marginTop: 60,

  },

  text: {
    fontfamily: "Work Sans",
    fontWeight: "600",
    fontsize: 15,
    lineheight: 18,
    flexDirection: "row",
    color: "#000000",
    justifyContent: "center",
    marginTop: 30,
    textAlign: "center",
    fontSize: 15,
  },

  input: {
    height: 50,
    paddingLeft: 30,
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "blue",
    marginBottom: 5,
    width: "100%",
    fontSize: 17,
    backgroundColor: "white",
    position: "relative",
    margin: 30,
  },
  loginBtn: {
    backgroundColor: "#016DAB",
    borderRadius: 50,
    width: 360,
    margin: 120,
    height: 45,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    Radius: 100,
    Gap: 20,
  },

  loginText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    alignItems: "flex-start",
    padding: 20,
    fontFamily: "WorkSans-Regular",
  },
  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    alignItems: "flex-end",
    zIndex: 10,
  },
  verifyBtn: {
    backgroundColor: "#016DAB",
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 40,
    marginVertical: 30,
    borderRadius: 25,
    marginTop:200,

},
verifyOtp: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "600",
},
header2: {
    fontFamily: FontFamily.interSemibold,
    fontSize: 15,
    fontWeight: '900',
    color: "#868686",
    paddingVertical: 13,
    marginTop:100
},
header3: {
    fontFamily: FontFamily.interSemibold,
    fontSize: 15,
    fontWeight: '500',
    color: "#000000"
},
});