import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Avatar, Headline, Button } from 'react-native-paper';

const SelectUser = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Headline style={styles.text}> ¿Qué tipo de usuario eres? </Headline>

            <Avatar.Text style={styles.avatar} size={163} label="MB" />

            <Button style={styles.containedButton} mode='contained' onPress = {()=>navigation.navigate('Registro de Proveedor')}>Cuenta del proveedor</Button>
            <Button style={styles.containedButton} mode='contained' onPress = {()=>navigation.navigate('Registro de Cliente')}>Cuenta del cliente</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: "center",
    },
    text: {
        marginTop: 54,
        color: "#FFFFFF",
    },
    avatar: {
        marginTop: 54,
        marginBottom: 102,
    },
    containedButton: {
        marginBottom: 18,

        color: "#042741",
        borderColor: "#FFFFFF"
    },
});

export default SelectUser