import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:4000/api/"
});

export default instance;