import React, { useState, useEffect } from 'react';
import {getFunction , getByName, getById} from '../../services/APIservice'
import './users.css'

const users = () => {
    function getButton () {
        getFunction().then( data => {

            
        }).catch(err => console.log("deu erro :(", err))


       
    }

    
  return (

<>
    <div class="pesquisar">
    <input type="text" class="input" placeholder="pesquise usuario aqui..." />
    <button onClick={getButton} class="button"> Pesquisar </button>
    </div>
    <div className="container">

    </div>
</>
            
    
  )
}

export default users