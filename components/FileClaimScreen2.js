import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Keyboard, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import TabNavigation from './TabNavigation';
import CheckBox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

const FileClaimScreen2 = () => {

    //use navigation hook
    const navigation = useNavigation();

    //use state hook
    const [isChecked, setChecked] = useState(false);

    const renderUploadFile = () => {
        return (
            <TouchableOpacity onPress={""}>
                <Ionicons style={styles.uploadIcon} name="md-cloud-upload-outline" size={22} color="black" />
            </TouchableOpacity>
        );
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>File a Claim</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable onPress={() => navigation.navigate("FileClaimScreen1")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>


                {/* -----Claim details in form ----- */}

                <Pressable style={styles.form} onPress={Keyboard.dismiss}>

                    <Text style={[styles.formItem, styles.formheaders]}>3. Upload invoice(s) are you submitting today? </Text>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Bill Name<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Ex. Doctor's Prescription Fees" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Claim Amount<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Enter Claim Amount" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Upload Bills</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput style={styles.input} placeholder="Select file to upload" />
                            {renderUploadFile()}
                        </View>
                    </View>

                    <View style={styles.formItem}>
                        <Text style={[styles.formLabel, { marginTop: 15, }]}>Add New Bill</Text>
                        <View style={styles.checkboxContainer}>
                            <View>
                                <CheckBox
                                    style={styles.checkbox}
                                    color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                            </View>
                            <Text style={styles.label}>{`I confirm that to the best of my knowledge the information I have provided is true and correct. I authorize the release of my pet’s medical records to Petlyf.`} <Text style={{ color: "#F81919" }}> *</Text></Text>
                        </View>
                    </View>

                </Pressable>

            </ScrollView>

            {/* ------- Next Button ---------*/}
            <View>
                <Pressable style={styles.nextButton} onPress={() => navigation.navigate("FileClaimScreen3")}>
                    <Text style={styles.nextText}>SUBMIT</Text>
                </Pressable>
            </View>
            <TabNavigation />
        </>
    )
}

export default FileClaimScreen2


const styles = StyleSheet.create({

    //upload icon
    uploadIcon: {
        marginLeft: -40,
        overflow: "hidden",
        position: "relative",
        zIndex: -2,
    },
    input: {
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#016DAB',
        padding: 5,
        width: '100%',
        fontSize: 13,
        fontFamily: FontFamily.interSemibold,
        position: 'relative',
        paddingHorizontal: 12,
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
        zIndex: 0,
    },

    //checkbox
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        marginLeft: 8,

    },
    checkbox: {
        alignSelf: 'center',
        width: 17,
        height: 17,
        marginVertical: 5,
    },
    label: {
        marginHorizontal: 10,
        marginVertical: 2,
        fontFamily: FontFamily.interMedium,
        fontSize: 11,
        textAlign: 'justify',
        lineHeight: 15
    },

    // form
    formheaders: {
        fontSize: 12,
        fontFamily: FontFamily.interSemibold,
        fontWeight: "500",
        color: "grey",
        marginTop: 12,
    },

    form: {
        flexDirection: 'column',
    },
    formItem: {
        // flexDirection: 'column',
        marginHorizontal: 42,
        marginVertical: 3,
    },
    formLabel: {
        fontFamily: FontFamily.interSemibold,
        fontSize: 13,
        color: '#000000',
        fontWeight: '500',
        paddingVertical: 5,
        paddingHorizontal: 4,
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
        marginHorizontal: 20,
        marginVertical: 5,
        tintColor: 'black',
    },
})