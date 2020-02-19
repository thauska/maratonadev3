//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//habilitar body do formulário
server.use(express.urlencoded({extended: true}))

//configurando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

//Agrupamento de dados: lista de doadores
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "O+"
    },
    {
        name: "Thayana Mamoré",
        blood: "A+"
    },
    {
        name: "Anouska Kunath",
        blood: "B-"
    },
]


//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

server.post("/", function(req, res) {
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name: name,
        blood: blood
    })

    return res.redirect("/")
})


//Ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function() {
    console.log("Iniciei um servidor!!")
})