import axios from "axios";

const API_URL = `https://f2ba-131-161-231-91.sa.ngrok.io/`;

const axiosConfig = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  }
});

export default axiosConfig;