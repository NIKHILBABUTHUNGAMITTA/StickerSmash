import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import TabNavigation from './TabNavigation';

const FileClaimScreen2 = () => {

    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>File a Claim</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable onPress={() => navigation.navigate("FileClaimScreen1")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* ----Form data ----- */}
                <View>
                    <Text>Claim a screen 2</Text>
                </View>

            </View>

            {/* ------- Next Button ---------*/}
            <View>
                <Pressable style={styles.nextButton} onPress={() => navigation.navigate("FileClaimScreen2")}>
                    <Text style={styles.nextText}>NEXT</Text>
                </Pressable>
            </View>
            <TabNavigation />
        </>
    )
}

export default FileClaimScreen2


const styles = StyleSheet.create({
    // form
    formheaders: {
        fontSize: 12,
        FontFamily: FontFamily.interBold,
        fontWeight: "600",
        color: "grey",
        paddingHorizontal: 10,
    },

    form: {
        flexDirection: 'column',
    },
    formItem: {
        flexDirection: 'column',
        marginHorizontal: 40,
        marginVertical: 7,
    },
    formLabel: {
        fontFamily: FontFamily.interBold,
        fontSize: 12,
        color: '#000000',
        fontWeight: '500',
        padding: 7,
    },
    formControl: {
        borderWidth: 1,
        padding: 6,
        borderColor: '#016DAB',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 14,
        fontFamily: FontFamily.interBold,
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