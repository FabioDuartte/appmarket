import AxiosInstance from "../config/CustomAxios.js";

const getCategories = (size = 200, orderby = "nome", direction = "ASC", page = 0, search = "") => {
    return AxiosInstance?.get(`/categories?size=${size}&orderby=${orderby}&direction=${direction}&page=${page}&nomeLike=${search}`);
}

const getCategoriesById = ({id}) => {
    return AxiosInstance?.get(`/categories/${id}`);
}

const saveCategorie = (categorie) => {
    return AxiosInstance?.post(`/categories`, categorie);
}

export default {
    getCategories,
    getCategoriesById,
    saveCategorie,
}