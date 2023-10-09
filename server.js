const aplicacao = require('./src/config/express');

// iniciando o servidor
aplicacao.listen(3000, function () {
console.log('Servidor rodando na porta 3000');
})
