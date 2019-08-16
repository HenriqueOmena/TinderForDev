import React, { useEffect } from 'react'
import './Main.css'

import logo from '../assets/logo.svg'
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'

export default function Main({ match }) {

    return (
        <div className="main-container">
            <img src={logo} alt=""/>
            <h1>{ match.params.id }</h1>
            <ul>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/35804326?v=4" alt=""/>
                    <footer>
                        <strong>
                            Henrique Omena
                        </strong>
                        <p> Descrição aqui </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/35804326?v=4" alt=""/>
                    <footer>
                        <strong>
                            Henrique Omena
                        </strong>
                        <p> Descrição aqui </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/35804326?v=4" alt=""/>
                    <footer>
                        <strong>
                            Henrique Omena
                        </strong>
                        <p> Descrição aqui </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/35804326?v=4" alt=""/>
                    <footer>
                        <strong>
                            Henrique Omena
                        </strong>
                        <p> Descrição aqui </p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>
                    </div>
                </li>


            </ul>
        </div>
    )

}
