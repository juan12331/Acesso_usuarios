import React, { useState, useEffect} from 'react'
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
    <div>
        <input type="text" id='email' className='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id='password' className='password' value={password} onChange={(e) => setpassword(e.target.value)} />
        <button onClick={() =>autenticacao(email, password)}> Logar</button>
    </div>
  )
}

export default login