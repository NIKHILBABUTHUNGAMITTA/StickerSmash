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
                        <TextInput style={styles.formControl} placeholder="$750" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Claim Date</Text>
                        <TextInput style={styles.formControl} placeholder="DD-MM-YYYY" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Policy Number</Text>
                        <TextInput style={styles.formControl} placeholder="XX-XX-XX-XX" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Pet Name</Text>
                        <TextInput style={styles.formControl} placeholder="SHIRO" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Policy Holder Name</Text>
                        <TextInput style={styles.formControl} placeholder="Arya Muller" />
                    </View>
                </View>
            </View>


            {/* ------- Next Button ---------*/}
            {/* <View>
                    <Pressable style={styles.nextButton}>
                        <Text style={styles.nextText}>NEXT</Text>
                    </Pressable>
                </View> */}
            <TabNavigation />

        </>
    )
}

export default ClaimHistoryDetails;


const styles = StyleSheet.create({
    // form
    form: {
        flexDirection: 'column',
    },
    formItem: {
        flexDirection: 'column',
        marginHorizontal: 40,
    },
    formLabel: {
        fontFamily: FontFamily.interBold,
        fontSize: 15,
        color: '#000000',
        fontWeight: '700',
        padding: 7,
    },
    formControl: {
        borderWidth: 1,
        padding: 8,
        borderColor: '#016DAB',
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
        fontWeight: '500',
        color: '#555555',
        textAlign: 'center',
    },
    claiminfo: {
        fontSize: 11,
        fontFamily: FontFamily.bodyMain,
        paddingVertical: 2,
        color: '#ABABAB',
        fontWeight: '500',
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