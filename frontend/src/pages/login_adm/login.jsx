import React, { useState} from 'react'
import {getByEmail} from '../../services/APIservice'
import './login.css'

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    

    function  createElement(text) {
        let span = document.getElementById('spanXD')
        span.innerText = text
        
        
    }

    const autenticacao = (email, password) => {
         if (email && password) {
            getByEmail(email).then ( data => {
                if (data.papel === "adm") {
                    if (data.senha === password) {
                        window.location.href = '/Users'
                    } else{
                        createElement(' senha incorreta ')
                    }
                } else {
                    createElement('esse usuario não tem acesso a pagina de administradores')
                }
            } 
            ).catch ( err => createElement('este email não esta cadastrado'))
         } else{
            createElement('*preencha os dois campos*')
            
         }
    }

  return (
    
    <div className="alinhar">
    <div className='conteiner'>
        <h1 className='h1'>Login de usuario</h1>
        <span className='span'>coloque seu email e sua senha abaixo</span>
        <input type="text" id='email' className='email input' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id='password' className='password input' value={password} onChange={(e) => setpassword(e.target.value)} />
        <span className='span aviso' id='spanXD'></span>
        <button className='problemas'> problemas ao logar? </button>
        <button onClick={() =>autenticacao(email, password)} className='button'> Logar</button>
        
    </div>
    </div>

  
    
  )
}

export default login

//https://static.vecteezy.com/ti/vetor-gratis/p1/1849553-fundo-ouro-moderno-vetor.jpg