/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import cafeApi from '../api/cafeApi';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';
import mime from 'mime';

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: ( categoryId: string, productName: string ) => Promise<Producto>;
    updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
    deleteProduct: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( data: any, id: string ) => Promise<void>; // TODO: cambiar ANY
}



export const ProductsContext = createContext({} as ProductsContextProps);



export const ProductsProvider = ({ children }: any ) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async() => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
        setProducts([ ...resp.data.productos ]);
    };

    const addProduct = async( categoryId: string, productName: string ): Promise<Producto> => {

        const resp = await cafeApi.post<Producto>('/productos', {
            nombre: productName,
            categoria: categoryId,
        });
        const newProduct = {...resp.data.producto, categoria: {_id: resp.data.producto.categoria}};
        setProducts([ ...products, newProduct ]);

        return resp.data.producto;
    };

    const updateProduct = async( categoryId: string, productName: string, productId: string ) =>{

        const resp = await cafeApi.put<Producto>(`/productos/${ productId }`, {
            nombre: productName,
            categoria: categoryId,
        });

        const newProduct = {...resp.data.producto, categoria: {_id: resp.data.producto.categoria}};

        setProducts( products.map( prod => {
            return (prod.id === productId )
                    ? newProduct
                    : prod;
        }) );
    };

    const deleteProduct = async( id: string ) => {

    };

    const loadProductById = async( id: string ):Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`productos/${ id }`);
        return resp.data;
    };

    const uploadImage = async( data: ImagePickerResponse, id: string ) => {

        if (!data.assets![0].uri) return;

        const fileToUpload = {
            uri: data.assets![0].uri,
            type: data.assets![0].type,
            name: data.assets![0].uri.split('/').pop(),
        };

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {

            const headers = {
                accept: 'application/json',
                'content-type': 'multipart/form-data',
            };

            const opts = {
                method: 'PUT',
                url: `/uploads/productos/${ id }`,
                headers: headers,
                data: formData,
            };
            const resp = await cafeApi.request(opts);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>
            { children }
        </ProductsContext.Provider>
    );
};
