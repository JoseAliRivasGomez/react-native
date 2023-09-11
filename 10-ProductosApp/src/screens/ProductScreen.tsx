/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{}

export const ProductScreen = ({ navigation, route }: Props) => {

    const { id: idR = '', name = '' } = route.params;

    const [ tempUri, setTempUri ] = useState<string>();

    const { categories } = useCategories();
    const { loadProductById, addProduct, updateProduct, uploadImage } = useContext( ProductsContext );

    const { id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
        id: idR,
        categoriaId: '',
        nombre: name,
        img: '',
    });


    useEffect(() => {
        navigation.setOptions({
            title: ( nombre ) ? nombre : 'Sin nombre de producto',
        });
    }, [nombre]);

    useEffect(() => {
        loadProduct();
    }, [categories]);




    const loadProduct = async() => {
        if ( idR.length === 0 ) return;
        const {producto} = await loadProductById( idR );
        //console.log(producto.categoria._id);

        setFormValue({
            id: idR,
            categoriaId: producto.categoria._id,
            img: producto.img || '',
            nombre,
        });
    };

    const saveOrUpdate = async() => {
        if ( idR.length > 0 ) {
            //console.log(categoriaId);

            updateProduct( categoriaId, nombre, idR );
        } else {

            const tempCategoriaId = categoriaId;
            const newProduct = await addProduct(tempCategoriaId, nombre );
            onChange( newProduct.id, 'id' );
        }
    };

    const takePhoto = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5,
        }, (resp) => {
            if ( resp.didCancel ) return;
            if (!resp.assets![0].uri) return;

            setTempUri( resp.assets![0].uri );
            uploadImage( resp, idR );
        });
    };

    const takePhotoFromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5,
        }, (resp) => {
            if ( resp.didCancel ) return;
            if (!resp.assets![0].uri) return;

            setTempUri( resp.assets![0].uri );
            uploadImage( resp, idR );
        });
    };



    return (
        <View style={ styles.container }>

            <ScrollView>

                <Text style={ styles.label }>Nombre del producto:</Text>
                <TextInput
                    placeholder="Producto"
                    placeholderTextColor="gray"
                    style={ styles.textInput }
                    value={ nombre }
                    onChangeText={ ( value )=> onChange( value, 'nombre' )  }
                />

                {/* Picker / Selector */}
                <Text style={ styles.label }>Categoría:</Text>

                <Picker
                    style={{color:'black'}}
                    dropdownIconColor = "#5856D6"
                    selectedValue={ categoriaId }
                    onValueChange={ ( itemValue, itemIndex ) => onChange( itemValue, 'categoriaId' ) }
                >
                    {
                        categories.map( c => (
                            <Picker.Item
                                label={ c.nombre }
                                value={ c.id }
                                key={ c.id }
                            />
                        ))
                    }

                </Picker>



                <Button
                    title="Guardar"
                    onPress={ saveOrUpdate }
                    color="#5856D6"
                />


                {
                    ( idR.length > 0) && (
                        <View style={{ flexDirection: 'row', justifyContent:'center', marginTop: 10 }}>
                            <Button
                                title="Cámara"
                                onPress={ takePhoto }
                                color="#5856D6"
                            />

                        <View style={{ width: 10 }} />

                        <Button
                            title="Galería"
                            onPress={ takePhotoFromGallery }
                            color="#5856D6"
                        />

                        </View>
                    )
                }


                {
                    (img.length > 0 && !tempUri) && (
                        <Image
                            source={{ uri: img }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300,
                            }}
                        />
                    )
                }

                {/* TODO: Mostrar imagen temporal */}
                {
                    ( tempUri ) && (
                        <Image
                            source={{ uri: tempUri }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300,
                            }}
                        />
                    )
                }

            </ScrollView>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 10,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 18,
        color: 'black',
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15,
        color: 'black',
    },
});
