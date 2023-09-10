/* eslint-disable curly */
import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import cafeApi from '../api/cafeApi';

import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ( registerData: RegisterData ) => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        

        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
        const resp = await cafeApi.get('/auth/renew');
        console.log(resp.data);
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }

        await AsyncStorage.setItem('token', resp.data.token );
        
        
        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario,
            },
        });
    };


    const signIn = async({ email, password }: LoginData ) => {

        try {

            const { data } = await cafeApi.post<LoginResponse>('/auth/login', { email, password } );
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario,
                },
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta',
            });
        }
    };

    const signUp = async( { nombre, email, password }: RegisterData ) => {

        try {

            const { data } = await cafeApi.post<LoginResponse>('/auth/signup', { email, password, nombre } );
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario,
                },
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la información',
            });
        }

    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    );

};


