import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import './style.css'
import useAuth from '../../../hooks/useAuth'


const LoginForm = ()=>{

    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleLogin = ()=>{
        
        if(!email | !senha){
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if(res){
            setError(res);
            return;
        }
        navigate("/home");
    };


    return(
        <div className="background">

        <main> 
            <h4>Login</h4>

            <form >
                <label for="">
                    <span>E-mail</span>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=>[setEmail(e.target.value), setError('')]}/>
                </label>
                <label for="">
                    <span>Password</span>
                    <input type="password" name="password" id="password" value={senha}  onChange={(e)=>[setSenha(e.target.value), setError('')]}/>
                </label>
                <span className="error">{error}</span>
                <br/>
                <button id="btn_login" onClick={handleLogin} >Login</button>
                
            </form>
            <div className="login">
                I don't have a registration. <Link className='nav_page' to='/register'>Sign Up</Link>
            </div>
        </main>

    </div>
    )
}


export default LoginForm;