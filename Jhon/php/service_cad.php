<?php

extract($_POST);

$tipo = $_POST['tipo'];

function validar(){
    extract($_POST);

    if($nomeUsuario != "" && $senhaUSuario!= "" && $endUsuario !=""){
        //CadastroController();
        $resp =true;
    }else{
        $resp =false;   
    }
    echo json_encode($resp);
   
}


function CadastroController()
{
    extract($_POST);

    require "conect_cad.php";

    $sql_insert = $pdo->prepare("INSERT INTO login (user, senha, end) values(:user,:senha,:end)");
    $sql_insert->execute(array(
        ':user' => $nomeUsuario ,
        ':senha' =>$senhaUSuario,
        ':end' =>$endUsuario
      ));
      
}

function exibir_users(){

    require "conect_cad.php";

    $sql_get = $pdo->prepare('select * from login');
    $sql_get->execute();

    $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);
    
}

function excluir_user(){
    extract($_POST);
    require "conect_cad.php";
    
    $sql_get = $pdo->prepare("DELETE FROM login WHERE id = $idUsuario");
    $sql_get->execute();

}





extract($_POST);

switch ($tipo) {
    case 'cadastrar':
        CadastroController();
        break;
    case 'exibir':
        exibir_users();
        break;    
    case 'excluir':
        excluir_user();
    case 'validar_cad':
        validar();
        //CadastroController();
        break;
}

