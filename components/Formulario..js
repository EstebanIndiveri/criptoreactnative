import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Formulario = () => {
    const [moneda, setMoneda] = useState('');
    const [criptoMoneda, setcriptoMoneda] = useState('');
    const obtenerMoneda=monedaSelect=>{
        setMoneda(monedaSelect);
    };
    return ( 
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
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
        </View>
     );
}
const styles=StyleSheet.create({
    label:{
        fontFamily:'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase',
    }
}) 
export default Formulario;