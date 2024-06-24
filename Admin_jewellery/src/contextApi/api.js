import axios from "axios";
import { URL } from "./urls";
// import asyncWrapper from "./asyncWrapper";

export const api = axios.create({
    baseURL: URL.BASE_URL
});

export const handleIsLogin = async () => {
    try {
        return await api.get(URL.IS_LOGIN);
    } catch (error) {
        return error;
    }
}