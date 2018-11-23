function sel_empresa(){

$resp = array('respo' => array());

//sc_select(res, "SELECT id, nome	FROM public.empresa WHERE fl_ativo = 1 AND tipo = 1 ORDER BY nome", "conn_postgres_1");

sc_select(res, "SELECT id, e.abreviatura||' - '||e.nome as CLIENTE,nome,cnp,abreviatura FROM public.empresa e WHERE tipo = 1 AND esfera not in (5, 6) order by CLIENTE;", "conn_postgres_1");





if ({res} === false)

{

    echo "Access error. Message =". {res};

}

else

{

    $i = 0;



    while (!$res->EOF)

    {

        $resp['respo'][$i]['id'] = $res->fields['id'];

        //$resp['respo'][$i]['cnpj'] = $res->fields['cnpj'];

        $resp['respo'][$i]['cliente'] = $res->fields['cliente'];



        $res->MoveNext();

        $i++;

    }

    

    echo $i;

    

    if($i > 0){

        return $resp;

    }

    else{



        return "n";

    }

    $res->Close();

}	


}