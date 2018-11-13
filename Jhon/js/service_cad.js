var service = "php/service_cad.php";
var idtabela;
var nome;
var senha;
var end;


function validar_cad() {
    nome = $('#nome').val();
    senha = $('#senha').val();
    end = $('#end').val();


    $.ajax({
        url: service,
        type: "POST",
        dataType: 'json',
        data: { tipo: 'validar_cad', nomeUsuario: nome, senhaUSuario: senha, endUsuario: end },
    })
        .done(function (resp) {

            if (resp == false) {
                $("#cad_invalido").modal('show');
            } else {
                cadastrar();
            }
        })
        .fail(function () {
            alert("Ocorreu um erro ao tentar validar o cadastro");
        });
}

function confirmarCadastro() {
    $('#confirm').modal('show');

}
function cadastrar() {
    //lê os campos do form    
    $.ajax({
        url: service,
        type: "POST",
        //dataType: 'json',
        data: { tipo: 'cadastrar', nomeUsuario: nome, senhaUSuario: senha, endUsuario: end },

    })
        .done(function (resp) {
            //$("#confirm").modal('show');

            confirmarCadastro();
            exibir();
        })
        .fail(function (resp) {
            alert('Erro ao inserir o usuário!' + resp);
        });
}



function exibir() {
    $.ajax({
        url: service,
        type: "POST",
        dataType: 'json',
        data: { tipo: 'exibir' },

    })
        .done(function (resp) {

            var retorno;

            for (var i = 0; i < resp.length; i++) {
                retorno += "<tr>";
                retorno += "<td>" + resp[i].ID + "</td>";
                retorno += "<td>" + resp[i].user + "</td>";
                retorno += "<td>" + resp[i].senha + "</td>";
                retorno += "<td>" + resp[i].end + "</td>";
                retorno += "<td> <input type='submit' value='Excluir' id='botaoExcluir' onclick='chamaModal(" + resp[i].ID + ")' </td>";
                retorno += "</tr>";

                //alert('id = '+ resp[i].id +' user = '+ resp[i].user +' senha = '+ resp[i].senha);
            }
            $("#list_table").html(retorno);


        })
        .fail(function (resp) {
            alert("Ocorreu um erro na consulta");
        });
}

function chamaModal(id) {
    $('#exampleModal').modal('show');//para abrir modal com jquery
    //$().modal('hide');//para esconder modal com jquery
    idtabela = id;

}

function excluir() {

    $.ajax({
        url: service,
        type: "POST",
        //dataType: 'json',
        data: { tipo: 'excluir', idUsuario: idtabela }
    })
        .done(function () {
            $('#exampleModal').modal('hide');
            exibir();

        })
        .fail(function () {
            alert("Ocorreu um erro ao excluir");
        });
}