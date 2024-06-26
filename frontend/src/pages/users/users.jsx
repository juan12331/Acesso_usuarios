import React from 'react'
import {getFunction} from '../../services/APIservice'

const users = () => {
    function getButton () {
        getFunction().then( data => console.log(data)).catch(err => console.log("deu erro :("))
    }

  return (


            <button onClick={getButton}> GET </button>
    
  )
}

export default users