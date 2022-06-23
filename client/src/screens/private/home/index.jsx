import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const HomeScreen = ()=>{
    const {signout} = useAuth()
    const navigate = useNavigate()

    return(
        <Fragment>
            <h1>HOME</h1>
            <br/>
            <button onClick={()=>[signout(), navigate("/")]}>Sair</button>
        </Fragment>
        
    )
}

export default HomeScreen