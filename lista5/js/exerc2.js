var definicoes = [
{
	"id":1,
	"termo":"W3C",
	"definicao": "World Wibe Web Consortium - escritório responsável por desenvolver normas técnicas para a Internet",
	"autor": "José Borges",
	"dataCriacao": "2015-04-01"
},
{
	"id":2,
	"termo": "HTML",
	"definicao": "HyperText Markup Language - linguagem de marcação utilizada para estruturar páginas web",
	"autor": "Pedro Silva",
	"dataCriacao": "2017-05-12"
},

{
	"id":3,
	"termo": "CSS",
	"definicao": "Cascade Style Sheet - Folhas de estilo utilizadas para configurar a visualização de páginas web",
	"autor": "Maria Machado",
	"dataCriacao": "2018-10-11"
}

];

$(function(){

	var tamanho = definicoes.length;
	
	$("#botao").click(function(){
		for(let i=0;i<tamanho;i++)
		{

			let linha = $("<li>");
			let nome = definicoes[i].termo;
			linha.append(nome); // nome eh elemento da linha//
			let nao_ordenada = $("#lista");
            nao_ordenada.append(linha); // linha eh um elemento da lista //

		}

		$("#lista").on("click", "li", function(){
        
        for(i=0; i<tamanho; i++)
        {
            if($(this).text() == definicoes[i].termo)
            {
                $("#termo").text(definicoes[i].termo);
                $("#descricao").text(definicoes[i].definicao);
              	let data1 = definicoes[i].data.substring(8,10);
              	let data2 = definicoes[i].data.substring(5,7);
              	let data3 = definicoes[i].data.substring(0,4);
                let criacao =  data1 + "/" + data2 + "/" + data3;
                $("#data").text("Data de criação: " + criacao);
                $("#autor").text("Autor: " + definicoes[i].autor);
            }
        }
    })




	});













});