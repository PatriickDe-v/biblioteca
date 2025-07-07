const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const connection = require("./database/connection")


const categoriesController = require("./categories/categoriesController")
const booksController = require("./books/booksController")

const Books = require("./books/Books")
const Category = require("./categories/Category")



// View Engine
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Data Base
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })


// Rotas
app.use("/", categoriesController)
app.use("/", booksController)

app.get("/", (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log("O servidor está rodando!")
})