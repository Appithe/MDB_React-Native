import React from 'react';
import { Rating, Button, ListItem, Avatar } from 'react-native-elements';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import { Card, Title, Paragraph, Headline, Caption, Subheading } from 'react-native-paper';

const comentsList = [
    {
        autorImage: '../src/utils/assets/imagen.jpg',
        autor: 'Sara',
        fecha: '13/05/2021',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
    {
        autorImage: '',
        autor: 'Jonh',
        fecha: '16/05/2021',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
    {
        autorImage: '',
        autor: 'Constantine',
        fecha: '20/05/2021',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
]

const Detalle = ({ navigation }) => {

    const item = [
        {
            nombre: 'producto',
            precio: '300.00',
            image: '../src/utils/assets/imagen.jpg',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            rating: 3.5,
        },
    ];

    const keyExtractor = (item, index) => index.toString()

    const renderComentarios = ({ item }) => (
        <ListItem containerStyle={styles.comentario}>
            <Avatar source={require('../src/utils/assets/imagen.jpg')} />
            <ListItem.Content>
                <ListItem.Title style={styles.titleComent}>
                    <Subheading>{item.autor}</Subheading>
                    <Caption>{item.fecha}</Caption>
                </ListItem.Title>
                <ListItem.Subtitle>{item.contenido}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );

    return (
        <View style={styles.container}>
            <Card>
                <Card.Cover style={styles.imageStyle} source={require('../src/utils/assets/imagen.jpg')} />
                <Card.Content style={styles.itemInfo}>
                    <Title>Item</Title>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Paragraph>
                    <View style={styles.extraInfo}>
                        <Text style={{ fontSize: 25 }}>$ 300.00</Text>
                        <Rating
                            fractions="{5}"
                            startingValue="{3.5}" />
                    </View>
                </Card.Content>
                <Card.Actions style={styles.actionStyles}>
                    <Button
                        title="Comprar"
                    />
                    <Button
                        title="Agregar al carrito"
                        type="outline"
                    />
                </Card.Actions>
            </Card>
            <View>
                <View style={styles.comentsHeader}>
                    <Headline style={{color: "#DBB2FF", marginRight: 20}}>Comentarios</Headline>
                    <Button
                        title="Agregar comentario"
                        type="clear"
                    />
                </View>
                <ScrollView>
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={comentsList}
                        renderItem={renderComentarios}
                    />
                </ScrollView>
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
    imageStyle: {
        width: 500,
        height: 250,
    },
    itemInfo: {
        margin: 25,
    },
    extraInfo: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionStyles: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    comentsHeader: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comentario: {
        margin: 5,
    },
    titleComent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default Detalle