/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';


import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';
import { colores } from '../theme/appTheme';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}


export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20}}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={ 16 }
                    />

                    <Text style={{color: colores.white}}> { movieFull.vote_average }</Text>

                    <Text style={{ marginLeft: 5, color: colores.white }}>
                         - { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>

                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: colores.white }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16, color: colores.white }}>
                    { movieFull.overview }
                </Text>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: colores.white }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18, color: colores.white }}>
                    { currencyFormatter.format( movieFull.budget, { code:'USD' }) }
                </Text>


            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100   }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, color: colores.white}}>
                    Actores
                </Text>

                <FlatList
                    data={ cast }
                    keyExtractor={ (item, index ) => item.id.toString() + index }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 70 }}
                />


            </View>

        </>
    );
};
