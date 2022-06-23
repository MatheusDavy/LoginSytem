import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import '../home/style.css'

const HomeScreen = ()=>{
    const {signout} = useAuth()
    const navigate = useNavigate()

    return(
        <div className="body">
           
           <header className="header">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAzCAMAAADivasmAAAAPFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQLyYwAAAAE3RSTlMAgMAQQKDw4GAgMFDQz5BwsK8/0u2M7QAAAhVJREFUSMeVlduaqyAMhTkfRax5/3fd1gYXMtg9s26KfvnJIklR/FQMVilHROold/ELJU832fw93rykoVE+PAP6RQSkh8wDkR0BGbTqGWGJGuKVfGtbwJQ0M8WIlwlvw9YYl0aiECOjg2gfGEsNmZRxmTErPSPYsOhuHxqRfZd5j1dA4LbiIP6G6FBamdZ4Z3JD5Pm4LB8kuLEhsO6ZiHQqKZq10nHnVe/b8gOQu8JnY4c0mtdzBCeQ4Csve8TmJLRZfWsIti6XSS86RMV7Yah0D/GA+SRAbN95BzuxLfOnXEA20St3xV1Oz5zOiQuJejYs6ewN0+d0b0DuwGUcGRH4gPCe6r1KnJD+h1Qc5ow1n5/8gGDMfyDm70i4CqJ+gbhrb4lGQ/x66RHYCTwQg8rVBcMBlu2gAzNfFXu2YcNAuCGNQm7LFs1VMh1wj3QnQVE8HVqPhWt3h9SemZEgA4u5DQQdYcrk4esQFZ3augHV17DJA/HaEkNr3bMs/LRo/F0sLDotFFm9EDRc4C+2CL+vA6F1wvjExeZ64R6gs5yWN4CURhCuywCEqkhbn6LFFBQb7cLoRKm4CGa4+9Hm6DqElQSkmagCCjdkVCr4VkD1CyId2tPLMkL2PpY6eBoI5GGEqNR0xVtHMwJ1g9RbHI5zQBjCJ7ksHlTdnLBaPEpXPwGi+K5sb6lUQIYvSkFu6pCsRkz0D7aTUwypzjYaAAAAAElFTkSuQmCC" />
                <ul>
                    <a href=""><li>Business</li></a>
                    <a href=""><li>Model</li></a>
                    <a href=""><li>Guidelines</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
                <button onClick={()=>[signout(), navigate("/")]}>Sair</button>
           </header>
           <main className="main">
                <div className="content__info">
                    <img src="data:image/png;base64,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" alt="" />
                    <div>BEAUTYPASS</div>
                    <div>A model way to elevate business</div>
                </div>
                <div className="girls">
                    <img src="https://www.beautypass.app/static/media/image1.1f5e672d.png" alt="" />
                </div>
           </main>
            
        </div>
        
    )
}

export default HomeScreen