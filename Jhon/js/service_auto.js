/*resp2 = [];


function buscar(){
	var availableTags = "";
	var caminho = "php/service_auto.php";
	resp2 = [];
	

$.ajax({
	url: caminho,
	type: "POST",
	dataType: "json",
	cache: false,
	global: false,
	async: false,
	data: {tipo : "complete"}
})
.done(function(resp){

	for (var i = 0 ; i < resp.respo.length ; i++){
		console.log(resp.respo[i].dados);
		resp2[i] = resp.respo[i].dados;
		
	}

})
.fail(function(){
	console.log("Ocorreu um erro !");
})
.always(function(){

})
}*/
//resp2 = [];

resp2 = [];
function buscar(){
	//var availableTags = "";
	var caminho = "php/service_auto.php";
	
	

$.ajax({
	url: caminho,
	type: "POST",
	dataType: "json",
	cache: false,
	global: false,
	async: false,
	data: {tipo : "complete"}
})
.done(function(resp){

	for (var i = 0 ; i < resp.length ; i++){
		
		console.log(resp[i].dados);
		//resp2[i] = resp[i].dados;
		resp2.push(resp[i].dados);
	}

})
.fail(function(){
	console.log("Ocorreu um erro !");
})
.always(function(){

})
}