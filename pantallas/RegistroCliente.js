import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const RegistroCliente = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, marginTop: 54, color: "#FFFFFF", textAlign: 'center' }}>Bienvenido</Text>
            <Text />
            <TextInput
                left={<TextInput.Icon name="account-circle" />}
                label="Nombre de usuario"
                style={styles.textInput} />
            <TextInput
                left={<TextInput.Icon name="email" />}
                label="Email"
                style={styles.textInput}
            />
            <TextInput
                right={<TextInput.Icon name="eye" />}
                left={<TextInput.Icon name="lock" />}
                label="Contraseña"
                style={styles.textInput} />
            <View>
                <Button style={{ marginTop: 90 }} mode='contained' onPress={() => navigation.navigate('Home')}>Registrarse</Button>
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
    },
});

export default RegistroCliente