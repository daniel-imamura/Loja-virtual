const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bdprojeto'
});

connection.connect(function(err) {
    if(err)
        console.log('Erro na conexão com o BD PROJETO');
    else
        console.log('Conexão com BD PROJETO realizada com sucesso');

})

module.exports = connection;