const form = document.getElementById("novoItem")

form.addEventListener('submit', e => {
    e.preventDefault()

    console.log(e.target.elements['nome'].value)
    console.log(e.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    
}