import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import TabNavigation from './TabNavigation';

const OwnerShipScreen2 = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>Ownership Transfer</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable onPress={() => navigation.navigate("OwnerShipScreen1")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* ----- success image ------- */}

                <View style={styles.image34}>
                    <Image
                        style={styles.image34Dm}
                        source={require("../assets/assets/image-34.png")}
                    />
                </View>
                <View style={{ marginLeft: 24 }}>
                    <Text style={styles.header1}>Your claim has been submitted successfully. </Text>
                    <Text style={styles.header2}>Reference Number :
                        <Text style={styles.header3}> 0016483261931</Text>
                    </Text>
                    <Text style={styles.header4}>Expect response in next 48 hours.</Text>
                </View>
               
            </View>

            <TabNavigation />
        </>
    )
}

export default OwnerShipScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.interBold,
        fontWeight: '700',
    },
    backbutton: {
        width: 35,
        height: 40,
        marginBottom:5,
        marginHorizontal: 20,
        tintColor: 'black',
    },
    image34: {
        alignSelf: 'center',
    },
    image34Dm: {
        width: 192,
        height: 192,
    },
    header1: {
        fontFamily: FontFamily.interSemibold,
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 40,
    },
    header2: {
        fontFamily: FontFamily.interSemibold,
        fontSize: 16,
        fontWeight: '500',
        color: "#868686",
        paddingVertical: 15,
    },
    header3: {
        fontFamily: FontFamily.interSemibold,
        fontSize: 16,
        fontWeight: '500',
        color: "#000000"
    },
    header4: {
        fontFamily: FontFamily.interSemibold,
        fontWeight: "500",
        fontStyle: "italic",
        fontSize: 16,
        color: "#000000"
    },
   
});