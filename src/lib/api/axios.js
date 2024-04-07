import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
    baseURL: "http://localhost:8080/api/v1",
})

Axios.interceptors.request.use(
    (config) => {
        const AccessToken = Cookies.get("AccessToken");
        if(AccessToken){
            config.headers = {
                Authorization: "Bearer " + AccessToken,
                "Content-Type": "application/json"
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default Axios;