import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';
import { TextInput, List } from 'react-native-paper';


const RegistroProveedor = ({ navigation }) => {

    const [expanded, setExpanded] = useState(true);
    const [selectedValue, setSelectedValue] = useState("Categoria");

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../src/utils/assets/imagen.jpg')}
                    style={{ width: 300, height: 200 }}
                />
                <View>
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
                    {/* Falta picker y FAB */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        margin: 20,
    },
    textInput: {
        marginTop: 15,
    }
});

export default RegistroProveedor

{/* <Button onPress = {()=>navigation.navigate('CatálogoServicios')} title= "Registrarse"></Button> */ }