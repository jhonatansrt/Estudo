<?php

function distLogin()
{
    require "conect.php";

    $sql_get = $pdo->prepare('select * from login');
    $sql_get->execute();

    $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resp);
}

function validaLogin()
{
    require "conect.php";
    extract($_POST);
    if (!empty($user) && !empty($senha)){

        $sql_get = $pdo->prepare("select * from login where user = '{$user}' and senha = '{$senha}'");
        $sql_get->execute();

        $row = $sql_get->rowCount();

        if ($row == 1) {
            $resp = 'Usuário encontrado na base de dados';
            echo json_encode($resp);
        }else{
            return;
        }

    }else{
        return;
    }
}


extract($_POST);

switch ($tipo) {
    case 'distlogin':
        distLogin();
        break;
    case 'validalogin':
        validaLogin();
        break;
}

?>