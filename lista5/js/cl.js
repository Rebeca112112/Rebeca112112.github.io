$(function(){ 

	let acervoA = new Array(); // criando o array //

	$("#botaoDD").click(function(){

		let tituloLivro =$("#titulo").val();  // pegando os valores do html //
		let descricaoLivro =$("#descricao").val();
		let generoLivro =$("#genero").val();
		let autorLivro =$("#autor").val();

		$("#acervo") .append($("<tr>")
			.append($("<td>") .text(tituloLivro) )
			.append($("<td>") .text(descricaoLivro) )
			.append($("<td>") .text(generoLivro) )
			.append($("<td>") .text(autorLivro) )
			.append($("<td>") .append($("<img>").attr('src', 'lixeira.png').addClass("lixeira")) ) ); // imagemzinha da lixeira //


			let book = {
				"titulo": tituloLivro,
				"descricao": descricaoLivro,
				"genero" : generoLivro,
				"autor": autorLivro
			 }; 
			acervoA.push(book);

			// forma mais simples de transformar em string para passar para o servidor //
			$("input[name=apost]").val(JSON.stringify(acervoA)); 
			$("#titulo").val("");
			$("#descricao").val("");
			$("#genero").val("");
			$("#autor").val("");

			// para o novo tipo de input, quando add mais de um autor no site irá entender//
			let autores = $("#autores");
        	let novo_input = $("<option>").text(autor);  // colocando como opção cada autor que já foi escrito //
       		autores.append(novo_input);

			})
		 
			$("#acervo").on("click","img", function(){
				// organizando o novo input //
				let tamanho = acervoA.length;
				frase = acervoA[0].tituloLivro + acervoA[0].descricaoLivro + acervoA[0].generoLivro + acervoA[0].autorLivro
				frase_existente = $(this).parents("#acervo tr").text();
				if(frase == frase_existente)
				{

					acervoA.splice(0,1); // altera o conteudo da lista //

				}
				else{

					let i;
					for(i=1;i<tamanho;i++)
            		{
                		let frase = acervoA[i].tituloLivro + acervoA[i].descricaoLivro + acervoA[i].generoLivro + acervoA[i].autorLivro;
                		if(frase == frase_existente)
                		{
                   			 acervoA.splice(i,1); 
                		}
            		}
				}

				$(this).parents("#acervo tr").remove(); // removendo os nomes da lista //
				 })

		
});