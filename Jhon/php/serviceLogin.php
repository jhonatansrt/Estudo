<?php
require "conectQ.php";


extract ($_POST);


function valida(){
    require "conectQ.php";
    extract ($_POST);


$sql_get = $pdo->prepare("SELECT * FROM usuarios where email = '{$email}' and senha = '{$senha}'");
    $sql_get->execute();
    $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resp);


}



switch($tipo){
    case 'valida':
    valida();
    break; 
}

?>