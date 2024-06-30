import http from "./http"

export async function getUsers(params) {
    const response = await http.get('/usuarios', { params });
    return response.data;
}

export async function getUsersById(id) {
    const response = await http.get(`/usuarios/${id}`);
    return response.data;
}

export async function autenticacao(email, senha) {
    const response = await http.post('/login', { email, senha });
    return response.data;
}

export async function PostUsuario (nome, email, senha ) {
    const response = await http.post(`/usuarios`, {nome: nome, email: email, senha: senha })
    console.log(response)
    return response.data;
}

export async function DeleteUsuario (id) {
    const response = await http.delete(`/usuarios/${id}`)
    return response.data;
}