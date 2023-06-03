var email = document.getElementById("email");
var email_invalido = document.getElementById("email_nfunciona");
var email_valido = document.getElementById("email_funciona");

email.addEventListener("input", function() { //oq o usuario digitar vai toda hora chamar a função
    if (email.checkValidity()) { // se o input que nesse caso é email for valido vai mostrar a mensagem valido
        email_invalido.style.display = "none";
        email_valido.style.display = "block"; // aqui vai alterar o style para chamar a class do texto para aparecer
    } else {
        email_invalido.style.display = "block";
        email_valido.style.display = "none";
    }
});

var senha = document.getElementById("senha");
var senha1234 = document.getElementById("senha1234");

senha.addEventListener("input", function() {
    if (senha.value === "1234") { 
        senha1234.style.display = "block";
    } else {
        senha1234.style.display = "none";
    }
});


