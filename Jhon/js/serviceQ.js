var serviceQ = "php/serviceQ.php"


var nome;
var senha;
var s_nome;
var email;


function adicionar_modal() {
    $("#adicionar-modal").modal('show');
}
function valDel(id) {
    $("#del-modal").modal('show');
    id_del = id; 
}
function cad_invalido(){
    $("#cad_inv").modal('show');
}
function limpa_form(){
    $("#nome").val("");
    $("#senha").val("");
    $("#s_nome").val("");
    $("#email").val("");
}


function adicionar() {
    nome = $("#nome").val();
    senha = $("#senha").val();
    s_nome = $("#s_nome").val();
    email = $("#email").val();


   if(nome!="" && senha!="" && s_nome!="" && email!=""){

    $.ajax({
        url: serviceQ,
        type: "POST",
        //datatype: ''
        data: { tipo: 'adicionar', nome: nome, senha: senha, s_nome: s_nome, email: email }
    })
        .done(function (resp) {
            
            $("#msg_cad").show();
            exibir();
            limpa_form();
        })
        .fail(function () {
            alert("Ocorreu um erro ao adicionar, por favor tente mais tarde")
        });
    }else{
        cad_invalido();
    }

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
                retorno += "<td> <button type='button' class='btn btn-warning'onclick='set(" + resp[i].ID+ ")'>Edit</button> </td>";
                retorno += "<td> <button type='button' class='btn btn-danger' onclick='valDel(" + resp[i].ID + ")'>Delete</button> </td>";
                retorno += "</tr>";

                $("#gerar").hide();
                $("#esconder").show();
                // $("#tabela").DataTable({
                //     "ajax": resp
                // });
            }

            // retorno += "<td> <input type='submit' value='Excluir' id='botaoExcluir' onclick='chamaModal("+ resp[i].ID +")' </td>";
            $("#table-body").html(retorno);
            
        })
        .fail(function (resp) {
            console.log("Ocorreu um erro na consulta");
        });

}

function exibir2() {
    $.ajax({
        url: serviceQ,
        type: "POST",
        dataType: "json",
        data: { tipo: 'exibir' },
    })
        .done(function (resp) {
            var retorno;
            console.log('DONE');
            
            return resp;
        })
        .fail(function (resp) {
            console.log("Ocorreu um erro na consulta");
        });
        
}

function esconder(){
    $("#table-body").toggle()
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

function edit(){

    nomen = $("#nome_edit").val();
    s_nomen = $("#s_nome_edit").val();
    emailn = $("#email_edit").val();
    senhan = $("#senha_edit").val();
   
    if(nomen!="" && senhan!="" && s_nomen!="" && emailn!=""){

    $.ajax({
        url: serviceQ,
        type: "POST",
        //dataType: "json",
        data: {tipo:'edit', id:id_set, nome:nomen, s_nome:s_nomen, email:emailn, senha:senhan}
    })
    .done (function(){
        $("#nome_edit").val("");
        $("#s_nome_edit").val("");
        $("#email_edit").val("");
        $("#senha_edit").val("");
        exibir();
    })
    .fail(function(){
        console.log('Erro no edit ')
    })
}else{
    $("#cad_inv").modal('show');    
}
}

function del(){
    $("#del-modal").modal('hide');
    $.ajax({
        url: serviceQ,
        type: "POST",
        //dataType: "json",
        data: {tipo:'del', id:id_del}
    })
    .done(function(resp){
       exibir();
    })
    .fail(function(){
        console.log("Erro no del js");
    })
}
function set(id){
    id_set = id;
    $("#set-modal").modal("show");
}
