import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1f7fe46798cd02e437d5bfc927c6e81b',
        language: 'es-ES',
    },
});


export default movieDB;


