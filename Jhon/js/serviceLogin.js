caminho = "php/serviceLogin.php";

function validaLogin(){
  $.ajax({
    url: caminho,
    type: "POST",
    dataType: "json",
    data: {tipo:'valida', nome:nome,senha:senha}
  })
  .done(function(resp){
    window.location.href = "http://localhost/Jhon/Questao11_12.html";
  })
  .fail(function(){
    console.log("Erro na validação tente mais tarde");
  })
}