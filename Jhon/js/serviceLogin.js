caminho = "php/serviceLogin.php";

function validarBotao() {
  if ($('#email').val().length > 0 &&
    $('#senha').val().length > 0) {

    $("#botao").prop("disabled", false);
  }
  else {
    $("#botao").prop("disabled", true);
  }
}

function validaLogin() {
  $.ajax({
    url: caminho,
    type: "POST",
    dataType: "json",
    data: { tipo: 'valida', email: email, senha: senha }
  })
    .done(function (resp) {
      console.log(resp.length)


      for (var i = 0; i < resp.length; i++) {
        if (resp[i].email == email && resp[i].senha == senha) {

          window.location.replace("http://localhost/Jhon/Questao11_12.html");

        }
      }


      if (resp.length == 0) {
        $("#val_incorreta").show();
    
      }

    })
    .fail(function () {
      console.log("Erro na validação tente mais tarde");
    })


}




