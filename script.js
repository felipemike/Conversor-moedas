function converter() {
let moeda = document.getElementById('valor')
let moedaDola = Number(moeda.value * 5)

let valorFinal = document.getElementById('valorConvertido')

valorFinal.innerHTML = `R$:${moedaDola}`

    
}