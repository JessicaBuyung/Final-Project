import React from 'react' ;
import { View, Text, StyleSheet } from 'react-native';

const Layout = () => {
    return (
        <View style={{marginTop: 30, marginStart: 30}}>
            <Text style={styles.textStyle}>Data COVID-19 Global & Indonesia</Text>
            <Text style={styles.textStyle}>Global</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    // container: {
    //     marginTop: 30,
    //     marginRight: 30,
    //     marginLeft: 30
    // },
    textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
}
})

export default Layout;