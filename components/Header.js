import React,{Fragment} from 'react';
import { Text,StyleSheet,Platform} from 'react-native';

const Header = () => {
    return (
        <Fragment>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </Fragment>
     );
}

const styles=StyleSheet.create({
    encabezado:{
        paddingTop:Platform.OS === 'ios' ? 60 : 60,
        fontFamily:'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom:10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30,
    },
})
 
export default Header;