import AxiosInstance from "../config/CustomAxios.js";

const getUserById = ({id}) => {
    return AxiosInstance?.get(`/user/${id}`);
}

const saveUser = (user) => {
    return AxiosInstance?.post(`/user`, user);
}

const updateCredentials = (id, { email, senha, senhaNova, emailNovo }) => {
    return AxiosInstance?.post(`/user/${id}`, { email, senha, senhaNova, emailNovo });
}

const removeUser = (id) => {
    return AxiosInstance?.delete(`/user/${id}`);
}

const autenticate = ({ email, senha }) => {
    return AxiosInstance?.post(`/user/authenticate`, { email, senha });
}

export default {
    getUserById,
    saveUser,
    updateCredentials,
    autenticate,
    removeUser,
}