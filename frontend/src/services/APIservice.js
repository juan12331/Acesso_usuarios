import axios from "axios";


export async function getFunction(){ // função assíncrona que faz o get
    const response = await axios.get(`http://localhost:3001/usuarios`)
    return response.data
}

export async function getById(id){
    const response = await axios.get(`http://localhost:3001/usuarios/${id}`)
    return response.data
}

export async function getByName(name){
    const response = await axios.get(`http://localhost:3001/usuarios/${name}`)
    return response.data
}

export async function getByEmail(email){
    const response = await axios.get(`http://localhost:3001/usuarios//${email}`)
    return response.data
}