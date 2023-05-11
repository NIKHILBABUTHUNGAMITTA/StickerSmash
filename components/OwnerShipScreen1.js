import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import TabNavigation from './TabNavigation';
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView, Keyboard } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import CheckBox from 'expo-checkbox';

const OwnerShipScreen1 = () => {
    //use navigation hook
    const navigation = useNavigation();

    //use state hook
    const [isChecked, setChecked] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>Ownership Transfer</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable style={{width:50,marginLeft:15}} onPress={() => navigation.navigate("Servicing")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* -----Claim details in form ----- */}

                <ScrollView style={styles.form} onPress={Keyboard.dismiss}>
                    {/* <Text style={[styles.formItem, styles.formheaders]}> 1. Reason for this request </Text> */}
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>1. Reason for this request</Text>
                        <TextInput style={styles.formControl} placeholder="Name change, new owner, etc" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Current Pet name <Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Bruno" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Pet New name <Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Tommy" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Pet's Breed<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Beagle" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Date of Birth<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="01-Apr-2023" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>2. Request Transfer of owner<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="David" />
                    </View>

                    <View style={styles.formItem}>
                    <Text style={styles.formLabel}>Address<Text style={{ color: "#F81919" }}> *</Text></Text>
                         <TextInput multiline={true} maxLength={2000}
                            style={[styles.formControl, { height: 86, textAlignVertical: 'top', justifyContent: 'flex-start', }]}
                            placeholder="Enter your complete address " />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Phone Number<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Enter your mobile number" />
                    </View>
                    <View style={styles.formItem}>
                        <View style={styles.checkboxContainer}>
                            <View>
                                <CheckBox
                                    style={styles.checkbox}
                                    color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                            </View>
                            <Text style={styles.label1}>{`I accept this transfer of ownership and request that Petlyf issue a new policy to me covering the pet referenced above, and accept financial responsibility for this policy when a new policy number and effective date are issued`}</Text>
                        </View>
                    </View>
                    
                    <View>
                        <Pressable style={styles.nextButton} onPress={() => navigation.navigate("OwnerShipScreen2")}>
                            <Text style={styles.nextText}>SUBMIT</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>


            {/* ------- Next Button ---------*/}

            <TabNavigation />

        </>
    )
}

export default OwnerShipScreen1


const styles = StyleSheet.create({

    //label
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    checkboxes: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'center',
        width: 16,
        height: 16,
        margin: 5,
    },
    label: {
        marginHorizontal: 3,
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
        padding: 14,
        marginHorizontal: 30,
        marginBottom: 20,
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
        height: 40,
        marginHorizontal:10,
        marginBottom: 5,
        tintColor: 'black',
    },
    label1: {
        marginHorizontal:7,
        marginVertical: 3,
        fontFamily: FontFamily.interMedium,
        fontSize: 12,
        textAlign: 'justify',
        lineHeight: 15
    },
})
