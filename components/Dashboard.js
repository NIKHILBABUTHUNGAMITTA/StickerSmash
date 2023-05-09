import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import TabNavigation from './TabNavigation';

const Dashboard = () => {
    //usenavigate hook
    const navigation = useNavigation();

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 3, }}></View>
                {/* ----- bell logo with action -------- */}
                <View style={styles.innerHeader}>
                    <Text style={styles.welcomeBack}>Welcome back,
                        <Text style={styles.deep}>{`\nDeep!`}</Text>
                    </Text>
                    <Pressable onPress={() => { alert("Notifications icon is pressed") }}>
                        <Image
                            style={styles.bellIcon}
                            source={require('../assets/assets/bellremovebgpreview-1.png')}
                        />
                    </Pressable>
                </View>

                <View style={styles.petlogo}>
                    <Image style={styles.image39Icon} source={require("../assets/assets/image-391.png")} />
                    <Text style={styles.petlogoText}>Petlyf Solutions</Text>
                </View>


                <View style={styles.menu}>

                    {/* ------- My account ---------- */}
                    <View style={styles.menuItem}>
                        <Pressable style={[styles.menuInnerItem, { backgroundColor: "#c0faf7" }]} onPress={() => alert("My account is clicked")}>
                            <View style={styles.userprofile256Bg}>
                                <Image style={styles.userprofile256} source={require("../assets/assets/userprofile256-1.png")} />
                            </View>
                            <Text style={[styles.menuText, { paddingHorizontal: 30 }]}>My Account</Text>
                        </Pressable>
                    </View>

                    {/* ------- My Policy ---------- */}
                    <View style={styles.menuItem}>
                        <Pressable style={[styles.menuInnerItem, { backgroundColor: Color.honeydew_200 }]} onPress={() => navigation.navigate("PolicyInformation")}>
                            <View style={styles.dataprotectionremovebgpreviewBg}>
                                <Image style={styles.dataprotectionremovebgpreview} source={require("../assets/assets/dataprotectionremovebgpreview-2.png")} />
                            </View>
                            <Text style={[styles.menuText, { paddingHorizontal: 30 }]}>My Policy</Text>
                        </Pressable>
                    </View>

                    {/* ------- Pet Details ---------- */}
                    <View style={styles.menuItem}>
                        <Pressable style={[styles.menuInnerItem, { backgroundColor: Color.cornsilk }]} onPress={() => alert("Pet details is clicked")}>
                            <View style={styles.pawremovebgpreviewBg}>
                                <Image style={styles.pawremovebgpreview} source={require("../assets/assets/pwt-dextails-pawremovebgpreview-11.png")} />
                            </View>
                            <Text style={[styles.menuText, { paddingHorizontal: 30 }]}>Pet Details</Text>
                        </Pressable>
                    </View>

                    {/*---------- Track my Pet ----------- */}
                    <View style={styles.menuItem}>
                        <Pressable style={[styles.menuInnerItem, { backgroundColor: Color.lavender_200 }]} onPress={() => alert("Track My Pet is clicked")}>
                            <View style={styles.trackingremovebgpreviewBg}>
                                <Image style={styles.trackingremovebgpreview} source={require("../assets/assets/trackingremovebgpreview-1.png")} />
                            </View>
                            <Text style={[styles.menuText, { paddingHorizontal: 30 }]}>Track My Pet</Text>
                        </Pressable>
                    </View>

                    {/*---------- My claim history---------- */}
                    <View style={styles.menuItem}>
                        <Pressable style={[styles.menuInnerItem, { backgroundColor: Color.aliceblue }]} onPress={() => navigation.navigate("ClaimHistory")}>
                            <View style={styles.policyremovebgpreviewBg}>
                                <Image style={styles.policyremovebgpreview} source={require("../assets/assets/premium-policyremovebgpreview-1.png")} />
                            </View>
                            <Text style={[styles.menuText, { paddingHorizontal: 30 }]}>My Claim History</Text>
                        </Pressable>
                    </View>

                    {/* ----------- PURRFect ChatBot ---------- */}
                    <View style={styles.menuItem}>
                        <Pressable style={[styles.menuInnerItem, { backgroundColor: "#c0faf7" }]} onPress={() => alert("PURRFect ChatBot is clicked")}>
                            <View style={styles.image401Bg}>
                                <Image style={styles.image401} source={require("../assets/assets/image-401.png")} />
                            </View>
                            <Text style={[styles.menuText, { paddingHorizontal: 30 }]}>PURRFect ChatBot</Text>
                        </Pressable>
                    </View>
                </View>

            </ScrollView>
            <TabNavigation />
        </>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    innerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: Color.text,
        paddingHorizontal: 25,
    },
    welcomeBack: {
        fontFamily: FontFamily.plusJakartaSansBold,
        fontWeight: '700',
        fontSize: FontSize.size_7xl,
    },
    deep: {
        fontFamily: FontFamily.plusJakartaSansRegular,
    },
    bellIcon: {
        width: 18,
        height: 18,
        marginTop: 10,
    },
    petlogo: {
        alignSelf: 'center',
        padding: 5,
    },
    image39Icon: {
        width: 266,
        height: 159,
    },
    petlogoText: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.poppinsRegular,
        color: Color.text,
        paddingTop: 4,
        textAlign: 'center',
        fontWeight: "600",
    },
    //menuItem styles
    menu: {
        flexDirection: 'column',
    },
    menuItem: {
        marginHorizontal: 40,
        marginVertical: 5,
    },
    menuInnerItem: {
        flexDirection: 'row',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    // my account styles
    userprofile256: {
        width: 36,
        height: 36,
    },
    userprofile256Bg: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
        backgroundColor: "rgba(133, 203, 213, 0.75)",
    },
    menuText: {
        fontFamily: FontFamily.plusJakartaSansSemibold,
        fontWeight: "600",
        fontSize: FontSize.subheading_size,
        color: Color.text,
    },
    // mypolicy styles
    dataprotectionremovebgpreview: {
        width: 38,
        height: 38,
    },
    dataprotectionremovebgpreviewBg: {
        paddingVertical: 13,
        paddingHorizontal: 24,
        borderRadius: 30,
        backgroundColor: "rgba(133, 203, 213, 0.75)",
    },
    // petdetails
    pawremovebgpreview: {
        width: 40,
        height: 40,
    },
    pawremovebgpreviewBg: {
        paddingVertical: 12,
        paddingHorizontal: 23,
        borderRadius: 30,
        backgroundColor: Color.khaki,
    },
    // Track my Pet
    trackingremovebgpreview: {
        width: 53,
        height: 53,
    },
    trackingremovebgpreviewBg: {
        paddingVertical: 7,
        paddingHorizontal: 17,
        borderRadius: 30,
        backgroundColor: Color.plum,
        alignItems: 'center'
    },

    //My claim history
    policyremovebgpreviewBg: {
        paddingTop: 15,
        paddingBottom: 8,
        paddingHorizontal: 23,
        borderRadius: 30,
        backgroundColor: Color.deepskyblue,
        alignItems: 'center'
    },
    policyremovebgpreview: {
        width: 40,
        height: 40,
    },
    //chatbot
    image401: {
        width: 35,
        height: 35,
    },
    image401Bg: {
        padding: 14,
        paddingHorizontal: 23,
        borderRadius: 30,
        backgroundColor: Color.mediumturquoise,
        alignItems: 'center'
    }
});