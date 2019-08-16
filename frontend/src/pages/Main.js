import React, { Component } from 'react'

import logo from '../assets/logo.svg'

export default function Main({ match }) {

    return (
        <div className="main-container">
            <img src={logo} alt=""/>
            <h1>{ match.params.id }</h1>
            <ul>
                <li>
                    <img src={logo} alt=""/>
                    <footer>
                        <strong>
                            Henrique Omena
                        </strong>
                        <p> Descrição aqui </p>
                    </footer>
                </li>
            </ul>
        </div>
    )

}
