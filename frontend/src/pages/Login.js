import React from 'react';
import './Login.css'

import logo from '../assets/logo.svg'

function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="tinDev"></img>
                <input type="text" placeholder="Digite Utilizador  Github"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;
