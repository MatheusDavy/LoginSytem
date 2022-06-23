import React, { useState, useEffect } from "react";
import "../Cadastro/style.css";
import Google from '../../../assets/google.png'
import Facebook from '../../../assets/facebook.png'
import Linkedin from '../../../assets/linkedin.png'

import {Link} from 'react-router-dom'



const CadastroForms = () => {

    const [cadastro, setCadastro] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleChange = (event) => setCadastro(
        {
            ...cadastro,
            [event.currentTarget.name]: event.currentTarget.value
        }
    );
    const SubmitCadastro = (e)=>{
        e.preventDefault()
      
      
        
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

        <form onSubmit={SubmitCadastro} >
          <label for=""/>
            <span>Name</span>
            <input
              type="text"
              name="name"
              id="name"
              velue={cadastro.name}
              onChange={handleChange}
              required
              
            />
            
          
          <label for="" />
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              id="email"
              velue={cadastro.email}
              onChange={handleChange}
              required
            />
            
          
          <label for="" />
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              velue={cadastro.password}
              onChange={handleChange}
              required

            />
            
          <input type="submit" value="Sign up" />
        </form>
        <div className="registrar">
          I already have a registration{" "}
          <Link className="nav_page" to="/login">Log In</Link>
        </div>
      </main>
    </div>
  );
};

export default CadastroForms;
