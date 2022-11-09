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



const Routers = () => {
    return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/foods/:id' element={<FoodDetail/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/manager' element={<Manager/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/registerProducts' element={<RegisterProducts/>}/>
        <Route path='/manegerMarket' element={<ManegerMarket/>}/>
        <Route path='/manegerProducts' element={<ManegerProducts/>}/>
    </Routes>
    )
}

export default Routers;