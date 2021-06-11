import { green } from '@material-ui/core/colors';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Subheading, Divider, Caption, Avatar } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const InicioSesion = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 154 }}>
                <TextInput
                    left={<TextInput.Icon name="account-circle"/>}
                    label="Nombre de usuario"
                    style={styles.textInput}/>
                <TextInput
                    right={<TextInput.Icon name="eye" />}
                    left={<TextInput.Icon name="lock" />}
                    label="Contraseña"
                    style={styles.textInput}/>
            </View>
            <View>
                <Button style={styles.containedButton} mode='contained' onPress={() => navigation.navigate('Catalogo de Productos')}>Iniciar sesión</Button>
            </View>
            <Divider style={{ backgroundColor: '#000000', margin: 11, width: 300 }} />
            <View>
                <Subheading style={styles.text}>Nuevo usuario?</Subheading>
                <Button style={styles.outButton} mode='text' onPress={() => navigation.navigate('Tipo de usuario')}>
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
        height: 72,
        width: 328,
        color: Primary.Primary100
    },
    containedButton: {
        marginTop: 82,
        width: 150,
    },
    outButton: {
        marginLeft: 81,
    },
    text: {
        position: 'relative',
        color: Primary.Primary100,
        marginRight: 80,
    },
});

export default InicioSesion