import React from 'react'; 

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import './style.css'

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form action="">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit"></button>
                    <a href="/register">
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}