import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
const Formulario = ({moneda,setMoneda,criptoMoneda,setcriptoMoneda,setConsultarAPI}) => {
    
    const [criptMonedas, setCriptMonedas] = useState([]);
   

    useEffect(()=>{
        const consultarApi = async ()=>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key={7bcbaa7a9d17ca50749e7bd03a5916a57c5908fdf94842b129d943c4683b4e33}';
        const result = await axios.get(url);
        setCriptMonedas(result.data.Data);
        };
        consultarApi();
    },[]);
    const obtenerMoneda = monedaSelect=>{
        setMoneda(monedaSelect);
    };
    const obtenerCriptoMoneda = cripto=>{
        setcriptoMoneda(cripto);
    };
    const cotizarPrecio = ()=>{
        // console.log('cotizando');
        if(moneda.trim()==='' || criptoMoneda.trim()===''){
            mostrarAlerta();
            return;
        }
        setConsultarAPI(true);
        console.log('cotizxando');
    };
    const mostrarAlerta = ()=>{
        Alert.alert(
            'Error',
            'Ambos campos son obligatorios',
            [
                {text:'OK'}
            ]
        )
    }
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
            itemStyle={{height:120}}
            selectedValue={moneda}
                onValueChange={monedaSelect=>obtenerMoneda(monedaSelect)}
            >
                <Picker.Item label="-Seleccione-" value=""/>
                <Picker.Item label="Dolar de Estados Unidos" value="USD"/>
                <Picker.Item label="Peso Argentino" value="ARS"/>
                <Picker.Item label="Euro" value="EUR"/>
                <Picker.Item label="Libra Esterlina" value="GBP"/>
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
            itemStyle={{ height:120 }}
            selectedValue={criptoMoneda}
                onValueChange={cripto=>obtenerCriptoMoneda(cripto)}
            >
                <Picker.Item label="-Seleccione-" value=""/>
                {criptMonedas.map(cripto=>(
                    <Picker.Item key={cripto.CoinInfo.id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                ))}
            </Picker>
            <TouchableHighlight
                style={styles.btnSubmit}
                onPressIn={()=>cotizarPrecio()}
            >
                <Text style={styles.cotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
     );
}
const styles=StyleSheet.create({
    label:{
        fontFamily:'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase',
    },
    btnSubmit:{
        backgroundColor: '#5E49E2',
        padding:10,
        marginTop:20,
    },
    cotizar:{
        color: '#FFF',
        fontSize: 18,
        fontFamily:'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
}) 
export default Formulario;