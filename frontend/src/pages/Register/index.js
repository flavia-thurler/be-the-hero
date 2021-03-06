import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './style.css';
import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para Logon
                </Link>
            </section>

            <form>
                <input placeholder="Nome da ONG" />
                <input type="e-mail" placeholder="E-mail" />
                <input placeholder="WhatsApp"/>
                
                <div className="input-group">
                    <input placeholder="Cidade" />
                    <input placeholder = "UF" style={{ width: 80 }} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
            </div>
        </div>
    );
}