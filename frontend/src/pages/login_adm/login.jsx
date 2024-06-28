import React, { useState} from 'react'
import {getByEmail} from '../../services/APIservice'
import './login.css'

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const autenticacao = (email, password) => {
         if (email && password) {
            getByEmail(email).then ( data => {
                if (data.papel === "adm") {
                    if (data.senha === password) {
                        window.location.href = '/Users'
                    } else{
                        console.log(' senha incorreta ')
                    }
                } else {
                    console.log('esse usuario não tem acesso a pagina de administradores')
                }
            } 
            ).catch ( err => console.log('este email não esta cadastrado'))
         } else{
            console.log('preencha os dois campos')
         }
    }

  return (
    
    <div className="alinhar">
    <div className='conteiner'>
        <h1 className='h1'>Login de usuario</h1>
        <span className='span'>coloque seu email e sua senha abaixo</span>
        <input type="text" id='email' className='email input' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id='password' className='password input' value={password} onChange={(e) => setpassword(e.target.value)} />
        <span className='span'></span>
        <button onClick={() =>autenticacao(email, password)} className='button'> Logar</button>
        
    </div>
    </div>

  
    
  )
}

export default login

//https://static.vecteezy.com/ti/vetor-gratis/p1/1849553-fundo-ouro-moderno-vetor.jpg