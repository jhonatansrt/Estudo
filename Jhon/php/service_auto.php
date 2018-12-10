<?php


    /*require "conect_auto.php";
    extract ($_POST);

    if($tipo == "complete"){
        completar();
    }

    function completar(){
        require "conect_auto.php";
        $sql_get = $pdo->prepare('select * from consultas');
        $sql_get->execute();
        
        $resp = array('respo' => array());
        $i = 0;
        while ($resp_get = $sql_get->fetchObject()){
            $resp['respo'][$i]['dados'] = $resp_get->dados;
            $i++;
        }
        echo json_encode($resp);


    }*/

    require "conect_auto.php";
    extract ($_POST);

    if($tipo == "complete"){
        completar();
    }

    function completar(){
        require "conect_auto.php";
        $sql_get = $pdo->prepare('select * from consultas');
        $sql_get->execute();
        $resp = $sql_get->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($resp);


    }
?>