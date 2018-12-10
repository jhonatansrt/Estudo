pagina = "php/service_desafio.php"

function logar(){
    var usuario = $("#usuario").val();
    var senha   = $("#senha").val();


    $.ajax({
        url:pagina,
        dataType: "json",
        type: "POST",
        data: {tipo: 'logar', usuario:usuario, senha: senha}
    })
    .done(function(resp){
        console.log("DONE");
        console.log(resp.length);

     
        if(resp.length == 0){
            alert("usuario ou senha incorreta");
        }else{
            alert("LOGADO")
        }
    



    })
    .fail(function(){
        console.log('ERRO')
    })
    

}

function tipoCad(){
     if (tipo_checkbox == "usuario"){
         $("#modal_cadastro_usuario").modal('show');
     }

     if (tipo_checkbox == "cliente"){
        $("#modal_cadastro_cliente").modal('show');
     }

     if (tipo_checkbox == "fornecedor"){
         console.log (tipo_checkbox);
     }

    // $.ajax({
    //     url:pagina,
    //     type:"POST",
    //     dataType:"json",
    //     data:{tipo: 'cadastrar', tipo_checkbox}
    // })
    // .done(function(){
    //     alert("Cadastrado");
    // })
    // .fail(function(){
    //     alert("Erro ao cadastrar");
    // })

}

// function valida_cad(){
//     var usuario = $("#usuario_mod").val();
//     var senha   = $("#senha_mod").val();
//     if (usuario != "" && senha != ""){
//         cadastrar(usuario, senha);
//     }   
// }

function cadastrar_usuario(){
    var usuario = $("#usuario_mod").val();
    var senha = $("#senha_mod").val();

    $.ajax({
        url: pagina,
        type: "POST",
        //dataType: "json",
        data:{tipo:'cadastar_usuario', usuario:usuario, senha:senha}
    })
    .done(function(){
        alert("usuario cadastrado");
    })
    .fail(function(){
        alert("Erro ao cadastrar usuario");
    })
}
