var listaCarrinho = document.getElementById("carrinho"); 
var somaCompra = 0; 

//Lista de produtos adicionados ao carrinho
var lista = document.createElement("select"); 
lista.style = "font: normal 17px Arial";
lista.style.marginRight = "25px";
lista.classList.add("classe");
lista.innerHTML = '<option value="0">No Carrinho</option>';

//Botão para remover produtos do carrinho
var btnRemover = document.createElement("button");
btnRemover.style = "font: normal 17px Arial;";
btnRemover.style.marginLeft = "15px";
btnRemover.innerHTML = "Remover"; 
    
//Botão para finalizar a compra
var btnComprar = document.createElement("button");
btnComprar.style = "font: normal 17px Arial;";
btnComprar.innerHTML = "Comprar";

var select;     //Select de quantidade de produtos adicionados no carrinho
var estoque;    //Span de quantidade de produtos no estoque
var qntEstoque; //Int com quantidade de produtos no estoque
var descricao;  //Span com a descrição de cada produto
var preco;      //Span com o preço dos produtos
var codigo;     //Span com o código dos produtos

function adicionarAoCarrinho(nomeBtn) {               
    procurarSelect(nomeBtn);  //Define o select do produto que o cliente clicou
    procurarEstoque(nomeBtn); //Define o span do estoque do produto que o cliente clicou

    var qntItem = select.options[select.selectedIndex].value;  //armazena a quantidade de produtos comprados no momento
    qntEstoque = parseInt(estoque.innerHTML, 10); 

    if(qntEstoque - qntItem < 0) 
        alert("O estoque desse produto acabou!");                    
                        
    if (qntEstoque - qntItem >= 0) //Se o cliente adicionou um produto ao carrinho
    {        
        qntEstoque -= qntItem;          //Nova quantidade no estoque
        estoque.innerHTML = qntEstoque; //Atualiza o span com a nova quantidade de produtos                     
        
        //Se o cliente adicionou um produto ao carrinho com o produto já selecionado no carrinho
        if(lista.selectedIndex != 0 && ($('.classe :selected').val()).toString() == nomeBtn.split("").filter(n => (Number(n) || n == 0)).join(""))
        {                        
            procurarCodigo(nomeBtn);
            procurarPreco(nomeBtn);
            var itensComprados = 10 - parseInt(estoque.innerHTML);
            
            adicionarInfoProduto(itensComprados, preco.innerHTML, codigo.innerHTML);  //Atualiza as informações no carrinho           
        }           
        else
            adicionarProdutoALista(nomeBtn);                                   

        procurarPreco(nomeBtn);       
        var valor = (preco.innerHTML).split("").filter(n => (Number(n) || n == 0)).join(""); //Armazena o todos os números contidos na string do preço
        somaCompra += qntItem * (parseInt(valor) / 100); //Divide por 100 para remover os 0 contidos nos centavos do preço
        
        //Adiciona os elementos que compõem o carrinho
        listaCarrinho.appendChild(lista);
        listaCarrinho.appendChild(btnComprar);
        listaCarrinho.appendChild(btnRemover);      
    }   
    listaCarrinho.style.display = "block"; //Deixa o carrinho visível
}

//Caso a pessoa escolha um produto no carrinho
lista.addEventListener('change', function () {
    if(lista.selectedIndex == 0) //Se a pessoa escolher o option "No carrinho"          
        listaCarrinho.innerText = "";             
    else
    {        
        var valorSelecionado = $('.classe :selected').val(); //Armazena o value do option que o cliente escolheu
        var nomeBtn = "btn" + valorSelecionado.toString();   //Armazena o name do botão que o produto pertencia
         
        //Busca informações sobre o produto selecionado
        procurarEstoque(nomeBtn);
        procurarCodigo(nomeBtn);
        procurarPreco(nomeBtn);    
        var itensComprados = 10 - parseInt(estoque.innerHTML);
    
        adicionarInfoProduto(itensComprados, preco.innerHTML, codigo.innerHTML);
    }    
    listaCarrinho.appendChild(lista);
    listaCarrinho.appendChild(btnComprar);
    listaCarrinho.appendChild(btnRemover);
});       

//Caso o cliente finalize a compra
btnComprar.addEventListener('click', function(){    
    var somaCompraString = (somaCompra.toFixed(2)).toString().replace(".", ","); //Armazena o valor da compra em um string e substitui o "." por ","

    if(somaCompraString == somaCompra.toString()) //Caso o valor da compra resulte em um número inteiro
        confirm(`Valor total da compra: R$${somaCompraString},00`);
    else
        confirm(`Valor total da compra: R$${somaCompraString}`);
});

//Caso o cliente remova um produto do carrinho
btnRemover.addEventListener('click', function(){            
    var nomeMontado = "estoque" + $('.classe :selected').val(); //Armazena o name do estoque do produto removido

    estoque = document.querySelector('span[name="'+ nomeMontado +'"]');    
    var itensComprados = 10 - parseInt(estoque.innerHTML);

    qntEstoque = 10; //Retorna os produtos removidos para o estoque
    estoque.innerHTML = qntEstoque; //Faz as alterações na tela
    
    procurarPreco(($('.classe :selected').val()).toString());       
    var precoInt = parseInt((preco.innerHTML).split("").filter(n => (Number(n) || n == 0)).join("")) / 100;        
    somaCompra -= itensComprados * precoInt; //Diminui o preço da compra pelo preço do produto removido

    if(lista.selectedIndex != 0) 
        lista.remove(lista.selectedIndex); //Remove o produto do carrinho                                                         
                    
    listaCarrinho.innerText = "";
    listaCarrinho.appendChild(lista);
    listaCarrinho.appendChild(btnComprar);
    listaCarrinho.appendChild(btnRemover);
})

//Caso um novo produto seja adicionado na lista
function adicionarProdutoALista(nome)
{    
    procurarDescricao(nome);    

    var nomeNum = nome.split("").filter(n => (Number(n) || n == 0)).join("");
    var jaExiste = false; //Verifica se o produto adicionado já existe no carrinho
    for(var i = 1; i < lista.length; i++)
    {
        if(lista.options[i].value == nomeNum) //Caso ele exista
            jaExiste = true;
    }
    if(jaExiste == false) 
    {
        lista.innerHTML += `<option value='${nomeNum}'>${descricao.innerHTML}</option>`; //Adiciona o produto na lista
        listaCarrinho.innerText = "";     
    }                   
}

//Funções para procurar o elemento respectivo ao nome nos arquivos .marko
//E armazena nas variáveis globais 
function procurarSelect(nome)
{
    var nomeSelect = "select" + nome.split("").filter(n => (Number(n) || n == 0)).join("");    
    select = document.querySelector('select[name="' + nomeSelect + '"]');
}

function procurarEstoque(nome)
{
    var nomeEstoque = "estoque" + nome.split("").filter(n => (Number(n) || n == 0)).join("");
    estoque = document.querySelector('span[name="' + nomeEstoque + '"]');
}

function procurarDescricao(nome)
{
    var nomeDescricao = "descricaoProduto" + nome.split("").filter(n => (Number(n) || n == 0)).join("");
    descricao = document.querySelector('span[name="' + nomeDescricao + '"]');
}

function procurarPreco(nome)
{
    var nomePreco = "preco" + nome.split("").filter(n => (Number(n) || n == 0)).join("");
    preco = document.querySelector('span[name="' + nomePreco + '"]');
}

function procurarCodigo(nome)
{
    var nomeCodigo = "codigo" + nome.split("").filter(n => (Number(n) || n == 0)).join("");
    codigo = document.querySelector('span[name="' + nomeCodigo + '"]');
}

// Adicionar informações sobre os produtos no carrinho
function adicionarInfoProduto(qnt, preco, codigo)
{    
    listaCarrinho.innerHTML = `Quantidade: ${qnt} &emsp; Preço: ${preco} &emsp; Código: ${codigo} </p>`;    
}
