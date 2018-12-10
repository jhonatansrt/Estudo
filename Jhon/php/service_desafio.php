<?php
require "conect_desafio.php";
extract($_POST);

if ($tipo == "logar") {
    logar();
}
if ($tipo == "cadastrar") {
    cadastrar();
}
if ($tipo == "cadastar_usuario"){
    cadastrar_usuario();
}
// ========================================================================================================================


function logar()
{
    require "conect_desafio.php";
    extract($_POST);

    $sql_get = $pdo->prepare("select * from usuarios where usuario = '{$usuario}' and senha = '{$senha}'");
    $sql_get->execute();
    $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);

}

function cadastrar()
{
    require "conect_desafio.php";
    extract($_POST);

    if ($tipo_checkbox == "usuario") {
        
    } else

        if ($tipo_checkbox == "cliente") {

    } else

        if ($tipo_checkbox == "fornecedor") {

    } else {
        echo ("Tipo inexestente");
    }
}

function cadastrar_usuario(){
    require "conect_desafio.php";
    extract($_POST);
   

    $sql_get = $pdo->prepare("insert into usuarios (usuario, senha) values(:usuario, :senha)");
    $sql_get->execute(array(
        ':usuario' => $usuario ,
        ':senha' =>$senha
        ));

}


?>