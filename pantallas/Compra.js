import React from 'react';
import { FlatList, StyleSheet, ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { Button } from 'react-native-paper';

const list = [
    {
        id: 1,
        nombre: 'producto',
        precio: '300.00',
    },
    {
        id: 2,
        nombre: 'servicio',
        precio: '500.00',
    },
    {
        id: 3,
        nombre: 'producto',
        precio: '300.00',
    },
]

const Compra = ({ navigation }) => {

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem
            containerStyle={styles.items}
            onLongPress={() => console.log('item eliminado')}
            Component={TouchableHighlight}
            onPress={() => navigation.navigate('ReciboProductoScreen')}
            pad={20}
            >
            <Avatar source={{ uri: `https://picsum.photos/seed/${item.id}/200/300` }} />
            <ListItem.Content>
                <ListItem.Title>{item.nombre}</ListItem.Title>
                <ListItem.Subtitle>${item.precio}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )

    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={list}
                    renderItem={renderItem}
                />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.txtTotal}>
                    <Text style={styles.texto}>Total estimado</Text>
                    <Text style={styles.texto}>$ 0000.00</Text>
                </View>
                <View>
                    <Button style={styles.boton} mode="contained" onPress={() => console.log('Comprado')}>Comprar</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
    },
    footer: {
        flexDirection: 'column',
        flex: 2,
        backgroundColor: "#042741",
        justifyContent: 'flex-end',
    },
    txtTotal: {
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    boton: {
        margin:20,
    },
    texto: {
        margin: 20,
        color: "white"
    },
    items: {
        margin: 5,
    }
});

export default Compra