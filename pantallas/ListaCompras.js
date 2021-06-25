import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View, TouchableHighlight } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
    {
        id: 1,
        nombre: 'producto',
        precio: '300.00',
        fecha: 'DD/MM/AA'
    },
    {
        id: 2,
        nombre: 'servicio',
        precio: '500.00',
        fecha: 'DD/MM/AA'
    },
    {
        id: 3,
        nombre: 'producto',
        precio: '300.00',
        fecha: 'DD/MM/AA'
    },
    {
        id: 4,
        nombre: 'servicio',
        precio: '500.00',
        fecha: 'DD/MM/AA'
    },
]

const ListaCompras = ({ navigation }) => {

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem 
            bottomDivider 
            containerStyle={styles.items}
            Component={TouchableHighlight}
            onPress={() => navigation.navigate('DetalleScreen')}
            pad={20}
        >
            <Avatar source={{ uri: `https://picsum.photos/seed/${item.id}/200/300` }} />
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