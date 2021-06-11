import React from 'react';
import { View, StyleSheet } from 'react-native';

import { List, TextInput, Text, Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

import Primary from '../src/utils/Primarycolors';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const PerfilUsuarioBottom = ({}) => {
    return (
        <View style={styles.container}>
            <List.Item
            title= "Nombre de proveedor"
            titleStyle={{color: "white"}}
            descriptionStyle={{color: "white"}}
            description="Body 2"
            left={props => <List.Icon {...props} icon="image" />}
            right={props => <List.Icon {...props} icon="export" />}
            style={styles.ListItem}
            />
            <Card>
                <Card.Content style={{ backgroundColor: "#B7DABC"}}>
                    <Paragraph> Producto </Paragraph>
                </Card.Content>
            </Card>
            <View style={{ color: "white"}}>
            <Button style={styles.Button} icon="shopping" onPress={() => console.log('Pressed')}>Ver Pedidos</Button>
            <Button style={styles.Button} icon="archive" onPress={() => console.log('Pressed')}>Agregar Producto</Button>
            <Button style={styles.Button} icon="archive" onPress={() => console.log('Pressed')}>Agregar Servicio</Button>
            </View>
            <Card>
                <Card.Content style={{ backgroundColor: "#B7DABC"}}>
                    <Paragraph> General </Paragraph>
                </Card.Content>
            </Card>
            <View style={{ color: "white"}}>
            <Button style={styles.Button} icon="credit-card" onPress={() => console.log('Pressed')}>Método de pago</Button>
            <Button style={styles.Button} icon="google-maps" onPress={() => console.log('Pressed')}>Ubicación</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
    },
    ListItem: {
        backgroundColor: Primary.Primary500,
    },
    containedButton: {
        marginTop: 82,
        width: 150,
    },
    Button: {
        marginRight: 50
    },
    text: {
        position: 'relative',
        color: "black",
        backgroundColor: "#B7DABC",
        height: 72,
        
    },
    divider: {
        backgroundColor: "#eef5f7",
        marginTop: 20,
    },
});

export default PerfilUsuarioBottom