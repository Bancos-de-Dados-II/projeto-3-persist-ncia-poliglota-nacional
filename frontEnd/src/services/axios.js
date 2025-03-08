import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:1010/map",  
});

export default axiosApi;
