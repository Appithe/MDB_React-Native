import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const PerfilUsuario = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image style={styles.avatar} size={130} source={require('../src/utils/assets/imagen.jpg')} />
            <View style={{marginTop: 40}}>
                <TextInput
                    label="Nombre de usuario"
                    style={styles.textInput}
                    icon="folder"
                />
                <TextInput
                    label="Email"
                    style={styles.textInput}
                    icon="folder"
                />
                <TextInput
                    label="Teléfono"
                    style={styles.textInput}
                    icon="folder"
                />
                <Button mode='outlined' color={Primary.Primary200} style={styles.outbutton} onPress={() => navigation.navigate('Inicio de Sesion')}>Cerrar sesion</Button>
            </View>
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
        marginTop: 30,
        marginBottom: 20,
        alignItems: "center",
    },
    outbutton: {
        marginTop: 180,
        alignItems: "flex-end"
    },
    textInput: {
        margin: 5,
        height: 72,
        width: 328,
        color: Primary.Primary100
    },
});

export default PerfilUsuario