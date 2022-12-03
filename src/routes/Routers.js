import React from 'react'
import { createBrowserRouter, RouterProvider, BrowserRouter, useRoutes, Outlet} from 'react-router-dom';
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
import NotFound from '../views/NotFound'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function Layout() {
    return (
      <div>
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    );
  }


function Routers() {
    const routers = [
        {
            path: "/", element: <Layout />, errorElement: <h1>Error</h1>, children: [{
            path: "/home", element: <Home />, index: true},          
            { path: "/foods", element: <Foods /> },
            { path: "/market", element: <Market /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/registerProducts", element: <RegisterProducts /> },
            { path: "/manager", element: <Manager /> },
            { path: "/manegerMarket", element: <ManegerMarket /> },
            { path: "/manegerProducts", element: <ManegerProducts /> }
           ]
        },  
      ]
  let element = useRoutes(routers)
  return (
   <>{element}</>
  )
}
// const Routers = () => {
//     return (
//         <Routes>
//             <Route path='/' element={<Navigate to='/home'/>}/>
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/foods' element={<Foods/>}/>
//             <Route path='/foods/:id' element={<FoodDetail/>}/>
//             <Route path='/market' element={<Market/>}/>
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/register' element={<Register/>}/>
//             <Route path='/registerProducts' element={<RegisterProducts/>}/>
//             <Route path='/manager' element={<Manager/>}/>
//             <Route path='/manegerMarket' element={<ManegerMarket/>}/>
//             {/* <Route path='/manegerProducts' element={<ManegerProducts/>}/> */}
//             <Route path='/*' element={<NotFound/>}/>
//         </Routes>
//     )
// }

export default Routers;