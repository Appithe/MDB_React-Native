import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pantallas/Home';
import InicioSesionScreen from './pantallas/InicioSesion';
import SelectUserScreen from './pantallas/SelectUser';
import RegistroClienteScreen from './pantallas/RegistroCliente';
import RegistroProveedorScreen from './pantallas/RegistroProveedor';
import CatalogoProductosScreen from './pantallas/CatalogoProductos';
import CatalogoServiciosScreen from './pantallas/CatalogoServicios';
import RegistroProductoServicioScreen from './pantallas/RegistroProductoServicio';
import PerfilUsuarioScreen from './pantallas/PerfilUsuario';
import ReciboProductoScreen from './pantallas/ReciboProducto';
import ReciboServicioScreen from './pantallas/ReciboServicio';
import CompraScreen from './pantallas/Compra';
import SolicitudesProductoServicioScreen from './pantallas/SolicitudesProductoServicio';
import DetalleScreen from './pantallas/Detalle';
import ListaComprasScreen from './pantallas/ListaCompras';

const Stack = createStackNavigator();

const myApp = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Mercadito de bolsillo" component={HomeScreen}/>
        <Stack.Screen name = "Inicio de Sesion" component = {InicioSesionScreen}/>
        <Stack.Screen name = "Tipo de usuario" component = {SelectUserScreen}/>
        <Stack.Screen name = "Registro de Cliente" component = {RegistroClienteScreen}/>
        <Stack.Screen name = "Registro de Proveedor" component = {RegistroProveedorScreen}/>
        <Stack.Screen name = "Catalogo de Productos" component = {CatalogoProductosScreen}/>
        <Stack.Screen name = "Catalogo de Servicios" component = {CatalogoServiciosScreen}/>
        <Stack.Screen name = "Registro Producto Servicio" component = {RegistroProductoServicioScreen}/>
        <Stack.Screen name = "Perfil Usuario" component = {PerfilUsuarioScreen}/>
        <Stack.Screen name = "Recibo Producto" component = {ReciboProductoScreen}/>
        <Stack.Screen name = "Recibo Servicio" component = {ReciboServicioScreen}/>
        <Stack.Screen name = "Compra" component = {CompraScreen}/>
        <Stack.Screen name = "Solicitudes Producto/Servicio" component = {SolicitudesProductoServicioScreen}/>
        <Stack.Screen name = "Detalle" component = {DetalleScreen}/>
        <Stack.Screen name = "Lista Compras" component = {ListaComprasScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myApp
