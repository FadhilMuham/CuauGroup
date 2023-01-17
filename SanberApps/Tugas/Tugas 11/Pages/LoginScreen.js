import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


export default function LoginScreen({navigation}) {
    
    
    return (
        <View>
            <Text> ini login screen </Text>

            <Button 
            title='Submit'
            onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}

const styles = StyleSheet.create({})
