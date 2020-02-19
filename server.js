//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//configurando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html")
})


//Ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function() {
    console.log("Iniciei um servidor!!")
})