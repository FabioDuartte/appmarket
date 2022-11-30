import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [id, setUserId] = useState("");
  const [email, setUserEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");  
  const [cep, setCep] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);


  const dataUserGlobalContext = {
    // userId: id,
    // userEmail: email,
    // userSenha: senha,
    // userNome: nome,    
    // userCep: cep,    
    // userCnpj: cnpj,            
    // setUserId,
    // setUserEmail,
    // setSenha,
    // setNome,
    // setCep,
    // setCnpj,  
    user: user,
    setUser,
    isLogged: isLogged,
    setIsLogged,          
  };

  return (
    <AppContext.Provider value={dataUserGlobalContext}>
      {children}
    </AppContext.Provider>
  );
};

export const useUserContext = () => useContext(AppContext);

export default AppProvider;