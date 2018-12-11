pagina = "php/service_desafio.php"

function logar() {
    var nome = $("#nome").val();
    var senha = $("#senha").val();


    $.ajax({
        url: pagina,
        dataType: "json",
        type: "POST",
        data: { funcao: 'logar', nome: nome, senha: senha }
    })
        .done(function (resp) {
            console.log("DONE");
            console.log(resp.length);


            if (resp.length == 0) {
                alert("usuario ou senha incorreta");
            } else {
                alert("LOGADO")
            }




        })
        .fail(function () {
            console.log('ERRO')
        })


}

function tipoCad() {



    if (tipo_checkbox == "cliente") {
        $("#modal_cadastro_cliente").modal('show');
    } else

        if (tipo_checkbox == "fornecedor") {
            $("#modal_cadastro_fornecedor").modal('show');
        }


}




function cadastrar_cliente() {
    var nome = $("#nome_mod_cliente").val();
    var senha = $("#senha_mod_cliente").val();
    var cpf = $("#cpf_mod_cliente").val();
    var tipo = tipo_checkbox;

    $.ajax({
        url: pagina,
        type: "POST",
        data: { funcao: 'cadastrar_cliente', nome, senha, cpf, tipo }

    })
        .done(function () {
            $("#modal_cadastro_cliente").modal('hide');
            $("#modal_cadastro").modal('hide');
            alert("Cliente cadastrado");

        })
        .fail(function () {
            alert("Erro ao cadastrar cliente");
        })
}


function cadastrar_fornecedor() {
    var nome = $("#nome_mod_fornecedor").val();
    var senha = $("#senha_mod_fornecedor").val();
    var cnpj = $("#cnpj_mod_fornecedor").val();
    var tipo = tipo_checkbox;

    $.ajax({
        url: pagina,
        type: "POST",
        data: { funcao: 'cadastrar_fornecedor', nome, senha, cnpj, tipo }

    })
        .done(function () {
            $("#modal_cadastro_fornecedor").modal('hide');
            $("#modal_cadastro").modal('hide');
            alert("Fornecedor cadastrado");

        })
        .fail(function () {
            alert("Erro ao cadastrar cliente");
        })
}
