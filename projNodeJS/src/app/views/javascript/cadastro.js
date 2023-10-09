var form = document.getElementById("formulario");


form.addEventListener('submit', function(e){
    //Se o usuário não preencher todos os campos
    if($("#nome").val() == "" || $("#email").val() == "" || $("#cpf").val() == "" || $("#senha").val() == "")
    {
        alert("Preencha todos os campos para prosseguir!");
        e.preventDefault();
    }      
    //Se o formato do CPF estiver incorreto
    else if($("#cpf").val().length != 14)
    {
        alert("CPF incorreto!");
        e.preventDefault();
    }          
});