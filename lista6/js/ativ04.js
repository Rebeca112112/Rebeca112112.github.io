// Faça um programa que leia um texto e indique a palavra de maior ocorrência e quantas vezes ela apareceu no texto.//

function contaOcorrencias(palavras, palavra){
	return palavras.filter((v) => (v === palavra)).length;
	
}

$(function(){
	$("#texto").click(function(){
		let texto = $("#palavra").val();
		const regex = /[0-9]/;
		if(regex.test(texto) || texto == '')
		{
			alert("Digite um valor válido, por favor.");
		}

		else{
			var palavras = texto.split(" ").map(function(palavra){ 

				return palavra.toLocaleLowerCase().replace(/[.,]/g, ''); 
				
			});
			console.log(palavras);


			var array_ocorrencias = new Array;
			var i = 0;
			var x = 0;
			var jaForam = []; // não ficar repetindo a palavra //
			for(palavra of palavras){ // se o elemento for -1 é porque não está presente no array //

				if(jaForam.indexOf(palavra) == -1){  // se já tiver no array não prossegue //
					let oco = contaOcorrencias(palavras, palavra);
					jaForam.push(palavra); // adicionando valor ao array //
					// ver a palavra que tem o oco maior //
					array_ocorrencias[x] = oco;
					
				}
				else{
					x--;
				}
				i++;
				x++;
			}

			var palavra_mais_ocorrido;
			var cont = 0;
			var empate_array = [];
			// qual eh o numero maior de array_ocorrencias//
			for(i=0;i<jaForam.length;i++)
			{
				var maior = Math.max.apply(null,array_ocorrencias); // retorna o maior numero de um vetor //
				if(array_ocorrencias[i]==maior)
				{	
					cont++;
					palavra_mais_ocorrido = jaForam[i];
					empate_array[i] = jaForam[i];
				}

			}
			console.log(cont);
			console.log(jaForam);
			console.log(array_ocorrencias);
			// se for maior que um, é pq não tem maior, lembrar do for acima//
			if(cont>1)
			{
				$("#resultado").text("Há " + empate_array.length + " palavras com " + array_ocorrencias[0] + " ocorrência(s): " + empate_array + ". Há um empate (Não há palavra com ocorrência maior)");
			}
			else
			{
				 $("#resultado").text("A palavra '" + palavra_mais_ocorrido + "' tem a maior ocorrência com " + maior + " aparição(ões).");
			}
		
	}

$("#limpar").click(function(){
        $("#palavra").val("");
        $("#resultado").text("");
        $("#acervo td").remove();
    })


	})
})