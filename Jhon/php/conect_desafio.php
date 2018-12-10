<?php

$host       = "localhost";
$user       = "root";
$senha      = "";
$db_name    = "desafio";

try{
    $pdo = new PDO('mysql:host='.$host.';dbname='.$db_name.';charset = UTF-8', $user, $senha );
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo "Erro:". $e->getMessage();
    
}

?>