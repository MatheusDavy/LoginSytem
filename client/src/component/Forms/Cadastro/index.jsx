import React, { useState, useEffect } from "react";

import "../Cadastro/style.css";
import Google from '../../../assets/google.png'
import Facebook from '../../../assets/facebook.png'
import Linkedin from '../../../assets/linkedin.png'

import {Link, useNavigate} from 'react-router-dom'

import useAuth from "../../../hooks/useAuth";



const CadastroForms = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const {signup} = useAuth()

    const handleSignup = (e)=>{
      e.preventDefault()

      if(!name | !email | !senha){
        setError("Preencha todos os campos")
        return
      }
        const res = signup(email, senha);

        if(res){
          setError(res)
          return;
        }

        alert("Usuário Cadastrado Com Sucesso!!!")

        navigate("/")
      }




  return (
    <div className="background">
      <main>
        <h4>
          Create your account
        </h4>

        <div className="socia-midia">
          <a href="">
            <img src={`${Facebook}`} alt="Facebook" />
          </a>
          <a href="">
            <img src={`${Google}`} alt="Google" />
          </a>
          <a href="">
            <img src={`${Linkedin}`} alt="Linkedin" />
          </a>
        </div>

        <div className="alternative">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <form >
          <label for=""/>
            <span>Name</span>
            <input
              type="text"
              name="name"
              id="name"
              velue={name}
              onChange={(e)=> [setName(e.target.value), setError('')]}
              required
              
            />
            
          
          <label for="" />
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              id="email"
              velue={email}
              onChange={(e)=> [setEmail(e.target.value), setError('')]}
              required
            />
            
          
          <label for="" />
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              velue={senha}
              onChange={(e)=> [setSenha(e.target.value), setError('')]}
              required

            />
            <br/>
            <span className="error">{error}</span>
            
          <input  value="Sign up" type='submit' onClick={handleSignup} />
        </form>
        <div className="registrar">
          I already have a registration{" "}
          <Link className="nav_page" to="/">Log In</Link>
        </div>
      </main>
    </div>
  );
};

export default CadastroForms;
