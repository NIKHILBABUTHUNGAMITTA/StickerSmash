import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Octicons } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    TextInput,
    ImageBackground,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import TabNavigation from "./TabNavigation";

const Servicing = () => {

    const navigation = useNavigation();
    const { width, height, fontScale } = useWindowDimensions();

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require("../assets/assets/image-41.png")} style={[styles.flexCoulmn, { height: height / 2.8 }]} resizeMode="cover">
                    <View style={{ padding: 20, marginBottom: 7, }} />
                    <View style={styles.body}>
                        <Text style={styles.header}>Servicing</Text>
                        <Image style={styles.photoalice} source={require("../assets/assets/photo--alice.png")} />
                        <ScrollView style={styles.card}>
                            {/* First option */}
                            <Pressable style={styles.clickOption} onPress={() => alert("Increase Coverage")}>
                                <View style={styles.blurBg}>
                                    <Octicons name="shield-check" size={19} color="#0601B4" />
                                </View>
                                <View style={styles.innerText}>
                                    <Text style={styles.firstheader}>Increase Coverage</Text>
                                    <Text style={styles.secondheader}>Manage your sum assured</Text>
                                </View>
                                <Image
                                    style={styles.nextBtn}
                                    source={require('../assets/assets/icon--light--month-chevron10.png')}
                                />
                            </Pressable>

                            {/* second option  */}
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

                </ImageBackground>
            </View>
            <TabNavigation />
        </>
    )
}

export default Servicing

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        marginHorizontal: 20,
    },
    header: {
        fontWeight: "700",
        fontSize: 20,
        fontFamily: FontFamily.subHeadlineMain,
    },
    photoalice: {
        width: 76,
        height: 76,
        marginTop: 30,
    },
    flexCoulmn: {
        flexDirection: 'column',
        borderRadius:30,
    },
    card: {
        marginHorizontal: -5,
        marginVertical: 35,
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