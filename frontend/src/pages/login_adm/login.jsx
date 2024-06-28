import React, { useState } from 'react';
import { autenticacao } from '../../services/APIservice';
import './login.css';

const login = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const login = async () => {
        if (!email || !password) {
            return;
        }
        try {
            await autenticacao(email, password);
            window.location.href = '/Users';
        } catch (error) {
            const response = error.response.status;
            if (response === 404) {
                showError('Email ou senha incorretos');
            }
            console.error('An error occurred during login:', error);
        }
    }

    const showError = (message) => {
        const span = document.getElementById('spanXD');
        span.textContent = message;
    }

    return (

        <div className="alinhar">
            <div className='conteiner'>
                <h1 className='h1'>Login de usuario</h1>
                <span className='span'>coloque seu email e sua senha abaixo</span>
                <input type="text" id='email' className='email input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id='password' className='password input' value={password} onChange={(e) => setpassword(e.target.value)} />
                <span className='span aviso' id='spanXD'></span>
                <button className='problemas'> problemas ao logar? </button>
                <button onClick={() => login(email, password)} className='button'> Logar</button>
            </div>
        </div>
    )
}

export default login;

//https://static.vecteezy.com/ti/vetor-gratis/p1/1849553-fundo-ouro-moderno-vetor.jpg