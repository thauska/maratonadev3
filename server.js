//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//habilitar body do formulário
server.use(express.urlencoded({ extended: true }))

//configurar a conexão com BD
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgre',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})

//configurando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})


//configurar a apresentação da página
server.get("/", function (req, res) {
    const donors = []
    return res.render("index.html", { donors })
})

server.post("/", function (req, res) {
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood


    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios.")
    }

    //coloco os valores dentro do BD
    const query = `
        INSERT INTO donors ("name", "email", "blood") 
        VALUES ($1, $2, $3)`

    const values = [name, email, blood]

    db.query(query, values, function (err) {
        //fluxo de erro
        if (err) {
            console.log(err)
            return res.send("erro no banco de dados.")
        }

        //fluxo ideal
        return res.redirect("/")
    })

})


//Ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function () {
    console.log("Iniciei um servidor!!")
})