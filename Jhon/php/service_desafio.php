<?php
require "conect_desafio.php";
extract($_POST);
if ($funcao == "logar") {
    logar();
}
if ($funcao == "cadastrar") {
    cadastrar();
}
if ($funcao == "cadastar_usuario") {
    cadastrar_usuario();
}
if ($funcao == 'cadastrar_cliente') {
    cadastrar_cliente();
}
if ($funcao == 'cadastrar_fornecedor') {
    cadastrar_fornecedor();
}
if ($funcao == 'cadastro_produto') {
    cadastro_produto();
}
if ($funcao == 'preenchertabela') {
    preenchertabela();
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
function cadastrar_cliente()
{

    require 'conect_desafio.php';
    extract($_POST);


    $sql_get = $pdo->prepare("insert into usuarios (nome, senha, cpf,tipo) values (?, ?, ?, ?)");
    $sql_get->execute(array(
        $nome,
        $senha,
        $cpf,
        $tipo
    ));

}
function cadastrar_fornecedor()
{
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
function cadastro_produto()
{
    require 'conect_desafio.php';
    extract($_POST);
    $sql_get = $pdo->prepare("insert into produtos (nome, categoria, preco) values (:nome, :categoria, :preco)");
    $sql_get->execute(array(
        ':nome' => $nome,
        ':categoria' => $categoria,
        ':preco' => $preco
    ));
}
function preenchertabela()
{
    require 'conect_desafio.php';
    extract($_POST);
    $sql_get = $pdo->prepare("select * from produtos");
    $sql_get->execute();
    $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);
}
?>