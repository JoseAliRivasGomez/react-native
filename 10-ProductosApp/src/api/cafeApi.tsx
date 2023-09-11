import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseURL = 'http://192.168.1.9:4000/api';
const baseURL = 'https://cafe-node-rn.up.railway.app/api';

const cafeApi = axios.create({ baseURL });

cafeApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            config.headers['x-token'] = token;
        }
        return config;
    }
);



export default cafeApi;
