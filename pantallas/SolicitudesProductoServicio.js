import React from 'react';
import { FlatList, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements'

const list = [
    {
        nombre: 'producto',
        precio: '300.00',
        image: '../src/utils/assets/imagen.jpg'
    },
    {
        nombre: 'servicio',
        precio: '500.00',
        image: '../src/utils/assets/imagen.jpg'
    },
    {
        nombre: 'producto',
        precio: '300.00',
        image: '../src/utils/assets/imagen.jpg'
    },
];

const SolicitudesProductoServicio = ({ navigation }) => {

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <ListItem
            containerStyle={styles.items}>
            <Avatar source={require('../src/utils/assets/imagen.jpg')} />
            <ListItem.Content>
                <ListItem.Title>{item.nombre}</ListItem.Title>
                <ListItem.Subtitle>${item.precio}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );

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
                <View style={styles.botones}>
                    <Button
                        title="Eliminar solicitudes"
                        type="clear"
                    />
                    <Button 
                        title="Solicitudes completas"
                        type="solid" 
                        style={styles.boton} 
                        onPress={() => console.log('Comprado')}
                    />
                </View>
            </View>
        </View>
    )
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
        margin: 20,
    },
    texto: {
        margin: 20,
        color: "white",
    },
    items: {
        margin: 5,
    },
    botones: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default SolicitudesProductoServicio