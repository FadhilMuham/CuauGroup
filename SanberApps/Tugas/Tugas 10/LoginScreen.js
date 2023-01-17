import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



export default function Login(){
    const [text, onChangeText] = React.useState(null);
    const [Password] = React.useState(null);

    return(

        <View style={styles.container} >
            {/* mau naro gambar gabisa kak:')' */}
            <View style={styles.head}>
                <Text style={styles.title}>LOG IN</Text>        

                <View style={styles.body}>

                        <Text style={styles.form}> Username</Text>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder={'Username'}
                            />
                            </SafeAreaView>

                        <Text style={styles.form}> E-mail</Text>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                value={text}
                                placeholder={'E-mail'}
                            />
                            </SafeAreaView>    
                        
                        <Text style={styles.form}> Password</Text>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                value={Password}
                                placeholder={'Password'}
                                secureTextEntry={true}
                            />
                            </SafeAreaView>


                        <Text></Text>
                    

                    <View style={styles.foot}>

                            <View style={styles.fixToText}>
                                <Button
                                style = {styles.tombol}
                                title="        Login        "
                                
                                />
                                <Text style={styles.or}>OR</Text>
                                <Button
                                style = {styles.tombol}
                                title="        Daftar        "
                                
                                />
                            </View>
                        

                    </View>
                
                </View>
            
            </View>
       
        </View>
    )
}

const styles = StyleSheet.create({

    head:{
        height: 180,
        // backgroundColor: "rgba(0,10,0,0.10)"
    },
    body:{
        height:310,
        backgroundColor: "rgba(0,10,0,0.10)",
        padding:10
    },
    title:{
        fontSize:36,
        textAlign:'center',
        fontWeight: 'bold',
        padding:70
        
    },
    form:{
        fontSize:15,
        textAlign:"left",
        paddingHorizontal:7,
        paddingTop:10
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: 20
        
    },
    or:{
        paddingVertical: 10
    },
    tombol:{
        paddingHorizontal:50,
    }
 
})
