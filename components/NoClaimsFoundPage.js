import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import TabNavigation from "./TabNavigation";

const NoClaimsFoundPage = () => {
  const navigation = useNavigation();
  const { width, height, fontScale } = useWindowDimensions();
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require("../assets/assets/ellipse-11.png")} style={{ height: height / 1.7 }} resizeMode="cover">
          <ImageBackground source={require("../assets/assets/ellipse-10.png")} style={{ height: height / 2 }} resizeMode="cover">
            <View style={{ backgroundColor: "#016DAB", padding: 20, marginBottom: 7, }}></View>

            {/* ----- My claims History ----- */}
            <Text style={styles.headerText}>My Claims History</Text>

            {/* ----- back button ------ */}
            <View>
              <Pressable style={{width:60,marginLeft:15,}} onPress={() => navigation.navigate("Dashboard")}>
                <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
              </Pressable>
            </View>

            <View style={styles.card}>
              {/*group-6 */}
              <Image
                style={styles.cardImage}
                source={require('../assets/assets/group-6.png')}
              />
              <View style={styles.cardText}>
                <Text style={styles.cardTextHeader}>NO CLAIMS FOUND</Text>
                <Text style={styles.cardTextInfo}>{`Looks like you haven’t made  \nany claims yet`}</Text>
              </View>
            </View>

          </ImageBackground>
        </ImageBackground>
      </View >
      <TabNavigation />
    </>
  );
}

export default NoClaimsFoundPage;

const styles = StyleSheet.create({
  cardText: {
    flexDirection:'column',
    
  },
  cardTextHeader: {
    color:"#000000",
    fontSize:20,
    fontFamily:FontFamily.interExtrabold,
    fontWeight:"800",
    marginTop:15,
    paddingVertical:8,
    textAlign:'center'
  },
  cardTextInfo: {
    color:"#000000",
    fontSize:12,
    fontFamily:FontFamily.interSemibold,
    fontWeight:'500',
    textAlign:'center'
  },

  cardImage: {
    width: 190,
    height: 150,
    marginTop: 70,
    transform: [{ rotate: '5deg' }],
  },

  card: {
    marginHorizontal: 75,
    marginVertical: 60,
    padding: 15,
    height: 378,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 10,
  },

  // form
  form: {
    flexDirection: "column",
  },
  formItem: {
    flexDirection: "column",
    marginHorizontal: 40,
  },
  formLabel: {
    fontFamily: FontFamily.interBold,
    fontSize: 15,
    color: "#000000",
    fontWeight: "700",
    padding: 7,
  },
  formControl: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#016DAB",
    borderRadius: 8,
    paddingHorizontal: 17,
  },

  // button
  nextBtn: {
    width: 8,
    height: 12,
  },
  claimTitle: {
    fontSize: 16,
    fontFamily: FontFamily.bodyMain,
    fontWeight: "500",
    color: "#555555",
    textAlign: "center",
  },
  claiminfo: {
    fontSize: 11,
    fontFamily: FontFamily.bodyMain,
    paddingVertical: 2,
    color: "#ABABAB",
    fontWeight: "500",
    textAlign: "center",
  },
  claimsList: {
    flexDirection: "column",
  },
  claim: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#196cbf",
    justifyContent: "center",
    padding: 15,
    margin: 40,
    borderRadius: 15,
  },
  nextText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  headerText: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  container: {
    flex: 1,
  },
  backbutton: {
    width: 35,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    tintColor: 'black',
  },
});
