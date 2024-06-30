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
      <button onClick={criar}>criar aleatório</button>
    </>
  )
}

export default create