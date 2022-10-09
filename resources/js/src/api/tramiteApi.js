import axios from "axios";
import { getEnv } from "../helpers/getEnv";

const {VITE_APP_URL} = getEnv();

const tramiteApi = axios.create({
    baseURL: VITE_APP_URL
});

export default tramiteApi;
