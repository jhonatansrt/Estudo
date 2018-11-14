<?php
require "conectQ.php";


extract ($_POST);


function valida(){
    require "conectQ.php";


    $sql_get = $pdo->prepare("SELECT * FROM login ");
    $sql_get->execute();
    //$resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);
    //echo json_encode($resp);


}



switch($tipo){
    case 'valida':
    valida();
    break; 
}

?>