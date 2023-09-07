/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
// import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any>{};
// interface Props extends DrawerScreenProps<any, any>{}

export const Pagina2Screen = () => {

    const navigator = useNavigation<StackNavigationProp<RootStackParams>>();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: '',
        });
    }, []);


    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title }> Pagina2Screen </Text>

            <Button
                title="Ir página 3"
                onPress={ () => navigator.navigate('Pagina3Screen')  }
            />

        </View>
    );
};
