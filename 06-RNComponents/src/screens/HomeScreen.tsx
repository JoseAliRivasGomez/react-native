/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú" />  }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            />

        </View>
    );
};
