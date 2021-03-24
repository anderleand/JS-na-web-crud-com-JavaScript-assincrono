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


const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)

    .then(()=>{
        window.location.href = './edicao_concluida.html'
    })
})