$(document).ready(function () {

});

var service = "php/service.php";

function distLogin() {
    $.ajax({
        url: service,
        type: "POST",
        dataType: 'json',
        data: { tipo: 'distlogin' },

    })
        .done(function (resp) {
            var retorno = "";
            for (var i = 0; i < resp.length; i++) {
                retorno += "<tr>";
                retorno += "<td>" + resp[i].id + "</td>";
                retorno += "<td>" + resp[i].user + "</td>";
                retorno += "<td>" + resp[i].senha + "</td>";
                retorno += "</tr>";
            }
            $("#list_login").append(retorno);
        })
        .fail(function (resp) {
            console.log("erro");
        });

}

function validaLogin() {
    var user = $("#nome").val();
    var senha = $("#senha").val();
    if (user != "" && senha != "") {
        $.ajax({
            url: service,
            type: "POST",
            dataType: 'json',
            data: { tipo: 'validalogin', user: user, senha: senha },
        })
            .done(function (resp) {
                $("#span").show()
                $("#span").text(resp).css({
                    border: "1px solid black",
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px"
                });
                distLogin();
            })
            .fail(function (resp) {
                $("#span").show()
                var retorno = 'Usuário não encontrado na base de dados';
                $("#span").text(retorno).css({
                    border: "1px solid black",
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px"
                });
            });
    } else {
        $("#span").show()
        var retorno = 'Campos usuário ou senha vazios';
        $("#span").text(retorno).css({
            border: "1px solid black",
            backgroundColor: "orange",
            color: "white",
            padding: "10px"
        });
    }

}