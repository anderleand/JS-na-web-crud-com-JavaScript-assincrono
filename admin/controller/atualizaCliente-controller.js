import { clienteService } from '../service/cliente-service.js'

(async () => {
    const getURL = new URL(window.location)
    const id = getURL.searchParams.get('id')

    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')

    const dados = await clienteService.detalhaCliente(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email

    console.log(dados)
    console.log(dados.nome)
    console.log(dados.email)

    const formulario = document.querySelector('[data-form]')
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()

        await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
        window.location.href = './edicao_concluida.html'
    })
})()