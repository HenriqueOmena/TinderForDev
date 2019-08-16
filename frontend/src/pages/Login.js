import React, { useState } from 'react';
import './Login.css'

import api from '../services/api';

import logo from '../assets/logo.svg'

function Login({ history }) {
    const [ username, setUsername ] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);

        console.log('aqui o response', response)
        console.log(username);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tinDev"></img>
                <input
                    type="text"
                    placeholder="Digite Utilizador  Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;
