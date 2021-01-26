$(function(){

    let books = new Array();

    $("#botao").click(function(){

        let titulo = $("#titulo").val();
        let descricao = $("#descricao").val();
        let genero = $("#genero").val();
        let autor =  $("#autor").val();

        if(titulo == "" || descricao == "" || genero == "" || autor == "")
        {
            alert("Por favor, preencha os campos reservados.");
        }
        else 
        {
            $("#acervo").append($("<tr>").addClass("livro")
			.append($("<td>") .text(titulo) )
			.append($("<td>") .text(descricao) )
			.append($("<td>") .text(genero) )
			.append($("<td>") .text(autor) )
			.append($("<td>") .append($("<img>").attr('src', 'lixeira.png').addClass("lixeira")) ) ); // imagemzinha da lixeira //
            let livro = {
                "titulo":  titulo,
                "descricao": descricao,
                "genero": genero,
                "autor": autor
            };
            books.push(livro);
            $("#titulo").val("");
            $("#descricao").val("");
            $("#autor").val("");
            // para o novo tipo de input, quando add mais de um autor no site irá entender//
			let autores = $("#autores");
        	let novo_input = $("<option>").text(autor);  // colocando como opção cada autor que já foi escrito //
       		autores.append(novo_input);
        }
    })

    $("#acervo").on("click", "img", function(){

        let tamanho = books.length;
        let frase = books[0].titulo + books[0].descricao + books[0].genero + books[0].autor;
        let frase_existente = $(this).parents("#acervo tr").text();
        if(frase == frase_existente)
        {
            books.splice(0,1);
        }
        else
        {
            let i;
            for(i=1;i<tamanho;i++)
            {
                let fr = books[i].titulo + books[i].descricao + books[i].genero + books[i].autor;
                if(fr == frase_existente)
                {
                    books.splice(i,1);
                }
            }
        }
        $(this).parents("#acervo tr").remove();
    })

    $("#salvar_bd").click(function(){
        $("input[name=acervo_post]").val(JSON.stringify(books)).val();
    })

});