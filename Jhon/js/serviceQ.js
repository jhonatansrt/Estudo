var serviceQ = "php/serviceQ.php"


var nome;
var senha;
var s_nome;
var email;


function adicionar_modal() {
    $("#adicionar-modal").modal('show');
}


function adicionar() {
    nome = $("#nome").val();
    senha = $("#senha").val();
    s_nome = $("#s_nome").val();
    email = $("#email").val();


    console.log("nome = " + nome + ", sobrenome = " + s_nome + ", senha = " + senha + ", email = " + email);

    $.ajax({
        url: serviceQ,
        type: "POST",
        //datatype: ''
        data: { tipo: 'adicionar', nome: nome, senha: senha, s_nome: s_nome, email: email }
    })
        .done(function (resp) {
            alert("cadastrado");
            $("#adicionar-modal").modal('hide');
            exibir();
        })
        .fail(function () {
            alert("Ocorreu um erro ao adicionar, por favor tente mais tarde")
        });


}
function exibir() {
    $.ajax({
        url: serviceQ,
        type: "POST",
        dataType: "json",
        data: { tipo: 'exibir' },
    })
        .done(function (resp) {
            var retorno;
            console.log('DONE');
            for (var i = 0; i < resp.length; i++) {
                retorno += "<tr>";
                retorno += "<td>" + resp[i].nome + "</td>";
                retorno += "<td>" + resp[i].s_nome + "</td>";
                retorno += "<td>" + resp[i].email + "</td>";
                retorno += "<td> <button type='button' class='btn btn-secondary' onclick='view(" + resp[i].ID + ")'>View</button></td>";
                retorno += "<td> <button type='button' class='btn btn-warning'onclick='set(" + resp[i].ID+","+ resp[i].nome+","+ resp[i].s_nome+","+ resp[i].email+","+ resp[i].senha + ")'>Edit</button> </td>";
                retorno += "<td> <button type='button' class='btn btn-danger' onclick='del(" + resp[i].ID + ")'>Delete</button> </td>";
                retorno += "</tr>";
            }

            // retorno += "<td> <input type='submit' value='Excluir' id='botaoExcluir' onclick='chamaModal("+ resp[i].ID +")' </td>";
            $("#table-body").html(retorno);

        })
        .fail(function (resp) {
            console.log("Ocorreu um erro na consulta");
        });

}

function view(id) {
    console.log(id);
    $.ajax({
        url: serviceQ,
        type: "POST",
        dataType: "json",
        data: { tipo: 'view', id1: id },
    })
        .done(function (resp) {
            var retorno;

            for(var i=0;i<resp.length;i++){
                retorno += "<tr>";
                retorno += "<td>"+resp[i].nome+"</td>";
                retorno += "<td>"+resp[i].s_nome+"</td>";
                retorno += "<td>"+resp[i].email+"</td>";
                retorno += "</tr>";
            }
            $("#table-body-modal").html(retorno);
            $("#view-modal").modal("show");
        })
        .fail(function (resp) {
            alert("Ocorreu um erro na view, por favor tente mais tarde");
        });

}

function edit(id){
    $.ajax({
        url: serviceQ,
        type: "POST",
        dataType: "json",
        data: {tipo:'edit', id:id}
    })
    .done (function(resp){

    })
    .fail(function(){
        console.log('Eresp[i].nome ')
    })
}

function del(id){
    $.ajax({
        url: serviceQ,
        type: "POST",
        //dataType: "json",
        data: {tipo:'del', id:id}
    })
    .done(function(resp){
       exibir();
    })
    .fail(function(){
        console.log("Erro no del js");
    })
}
function set(id, nome, s_nome, email, senha){

    $("#set-modal").modal("show");
}
