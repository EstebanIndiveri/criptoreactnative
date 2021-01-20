import React,{Fragment} from 'react';
import { Text,StyleSheet,Platform} from 'react-native';

const Header = () => {
    return ( 
        <Fragment>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </Fragment>
     ) ;
}

const styles=StyleSheet.create({
    encabezado:{
        paddingTop:Platform.OS==='ios'?50:40, 
        fontFamily:'Lato-Black',
    },
})
 
export default Header;