import React from 'react';
import {View, Text, Button, TextInput} from 'react-native'

const RegistroProveedor = ({navigation}) =>{
    return(
        <View>
            <Text>Nombre de usuario</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}/>
            <Text>Contraseña</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}/>
            <Text>Correo electrónico</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}/>
            <Text>Ubicación de negocio</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}/>
            <Text>Número de teléfono</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}/>
            <Text/>
            <Text/>
            <Button onPress = {()=>navigation.navigate('CatálogoServicios')} title= "Registrarse"></Button>
        </View>
    )
}

export default RegistroProveedor