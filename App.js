import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './pantallas/MainScreen';
import ScreenHome from './pantallas/Home';
import ScreenSelectUser from './pantallas/SelectUser';
import ScreenRegistroProveedor from './pantallas/RegistroProveedor';
import ScreenRegistroCliente from './pantallas/RegistroCliente';
import ScreenLogin from './pantallas/InicioSesion';
import ScreenSolicitudesProductoServicio from './pantallas/SolicitudesProductoServicio';

const Stack = createStackNavigator();

const myApp = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "Home 1" component ={ScreenHome}/>
      <Stack.Screen name = "Inicio de Sesion" component = {ScreenLogin}/>
      <Stack.Screen name = "Tipo de usuario" component ={ScreenSelectUser}/>
      <Stack.Screen name = "Solicitus Producto Servicio" component = {ScreenSolicitudesProductoServicio}/>
      <Stack.Screen name = "Registro de Proveedor" component = {ScreenRegistroProveedor}/>
      <Stack.Screen name = "Registro de Cliente" component = {ScreenRegistroCliente}/>
      <Stack.Screen name = "Home" component = {Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myApp
