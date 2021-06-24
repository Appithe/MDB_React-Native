import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import CatProductos from './CatProductos';
import CatServicios from './CatServicios';

const Tabs = ({ children }) => {
    return (
        <View
            style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
            }}
        >
            {children}
        </View>
    );
}

const Tab = ({ title, active = false,  }) => {
    return (
        <View style={[{
            height: 50,
            width: '50%',
            justifyContent: "center",
            alignItems: "center",
        }, active ? { borderBottomWidth: 2, borderBottomColor: '#000' } : {}]}>
            <TouchableOpacity>{title}</TouchableOpacity>
        </View>
    );
}

const Catalogos = ({ navigation }) => {
    return (
        <View>
            <Tabs>
                <Tab title="Productos" active={true} />
                <Tab title="Servicios" />
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Catalogos