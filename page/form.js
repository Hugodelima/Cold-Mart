var email = document.getElementById("email");
var email_invalido = document.getElementById("email_nfunciona");
var email_valido = document.getElementById("email_funciona");
var re = /\S+@\S+\.\S+/; // é uam expressão de e-mailvalido, tirei desse site https://horadecodar.com.br/expressao-regular-para-validar-e-mail-javascript-regex/

email.addEventListener("input", function() { //oq o usuario digitar vai toda hora chamar a função
    if (re.test(email.value)) { // se o input que nesse caso é email for valido vai mostrar a mensagem valido
        email_invalido.style.display = "none";
        email_valido.style.display = "block"; // aqui vai alterar o style para chamar a class do texto para aparecer
    } else {
        email_invalido.style.display = "block";
        email_valido.style.display = "none";
    }
});

var senha = document.getElementById("senha");
var senha1234 = document.getElementById("senha1234");
var senha_boa = document.getElementById("senha_boa");
var senha_pequena = document.getElementById("senha_pequena");

senha.addEventListener("input", function() {
    if (senha.value === "1234") { 
        senha1234.style.display = "block";
        senha_boa.style.display = "none";
        senha_pequena.style.display = "none";
    } else if (senha.value.length > 4){
        senha_boa.style.display = "block";
        senha1234.style.display = "none";
        senha_pequena.style.display = "none";
    } else if (senha.value.length < 4){
        senha_boa.style.display = "none";
        senha1234.style.display = "none";
        senha_pequena.style.display = "block";
    } 
    else {
        senha1234.style.display = "none";
        senha_boa.style.display = "none";
        senha_pequena.style.display = "none";
    }
});
var repitirsenha = document.getElementById("repitirsenha");
var senha_nao_igual = document.getElementById("senha_nao_igual");
var senha_igual = document.getElementById("senha_igual");
var repetirsenha_nao_igual = document.getElementById("repetirsenha_nao_igual");
repitirsenha.addEventListener("input", function() {
    if (senha.value === repitirsenha.value) { 
        senha_igual.style.display = "block";
        senha_nao_igual.style.display = "none";
        repetirsenha_nao_igual.style.display = "none";
            
    } else {
        senha_nao_igual.style.display = "block";
        senha_igual.style.display = "none";
        repetirsenha_nao_igual.style.display = "none";
    }
});







