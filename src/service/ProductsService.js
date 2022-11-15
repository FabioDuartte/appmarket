import AxiosInstance from "../config/CustomAxios.js";

const getProducts = ({ size = 5, orderby = "nome", direction = "ASC", page = 0, search = "" }) => {
    return AxiosInstance?.get(`/products?size=${size}&orderby=${orderby}&direction=${direction}&page=${page}&nomeLike=${search}`);
}

const getProductsById = ({id}) => {
    return AxiosInstance?.get(`/products/${id}`);
}

const saveProduct = (product) => {
    return AxiosInstance?.post(`/products`, product);
}

const updateProduct = (id, product) => {
    return AxiosInstance?.post(`/products/${id}`, product);
}

const removeProduct = (id) => {
    return AxiosInstance?.delete(`/products/${id}`);
}

export default {
    getProducts,
    getProductsById,
    saveProduct,
    updateProduct,
    removeProduct,
}