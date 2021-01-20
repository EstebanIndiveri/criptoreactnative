
import React,{useState,Fragment,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import Formulario from './components/Formulario.';
import Cotizacion from './components/Cotizacion';
import Header from './components/Header';
import axios from 'axios';
const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setcriptoMoneda] = useState('');
  const [consultarApi,setConsultarAPI] = useState(false);
  const [resultFinal, setResultFinal] = useState({});
  const [cargando, setCargando] = useState(false);
  useEffect(()=>{
      const cotizarCriptoMoneda = async () =>{
        if (consultarApi){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&api_key=7bcbaa7a9d17ca50749e7bd03a5916a57c5908fdf94842b129d943c4683b4e33`;
      // console.log(url);
      const result=await axios.get(url);
      setCargando(true);
          setTimeout(() => {
            setResultFinal(result.data.DISPLAY[criptoMoneda][moneda]);
            setConsultarAPI(false);
            setCargando(false);
            // console.log(resultFinal);
          }, 3000);
      }
    };
    cotizarCriptoMoneda();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[consultarApi]);
  const componente = cargando ? <ActivityIndicator size='large' color='#5E49E2'/> : <Cotizacion resultFinal={resultFinal}/>;
  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent"/>
      <ScrollView>
      <Header/>
      <Image
      style={styles.imagen}
      source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario moneda={moneda} setMoneda={setMoneda} criptoMoneda={criptoMoneda} setcriptoMoneda={setcriptoMoneda} consultarApi={consultarApi} setConsultarAPI={setConsultarAPI}/>
      </View>
      <View style={{marginTop:40}}>
      {componente}
      </View>
      </ScrollView>
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
