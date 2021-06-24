import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ScrollView, View } from 'react-native';
import { Button, Card, Title, Headline } from 'react-native-paper';
import firebase from '../database/firebase';

const CatServicios = ({ navigation }) => {
    const [servicios, setServicios] = useState([]);

    const keyExtractor = (item, index) => index.toString();

    useEffect(() => {
        firebase.db.collection('servicios').onSnapshot(
            querySnapshot => {

                const productoslist = [];

                querySnapshot.docs.forEach(doc => {
                    const {nombre, descripcion, precio} = doc.data();
                    productoslist.push({
                        id: doc.id,
                        nombre,
                        descripcion,
                        precio
                    });
                });

                setServicios(productoslist);
            }
        );
    }, []);

    const renderItem = () => (
        servicios.map((l, i) => (
            <Card style={styles.cardStyle}>
                <Card.Cover source={{ uri: `https://picsum.photos/seed/${i}/200/300` }} />
                <Card.Title title={l.nombre} subtitle={l.descripcion} />
                <Card.Content>
                    <Headline>${l.precio}</Headline>
                </Card.Content>
                <Card.Actions style={styles.cardActionsStyle}>
                    <Button>Ver producto</Button>
                </Card.Actions>
            </Card>
        ))
    );

    const Categoria = ( {categoria} ) => {
        return (
            <View>
                <Title style={styles.title}>{categoria}</Title>
                <FlatList
                    horizontal
                    keyExtractor={keyExtractor}
                    data={servicios}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            <Categoria categoria='categoria 1'/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        width: 180,
        height: 300
    },
    cardActionsStyle: {
        justifyContent: 'center',
    },
    title: {
        margin: 10
    }
});

export default CatServicios;