import React, { useState } from 'react';
import { PostUsuario } from '../../services/APIservice';


const create = () => {

  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')

  
  function criar() {
    if (senha != confirmar) {
      showError('senha e confirmar senha tem que estar igual')
      return
    }
    if( nome == '' || email == '' || senha == '' || nome == '' ){
      showError('preencha todos os campos')
      return
    }
    PostUsuario(nome, email, senha)
    .then(data => {
      if (data == "usuario ja foi cadastrado") {
        showError(data)
      } else{
        window.location.href = "/Users"
      }
    })
    .catch(err => console.log('deu erro'))
  }

  const showError = (message) => {
    const span = document.getElementById('span');
    span.textContent = message;
}

function voltar() {
  window.location.href ="/Users"
}

  return (

    

    <>

<div className="alinhar">
            <div className='conteiner'>
                <h1 className='h1'>Crie um usuario</h1>
                <input type="text" placeholder='Nome:' className='input' value={nome} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email:'className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Senha:'className='input' value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input type="password" placeholder='Confirmar senha:'className='input' value={confirmar} onChange={(e) => setConfirmar(e.target.value)} />
                <span className='span aviso' id='span'></span>
                <div className="alinhar">
                <button onClick={criar} className='button'>criar</button>
                <button onClick={voltar} className='delete button1'>voltar</button>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default create