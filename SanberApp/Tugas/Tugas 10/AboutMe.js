import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button } from "react-native";


export default function AboutMe(){


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                                <Text style={styles.title}>AboutMe</Text>
                                            <Text style={styles.subtitle}>Portofolio</Text>
                                    <View style={styles.topbody}>
                                        <View style={styles.kiri}>
                                        <Text style={styles.harusnya}>Foto</Text>

                                        </View>
                                        <View style={styles.kanan}>
                                            <Text style={styles.nama}>Muhammad Fadhil</Text>
                                            <Text style={styles.job}>React Native Developer</Text>
                                        </View>
                                        <View style={styles.footer}>

                                        </View>

                                </View>
                                <View style={styles.body}>
                                    <View style={styles.github}>
                                        <Text style = {styles.logo}>[Github]</Text>
                                        <Button
                                        style = {styles.tombol}
                                        title="Link 1"
                                        
                                        />
                                    </View>
                                    <View style={styles.gitlab}>
                                        <Text style = {styles.logo}>[Gitlab]</Text>
                                        <Button
                                        style = {styles.tombol}
                                        title="Link 2"
                                        
                                        />
                                    </View>

                                </View>
                                <View style={styles.footer}>
                                    <View style={styles.wa}>
                                        <Text style={{paddingBottom:20, textAlign:'center'}}>[Logo]</Text>
                                        <Text >(whatsapp)</Text>
                                    </View>
                                    <View style={styles.email}>
                                        <Text style={{paddingBottom:20, textAlign:'center'}}>[Logo]</Text>
                                        <Text >(gmail.com)</Text>
                                    </View>
                                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
header:{
    height:100,
    // backgroundColor:'grey'
},
subtitle:{
    textAlign:'center'
},
title:{
    fontSize:25,
    textAlign:'center',
    paddingTop:50,
    fontWeight:'bold'
},
topbody:{
    height:150,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:50,
    paddingTop: 30,
    // backgroundColor:'blue'
},
kiri:{
    height:100,
    width:100,
    backgroundColor:'lightblue',
    
    
},
kanan:{
    height:100,
    width:180,
    marginLeft:10

},
nama:{
    fontSize:20
},
harusnya:{
    textAlign:'center',
    padding:10
},
body:{
    height:200,
    width:260,
    backgroundColor: "rgba(0,10,0,0.10)",
    marginHorizontal:50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding:20,
    paddingTop: 10,
    alignItems:'center'
},
github:{
    marginRight:50,
},
contact:{
    
},
tombol:{
    padding:50
},
logo:{
    padding:20
},
footer:{height:130,
    width:260,
    backgroundColor: "rgba(0,10,0,0.20)",
    marginHorizontal:50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding:20,
    paddingVertical:30,
    alignItems:'center',
    borderTop:10,

},

 
})
