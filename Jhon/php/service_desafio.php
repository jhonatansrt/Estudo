<?php
require "conect_desafio.php";
extract($_POST);

if ($funcao == "logar") {
    logar();
}
if ($funcao == "cadastrar") {
    cadastrar();
}
if ($funcao == "cadastar_usuario"){
    cadastrar_usuario();
}
if ($funcao == 'cadastrar_cliente'){
    cadastrar_cliente();
}
if ($funcao == 'cadastrar_fornecedor'){
    cadastrar_fornecedor();
}
// ========================================================================================================================


function logar()
{
    require "conect_desafio.php";
    extract($_POST);

    $sql_get = $pdo->prepare("select * from usuarios where nome = '{$nome}' and senha = '{$senha}'");
    $sql_get->execute();
    $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);

}

function cadastrar_cliente(){
    require "conect_desafio.php";
    extract($_POST);

    $sql_get = $pdo->prepare("insert into usuarios(nome, senha, cpf, tipo) values(:nome, :senha, :cpf, :tipo)");
    $sql_get->execute(array(
        ':nome' => $nome,
        ':senha' => $senha,
        ':cpf' => $cpf,
        ':tipo' =>  $tipo 
    ));
}

function cadastrar_fornecedor(){
    require "conect_desafio.php";
    extract($_POST);

    $sql_get = $pdo->prepare("insert into usuarios(nome, senha, cnpj, tipo) values(:nome, :senha, :cnpj, :tipo)");
    $sql_get->execute(array(
        ':nome' => $nome,
        ':senha' => $senha,
        ':cnpj' => $cnpj,
        ':tipo' => $tipo
    ));
}


?>