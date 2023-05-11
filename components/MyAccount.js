import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, } from 'react-native';
import { FontFamily } from '../GlobalStyles';
import TabNavigation from './TabNavigation';
import { Ionicons, Octicons } from '@expo/vector-icons';

const MyAccount = () => {
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
                                <Octicons name="shield-check" size={19} color="#0601B4" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Pet Owner</Text>
                                <Text style={styles.secondheader}>Manage your sum assured</Text>
                            </View>
                            <View style={styles.Option1}>
                                <Ionicons name="ios-warning" size={20} color="red" />
                                <Image
                                    style={styles.nextBtn}
                                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                                />
                            </View>
                        </Pressable>

                        {/* --- second option---  */}
                        <Pressable style={styles.clickOption} onPress={() => alert("Additional Coverage")}>
                            <View style={styles.blurBg}>
                                <Octicons name="shield-check" size={19} color="#0601B4" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Additional Coverage</Text>
                                <Text style={styles.secondheader}>Add-ins in policy</Text>
                            </View>
                            <Image
                                style={styles.nextBtn}
                                source={require('../assets/assets/icon--light--month-chevron10.png')}
                            />
                        </Pressable>

                        {/* third option */}
                        <Pressable style={styles.clickOption} onPress={() => alert("Change Ownership")}>
                            <View style={styles.blurBg}>
                                <Octicons name="shield-check" size={19} color="#0601B4" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Change Ownership</Text>
                                <Text style={styles.secondheader}>Change your Pet’s ownership</Text>
                            </View>
                            <Image
                                style={styles.nextBtn}
                                source={require('../assets/assets/icon--light--month-chevron10.png')}
                            />
                        </Pressable>

                        {/* fourth option */}
                        <Pressable style={styles.clickOption} onPress={() => alert("Renew my Policy")}>
                            <View style={styles.blurBg}>
                                <Octicons name="shield-check" size={19} color="#0601B4" />
                            </View>
                            <View style={styles.innerText}>
                                <Text style={styles.firstheader}>Renew My Policy</Text>
                                <Text style={styles.secondheader}>Policy renewal</Text>
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
        flexDirection:"row",
        alignItems:'center',
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
        height: 255,
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
        margin: 6,
    },
    emoji: {
        tintColor: "#0601B4",
    },
    innerText: {
        flexDirection: "column",
        marginVertical: 5,
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
        textAlign: 'left',
        color: "#181D27",
    },
    secondheader: {
        fontSize: 11,
        fontFamily: FontFamily.bodyMain,
        fontWeight: "400",
        paddingVertical: 5,
        color: "#ABABAB"
    },
    nextBtn: {
        width: 9,
        height: 14,
        marginHorizontal: 17,
    },
})