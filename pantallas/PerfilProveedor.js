import React from 'react';
import { View, StyleSheet } from 'react-native';
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
                        />}
                    />
                </View>
            </ListItem.Content>
        </ListItem>
    );
}

const PerfilProveedor = ({ }) => {
    return (
        <View style={styles.container}>
            <Header />
            <ListItem containerStyle={styles.subheader}>
                <ListItem.Title>Producto</ListItem.Title>
            </ListItem>
            <ListItem>
                <Icon
                    name='shopping-cart'
                />
                <ListItem.Content>
                    <ListItem.Title>Ver pedidos</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem>
                <Icon
                    name='devices'
                />
                <ListItem.Content>
                    <ListItem.Title>Agregar producto</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem>
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
            <ListItem>
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