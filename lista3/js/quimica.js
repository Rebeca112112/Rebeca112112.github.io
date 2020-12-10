// escolhemos na (sodio) //

// 23 gramas um mol //

var botao = document.getElementById('botao');
var limpar = document.getElementById('limpar');
var select = document.getElementById('corr');

botao.onclick = function transformação(){

	var input = document.getElementById('valor').value;
	if(input == '' || input<=0)
	{
		alert('Insira um valor correto!');
	}
	else{

		if(select.value == '2'){

			var massa = input;
			massa = parseFloat(massa);
			var gramas = 23;
			var resultado = (massa/gramas);
			resultado = resultado.toFixed(2); // arredonda para cima //
			var resultCompleto = '1 mol - 23 g <br> X mol - ' + massa +' g <br> <br> 23 . X = 1 . massa <br> X = ' + resultado;
			document.getElementById('resultado').innerHTML = resultCompleto;

		}
		else if(select.value == '1'){

			var mol = input;
			mol = parseFloat(mol);
			var gramas = 23;
			var resultado = (gramas*mol);
			resultado = resultado.toFixed(2);
			var resultCompleto = '23 g - 1 mol <br> X g - ' + mol + ' mol <br><br> 1 . X = 23 . ' + mol + ' <br> X = ' + gramas*mol + '/1 <br> ' + 'X = ' + resultado + ' g <br><br> ' + mol + ' mol = ' + resultado + 'g';
			document.getElementById('resultado').innerHTML = resultCompleto;


		}

	}
	limpar.onclick = function limpou()
	{
		document.getElementById('resultado').innerHTML = '';
		document.getElementById('valor').value = '';


	}

}


