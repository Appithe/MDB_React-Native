import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput} from 'react-native-paper';
import { Avatar, Button } from 'react-native-paper';
import Primary from '../src/utils/Primarycolors';

const RegistroProductoServicio = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30, }}>
                <TextInput
                    label="Producto Servicio"
                    style={styles.textInput}
                />
                <TextInput
                    label="Nombre del producto/servicio"
                    style={styles.textInput}
                />
                <TextInput
                    label="Descripción"
                    style={styles.textInput}
                />
                <TextInput
                    label="Precio"
                    style={styles.textInput}
                />
                <View style={styles.container}>
                <Avatar.Image 
                    style={styles.avatar} size={90} source={require('../src/utils/assets/imagen.jpg')}/>
                <Button style={styles.containedButton} mode='contained'> Registrar </Button>
                </View>
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
        marginTop: 0,
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
    avatar: {
        marginTop: 40,
        marginBottom: 102,
    },
});

export default RegistroProductoServicio