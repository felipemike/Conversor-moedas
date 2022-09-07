function converter() {

let moeda = parseFloat(document.getElementById('valor').value)

let moedaDola = moeda * 5.15

let valorFinal = document.getElementById('valorConvertido')

valorFinal.innerHTML = `R$${moedaDola}`

    
}