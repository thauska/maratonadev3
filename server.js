//configurando o servidor
const express = require("express");
const server = express();

//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.send("Ok, cheguei aqui com Nodemon!")
})

//Ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function() {
    console.log("Iniciei um servidor!!")
})