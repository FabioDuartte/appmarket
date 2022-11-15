import AxiosInstance from "../config/CustomAxios.js";

const getMarkets = ({ size = 5, orderby = "nome", direction = "ASC", page = 0, search = "" }) => {
    return AxiosInstance?.get(`/markets?size=${size}&orderby=${orderby}&direction=${direction}&page=${page}&nomeLike=${search}`);
}

const getMarketsById = ({id}) => {
    return AxiosInstance?.get(`/markets/${id}`);
}

const updateMarket = (id, market) => {
    return AxiosInstance?.post(`/markets/${id}`, market);
}

export default {
    getMarkets,
    getMarketsById,
    updateMarket,
}