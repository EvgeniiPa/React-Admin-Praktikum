import axios from "axios";

// const urlApi = "https://api.antcar.dev2.webant.ru/";

export const axiosRequest = axios.create({
    baseURL: import.meta.env.VITE_SIMPLE_REST_URL
})