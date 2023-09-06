import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.caja1 }>Caja 1</Text>
            <Text style={ styles.caja2 }>Caja 2</Text>
            <Text style={ styles.caja3 }>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 300,
        backgroundColor: '#28C4D9',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        // alignItems: 'stretch',
        // flexWrap: 'wrap',
    },
    caja1: {
        flex: 3,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center',
    },
    caja2: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start',
    },
    caja3: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end',
    },
});
