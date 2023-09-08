/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme: { colors } } = useContext( ThemeContext );

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate( menuItem.component as never )}
        >

            <View style={ styles.container }>
                <Icon
                    name={ menuItem.icon }
                    color={ colors.primary }
                    size={ 23 }
                />

                <Text style={{
                    ...styles.itemText,
                    color: colors.text,
                }}>
                    { menuItem.name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon
                    name="chevron-forward-outline"
                    color={ colors.primary }
                    size={ 23 }
                />

            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    },
});
