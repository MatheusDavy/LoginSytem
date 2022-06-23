import React from "react";
import {Link} from 'react-router-dom'
import './style.css'


const LoginForm = ()=>{


    return(
        <div className="background">

        <main> 
            <h4>Login</h4>

            <form action="">
                <label for="">
                    <span>E-mail</span>
                    <input type="email" name="email" id="email" />
                </label>
                <label for="">
                    <span>Password</span>
                    <input type="password" name="password" id="password" />
                </label>
                <input id="btn-login" type="submit" value="Login" />
            </form>
            <div className="login">
                I don't have a registration. <Link className='nav_page' to='/register'>Sign Up</Link>
            </div>
        </main>

    </div>
    )
}


export default LoginForm;