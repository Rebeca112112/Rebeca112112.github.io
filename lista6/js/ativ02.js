// Faça um programa que leia uma frase e escreva abaixo marcando as vogais em negrito.//
// funcao de calback eh executada assim que o click acontece //

function ehVogal(carac){
	carac = carac.toUpperCase(); // convertendo para maiusculo, ai n precisa fazer o if 10 vezes, só 5 //
	if(carac == "A" || carac == "E" || carac == "I" || carac == "O" || carac =="U")
		return true;
	return false;
}

$(function(){
	$("#marcacao").click(function(){
		let negrito = $("#negrito").val(); // pegando texto input //
		let tamanho = negrito.length;
		let resultado = "";
		for(i=0; i<tamanho; i++)
		{
			// let carac = negrito[i]; peguei o caracter //
			if(ehVogal(negrito[i]))
				resultado = resultado + "<strong>" + negrito[i] + "</strong>";
			if(ehVogal(negrito[i]) == 0)
				resultado = resultado + negrito[i];
		
		}
		$("#resultado").html(resultado);


	})


})