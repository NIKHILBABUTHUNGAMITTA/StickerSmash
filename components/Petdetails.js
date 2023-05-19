import React from 'react';
import { Text, View, Image, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-web';
import { FontFamily } from '../GlobalStyles';
import TabNavigation from './TabNavigation';

const Petdetails = () => {
    const title = 'Pet Behaviour';
    const whydodogs = 'Why Do Dogs Chase Cars ?';
    const dogs = 'Dogs';
    const cats = 'Cats';
    const behaviour = 'Behaviours';
    const published = 'Published by Dule Jackson';
    const paragraph = 'If your pet seems to be called to chase anything with wheels, you might be left wondering, "Why do dogs chase cars?" It is not like they can outrun them, and even if they could, how would they benefit from the end result? The behavior seems strange to say the least, but now you are curious. What causes a dog to chase cars? Let us take a closer look at what may be causing this behavior and how to stop a dog from chasing cars. Although humans may not quite understand it, for dogs, chasing is an instinct. Read More';


    //use dimensions
    const { width, height, fontScale } = useWindowDimensions();

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {/* -----------Dog Image ---------- */}
                    <View style={{ height: 235 }}>
                        <Image
                            style={[styles.dogimg, { width: width }]}
                            source={require('../assets/PetdetailScreen/dogimg.png')} />
                    </View>

                    <View style={[styles.content, { height: height - 300, }]}>
                        {/* -----------Pet Behaviour Text ---------- */}
                        <Text style={styles.titletext}>{title}</Text>

                        {/* -----------Why do dogs chase cars ---------- */}
                        <Text style={styles.whydodogschasecarstext}>{whydodogs}</Text>

                        <View style={styles.buttons}>
                            <Pressable style={styles.button} onPress={() => alert("Dogs is clicked")}>
                                <Image
                                    style={styles.buttonText}
                                    source={require('../assets/PetdetailScreen/dogcatbuttons.png')} />
                                <Text style={styles.dogbutton}>{dogs}</Text>
                            </Pressable>

                            <Pressable style={styles.button} onPress={() => alert("Cats is clicked")}>
                                <Image
                                    style={styles.buttonText}
                                    source={require('../assets/PetdetailScreen/dogcatbuttons.png')} />
                                <Text style={styles.catbutton}>{cats}</Text>
                            </Pressable>

                            <Pressable style={styles.button} onPress={() => alert("Behaviour is clicked")}>
                                <Image
                                    style={styles.buttonText}
                                    source={require('../assets/PetdetailScreen/dogcatbuttons.png')} />
                                <Text style={styles.behavebutton}>{behaviour}</Text>
                            </Pressable>

                        </View>

                        {/* -----------Published By Text  ---------- */}
                        <Text style={styles.publishedbytext}>{published}</Text>

                        {/* -----------Paragraph By Text  ---------- */}
                        <Text style={styles.paragraphtext}>If your pet seems to be called to chase anything with wheels, you might be left wondering, <Text style={{fontStyle:"italic"}}>{`"Why do dogs chase cars?"\n\n`}</Text> It is not like they can outrun them, and even if they could, how would they benefit from the end result? The behavior seems strange to say the least, but now you are curious. What causes a dog to chase cars? Let us take a closer look at what may be causing this behavior and how to stop a dog from chasing cars. Although humans may not quite understand it, for dogs, chasing is an instinct. <Text style={{fontWeight:"700",fontSize:17}}>Read More</Text></Text>
                    </View>

                </View>
            </ScrollView>
            <TabNavigation />
        </>
    );
}




export default Petdetails;



const styles = StyleSheet.create({
    buttonText:{
        fontFamily:FontFamily.bodyMain,
        fontWeight:"500",
        fontSize:12,
    },
    button:{
        marginRight:7,
        paddingHorizontal:20,
        textAlign:'center',
        backgroundColor:"#F0F3F6",
        justifyContent:'center',
        paddingVertical:5,
        borderRadius:6,
    },
    buttons:{
        flexDirection:'row',
        marginVertical:5,
    },
    content: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },
    dogimg: {
        position: 'absolute',
        height: 282,
        top: 0,
        borderRadius: 21
    },

    titletext: {
        color: "#61AF2B",
        fontSize: 16,
        fontWeight: "500",
        paddingTop: 25,
        fontFamily: FontFamily.buttonTextCryptoFilled,
    },

    whydodogschasecarstext: {
        fontSize: 26,
        fontWeight: "700",
        fontFamily: FontFamily.bodyMain,
        color: "#333333",
        paddingTop: 7,
    },

    publishedbytext:{
        fontSize: 16,
        fontWeight: "500",
        fontFamily: FontFamily.bodyMain,
        color: "#8C8C8C",
        paddingTop: 7,
    },
    paragraphtext:{
        fontSize: 16,
        fontWeight: "500",
        fontFamily: FontFamily.buttonTextCryptoFilled,
        color: "#333333",
        paddingTop: 7,
        textAlign: 'justify',
        lineHeight:20,
    }
})