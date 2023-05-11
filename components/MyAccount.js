import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, } from 'react-native';
import { FontFamily } from '../GlobalStyles';
import TabNavigation from './TabNavigation';
import { FontAwesome, Fontisto, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';

const MyAccount = () => {
    const [security, setSecurity] = useState(true);
    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>
                <View style={styles.body}>
                    {/* PAGE Header */}
                    <Text style={styles.header}>My Account</Text>

                    {/* Card and options */}
                    <ScrollView style={styles.card}>
                        {/* First option */}
                        <Pressable style={styles.clickOption} onPress={() => alert("Increase Coverage")}>
                            <View style={styles.blurBg}>
                                <Octicons name="shield-check" size={19} color="#016DAB" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Pet Owner</Text>
                                <Text style={styles.secondheader}>{'Make changes to pet owner \naccount'}</Text>
                            </View>
                            <View style={styles.Option1}>
                                <Ionicons name="ios-warning" size={21} color="red" />
                                <Image
                                    style={styles.nextBtn}
                                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                                />
                            </View>
                        </Pressable>

                        {/* --- second option---  */}
                        <Pressable style={styles.clickOption}>
                            <View style={styles.blurBg}>
                                {/* <Ionicons name="lock-closed-outline" size={19} color="#016DAB" /> */}
                                <MaterialIcons name="lock-outline" size={19} color="#016DAB" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Face ID / Touch ID</Text>
                                <Text style={styles.secondheader}>Manage your device security</Text>
                            </View>
                            {
                                security ?
                                    <Fontisto onPress={() => setSecurity(!security)} style={{ marginHorizontal: 15, }} name="toggle-off" size={38} color="#ABABAB" />
                                    :
                                    <Fontisto onPress={() => setSecurity(!security)} style={{ marginHorizontal: 15, }} name="toggle-on" size={38} color="#016DAB" />
                            }
                            {/* <Image
                                style={styles.nextBtn}
                                source={require('../assets/assets/icon--light--month-chevron10.png')}
                            /> */}
                        </Pressable>

                        {/* third option */}
                        <Pressable style={styles.clickOption} onPress={() => alert("Change Ownership")}>
                            <View style={styles.blurBg}>
                                {/* <Octicons name="log-out-outline" size={19} color="#016DAB" /> */}
                                <Ionicons name="log-out-outline" size={21} color="#016DAB" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Log out</Text>
                                <Text style={styles.secondheader}>Further secure your account for safety</Text>
                            </View>
                            <Image
                                style={styles.nextBtn}
                                source={require('../assets/assets/icon--light--month-chevron10.png')}
                            />
                        </Pressable>

                        {/* fourth option */}
                        <Pressable style={styles.clickOption} onPress={() => alert("Renew my Policy")}>
                            <View style={styles.blurBg}>
                                <Fontisto name="heart-alt" size={17} color="#016DAB" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={[styles.firstheader, { marginVertical: 5, }]}>About App</Text>
                            </View>
                            <Image
                                style={styles.nextBtn}
                                source={require('../assets/assets/icon--light--month-chevron10.png')}
                            />
                        </Pressable>
                    </ScrollView>
                </View>
            </View>
            <TabNavigation />
        </>
    )
}

export default MyAccount


const styles = StyleSheet.create({

    Option1: {
        flexDirection: "row",
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    body: {
        marginHorizontal: 20,
    },
    header: {
        fontWeight: "700",
        fontSize: 20,
        paddingTop: 10,
        fontFamily: FontFamily.subHeadlineMain,
    },
    card: {
        marginHorizontal: -5,
        marginVertical: 25,
        padding: 10,
        height: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 15,
    },
    clickOption: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: 9,
        marginHorizontal: 6,
    },
    emoji: {
        tintColor: "#0601B4",
    },
    innerText: {
        flexDirection: "column",
        marginVertical: 7,
        alignSelf: 'flex-start',
        paddingHorizontal: 60,
        position: 'absolute'
    },
    blurBg: {
        padding: 13,
        backgroundColor: "whitesmoke",
        width: 47,
        height: 45,
        borderRadius: 40,
        alignItems: 'center',
    },
    firstheader: {
        fontSize: 13,
        fontWeight: "500",
        fontFamily: FontFamily.subHeadlineMain,
        color: "#181D27",
    },
    secondheader: {
        fontSize: 11,
        fontFamily: FontFamily.bodyMain,
        fontWeight: "400",
        paddingVertical: 3,
        color: "#ABABAB"
    },
    nextBtn: {
        width: 9,
        height: 14,
        marginHorizontal: 17,
    },
})