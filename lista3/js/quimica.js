// escolhemos na (sodio) //

// 23 gramas um mol //


// massa em mol //
var botao1 = document.getElementById('botao1');
botao1.onclick = function transformação(){

	var massa = document.getElementById('massa').value;
	massa = parseFloat(massa);
	var gramas = 23;
	var resultado = (massa/gramas);
	var resultadoCompleto = '1 mol - 23 g <br> X mol - ' + massa +' g <br> <br> 23 . X = 1 . massa <br> X = ' + resultado;
	document.getElementById('resultado1').innerHTML = resultadoCompleto;


}

var botao2 = document.getElementById('botao2');
botao2.onclick = function transformação2(){

	var mol = document.getElementById('mol').value;
	mol = parseFloat(mol);
	var gramas = 23;
	var resultado = (gramas*mol);
	var resultadoCompleto = '23 g - 1 mol <br> X g - ' + mol + ' mol <br><br> 1 . X = 23 . ' + mol + ' <br> X = ' + gramas*mol + '/1 <br> ' + 'X = ' + resultado + ' g <br><br> ' + mol + ' mol = ' + resultado + 'g';
	document.getElementById('resultado2').innerHTML = resultadoCompleto;	

}


