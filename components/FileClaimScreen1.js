import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import TabNavigation from './TabNavigation';
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { FontFamily, FontSize } from '../GlobalStyles';
import CheckBox from 'expo-checkbox';

const FileClaimScreen1 = () => {
    //use navigation hook
    const navigation = useNavigation();

    //use state hook
    const [isChecked, setChecked] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#f1f1f1", padding: 20, marginBottom: 7, }}></View>

                {/* ----- My claims History ----- */}
                <Text style={styles.headerText}>File a Claim</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable onPress={() => navigation.navigate("Dashboard")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>

                {/* -----Claim details in form ----- */}

                <ScrollView style={styles.form}>
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
                        <Text style={styles.formLabel}>2. Reason for VET Visiting<Text style={{ color: "#F81919" }}> *</Text></Text>

                        {/* --- row1---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Preventive visit</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Skin allergies</Text>
                            </View>
                        </View>

                        {/* --- row2---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Preventive visit</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Skin allergies</Text>
                            </View>
                        </View>

                        {/* --- row3---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Preventive visit</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Skin allergies</Text>
                            </View>
                        </View>

                        {/* --- row4---- */}
                        <View style={styles.checkboxes}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox} color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                                <Text style={styles.label}>Preventive visit</Text>
                            </View>
                        </View>


                        <TextInput multiline={true} numberOfLines={3} style={styles.formControl} placeholder="SHIRO" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Name of body part <Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Arya Muller" />
                    </View>
                </ScrollView>
            </View>


            {/* ------- Next Button ---------*/}
            <View>
                <Pressable style={styles.nextButton} onPress={() => navigation.navigate("FileClaimScreen2")}>
                    <Text style={styles.nextText}>NEXT</Text>
                </Pressable>
            </View>
            <TabNavigation />

        </>
    )
}

export default FileClaimScreen1


const styles = StyleSheet.create({

    //label
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    checkboxes: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'center',
        width: 17,
        height: 17,
        marginLeft:5,
    },
    label: {
        marginHorizontal: 8,

    },

    // form
    formheaders: {
        fontSize: 12,
        FontFamily: FontFamily.interBold,
        fontWeight: "600",
        color: "grey",
        paddingHorizontal: 10,
    },

    form: {
        flexDirection: 'column',
    },
    formItem: {
        flexDirection: 'column',
        marginHorizontal: 40,
        marginVertical: 7,
    },
    formLabel: {
        fontFamily: FontFamily.interBold,
        fontSize: 12,
        color: '#000000',
        fontWeight: '500',
        paddingVertical: 5,
        paddingHorizontal: 4,
    },
    formControl: {
        borderWidth: 1,
        padding: 6,
        borderColor: '#016DAB',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 14,
        fontFamily: FontFamily.interBold,
        justifyContent:'flex-start',
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