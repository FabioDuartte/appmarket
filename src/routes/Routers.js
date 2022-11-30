import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../views/Home'
import Foods from '../views/Foods'
import FoodDetail from '../views/FoodDetail'
import Market  from '../views/Market'
import Manager from '../views/Manager'
import Login from '../views/Login'
import Register from '../views/Register'
import RegisterProducts from '../views/RegisterProducts'
import ManegerMarket from '../views/ManagerMarket'
import ManegerProducts from '../views/ManegerProducts'
import { useUserContext } from "../Context/UserContext";
import NotFound from '../views/NotFound'



const Routers = () => {
    const userContext = useUserContext();
    return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/foods/:id' element={<FoodDetail/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<NotFound/>}/>
        {(userContext.isLogged) ? 
        
        <>
            <Route path='/registerProducts' element={<RegisterProducts/>}/>
            <Route path='/manager' element={<Manager/>}/>
            <Route path='/manegerMarket' element={<ManegerMarket/>}/>
            <Route path='/manegerProducts' element={<ManegerProducts/>}/>
        </>         
        : <Route path='/*' element={<NotFound/>}/>

        }   
        {console.log(userContext.isLogged)}

        
    </Routes>
    )
}

export default Routers;