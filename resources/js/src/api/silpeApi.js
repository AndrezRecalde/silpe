import axios from "axios";
import { getEnv } from "../helpers/getEnv";


const { VITE_APP_URL } = getEnv();

const silpeApi = axios.create({
    baseURL: VITE_APP_URL,
});

silpeApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        "Accept": 'application/json',
        "Content-Type": "multipart/form-data",
    }
    return config;
});

export default silpeApi;
