import React from 'react'
import { PostUsuario } from '../../services/APIservice';

const create = () => {
  
  function criar() {
    PostUsuario('jefersonDnv', 'jeferson123@gmail.com', 'password')
    .then(data => console.log(data))
    .catch(err => console.log('deu erro'))
    console.log('test')
  }

  return (

    

    <>
      <button onClick={criar}>criar aleatório</button>
    </>
  )
}

export default create