import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View,Text,Pressable,Image,StyleSheet, ScrollView,TextInput} from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";

const ForgotPasswordScreen3 = () => {
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
            onPress={() => navigation.navigate("ForgotPasswordScreen2")}
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
            source={require("../assets/assets/illustration.png")}
          />
        </View>

        {/* ----------- ForgotPasswordScreen3 ------------- */}

        <Text style={styles.ForgotPassword}>Reset your password </Text>
        <Text style={styles.text}>
          {" "}
          {`Here’s a tip: Use a combination of \nNumbers, Uppercase, lowercase and \nSpecial characters`}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="brokelaw1£"
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="brokelaw1£"
          ></TextInput>
        </View>
        {/* -------VERIFYbutton---- */}
        <View>
                <Pressable style={styles.resetBtn} onPress={() => navigation.navigate("ForgotPasswordScreen4")}>
                    <Text style={styles.resetTxt}>Reset Password</Text>
                </Pressable>
            </View>
      </ScrollView>
    </>
  );
};

export default ForgotPasswordScreen3;

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
  },
  userLogo: {
    width: 200,
    height: 200,
  },
  ForgotPassword: {
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
    marginTop: 50,
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
    width: 150,
    margin: 120,
    height: 50,
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
resetBtn :{
    // backgroundColor: "#016DAB",
    // justifyContent: 'center',
    // padding: 15,
    // marginHorizontal: 40,
    // marginVertical: 30,
    // borderRadius: 25,
    // marginTop:100,
    // width :330,
    // height :50,
    backgroundColor: "#016DAB",
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 40,
    marginVertical: 30,
    borderRadius: 25,
    marginTop:100,
},
resetTxt :{
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "600",
}
});
