import React from 'react'
import './Login.css'
import ImageOne from '../images/image1.jpeg'
import {loginUrl} from '../spotify'

function Login() {
    return (
        <div className="login">
            <img src={ImageOne} alt=""/>
            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
        </div>
    )
}

export default Login
