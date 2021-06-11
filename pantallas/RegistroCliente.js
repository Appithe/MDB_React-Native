import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, IconButton, Divider} from 'react-native-paper';
import Primary from '../src/utils/Primarycolors';

const RegistroCliente = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 0 }}>
                <Text style={{fontSize:50, marginTop: 54, color: "#FFFFFF", textAlign:'center'}}>Bienvenido</Text>
                <Text/>
                <TextInput
                    left={<TextInput.Icon name="account-circle"/>}
                    label="Nombre de usuario"
                    style={styles.textInput}/>
                <TextInput
                    left={<TextInput.Icon name="email"/>}
                    label="Email"
                    style={styles.textInput}
                />
                <TextInput
                    right={<TextInput.Icon name="eye" />}
                    left={<TextInput.Icon name="lock" />}
                    label="Contraseña"
                    style={styles.textInput}/>
            </View>
            <View>
                <Button style={{marginTop: 90, width: 140, marginStart:65}} mode='contained' onPress={() => navigation.navigate('Catalogo de Productos')}>Registrarse</Button>
                <Divider style={styles.divider}/>
                <Button style={{marginTop:20}} icon="facebook" mode="contained" onPress={() => console.log('Pressed')}> Registrarse con facebook </Button>
                <Button style={{marginTop:10, backgroundColor:"#E52C1D"}} icon="email" mode="contained" onPress={() => console.log('Pressed')}> Registrarse con Gmail</Button>
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
        marginTop: 110,
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
    divider: {
        backgroundColor: "#eef5f7",
        marginTop: 20,
    },
});

export default RegistroCliente