import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import TabNavigation from './TabNavigation';

const ClaimHistoryDetails = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>My Claims History</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable onPress={() => navigation.navigate("ClaimHistory")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* --- Claim details ------ */}
                <Pressable style={styles.claim}>
                    <View style={{}}>
                        <Text style={styles.claimTitle}>Claim #3812739417</Text>
                        <Text style={styles.claiminfo}>Ear Infection claim dated 16th May 2023</Text>
                    </View>
                </Pressable>

                {/* -----Claim details in form ----- */}
                <View style={styles.form}>
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Claim Amount</Text>
                        <TextInput style={styles.formControl} value={100} />
                    </View>
                </View>
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

export default ClaimHistoryDetails;


const styles = StyleSheet.create({
    // form
    form:{
        flexDirection:'column',
    },
    formItem:{
        flexDirection:'column'
    },
    formLabel:{

    },
    formControl:{
        borderWidth:1,
        padding:10,
        margin:10,

    },
    // button
    nextBtn: {
        width: 8,
        height: 12,
    },
    claimTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    },
    claiminfo: {
        fontSize: 10,
        paddingVertical: 2,
        color: 'grey',
        fontWeight: '600',
        textAlign: 'center',
    },
    claimsList: {
        flexDirection: 'column',
    },
    claim: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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