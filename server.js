//identificar - atribuição - valor (pacote)
//pc acessa o pacote express e guarda os poderes de servidor do node nessa const
const express = require("express")

//criou o aplicativo/aplicação a partir da função express
const app = express()
const porta = 3333

//dá instruções para a função
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//pedir pra ligar o servidor - depois de ouvir, mostre
//mostraPorta sem parênteses pois é o servidor quem chama agora quando funcionar, não o pc
app.listen(porta, mostraPorta) 
