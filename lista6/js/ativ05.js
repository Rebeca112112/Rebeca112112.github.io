// Faça um programa que implemente a funcionalidade substituir em textos, ou seja, //
// terá um campo "procurar" e um campo "substituir". //
// Ao executar, seu programa deverá procurar as ocorrências no texto do valor digitado em "procurar" //
// e trocar pelo valor digitado em "substituir". //

$(function(){
	$("#texto").click(function(){

		let texto = $("#palavra").val();
		let procurar = $("#procurar").val();
		let substituir = $("#substituir").val();
		texto2 = texto.toLocaleLowerCase();
		procurar2 = procurar.toLocaleLowerCase();
		substituir2 = substituir.toLocaleLowerCase();
		const regex = /[0-9]/;
        if(regex.test(texto2) || regex.test(procurar2) || regex.test(substituir2) || texto2 == '')
        {
            alert("Digite um valor válido.");
        }
        else{
			
			let array_texto = texto.split(' ');

			for(i=0;i<array_texto.length;i++)
			{
				if(array_texto[i]==procurar)
				{
					array_texto[i] = substituir;
				}
			}
			let texto_novo = array_texto.join(' ');
			$("#resultado").text(texto_novo);
		}
	
	})
	$("#limpar").click(function(){
        $("#palavra").val("");
        $("#procurar").val("");
        $("#substituir").val("");
        $("#resultado").text("");
    })

})