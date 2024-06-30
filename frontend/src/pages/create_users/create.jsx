import React from 'react'
import { PostUsuario } from '../../services/APIservice';

const create = () => {

  
  function criar() {
    PostUsuario('jefersonDnvAgain', 'jeferson1233@gmail.com', 'password')
    .then(data => console.log(data))
    .catch(err => console.log('deu erro'))
  }

  return (

    

    <>

<div className="alinhar">
            <div className='conteiner'>
                <h1 className='h1'>Crie um usuario</h1>
                <input type="text" placeholder='Nome:' className='input' />
                <input type="text" placeholder='Email:'className='input' />
                <input type="password" placeholder='Senha:'className='input' />
                <input type="password" placeholder='Confirmar senha:'className='input' />
                <button onClick={criar} className='button'>criar</button>
            </div>
        </div>
      
    </>
  )
}

export default create