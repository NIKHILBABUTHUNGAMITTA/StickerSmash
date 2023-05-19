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
                <Text style={styles.headerText}>Renew My Policy</Text>

                {/* ----- back button ------ */}
                <View>
                    <Pressable style={{width:50,marginLeft:15}} onPress={() => navigation.navigate("Servicing")}>
                        <Image source={require("../assets/assets/group.png")} style={styles.backbutton} />
                    </Pressable>
                </View>



                {/* -----Claim details in form ----- */}

                <ScrollView style={styles.form} onPress={Keyboard.dismiss}>

                    <View>
                        <Text style={styles.input1}>
                        Existing Policy Number
                        </Text>
                        <Text style={styles.input2}>XX-XX-XX-XX</Text>
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}> New Policy Start Date</Text>
                        <TextInput style={styles.formControl} placeholder="DD-MM-YYYY" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>New Policy End Date <Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="DD-MM-YYYY" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}> New Policy Number<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="XX-XX-XX-XX" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>New Premium Amount<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="$ XXX" />
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Policy Holder Name<Text style={{ color: "#F81919" }}> *</Text></Text>
                        <TextInput style={styles.formControl} placeholder="Arya Muller" />
                    </View>
                    <View style={styles.formItem}>
                        <View style={styles.checkboxContainer}>
                            <View>
                                <CheckBox
                                    style={styles.checkbox}
                                    color={isChecked ? 'grey' : undefined}
                                    value={isChecked} onValueChange={setChecked} />
                            </View>
                            <Text style={styles.label1}>{`By clicking here, I state that I have read and understood `}<Text style={{fontWeight:"500",fontSize:15,textDecorationLine: 'underline',color:'#FF0000'}}>terms and conditions.</Text></Text>
                        </View>
                    </View>
                    
                    <View>
                    <Pressable
          style={[styles.nextButton, isChecked ? {} : styles.nextButtonDisabled]} // Add disabled style
          onPress={() => isChecked ? alert("RenewalMyPolicy") : alert("RenewalMyPolicy")}
          disabled={!isChecked} // Disable the button when checkbox is not checked 
          >
          <Text style={styles.nextText}>Proceed To Pay</Text>
        </Pressable>
                        {/* <Pressable style={styles.nextButton} onPress={() => alert("RenewalMyPolicy")}>
                            <Text style={styles.nextText}>Proceed To Pay</Text>
                        </Pressable> */}
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
        marginVertical: 40,
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
    // input2 :{
    //     fontWeight:"500",
    //     fontSize:17,
        // textDecorationLine: 'underline',
        // // color:'#FF0000'
    // },

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
        marginHorizontal: 120,
        marginBottom: 30,
        borderRadius: 15,
        
    },
    nextButtonDisabled: {
        backgroundColor: 'grey',
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
    input1 :{
        textAlign :'center',
        fontSize: 16,
        fontFamily: FontFamily.interMedium,
        paddingVertical: 2,
        color: '#000000',
        fontWeight: '500',

    },
    input2:{
        textAlign :'center',
        fontSize: 11,
        fontFamily: FontFamily.interMedium,
        paddingVertical: 2,
        color: '#ABABAB',
        fontWeight: '400',
        marginBottom:25,

    }
    
})