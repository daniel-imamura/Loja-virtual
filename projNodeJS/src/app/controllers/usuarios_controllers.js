const Usuarios_dao = require('../BD/usuarios_dao');

var db = require('../../config/database');

class UsuariosControllers
{
    //Redireciona o usuário para a página home ao término do cadastro
    insereNovoUsuario() {
        return function(req, res) {
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.incluiUsuarios(req.body)
                .then(res.redirect('/home'))
                .catch(erro => console.log(erro));
        }
    }

    validaAcessoUsuario() //Verifica os dados inseridos no login e compara com os dados no BD
    {
        return function(req, res){
            console.log("CPF do formulario controller = " + req.body.cpf);
            console.log("SENHA do formulario controller = " + req.body.senha);
            //instanciando a classe usuario_dao
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.selectNaTabelaUsuarios(req.body.cpf, req.body.senha)
                .then (dados => {
                    if(dados > 0) {
                        console.log('Usuario existe!! Está validado');
                        res.redirect('/home');
                    }                   
                })
                .catch(erro => {
                    console.log('USUÁRIO NÃO EXISTE NO BD!!');
                    res.redirect('/login');
                })
        }
    }
}
module.exports = UsuariosControllers;