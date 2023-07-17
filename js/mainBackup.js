const robotron = document.querySelector("#robotron")

const sutrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener('click', () => { braco.value = parseInt(braco.value) + 1 })
sutrair.addEventListener('click', () => { braco.value = parseInt(braco.value) - 1 })