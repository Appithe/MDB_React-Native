import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Subheading, Divider, Caption } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const InicioSesion = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 154 }}>
                <TextInput
                    left={<TextInput.Icon name="account-circle" />}
                    label="Nombre de usuario"
                    style={{width: 300, margin: 5}} />
                <TextInput
                    right={<TextInput.Icon name="eye" />}
                    left={<TextInput.Icon name="lock" />}
                    label="Contraseña"
                    style={{width: 300, margin: 5}} />
            </View>
            <View style={styles.containedButton}>
                <Button mode='contained' onPress={() => navigation.navigate('Home')}>Iniciar sesión</Button>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.changePage}>
                <Subheading style={styles.text}>Nuevo usuario?</Subheading>
                <Button mode='text' onPress={() => navigation.navigate('Tipo de usuario')}>
                    <Caption style={{ color: Primary.Primary200 }}>Crear una cuenta</Caption>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: 'center'
    },
    textInput: {
        margin: 5,
        //selectionColor: Primary.Primary100,
    },
    containedButton: {
        marginTop: 82,
    },
    text: {
        color: Primary.Primary100,
    },
    changePage: {
        flexDirection: 'row'
    },
    divider: {
        backgroundColor: '#000000', 
        width: '95%',
        margin: 10,
    }
});

export default InicioSesion