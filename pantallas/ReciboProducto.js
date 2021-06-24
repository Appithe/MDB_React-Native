import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Caption, Title, Subheading, Paragraph } from 'react-native-paper';
import Primary from '../src/utils/Primarycolors';

const ReciboProducto = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.avatarStyle}>
                <Avatar.Image style={styles.avatar} size={250} source={require('../src/utils/assets/imagen.jpg')} />
            </View>
            <View style={styles.headerView}>
                <Title style={[styles.textColor, styles.title]}>Nombre del item</Title>
                <Caption style={[styles.textColor, styles.caption]}>Fecha de pedido: DD/MM/AA</Caption>
            </View>
            <View style={styles.content}>
                <Subheading>Descripción</Subheading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient amet mollis viverra justo, quis.</Paragraph>
                <Caption style={[styles.precio]}>$0000.00</Caption>
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
    avatarStyle: {
        marginTop: 34,
        marginBottom: 27,
    },
    headerView: {
        width: '80%',
        marginBottom: 20,
    },
    textColor: {
        color: '#FFF'
    },
    title: {
        fontSize: 34
    },
    caption: {
        fontSize: 14
    },
    content: {
        width: 350,
        backgroundColor: '#00C4B4',
        borderRadius: 15,
        padding: 20
    },
    precio: {
        color: '#000',
        alignSelf: 'flex-end'
    }
});

export default ReciboProducto