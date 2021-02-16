
import React from 'react'
import {useState, useEffect} from 'react'

const Login = (props)=>{

    const [loginState , setLoginState] = useState(false)
    const [mState , setMState] = useState('Hello Guest')


    const  toggleHandler = ()=>{
        if (loginState){
            setMState('Hello Guest')
            setLoginState(false)

        }
        else {

            setMState('Welcome User')
            setLoginState(true)

        }
    }


    const btnRender = ()=>{
        return(
            <button onClick={toggleHandler}
                    style={loginState ? { backgroundColor:'#15670f', color:'white'} : {backgroundColor:'#1e4aa7' , color:'white'}}
            >
                {loginState ? "Logout" : "Login"}
            </button>
        )
    }

    return(
        <div>
            <h2>{mState}</h2>
            {btnRender()}
        </div>
    )
}


export {Login}