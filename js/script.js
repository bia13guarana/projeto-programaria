document.getElementById("botaoEnviar").addEventListener
("click", validaformulario)

function validaformulario(){
    if(document.getElementById("nome").valeu != "" &&          document.getElementById("email").value != "" && 
       document.getElementById ("telefone").value != ""){
       alert("Pronto! Dados Enviados!")
    }else{
       alert("Por favor, preencha os campos nome e email!")
 }
}