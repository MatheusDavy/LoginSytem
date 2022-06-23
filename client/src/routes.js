import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterScreen from '../src/screens/cadastro/Cadastro'
import LoginScreen from './screens/login/Login'
import NotFoundScreen from '../src/screens/notFoundScreen'
import HomeScreen from './screens/private/home'
import useAuth from './hooks/useAuth'

const Private = ({Item})=>{
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <LoginScreen />
}

const Rotas = ()=>{
    return(
            <BrowserRouter>
               <Routes>
               <Route path='/home' element={<Private Item={HomeScreen} />} />
                    <Route path="/register" element={ <RegisterScreen/>} />
                    <Route path="/" element={ <LoginScreen/>} />
                    <Route path='*' element={<NotFoundScreen/>}/>
                </Routes>
            </BrowserRouter>
        )
}

export default Rotas;