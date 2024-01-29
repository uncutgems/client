import axios from "axios";
import * as Constant from "./Constant"

export const login = (username: string, password: string) => {
    return axios.post(Constant.SANDBOX_HOST + Constant.LOGIN_ENDPOINT, {
        username: username,
        password: password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
}

export const register = (username: string, email: string, password:string) => {

}

export const logout = () => {
    localStorage.removeItem("user");
}

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};

export const refreshToken = () => {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);
    else
        return
    return axios.post(Constant.SANDBOX_HOST + Constant.PLAID_EXCHANGE_TOKEN,
        {refreshToken: user.refreshToken}).then(response => {
        if(response.data.refreshToken) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
    })
}