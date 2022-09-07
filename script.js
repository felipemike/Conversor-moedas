function converter() {

let moeda = document.getElementById('valor')
let valorNum = Number(moeda.value)
let moedaDola = parseFloat(valorNum * 5.15)

let valorFinal = document.getElementById('valorConvertido')

valorFinal.innerHTML = `R$${moedaDola}`

    
}