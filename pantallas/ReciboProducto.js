import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import Primary from '../src/utils/Primarycolors';

const ReciboProducto = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 70, }}>
            <Subheading style={styles.text}> INFORMACIÓN </Subheading>
            <Subheading style={styles.text}> FECHA </Subheading>
            <Subheading style={styles.text}> PRODUCTO </Subheading>
            <Subheading style={styles.text}> CANTIDAD </Subheading>
            <Subheading style={styles.text}> PAGADO EL DÍA</Subheading>
            <Subheading style={styles.text}> MONTO A PAGAR </Subheading>
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
        marginTop: 19,
    }
});

export default ReciboProducto