const express = require("express")
const router = express.Router()


router.get("/books", (req, res) => {
    res.send("Rota de livros")
})

router.get("/admin/books/new", (req, res) => {
    res.send("Rota para adicionar um novo livro")
})


module.exports = router;