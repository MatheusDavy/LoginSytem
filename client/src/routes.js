import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterScreen from '../src/screens/cadastro/Cadastro'
import LoginScreen from './screens/login/Login'
import NotFoundScreen from '../src/screens/notFoundScreen'
import HomeScreen from './screens/home'

const Rotas = ()=>{
    return(
            <BrowserRouter>
               <Routes>
                    <Route path="/register" element={ <RegisterScreen/>} />
                    <Route path="/" element={ <LoginScreen/>} />
                    <Route path='*' element={<NotFoundScreen/>}/>
                    <Route path='/home' element={<HomeScreen/>} />
                    
                </Routes>
            </BrowserRouter>
        )
}

export default Rotas;