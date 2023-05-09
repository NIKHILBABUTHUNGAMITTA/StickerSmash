import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClaimHistory = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "black", padding: 20, marginBottom: 7, }}></View>
      <Text>Claim ClaimHistory Component</Text>
    </View>
  )
}

export default ClaimHistory


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})