import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{}

export const Pagina2Screen = ({ navigation }: Props) => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: '',
        });
    }, [navigator]);


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
