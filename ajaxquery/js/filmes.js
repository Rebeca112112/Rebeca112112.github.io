$(function(){

	// pegando o arquivo json do rafael // 
	let link = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
	// pegando o link e enviando uma requisição get com ajax // 
	$.get(link, function(filme_serie){

		catalogo(filme_serie);
		console.log(catalogo);

	});

	// o objeto eh a estrela, editei no app paint //
    var opi =  function (objeto)
    {
        var op = objeto.map(function(texto)
        {	
        	// rating eh do arquivo json dele //
            let aux;
            if(texto.rating == 5)
            {	
                aux = "<p><img src='./img/cincoe.png' style='width:25%;'></p><p> " + texto.descricao + "</p>";
                // cinco estrelinhas //
            }
            if(texto.rating == 4)
            {
                aux = "<p> <img src='./img/quatroe.png' style='width:20%;'></p><p> " + texto.descricao + "</p>";
            }
            if(texto.rating == 3)
            {
                aux = "<p> <img src='./img/trese.png' style='width:15%;'></p><p> " + texto.descricao + "</p>";
            }
            if(texto.rating == 2)
            {
                aux = "<p> <img src='./img/doise.png' style='width:50%;'></p><p> " + texto.descricao + "</p>";
            }
            if(texto.rating == 1)
            {
                aux = "<p> <img src='./img/ume.png' style='width:50%;'></p><p> " + texto.descricao + "</p>";
            }
            return aux;
        })
        return op;
    }

    // a indicacao de idade //
    var indicacao =  function (n)
    {	
    	
        let aux;
        if(n == 0)
        {
            aux = "<img src='./img/livre.png' style='width:10%; height:10%; float:right;'>" ;
        }
        if(n == 10)
        {
            aux = "<img src='./img/dez.png' style='width:10%; height:10%; float:right;'>" ;
        }
        if(n == 12)
        {
            aux = "<img src='./img/doze.png' style='width:10%; height:10%; float:right;'>" ;
        }
        if(n == 14)
        {
            aux = "<img src='./img/qtz.png' style='width:10%; height:10%; float:right;'>" ;
        }
        if(n == 16)
        {
            aux = "<img src='./img/dess.png' style='width:10%; height:10%; float:right;'>" ;
        }
        if(n == 18)
        {
            aux = "<img src='./img/doito1.png' style='width:10%; height:10%; float:right;'>" ;
        }
        return aux;
    }

    // os dois filmes semelhantes juntos //
    var filme_semelhante =  function (f)
    {       
    	// a função map chama a função callback recebida por parâmetro para cada elemento do Array original//
    	//, em ordem, e constrói um novo array com base nos retornos de cada chamada//
        var semelhantes = f.map(function(imagem)
        {
            let aux;
            if(imagem == 1)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//betterCallSaul.jpg' style='width:30%;'";
            }
            if(imagem == 2)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//breakingBad.png' style='width:30%;'>";
            }
            if(imagem == 3)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//houseOfCards.png' style='width:30%;'>";
            }
            if(imagem == 4)
            {
                x = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//narcos.png' style='width:30%;'>";
            }
            if(imagem == 5)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//carros.png' style='width:30%;'>";
            }
            if(imagem == 6)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//carros2.png' style='width:30%;'>";
            }
            if(imagem == 7)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//familyGuy.png' style='width:30%;'>";
            }
            if(imagem == 8)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//valente.png' style='width:30%;'>";
            }
            if(imagem == 9)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//friends.png' style='width:30%;'>";
            }
            if(imagem == 10)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//house.png' style='width:30%;'>";
            }
            if(imagem == 11)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//maosTalentosas.png' style='width:30%;'>";
            }
            if(imagem == 12)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//modernFamily.png' style='width:30%;'>";
            }
            if(imagem == 13)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//scarface.png' style='width:30%;'>";
            }
            if(imagem == 14)
            {
               aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//that70s.png' style='width:30%;'>";
            }
            if(imagem == 15)
            {
                aux = "<img src='https://rafaelescalfoni.github.io//desenv_web//img//zumbilandia.png' style='width:30%;'>";
            }
            return aux;
        })
        return semelhantes;
    }


	var catalogo = function(exibir)
	{

		let filme = exibir;
		let i = 0;
		for(i=0; i<filme.length;i++)
		{
			let a = filme[i].id ;
			let b = filme[i].titulo;
			let c = filme[i].resumo;
			let d = filme[i].generos;
			let e = filme[i].titulosSemelhantes;
			let f = filme[i].elenco;
			let g = filme[i].opinioes;

			let h = filme[i].classificacao;
			let figura = filme[i].figura;

			let horas = "<br><br><br><br><br><a href='horas.html' style='border: black solid px;'>Duração/Temporadas</a></li>";

			// append add uma linha nova //
			if(a && b && c && d && e && f && g)
			{
				 $("#paraestilo").append
                (
                    $("<div>").append
                    (
                        $("<h1>").text(b).addClass("titulo"),
                        $("<p>").html(indicacao(h)).addClass("classificacao"),
                        $("<p>").html(c).addClass("desc"),
                        $("<img>").attr("src" , figura).addClass("image"), // pegar o atributo //
                        $("<p>").html("<b>Elenco:</b> " + f).addClass("elenco"),
                        $("<p>").html("<b>Gêneros: </b>" + d).addClass("genero"),
                        $("<p>").html("<b><br>Avaliações</b>").addClass("ava"),
                        $("<p>").html(opi(g)).addClass("opniao"),
                        $("<p>").html("<b>Títulos semelhantes: <br></>").addClass("ts"),
                        $("<p>").html(filme_semelhante(e)).addClass("ts"),
                        $("<a>").html(horas).addClass("horas"),
                    ).addClass("col-md-6 col-sm-12 fundo")
                );  
			}

		}

	}

});