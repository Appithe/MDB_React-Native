import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
    {
        nombre: 'producto',
        precio: '300.00',
        image: '../src/utils/assets/imagen.jpg',
        fecha: 'DD/MM/AA'
    },
    {
        nombre: 'servicio',
        precio: '500.00',
        image: '../src/utils/assets/imagen.jpg',
        fecha: 'DD/MM/AA'
    },
    {
        nombre: 'producto',
        precio: '300.00',
        image: '../src/utils/assets/imagen.jpg',
        fecha: 'DD/MM/AA'
    },
]

const ListaCompras = ({ navigation }) => {

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider containerStyle={styles.items}>
            <Avatar source={require('../src/utils/assets/imagen.jpg')} />
            <ListItem.Content>
                <ListItem.Title>{item.nombre}</ListItem.Title>
                <View style={styles.subtitleView}>
                    <Text>${item.precio}</Text>
                    <Text style={styles.dateText}>{item.fecha}</Text>
                </View>
            </ListItem.Content>
        </ListItem>
    )

    return (
        <ScrollView style={styles.container}>
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    dateText: {
        paddingLeft: 10,
        color: 'grey'
    },
    items: {
        margin: 5,
    }
});


export default ListaCompras