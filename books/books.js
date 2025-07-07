const Sequelize = require("sequelize")
const connection = require("../database/connection")
const Category = require("../categories/Category")

const Books = connection.define('books', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, author: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, isbn: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, publisher: {
        type: Sequelize.STRING,
        allowNull: false
    }, publication_year: {
        type: Sequelize.DATE,
        allowNull: false
    }, pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, language: {
        type: Sequelize.STRING,
        allowNull: false
    }, description: {
        type: Sequelize.TEXT,
        allowNull: false
    }, cover_image_url: {
        type: Sequelize.STRING(500),
        allowNull: false
    },  availability_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }, available_copies: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, keywords: {
        type: Sequelize.TEXT,
        allowNull: false
    }
        
})

// Relacionamentos
Category.hasMany(Books) //UMA categoria tem muitos livros (1pM)
Books.belongsTo(Category) //UM livro pertence há uma categoria (1p1)



module.exports = Books