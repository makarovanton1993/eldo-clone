import axios from 'axios';
import Cookies from 'js-cookie'
const $host = axios.create({
    baseURL:'http://localhost:3001'
})

const $authHost = axios.create({
    baseURL:'http://localhost:3001',
    
})

const authInterceptor = config => {
    // config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    config.headers.authorization = `Bearer ${Cookies.get('token')}`;
    // config.headers.authorization = `Bearer ${Cookie:}`
    return config;
}   

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}