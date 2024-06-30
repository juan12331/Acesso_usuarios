import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { getUsersById, putUsuario } from '../../services/APIservice';




const update = () => {
  const { id } = useParams()

  const rageEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rageSenha = /^(?=.*[A-Z])(?=.*\d).+$/;
  const rageCaracter =  /^.{8,}$/;

 

  function preencher(id){
    getUsersById(id).then(data => {
      setName(data.nome)
      setEmail(data.email)
      setPapel(data.papel)
      setSenha(data.senha)

      
              
    }).catch(err => console.log(err))
  }

  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [papel, setPapel] = useState('')

 

  const showError = (message) => {
    const span = document.getElementById('span');
    span.textContent = message;
}

function voltar() {
  window.location.href ="/Users"
}

function Atualizar() {
  

  if( nome == '' || email == '' || senha == '' || nome == '' || papel == ''){
    showError('preencha todos os campos')
    return;
  }
  if (!rageEmail.test(email)) {
    showError('Email invalido')
    return;
  } if (!rageSenha.test(senha)) {
    showError('Senha fraca, coloque numeros e letras maiusculas')
    return;
  } if (!rageCaracter.test(senha)) {
    showError('senha precisa no minimo de 8 caracteres')
    return
  } 
  putUsuario(id, nome, email, senha, papel)
  voltar()
}

useEffect(() => {
  preencher(id)
}, [])



  return (
    <div className="alinhar">
            <div className='conteiner'>
                <h1 className='h1'>Editar usuario  id:{id}</h1>
                <input type="text" placeholder='Nome:' className='input' value={nome} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email:'className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Senha:'className='input' value={senha} onChange={(e) => setSenha(e.target.value)} />
                <select value={papel} onChange={(e) => setPapel(e.target.value)} className='select'>
                  <option value="user">user</option>
                  <option value="adm">adm</option>
                </select>
                <span className='span aviso' id='span'></span>
                <div className="alinhar">
                <button onClick={Atualizar} className='button'>Atualizar</button>
                <button onClick={voltar} className='delete button1'>voltar</button>
                </div>
            </div>
        </div>
  )
}

export default update