import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Avatar, ListItem, Button, Icon } from 'react-native-elements';
import { Title } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const Header = () => {
    return (
        <ListItem containerStyle={styles.header}>
            <Avatar source={require('../src/utils/assets/imagen.jpg')} />
            <ListItem.Content>
                <View style={styles.titleView}>
                    <Title style={styles.text}>Nombre de proveedor</Title>
                    <Button
                        type="clear"
                        icon={<Icon
                            name='logout'
                            color='#FFF'
                            onPress={() => console.log('Log out')}
                        />}
                    />
                </View>
            </ListItem.Content>
        </ListItem>
    );
}

const PerfilProveedor = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <ListItem containerStyle={styles.subheader}>
                <ListItem.Title>Producto</ListItem.Title>
            </ListItem>
            <ListItem
                Component={TouchableHighlight}
                onPress={() => navigation.navigate('SolicitudesScreen')}
                pad={20}
            >
                <Icon
                    name='shopping-cart'
                />
                <ListItem.Content>
                    <ListItem.Title>Ver pedidos</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem
                Component={TouchableHighlight}
                onPress={() => navigation.navigate('RegistroProductoScreen')}
                pad={20}
            >
                <Icon
                    name='devices'
                />
                <ListItem.Content>
                    <ListItem.Title>Agregar producto</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem
                Component={TouchableHighlight}
                onPress={() => navigation.navigate('RegistroServicioScreen')}
                pad={20}
            >
                <Icon
                    name='room-service'
                />
                <ListItem.Content>
                    <ListItem.Title>Agregar servicio</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem containerStyle={styles.subheader}>
                <ListItem.Title>General</ListItem.Title>
            </ListItem>
            <ListItem
                disabled
            >
                <Icon
                    name='credit-card'
                />
                <ListItem.Content>
                    <ListItem.Title>Metodo de pago</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
    },
    titleView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: Primary.Primary300,
    },
    subheader: {
        backgroundColor: Primary.Primary100,
    },
    text: {
        color: "#FFFFFF",
    },
});

export default PerfilProveedor