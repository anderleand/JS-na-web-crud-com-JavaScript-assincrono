import { clienteService } from '../service/cliente-service.js'

const getURL = new URL(window.location)
const id = getURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
    
    console.log(dados)
    console.log(dados.nome)
    console.log(dados.email)
})
