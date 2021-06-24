import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import PerfilUsuario from './PerfilUsuario';
import PerfilProveedor from './PerfilProveedor';
import CatProductos from './CatProductos';
import CatServicios from './CatServicios';

const ProductosRoute = () => <CatProductos/>;
const ServicosRoute = () => <CatServicios/>;
const ProveedorRoute = () => <PerfilProveedor/>;
const UsuarioRoute = () => <PerfilUsuario/>;

const MainScreen = ({ navigation }) => {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'catProductos', title: 'Productos', icon: 'cart' },
    { key: 'catServicos', title: 'Servicios', icon: 'room-service' },
    { key: 'perfilUsuario', title: 'Perfil', icon: 'account-circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    catProductos: ProductosRoute,
    catServicos: ServicosRoute,
    perfilUsuario: UsuarioRoute,
  });

  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
  );
}

export default MainScreen