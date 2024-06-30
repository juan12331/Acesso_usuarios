import React, { useEffect, useState } from 'react';
import { getUsers, DeleteUsuario } from '../../services/APIservice'
import './users.css'

const users = () => {

  const [search, setSearch] = useState([])
  const [users, setUsers] = useState([])

  function getButton() {
    getUsers({ nome: search, email: search }).then(data => {
      setUsers(data);
      console.log(data)
    }).catch(err => console.log("deu erro :(", err))
  }

  function sair(){
    window.location.href = '/'
  }

  function goCriar(){
    window.location.href = '/Criar'
  }

  useEffect(() => {
    getButton()
  }, [])

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, '0');
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formattedDate.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  async function deletar(id) {
    await DeleteUsuario(id)
    getButton()
  }


  return (

    <>
      <div className="pesquisar">
        <input type="text" onChange={(e) => {setSearch(e.target.value)}} className="input" placeholder="pesquise usuario aqui..." />
        <button onClick={getButton} className="button"> Pesquisar </button>
        <button className='delete button1' onClick={sair}> Sair </button>
        <button className='button1 edit' onClick={goCriar}> Criar </button>
      </div>
      <div className="cardWrap">
        {users.map((user) => (
          <div className='card' key={user.id}>
            <div className="nome">
              {user.nome}
            </div>
            <div className="email">
              {user.email}
            </div>
            <div className="papel">
              {user.papel}
            </div>
            <div className="criado">
              {formatDate(user.createdAt)}
            </div>
            <button value={user.id} id='delete' className='button1 delete' onClick={ () =>  deletar(user.id) }> Deletar </button> 
            <button value={user.id} id='edit' className='button1 edit'> Editar </button>
          </div>
        ))}
      </div>
    </>


  )
}

export default users;