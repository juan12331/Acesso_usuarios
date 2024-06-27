import React from 'react'
import {getFunction} from '../../services/APIservice'
import './users.css'

const users = () => {
    function getButton () {
        getFunction().then( data => console.log(data)).catch(err => console.log("deu erro :("))
    }

  return (

<>
    <div class="pesquisar">
    <input type="text" class="input" placeholder="pesquise usuario aqui..." />
    <button onClick={getButton} class="button"> Pesquisar </button>
    </div>
</>
            
    
  )
}

export default users