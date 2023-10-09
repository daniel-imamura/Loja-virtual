class Usuarios_dao
{
    constructor(db)
    {
        this._db = db;
    }

    incluiUsuarios(usuario) //Caso o cadastro seja bem sucedido
    {
        return new Promise((resolve, reject) => {
            var sqlInsertUsuario = "INSERT INTO USUARIOS (nomeUsua, emailUsua, cpf, senhaUsua) VALUES('" + usuario.nome + "', '" + usuario.email + "', '" + usuario.cpf + "', '" + usuario.senha + "')";
            console.log("INSERT MONTADO = " + sqlInsertUsuario);
            this._db.query(sqlInsertUsuario, function(erro) {
                if(erro) {
                    console.log(erro);
                    resolve(dados);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TAB USUARIOS NO BD');
                }
                else {
                    return resolve();
                }
            });
        });
    }
    selectNaTabelaUsuarios(cpf, senha) //Traz os dados do banco de dados sobre todos os usuários cadastrados
    {
        return new Promise((resolve, reject) => {
            var sqlSelectUsuarios = "SELECT * FROM USUARIOS WHERE cpf='" + cpf + "' and senhaUsua='" + senha + "'";
            console.log("SELECT MONTADO = " + sqlSelectUsuarios);
            this._db.query(sqlSelectUsuarios, function(erro, resultado) {
                if(resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                }
                else {
                    return reject('USUÁRIO NÃO EXISTE NO BD');
                }
            });
        })
    }    
}
module.exports = Usuarios_dao;