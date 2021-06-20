import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomNavigation, Text } from 'react-native-paper';
import PerfilUsuarioBottom from './PefilUsuarioBottom';

const HomeRoute = () => <Text>Home</Text>;

const PerfilRoute = () => <PerfilUsuario/>;

const MainScreen = ({ navigation }) => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'perfil', title: 'Perfil', icon: 'account-circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    perfil: PerfilRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  
});

export default MainScreen