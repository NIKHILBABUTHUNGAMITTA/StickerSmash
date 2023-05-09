import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import TabNavigation from './TabNavigation';

const ClaimHistory = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

        {/* ----- My cliams History ---------- */}
        <Text style={styles.headerText}>My Claims History</Text>

        {/* ---------- back button -------------- */}
        <View>
          <Pressable onPress={() => navigation.navigate("Dashboard")}>
            <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
          </Pressable>
        </View>

        {/* ------------ List of cliams ------------ */}
        <ScrollView style={styles.claimsList}>
          <Pressable style={[styles.claim, styles.shadowProp]} onPress={()=>alert("claim is clicked")}>
            <View style={{}}>
              <Text style={styles.claimTitle}>Claim #3812739417</Text>
              <Text style={styles.claiminfo}>Ear Infection claim dated 15th May 2023</Text>
            </View>
            {/* <View> */}
            <Image
              style={styles.nextBtn}
              source={require('../assets/assets/icon--light--month-chevron10.png')}
            />
            {/* </View> */}
          </Pressable>
        </ScrollView>
      </View>


      {/* ------- Next Button ---------*/}
      <View>
        <Pressable style={styles.nextButton}>
          <Text style={styles.nextText}>NEXT</Text>
        </Pressable>
      </View>
      <TabNavigation />
    </>
  )
}

export default ClaimHistory


const styles = StyleSheet.create({
  nextBtn: {
    width: 8,
    height: 12,
  },
  claimTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  claiminfo: {
    fontSize: 10,
    paddingVertical: 2,
    color: 'grey',
    fontWeight: '600',
  },
  claimsList: {
    flexDirection: 'column',
  },
  claim: {
    margin: 17,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  shadowProp: {
    shadowOffset: { width: 3, height:3 },
    shadowColor: 'black',
    shadowRadius:5,
    shadowOpacity: 2,
    elevation: 10,
    backgroundColor: "white" // invisible color
  },
  nextButton: {
    backgroundColor: "#196cbf",
    justifyContent: 'center',
    padding: 15,
    margin: 40,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "600",
  },
  headerText: {
    textAlign: 'center',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  backbutton: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    tintColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
  },
})