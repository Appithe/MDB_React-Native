import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Headline, Button } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Headline style={styles.text}> Mercadito de bolsillo </Headline>

            <Avatar.Image style={styles.avatar} size={163} source={require('../src/utils/assets/imagen.jpg')}/>

            <Button mode='contained' onPress={() => navigation.navigate('Inicio de Sesion')}>Inicio de sesión</Button>
            <Button mode='outlined' color={Primary.Primary200} style={styles.outbutton} onPress={() => navigation.navigate('Tipo de usuario')}>Crear cuenta</Button>
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
        marginTop: 140,
        color: "#FFFFFF",
        fontSize: 34,
    },
    avatar: {
        marginTop: 56,
        marginBottom: 102,
    },
    outbutton: {
        marginTop: 20,
        borderColor: "#FFFFFF"
    },
});

export default Home