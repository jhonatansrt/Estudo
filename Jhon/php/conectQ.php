<?php

$user = "root";
$password = "";
$hosts = "localhost";
$dbname = "cadastro";

try{
    $pdo = new PDO('mysql:host='.$hosts.';dbname='.$dbname.';charset UTF-8', $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo"Erro" .$e->getMessage();
}

?>