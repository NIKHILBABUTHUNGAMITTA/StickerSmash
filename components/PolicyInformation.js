import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import TabNavigation from './TabNavigation';

const PolicyInformation = () => {
    //usenavigation
    const navigation = useNavigation();

    return (
        <>
            <ScrollView style={styles.container}>

                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ------- Three icons on top ------  */}
                <View style={styles.groupIcons}>
                    <Image
                        style={styles.groupIconsSize}
                        source={require('../assets/assets/group-28-1.png')}
                    />
                    <Image
                        style={styles.groupIconsSize}
                        source={require('../assets/assets/group-28-2.png')}
                    />
                    <Image
                        style={styles.groupIconsSize}
                        source={require('../assets/assets/group-28-3.png')}
                    />
                </View>

                <View>
                    <Pressable onPress={() => navigation.navigate("Dashboard")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* ----- arya mullar image -------- */}
                <View style={styles.userImage}>
                    <Image
                        style={styles.userLogo}
                        source={require('../assets/assets/photo--alice.png')}
                    />
                </View>
                <Text style={styles.aryaMuller}>Arya Muller</Text>
                <View style={styles.stats}>
                    <Text style={styles.statsText}>STATS</Text>
                    <Image
                        style={styles.line12}
                        source={require('../assets/assets/line-12.png')}
                    />
                    <Text style={styles.statsText}>ACTIVITY</Text>
                </View>

                {/* ----------- policyInformation ------------- */}
                <View>
                    {/* ------- Policy Number and Policy Premium --------- */}
                    <View style={styles.policydata}>
                        {/* ----Policy Number and Policy Premium------ */}
                        <View style={styles.row}>
                            <Pressable style={styles.policyItem}>
                                <Image
                                    style={styles.streak}
                                    source={require('../assets/assets/group-2888972.png')}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.policydata}>Policy Number</Text>
                                    <Text style={styles.policydata2}>XX-XX-XX-XX</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.policyItem}>
                                <Image
                                    style={styles.streak}
                                    source={require('../assets/assets/group-2888972.png')}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.policydata}>Policy Premium</Text>
                                    <Text style={styles.policydata2}>$750 / P.A</Text>
                                </View>
                            </Pressable>
                        </View>

                        {/* ------ Start date and End date */}
                        <View style={styles.row}>
                            <Pressable style={styles.policyItem}>
                                <Image
                                    style={styles.streak}
                                    source={require('../assets/assets/group-2888972.png')}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.policydata}>Start Date</Text>
                                    <Text style={styles.policydata2}>DD-MM-YYYY</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.policyItem}>
                                <Image
                                    style={styles.streak}
                                    source={require('../assets/assets/group-2888972.png')}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.policydata}>End Date</Text>
                                    <Text style={styles.policydata2}>DD-MM-YYYY</Text>
                                </View>
                            </Pressable>
                        </View>

                        {/* ----- Location Covered By policy ---------- */}
                        <View>
                            <Pressable style={styles.policyItem2}>
                                <Image
                                    style={styles.streak}
                                    source={require('../assets/assets/group-2888972.png')}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.policydata}>{`Location Covered \nBy Policy`}</Text>
                                    <Text style={styles.policydata2}>View Location</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TabNavigation />
        </>
    )
}

export default PolicyInformation


const styles = StyleSheet.create({
    backbutton: {
        width: 30,
        height: 30,
        marginHorizontal: 20,
        tintColor: 'black',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 30,
    },
    policyItem2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 14,
        paddingVertical: 10,
        paddingHorizontal: 8,
        paddingRight: 25,
        backgroundColor: "#016DAB",
        borderRadius: 20,
        textAlign: 'left'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    streak: {
        width: 30,
        height: 30,
    },
    policydata: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.interSemibold,
        fontWeight: "600",
        textAlign: "left",
        color: "white",
    },
    policydata2: {
        fontSize: 14,
        fontFamily: FontFamily.interSemibold,
        fontWeight: "600",
        textAlign: "left",
        color: "#9098A3",
    },
    policyItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 8,
        width: 170,
        paddingVertical: 14,
        paddingHorizontal: 3,
        backgroundColor: "#016DAB",
        borderRadius: 20,
        textAlign: 'left'
    },
    container: {
        flex: 1,
    },
    groupIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    groupIconsSize: {
        width: 24,
        height: 24,
        margin: 8,
    },
    userImage: {
        marginTop: 20,
        alignSelf: 'center'
    },
    userLogo: {
        width: 200,
        height: 200
    },
    aryaMuller: {
        fontStyle: 'normal',
        fontSize: 60,
        fontWeight: '700',
        fontFamily: FontFamily.interMedium,
        textAlign: 'center',
        color: "#3D7CA6",
        marginTop: -5,
    },
    stats: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
    },
    statsText: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: FontFamily.interRegular,
        paddingHorizontal: 20,
    },
    line12: {
        width: 3,
        height: 30,
    }
})