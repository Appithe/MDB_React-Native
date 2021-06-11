import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const Detalle = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{marginTop: 0,}}>
            <Card style={styles.container}>
                <Card.Cover size={163} source={require('../src/utils/assets/imagen.jpg')} />
                <Card.Content style={styles.card}>
                <Title style={styles.text}>Nombre producto/servicio</Title>
                <Paragraph style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Paragraph>
                </Card.Content>
                <Paragraph style={styles.text2}>      $0000.00</Paragraph>
                <Card.Content style={styles.card}>
                <Title style={styles.card2}>Información del proveedor</Title>
                <Paragraph style={styles.text2}>Nombre proveedor</Paragraph>
                <Paragraph style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Paragraph>
                <Button style={styles.button} mode="contained">Comprar</Button>
                <Button style={styles.outbutton} icon="plus" mode="contained">Agregar al carrito</Button>
                <Subheading style={styles.comentarios}> Comentarios </Subheading>
                <Subheading style={styles.addComentario}> Agregar comentarios </Subheading>
                </Card.Content>
            </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: "center",
    },
    card: {
        backgroundColor: "#042741",
        width: 380,
    },
    text: {
        position: 'relative',
        color: Primary.Primary80,
        marginRight: 80,
        marginTop: 19,
        fontSize: 22,
    },
    text2: {
        marginTop: 140,
        color: "#FFFFFF",
        fontSize: 14,
        marginTop: 2,
    },
    avatar: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: "center",
    },
    outbutton: {
        marginTop: 6,
        width: 210,
        textAlign: "right",
    },
    textInput: {
        margin: 5,
        height: 72,
        width: 328,
        color: Primary.Primary100
    },
    card2: {
        position: 'relative',
        color: Primary.Primary100,
        marginRight: 80,
        marginTop: 19,
        fontSize: 22,
    },
    containedButton: {
        marginTop: 20,
        marginRight: 80,
        marginTop: 19,
        fontSize: 22,
        width: 150,
    },
    button: {
        marginTop: 30,
        alignItems: "flex-end",
        width: 105,
    },
    comentarios: {
        marginTop: 20,
        color: Primary.Primary100
    },
    addComentario: {
        marginTop: 0,
        textAlign: "right",
        color: Primary.Primary80
    },
});

export default Detalle