const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Natália Barbosa Rodrigues',
        imagem: 'https://unsplash.com/pt-br/fotografias/um-gato-preto-e-branco-senta-se-ao-ar-livre-perto-de-um-predio-JhkwmjGtUHM',
        minibio: 'cool cat'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta) 