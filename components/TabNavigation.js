import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';


const TabNavigation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* ---- Home----- */}
            <Pressable onPress={() => navigation.navigate("Dashboard")}>
                <View style={styles.innerIcons}>
                    <Image resizeMode={'cover'} source={require('../assets/assets/4-4.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Home</Text>
                </View>
            </Pressable>

            {/* ---- Servicing----- */}
            <Pressable onPress={() => navigation.navigate("Servicing")}>
                <View style={styles.innerIcons}>
                    <Image resizeMode={'cover'} source={require('../assets/assets/1-1.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Servicing</Text>
                </View>
            </Pressable>

            {/* ---- File a Claim----- */}
            <Pressable onPress={() => navigation.navigate("FileClaimScreen1")}>
                <View style={styles.innerIcons}>
                    <Image resizeMode={'cover'} source={require('../assets/assets/2-316017.png')} style={styles.logo} />
                    <Text style={styles.logoText}>File Claim</Text>
                </View>
            </Pressable>

            {/* ---- Home----- */}
            <Pressable onPress={() => alert("Pet care is clicked")}>
                <View style={styles.innerIcons}>
                    <Image resizeMode={'cover'} source={require('../assets/assets/3-33.png')} style={styles.logo} />
                    <Text style={styles.logoText}>Pet Care</Text>
                </View>
            </Pressable>

        </View>
    )
}

export default TabNavigation


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginHorizontal: 17,
        marginBottom: 12,
        borderRadius: 30,
        justifyContent: 'center',
    },
    innerIcons: {
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingVertical: 10,
        alignItems:'center'
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoText: {
        color: Color.white,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_xs,
        textAlign: "center",
        marginTop: -10,
    }
})