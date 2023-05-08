import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PolicyInformation = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "black", padding: 20, marginBottom: 7, }}></View>
            <Text >View Policy Information</Text>
        </View>
    )
}

export default PolicyInformation


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})