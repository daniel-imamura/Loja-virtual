//chamando a classe usuarios_controller
const UsuarioControlador = require('../controllers/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

module.exports = (aplicacao) => {

    // Evitar problema com o CORS
    aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    /***************** ROTAS *****************/
           
    //Página inicial de cadastro
    aplicacao.get('/', function(req, res){  
        res.marko(
            require('../views/cadastro.marko'));

        console.log('Acessou a página de ACESSO a aplicação...');
    });

    //Página de login
    aplicacao.get('/login', function(req, res){
        res.marko(
            require('../views/login.marko'));
    })

    //Página home da loja virtual
    aplicacao.get('/home', function(req, res){
        res.marko(require('../views/home.marko'));
    })

    //Página de vendas de produtos para casa
    aplicacao.get('/secaoCasa', function(req, res){
        res.marko(require('../views/secaoCasa.marko'));
    })

    //Página de vendas de produtos voltados para esportes
    aplicacao.get('/secaoEsportes', function(req, res){
        res.marko(require('../views/secaoEsportes.marko'));
    })

    //Local de envio de dados utilizados no cadastro
    aplicacao.post('/cadastraUsuario', usuarioCont.insereNovoUsuario());    

    //Local de envio de dados utilizados no login
    aplicacao.post('/validaAcessoUsuario', usuarioCont.validaAcessoUsuario());    
}