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
                alert("LOGADO");

                for (var i = 0; i < resp.length; i++) {
                    console.log(resp[i].tipo);
                    if (resp[i].tipo == 'fornecedor') {
                        window.location.replace("http://localhost/Jhon/cadastro_produtos.html");

                    }
                }
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
        } else

            if (tipo_checkbox == "cadastro_produto") {
                cadastro_produto();
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
    var cnpj = $("#cnpj").val();
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

function cadastro_produto() {
    var nome = $("#nome_produto").val();
    var categoria = categoria_produto;

    $.ajax({
        url: pagina,
        type: "POST",
        data: { funcao: 'cadastro_produto', nome, categoria }
    })
        .done(function () {
            alert("Produto cadastrado")
            $("#nome_produto").val("");
            $('#fitness, #Cama_mesa_e_banho, #informatica, #esportes').attr('disabled',true)
            $('#fitness, #Cama_mesa_e_banho, #informatica, #esportes').prop('checked',false)
            $("#btn-gerarTabela").attr("onclick","esconderTabela()")
            $("#modal_cadastro_produtos").modal('hide')
            

            preenchertabela();
        })
        .fail(function () {
            alert("Falha ao cadastrar tente mais tarde")
        })
}

function preenchertabela() {
    $.ajax({
        url: pagina,
        type: "POST",
        data: { funcao: 'preenchertabela' },
        dataType: 'json'
    })
        .done(function (resp) {
            var retorno;

            retorno += "<thead class='bg-info'>";
            retorno += "<th>Id</th>"
            retorno += "<th>Nome</th>"
            retorno += "<th>Categoria</th>"
            retorno += "</thead>"



            for (var i = 0; i < resp.length; i++) {
                retorno += "<tr>"
                retorno += "<td>" + resp[i].id + "</td>"
                retorno += "<td>" + resp[i].nome + "</td>"
                retorno += "<td>" + resp[i].categoria + "</td>"
                retorno += "</tr>"
            }
            // retorno += "<tr>"
            // retorno += "<td colspan='3'> <input type='submit' value='Ocultar tabela' class='btn btn-info' onclick= 'esconderTabela()' </td>"
            // retorno += "</tr>"
            $("#tabela").html(retorno);
        })
        .fail(function () {
            alert("Erro ao tabelar")
        })


}
function mostrarTabela() {
    preenchertabela()
    $("#btn-gerarTabela").attr("onclick","esconderTabela()")
    
}
function esconderTabela() {
    $("#tabela").toggle();
}
function sair(){
    window.location.replace("http://localhost/Jhon/desafio.html");
}

