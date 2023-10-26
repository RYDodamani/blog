import axios from 'axios'

let instance = axios.create({
    baseURL:'http://localhost:1337'
});

instance.interceptors.request.use(async (config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
},(network_error)=>{
    return Promise.reject(network_error)
});

export default instance;