import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';
import { TextInput, FAB } from 'react-native-paper';

import firebase from '../database/firebase';

const RegistroServicio = ({ navigation }) => {

    const [item, setItem] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
    });

    const handleChangeText = (nombre, value) => {
        setState({...item, [nombre]: value})
    }

    const [expanded, setExpanded] = useState(true);

    const saveNewItem = async () => {
        if(item.name === '') {
            alert('Porfavor coloca el nombre del producto');
        } else if (item.precio === '') {
            alert('Porfavor coloca el precio del producto');
        } else {
            try {
                await firebase.db.collection('servicios').add({
                    nombre: item.nombre,
                    descripcion: item.descripcion,
                    precio: item.precio
                });
                navigation.navigate('MainScreen');
            } catch (error) {
                
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../src/utils/assets/imagen.jpg')}
                    style={{ width: 300, height: 200 }}
                />
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    label="Nombre"
                    style={styles.textInput}
                    onChangeText={(value) => handleChangeText('nombre', value)}
                />
                <TextInput
                    label="Descripcion"
                    multiline
                    style={styles.textInput}
                    onChangeText={(value) => handleChangeText('descripcion', value)}
                />
                <TextInput
                    label="Precio"
                    style={styles.textInput}
                    onChangeText={(value) => handleChangeText('precio', value)}
                />
            </View>

            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => saveNewItem()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        margin: 20,
    },
    textInput: {
        margin: 15,
    },
    formContainer: {
        flexDirection: 'column',
    },
    fab: {
        alignSelf: 'flex-end',
        marginTop: '50%',
        marginRight: '10%'
    }
});

export default RegistroServicio