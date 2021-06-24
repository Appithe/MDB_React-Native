import React, { useState } from 'react';
import { StyleSheet, FlatList, ScrollView, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

const listaCategorias = [
    {
        productName: 'Amy Farha',
        description: 'Vice President',
        image: 'https://picsum.photos/700'
    },
    {
        productName: 'Chris Jackson',
        description: 'Vice Chairman',
        image: 'https://picsum.photos/700'
    },
    {
        productName: 'Amy Farha',
        description: 'Vice President',
        image: 'https://picsum.photos/700'
    },
    {
        productName: 'Chris Jackson',
        description: 'Vice Chairman',
        image: 'https://picsum.photos/700'
    },
]

const CatServicios = ({ navigation }) => {

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <Card style={styles.cardStyle}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Title title={item.productName} subtitle={item.description} />
            <Card.Actions style={styles.cardActionsStyle}>
                <Button>Ver producto</Button>
            </Card.Actions>
        </Card>
    );

    const Categoria = ( {categoria} ) => {
        return (
            <View>
                <Title style={styles.title}>{categoria}</Title>
                <FlatList
                    horizontal
                    keyExtractor={keyExtractor}
                    data={listaCategorias}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            <Categoria categoria='categoria 1'/>
            <Categoria categoria='categoria 2'/>
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