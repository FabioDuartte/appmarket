import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../views/Home'
import Foods from '../views/Foods'
import FoodDetail from '../views/FoodDetail'
import Market  from '../views/Market'
import Checkout from '../views/Checkout'
import Login from '../views/Login'
import Register from '../views/Register'
import RegisterProducts from '../views/RegisterProducts'



const Routers = () => {
    return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/foods/:id' element={<FoodDetail/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/registerProducts' element={<RegisterProducts/>}/>
    </Routes>
    )
}

export default Routers;