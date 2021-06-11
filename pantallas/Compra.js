import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Subheading, List} from 'react-native-paper';
import Primary from '../src/utils/Primarycolors';

const Compra = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 70, }}>

                <List.Item style={styles.textInput}
                    title="Producto Servicio"
                    description="Incluye..."
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                
                <Button style={styles.outButton} mode='text' onPress={() => navigation.navigate('Tipo de usuario')}>
                    <Caption style={{ color: Primary.Primary200 }}>Crear una cuenta</Caption>
                </Button>
                
                <List.Item style={styles.textInput}
                    title="Producto Servicio"
                    description="Incluye..."
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item style={styles.textInput}
                    title="Producto Servicio"
                    description="Incluye..."
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item style={styles.textInput}
                    title="Producto Servicio"
                    description="Incluye..."
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item style={styles.textInput}
                    title="Producto Servicio"
                    description="Incluye..."
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item style={styles.textInput}
                    title="Producto Servicio"
                    description="Incluye..."
                    left={props => <List.Icon {...props} icon="folder" />}
                />
            <View style={{marginTop: 20,}}>
                <Subheading style={styles.txtEstimado}>Total estimado</Subheading>
                <Subheading style={styles.total}> Mex$ 0000.00 </Subheading>
                <Button style={styles.containedButton} mode='contained'> Comprar </Button>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#042741",
        flex: 1,
        alignItems: 'center'
    },
    textInput: {
        margin: 5,
        height: 72,
        width: 328,
        color: "#EEF5F7"
    },
    containedButton: {
        marginTop: 40,
        width: 150,
        color: "#EEF5F7",
        marginLeft: 250       
    },
   /*  outButton: {
        marginLeft: 81
    }, */
    text: {
        position: 'relative',
        color: "#EEF5F7",
        marginRight: 80
    },
    total: {
        position: 'absolute',
        color: "#eef5f7",
        marginLeft: 275,
        
    },
    txtEstimado: {
        position: 'absolute',
        color: Primary.Primary100,
        marginRight: 80,
    }
});

export default Compra