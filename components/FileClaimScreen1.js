import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import TabNavigation from './TabNavigation';
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView, Keyboard } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import CheckBox from 'expo-checkbox';

const FileClaimScreen1 = () => {

    //use state hook
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
    const [isChecked7, setChecked7] = useState(false);

    //use navigation hook
    const navigation = useNavigation();

    //create a obj using state
    const [claim, setClaim] = useState({
        policyNumber: "",
        petName: "",
        yourName: "",
        reasonForVETVisit: [],
        nameOfBodyPart: "",
    })

    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>File a Claim</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable style={{ width: 50, marginLeft: 15 }} onPress={() => navigation.navigate("Dashboard")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* -----Claim details in form ----- */}

                <ScrollView style={styles.form} onPress={Keyboard.dismiss}>
                    <Text style={[styles.formItem, styles.formheaders]}>1.Tell Us About You and Your Pet </Text>
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Policy Number<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="ABCD-123-QW" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Your Pet's Name<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Bruno" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Your Name<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Swayamsiddha Kar" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={[styles.formLabel, styles.formheaders]}>2. Reason for VET Visiting<Text style={{ color: "#F81919" }}> *</Text></Text>

                        {/* --- row1---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked1 ? 'grey' : undefined}
                                    value={isChecked1} onValueChange={setChecked1} />
                                <Text style={styles.label}>Preventive visit</Text>
                            </View>
                            <View style={[styles.checkboxContainer, { marginLeft: 64 }]}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked2 ? 'grey' : undefined}
                                    value={isChecked2} onValueChange={setChecked2} />
                                <Text style={styles.label}>Skin allergies</Text>
                            </View>
                        </View>

                        {/* --- row2---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked3 ? 'grey' : undefined}
                                    value={isChecked3} onValueChange={setChecked3} />
                                <Text style={styles.label}>Vomiting/upset stomach</Text>
                            </View>
                            <View style={[styles.checkboxContainer, { marginLeft: 10 }]}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked4 ? 'grey' : undefined}
                                    value={isChecked4} onValueChange={setChecked4} />
                                <Text style={styles.label}>Skin infection</Text>
                            </View>
                        </View>

                        {/* --- row3---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked5 ? 'grey' : undefined}
                                    value={isChecked5} onValueChange={setChecked5} />
                                <Text style={styles.label}>Ear infection</Text>
                            </View>
                            <View style={[styles.checkboxContainer, { marginLeft: 80 }]}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked6 ? 'grey' : undefined}
                                    value={isChecked6} onValueChange={setChecked6} />
                                <Text style={styles.label}>Arthritis</Text>
                            </View>
                        </View>

                        {/* --- row4---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked7 ? 'grey' : undefined}
                                    value={isChecked7} onValueChange={setChecked7} />
                                <Text style={styles.label}>Other (Please Specify)</Text>
                            </View>
                        </View>


                        <TextInput multiline={true} maxLength={2000}
                            style={[styles.formControl, { height: 86, textAlignVertical: 'top', justifyContent: 'flex-start', marginVertical: 3, }]}
                            placeholder="Enter details maximum of 2000 characters are allowed" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Name of body part <Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Enter the effected body part" />
                    </View>
                    <View>
                        <Pressable style={styles.nextButton} onPress={() => navigation.navigate("FileClaimScreen2")}>
                            <Text style={styles.nextText}>NEXT</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>


            {/* ------- Next Button ---------*/}

            <TabNavigation />

        </>
    )
}

export default FileClaimScreen1


const styles = StyleSheet.create({

    //label
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    checkboxes: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'center',
        width: 17,
        height: 17,
        marginLeft: 3,
    },
    label: {
        marginHorizontal: 5,
        fontFamily: FontFamily.interSemibold,
        fontSize: 12,
    },

    // form
    formheaders: {
        fontSize: 12,
        fontFamily: FontFamily.interSemibold,
        fontWeight: "500",
        color: "grey",
        paddingHorizontal: 5,
        marginTop: 10,
    },

    form: {
        flexDirection: 'column',
    },
    formItem: {
        // flexDirection: 'column',
        marginHorizontal: 40,
        marginVertical: 3,
    },
    formLabel: {
        fontFamily: FontFamily.interSemibold,
        fontSize: 12,
        color: '#000000',
        fontWeight: '500',
        paddingVertical: 5,
        paddingHorizontal: 4,
    },
    formControl: {
        borderWidth: 1,
        padding: 5,
        borderColor: '#016DAB',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 13,
        fontFamily: FontFamily.interSemibold,
        justifyContent: 'flex-start',
    },

    nextButton: {
        backgroundColor: "#016DAB",
        justifyContent: 'center',
        padding: 15,
        marginHorizontal: 40,
        marginVertical: 30,
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
        width: 35,
        height: 40,
        marginHorizontal: 5,
        marginBottom: 5,
        tintColor: 'black',
    },
})