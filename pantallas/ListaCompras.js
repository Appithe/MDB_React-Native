import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading, Divider, List } from 'react-native-paper';
import Primary from '../src/utils/Primarycolors';

const ListaCompras = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 70, }}>

                    </View>
                    {/* <List.Item left={props => <Image source={require('../src/utils/assets/imagen.jpg') />}>
                    <Subheading style={styles.text}> Producto 1 </Subheading>
                    <Subheading style={styles.dinero}> $0000.00 </Subheading>
                    <Subheading style={styles.fecha}> DD/MM/AA </Subheading>
                    <Divider style={styles.divider} />
                    </List.Item> */}

            
                    <Subheading style={styles.text1}> Servicio 1 </Subheading>
                    <Subheading style={styles.dinero1}> $0000.00 </Subheading>
                    <Subheading style={styles.fecha1}> DD/MM/AA </Subheading>
                    <Divider style={styles.divider1} />

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: 'center',
    },
    text: {
        position: 'relative',
        color: "#eef5f7",
        marginRight: 80,
        marginTop: 75,
    },
    dinero: {
        position: 'relative',
        color: "#eef5f7",
        marginRight: 280,
        marginTop: 5,
        marginBottom: 30
    },
    fecha: {
        position: 'absolute',
        color: "#eef5f7",
        marginLeft: 250,
        marginTop: 75,
    },
    divider: {
        backgroundColor: "#eef5f7"
    },
    text1: {
        position: 'relative',
        color: "#eef5f7",
        marginRight: 80,
        marginTop: 75,
    },
    dinero1: {
        position: 'relative',
        color: "#eef5f7",
        marginRight: 280,
        marginTop: 5,
        marginBottom: 30
    },
    fecha1: {
        position: 'absolute',
        color: "#eef5f7",
        marginLeft: 250,
        marginTop: 238,
    },
    divider1: {
        backgroundColor: "#eef5f7"
    }
});


export default ListaCompras