import React, { useEffect, useState } from 'react'
import './Main.css'
import { Link } from "react-router-dom";

import logo from '../assets/logo.svg'
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'
import api from '../services/api';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data)
            console.log(response.data)
        };

        loadUsers();
    }, [match.params.id])

    const handleLike = async (id) => {
        await api.post(`/devs/${id}/likes`, null , {
            headers: { user: match.params.id }
        })

        setUsers(users.filter( user => user._id !== id))
    }

    const handleDislike = async (id /* id q vai receber do selecionados/frontend */) => {
        await api.post(`/devs/${id}/dislikes`, null , {
            headers: { user: match.params.id /* esse id eh o do utilizador que esta procurando devs */}
        })

        //Apesar de ser um array nunca tratar como um array usando push ou splice sem chamar o proprio setusers
        setUsers(users.filter( user => user._id !== id))
    }


    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
            <h1>{ match.params.id }</h1>
            <ul>
                { users.map(user => (
                    <li key={user._id}>
                    <img src={user.avatar} alt=""/>
                    <footer>
                        <strong>
                            {user.name}
                        </strong>
                        <p>{ user.bio }</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} onClick={() => handleDislike(user._id)} alt=""/>
                        </button>
                        <button type="button">
                            <img src={like} onClick={() => handleLike(user._id)} alt=""/>
                        </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )

}
