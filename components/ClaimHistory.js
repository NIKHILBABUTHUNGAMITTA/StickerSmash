import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const ClaimHistory = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "black", padding: 20, marginBottom: 7, }}></View>

      <Text>Claim ClaimHistory Component</Text>
      <View>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <Image source={require("../assets/assets/vector.png")} style={styles.backbutton} />
        </Pressable>
      </View>
    </View>
  )
}

export default ClaimHistory


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backbutton: {
    width: 24,
    height: 15,
    marginHorizontal: 30,
  },
})