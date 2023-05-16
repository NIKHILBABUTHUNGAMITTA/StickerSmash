import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import { TextInput} from "@react-native-material/core";;

const ForgotPasswordScreen1 = () => {
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
            onPress={() => navigation.navigate("Login")}
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
            source={require("../assets/assets/illustration2.png")}
          />
        </View>

        {/* ----------- ForgotPasswordScreen1 ------------- */}

        <Text style={styles.ForgotPassword}>Forgot Password?</Text>
        <Text style={styles.text}>
          {" "}
          {`Don’t worry, it happens to the best of \nus.`}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <TextInput variant="outlined" label="Label" style={{ margin: 16 }} /> */}
          <TextInput
          variant="absolute" label="Active"
            style={styles.input }
            placeholder="jollyburta@me.com"
          ></TextInput>
          
        </View>
        {/* -------Continuebutton---- */}
        <View style={{ alignItems: "center", borderWidth: 0, paddingTop: 20 }}>
          <Pressable
            style={styles.loginBtn}
            onPress={() => navigation.navigate("ForgotPasswordScreen2")}
          >
            <Text style={styles.loginText}>Continue</Text>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/assets/vector1.png")}
            />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPasswordScreen1;

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
    margin: 16,
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
    width: 18,
    height: 12,
    marginRight: 100,
    marginLeft: 200,
    position: 'absolute',
  },
  // Input2: {
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 4,
  //   paddingLeft: 10,
  // },
  // helperText: {
  //   fontSize: 12,
  //   color: '#888',
  //   marginTop: 4,
  // }
});
