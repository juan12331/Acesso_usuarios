import axios from "axios";


export async function getFunction(){ // função assíncrona que faz o get
    const response = await axios.get(`http://localhost:3001/usuarios`)
    return response
}