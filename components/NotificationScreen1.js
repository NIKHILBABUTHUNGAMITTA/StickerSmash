import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState,  } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, Alert } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import NoClaimsFoundPage from './NoClaimsFoundPage';
import TabNavigation from './TabNavigation';

const NotificationScreen1 = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(["TE"]);
  
  return (
    <>
      {
        value.length > 0
          ?
          <>
            <View style={styles.container}>
              <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

              {/* ----- NotificationScreen ---------- */}
              <Text style={styles.headerText}>NotificationScreen</Text>

              {/* ---------- back button -------------- */}
              <View>
                <Pressable style={{width:50,marginLeft:15,}} onPress={() => navigation.navigate("Dashboard")}>
                  <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                </Pressable>
              </View>

              {/* ------------ List of Notifications ------------ */}
              <ScrollView style={styles.claimsList}>
                <Pressable style={[styles.claim, styles.shadowProp]} onPress={() =>navigation.navigate("NotificationScreen2")}>
                  <View style={{}}>
                    <Text style={styles.claimTitle}>Dental visit</Text>
                    <Text style={styles.claiminfo}>Bad Breath & Teeth Cleaning Vet Visit</Text>
                  </View>
                  {/* <View> */}
                  <Image
                    style={styles.nextBtn}
                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                  />
                  {/* </View> */}
                </Pressable>

                <Pressable style={[styles.claim, styles.shadowProp]} onPress={() => alert("Clicked Notification")}>
                  <View style={{}}>
                    <Text style={styles.claimTitle}>Ear Infection</Text>
                    <Text style={styles.claiminfo}>Ear Infection Vet Visit</Text>
                  </View>
                  {/* <View> */}
                  <Image
                    style={styles.nextBtn}
                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                  />
                  {/* </View> */}
                </Pressable>

                <Pressable style={[styles.claim, styles.shadowProp]} onPress={() => Alert.alert("Clicked Notification")}>
                  <View style={{}}>
                    <Text style={styles.claimTitle}>Eye Care</Text>
                    <Text style={styles.claiminfo}>Eye Cleaning Vet Visit</Text>
                  </View>
                  {/* <View> */}
                  <Image
                    style={styles.nextBtn}
                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                  />
                  
                </Pressable>

                {/* <Pressable style={[styles.claim, styles.shadowProp]} onPress={() => Alert.alert("Clicked Notification")}>
                  <View style={{}}>
                    <Text style={styles.claimTitle}>Dental visit</Text>
                    <Text style={styles.claiminfo}>Ear Infection claim dated 15th May 2023</Text>
                  </View>
                 
                  <Image
                    style={styles.nextBtn}
                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                  />
                 
                </Pressable> */}

                
              </ScrollView>
            </View>


            {/* ------- Next Button ---------*/}
            {/* <View>
                  <Pressable style={styles.nextButton}>
                    <Text style={styles.nextText}>NEXT</Text>
                  </Pressable>
                </View> */}
            <TabNavigation />
          </>
          :
          <NoClaimsFoundPage />
      }
    </>
  )
}

export default NotificationScreen1


const styles = StyleSheet.create({
  nextBtn: {
    width: 8,
    height: 12,
  },
  claimTitle: {
    fontSize: 16,
    fontFamily: FontFamily.bodyMain,
    fontWeight: '500',
    color: '#555555',
  },
  claiminfo: {
    fontSize: 11,
    fontFamily: FontFamily.bodyMain,
    paddingVertical: 2,
    color: '#ABABAB',
    fontWeight: '500',
  },
  claimsList: {
    flexDirection: 'column',
  },
  claim: {
    margin: 17,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  shadowProp: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowRadius: 1,
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
    width: 35,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    tintColor: 'black',
    // borderWidth: 2,
    // borderColor: 'black',
    // borderRadius: 30,
  },
})