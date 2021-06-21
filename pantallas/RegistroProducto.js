import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';
import { TextInput, FAB } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';


const RegistroProveedor = ({ navigation }) => {

    const [expanded, setExpanded] = useState(true);

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
                />
                <TextInput
                    label="Descripcion"
                    multiline
                    style={styles.textInput}
                />
                <TextInput
                    label="Precio"
                    style={styles.textInput}
                />
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Categoria 1', value: 'categoria 1' },
                        { label: 'Categoria 2', value: 'categoria 2' },
                        { label: 'Categoria 3', value: 'categoria 3' },
                    ]}
                />
            </View>

            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => console.log('Pressed')}
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

export default RegistroProveedor

{/* <Button onPress = {()=>navigation.navigate('CatálogoServicios')} title= "Registrarse"></Button> */ }