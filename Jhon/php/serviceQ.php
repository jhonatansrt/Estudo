<?php
$caminho = "conectQ.php";

extract($_POST);
//$tipo = $_POST['tipo'];


function adicionar(){
    extract($_POST);
    require "conectQ.php";

    $sql_insert = $pdo->prepare("INSERT INTO usuarios(nome, s_nome, email, senha) values(:nome, :s_nome, :email, :senha)");
    $sql_insert->execute(array(
        ":nome"=>$nome,
        ":s_nome"=>$s_nome,
        ":email"=>$email,
        ":senha"=>$senha
    ));
}

function exibir(){
    require "conectQ.php";
    extract($_POST);

    $sql_insert = $pdo->prepare('SELECT * FROM usuarios');
    $sql_insert->execute();
    $resp = $sql_insert->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);
}

function viewu(){
    require "conectQ.php";
    extract($_POST);
   

    $sql_insert = $pdo->prepare("SELECT * FROM usuarios WHERE ID = $id1");
    $sql_insert->execute();
    $resp = $sql_insert->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);
}

function edit(){
    require "conectQ.php";
    extract($_POST);

    
    //sql_insert = $pdo->prepare("UPDATE usuarios SET nome=$nome, s_nome=$s_nome, email=$email, senha=$senha  WHERE ID = $id");
    //$sql_insert->execute();

    $sql_insert = $pdo->prepare("UPDATE usuarios SET nome = :nome, s_nome = :s_nome, email = :email, senha = :senha  WHERE ID = :id") ;
    $sql_insert->execute(array(
        ":id"=>$id,
        ":nome"=>$nome,
        ":s_nome"=>$s_nome,
        ":email"=>$email,
        ":  senha"=>$senha
    ));
}

function del(){
    require "conectQ.php";
    extract($_POST);

    $sql_insert = $pdo->prepare("DELETE FROM usuarios WHERE ID = $id");
    $sql_insert->execute();
    
    
}


//extract($_POST);
switch ($tipo){
    case 'adicionar':
    adicionar();
    break;
    case 'exibir':
    exibir();
    break;
    case 'view':
    viewu();
    break;
    case 'edit':
    edit();
    break;
    case 'del':
    del();
    break;

}
?>