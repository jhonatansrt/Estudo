// Testando a validação usando jQuery
verificaValidade = false;
$(function () {

	// Aciona a validação a cada tecla pressionada
	var temporizador = false;

	$('#cpf_mod_cliente, #cnpj').keyup(function () {

		// O input que estamos utilizando
		var input = $(this);

		// Limpa o timeout antigo
		if (temporizador) {
			clearTimeout(temporizador);
		}

		// Cria um timeout novo de 500ms
		temporizador = setTimeout(function () {
			// Remove as classes de válido e inválido
			input.removeClass('valido');
			input.removeClass('invalido');

			// O CPF ou CNPJ
			var cpf_cnpj = input.val();

			// Valida
			var valida = valida_cpf_cnpj(cpf_cnpj);

			// Testa a validação
			//var comrpimentoCpf = $('#cnpj').val().length;


			if (valida) {

				input.addClass('valido');
				
				verificaValidade = true;
				



			} else if ($('#cpf_mod_cliente').val().length == 14 || $('#cnpj').val().length == 18) {
				verificaValidade = false;
				
				
				
				input.addClass('invalido');
				alert('CNPJ ou CPF inválido');
				$('#modal_cpf_cnpj').modal('show');
				//alert('invalido');
				$('#cnpj').val("");
				$('#cpf_mod_cliente').val("");




			}
		}, 500);

	});
});

function validacao_cpf_cnp_ok(id) {
	var temporizador = false;
	var id_nm = '#' + id;
	// O input que estamos utilizando
	var input = $(id_nm);

	// Limpa o timeout antigo
	if (temporizador) {
		clearTimeout(temporizador);
	}

	// Cria um timeout novo de 500ms
	temporizador = setTimeout(function () {
		// Remove as classes de válido e inválido
		input.removeClass('valido');
		input.removeClass('invalido');

		// O CPF ou CNPJ
		var cpf_cnpj = input.val();

		if (cpf_cnpj != '') {

			//Identifica se é CPF ou CNPJ
			var quemE = verifica_cpf_cnpj(cpf_cnpj);

			if (quemE === 'CPF') {

				if (valida_cpf(cpf_cnpj) == false) {
					console.log('CPF inválido');
					alert('CPF inválido');
					$('#modal_cpf_cnpj').modal('show');
					$(id_nm).val("");
					return;
				}
			} else {
				if (valida_cnpj(cpf_cnpj) == false) {
					console.log('CNPJ inválido');
					alert('CNPJ inválido');
					$('#modal_cpf_cnpj').modal('show');
					$(id_nm).val("");
					return;
				}
			}
		}
	}, 500);

}