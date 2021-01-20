import React from 'react';
import { Text,View,StyleSheet} from 'react-native';

const Cotizacion = ({resultFinal}) => {
    if(Object.keys(resultFinal).length === 0) return null;
    return ( 
        <View style={styles.resultado}>
            <Text style={[styles.text,styles.precio]}>
                <Text style={styles.span}>{resultFinal.PRICE}</Text>
            </Text>
            <Text style={styles.text}>Precio más alto del día: {' '}
                <Text style={styles.span}>{resultFinal.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>Precio más bajo del día: {' '}
                <Text style={styles.span}>{resultFinal.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>Variación últimas 24hs: {' '}
                <Text style={styles.span}>{resultFinal.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.text}>Ultima actualización: {' '}
                <Text style={styles.span}>{resultFinal.LASTUPDATE}</Text>
            </Text>
        </View>
        );
}
 const styles=StyleSheet.create({
     resultado:{
         backgroundColor: '#5E49E2',
         padding: 20,
        //  marginTop:20,
     },
     text:{
         color: '#FFF',
         fontFamily: 'Lato-Regular',
         fontSize: 18,
         marginBottom: 10,
     },
     precio:{
         fontSize:38,
     },
     span:{
        fontFamily: 'Lato-Black',

     },
 })
export default Cotizacion;