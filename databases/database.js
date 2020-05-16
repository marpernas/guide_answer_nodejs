const Sequilize = require('sequelize');

const connection = new Sequilize('guiaperguntas','root','',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;