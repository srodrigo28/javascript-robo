const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1
        }
    } else {
        if (peca.value < 10) {
            peca.value = parseInt(peca.value) + 1
        }
    }
}