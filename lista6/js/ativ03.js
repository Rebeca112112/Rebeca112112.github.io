// Faça um programa que leia um texto e separe todas as palavras em um array, //
// indicando para cada uma delas o número de vezes que aparece no texto. //
//Imprima o array em uma tabela contendo a palavra e número de ocorrências. //


function contaOcorrencias(palavras, palavra){
	return palavras.filter((v) => (v === palavra)).length; // o filter gera um novo array //
	// quero filtrar o array palavras para os valores v //
	//(que são todas as palavras tal que v seja igual a palavra que passei pelo parametro);//
	// length para pegar o tamanho do array //
	// se o usuario fornecer (teste, teste, aaa, teste), só vai aparecer (teste,teste,teste)==3 //
	// filtrar é basicamente você escolher as palavras que quer //
}

$(function(){
	$("#texto").click(function(){
		let valorPalavra = $("#palavra").val();
		const regex = /[0-9]/;
        if(regex.test(valorPalavra) || valorPalavra == '')
        {
            alert("Digite um valor válido.");
        }
        else{


			var palavras = valorPalavra.split(" ").map(function(palavra){ //map chama a função callback e constroi um novo array//

				return palavra.toLocaleLowerCase().replace(/[.,]/g, ''); // caracteres estranhos para removerem virgulas e etc.//
				// as barrinhas significam que quero tirar as virgulas, //
				// pontos de todas palavras e os colchetes criam um grupo, que é o grupo que quero retirar//
				// g == global //
				// tolocalelowercase retorna o valor da string em minuscula//
				// replace substitui a palavra //
			});
			console.log(palavras);

			var i = 0;
			var array_oco = [];
			var jaForam = [];
			var x = 0;
			for(palavra of palavras){ // se o elemento for -1 é porque não está presente no array //

				if(jaForam.indexOf(palavra) == -1){
					let oco = (contaOcorrencias(palavras, palavra));
					jaForam.push(palavra); // adicionando valor ao array //
					array_oco[x] = oco;
				}
				else{
					x--;
				}
				i++;
				x++;
				}

			for(i=0;i<jaForam.length;i++)
			{
				let objeto_tr = $("<tr>");
				$("#acervo").append(objeto_tr);
						

				let objeto_td = $("<td>"); // uma linha //
				let objeto_td2 = $("<td>");
				objeto_td.text(jaForam[i]);
				objeto_td2.text(array_oco[i]);
				console.log(jaForam);

				objeto_tr.append(objeto_td);
				objeto_tr.append(objeto_td2);

				
			}
			
		}


	})

	$("#limpar").click(function(){
        $("#palavra").val("");
        $("#resultado").text("");
        $("#acervo td").remove();
    })

})