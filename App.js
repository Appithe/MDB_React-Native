import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pantallas/Home';
import LoginScreen from './pantallas/InicioSesion';
import SelectUserScreen from './pantallas/SelectUser';
import SolicitudesScreen from './pantallas/SolicitudesProductoServicio';
import RegistroProveedorScreen from './pantallas/RegistroProveedor';
import RegistroClienteScreen from './pantallas/RegistroCliente';
import MainScreen from './pantallas/MainScreen';
import CatProductosScreen from './pantallas/CatProductos';
import CatServiciosScreen from './pantallas/CatServicios';
import CompraScreen from './pantallas/Compra';
import DetalleScreen from './pantallas/Detalle';
import ListaComprasScreen from './pantallas/ListaCompras';
import PerfilProveedorScreen from './pantallas/PerfilProveedor';
import PerfilUsuarioScreen from './pantallas/PerfilUsuario';
import ReciboProductoScreen from './pantallas/ReciboProducto';
import RegistroProductoScreen from './pantallas/RegistroProducto';
import RegistroServicioScreen from './pantallas/RegistroServicio';

const Stack = createStackNavigator();

const myApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CatServiciosScreen" component={CatServiciosScreen} options={{ title: 'Catalogo de servicios' }} />
        <Stack.Screen name="CompraScreen" component={CompraScreen} options={{ title: 'Tu carro de compra' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Mercadito de bolsillo' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Inicio de sesion' }} />
        <Stack.Screen name="SelectUserScreen" component={SelectUserScreen} options={{ title: 'Tipo de usuario' }} />
        <Stack.Screen name="SolicitudesScreen" component={SolicitudesScreen} options={{ title: 'Solicitudes de compra' }} />
        <Stack.Screen name="RegistroProveedorScreen" component={RegistroProveedorScreen} options={{ title: 'Registro de proveedor' }} />
        <Stack.Screen name="RegistroClienteScreen" component={RegistroClienteScreen} options={{ title: 'Registro de usuario' }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Catalogos' }} />
        <Stack.Screen name="CatProductosScreen" component={CatProductosScreen} options={{ title: 'Catalogo de productos' }} />
        <Stack.Screen name="ListaComprasScreen" component={ListaComprasScreen} options={{ title: 'Lista de compras' }} />
        <Stack.Screen name="DetalleScreen" component={DetalleScreen} options={{ title: 'Detalles' }} />
        <Stack.Screen name="PerfilProveedorScreen" component={PerfilProveedorScreen} options={{ title: 'Tu perfil' }} />
        <Stack.Screen name="PerfilUsuarioScreen" component={PerfilUsuarioScreen} options={{ title: 'Tu perfil' }} />
        <Stack.Screen name="ReciboProductoScreen" component={ReciboProductoScreen} options={{ title: 'Recibo' }} />
        <Stack.Screen name="RegistroProductoScreen" component={RegistroProductoScreen} options={{ title: 'Registro de producto' }} />
        <Stack.Screen name="RegistroServicioScreen" component={RegistroServicioScreen} options={{ title: 'Registro de servicio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myApp
