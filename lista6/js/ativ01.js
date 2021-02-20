// ao clicar no botão, vai executar a função //
// Faça um programa que leia uma frase e escreva abaixo invertendo os caracteres - o primeiro se torna o último, o segundo o penúltimo e assim por diante.//

$(function(){
	$("#inverter").click(function(){  
		let frase = $("#frase").val(); // pegando o valor que foi escrito pelo usuario //
		let resultado = ""; // decorando o resultado, mas ele vai estar vazio por enquanto //
		const regex = /[0-9]/;
		if(regex.test(frase) || frase == '')
		{
			alert("Porfavor, preencha o campo corretamente. Sem números ou vazio.")
		}
		else{

			let texto = frase.split('').reverse().join('');

			// split -- transforma o texto em um array //
			// reverse -- inverte o array //
			// join -- transformando em string novamente //

		    $("#resultado").text("A frase/palavra invertida é: "+ texto); 
		}

	})
});

/* invertendo frase //
let tamanho = frase.length;
let i = 0;
let j = tamanho - 1;
let aux = 0;
while(i<tamanho/2){
	aux = frase[i];
    frase[i] = frase[j];
    frase[j] = aux;
    i++;
    j--;
}*/