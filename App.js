
import React,{Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import Formulario from './components/Formulario.';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent"/>
      <Header/>
      <Image
      style={styles.imagen}
      source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario/>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido:{
    marginHorizontal: '2.5%',
  },
});

export default App;
