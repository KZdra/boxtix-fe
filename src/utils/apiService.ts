import axios from "axios";
import Swal from "sweetalert2";

const API = import.meta.env.VITE_SERVER_API;


const errorHandling = (error: any) => {
    if (error.code == "ERR_NETWORK") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    else if (error.code == "ECONNABORTED") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
}

const apiService = {
    apiGet: async (uri: string, params: any = {}) :Promise<any> => {
        try {
            let res = await axios.get(
                API + uri, { params: params }
            );

            return res;            
        } catch (error) {
            errorHandling(error);
        }
    },
    apiPost: async (uri: string, body: any, options: any = {}) :Promise<any> => {
        try {
            let res = await axios.post(
                API + uri, body, options
            );

            return res;
        } catch (error) {
            errorHandling(error);
        }
    },
};

export {
    apiService
};