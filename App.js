
import React,{Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent"/>
      <Header/>
     <Text>algo</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
