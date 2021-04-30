$(function(){
	$("#execut").click(function(){
		let recebido = $("#numeros").val();

		if(recebido == '')
        {
            alert("Digite um valor válido, por favor.");
        }
        else{

        	let n = recebido.split(",");

			let teste = n.map(function(numero){  
				return numero * 2;
			})
			let strinDNV1 = teste.join(",");
			$("#resultado").html("O valor duplicado é "+ strinDNV1 + "."); 

			let par = n.filter(function(pares){ 
				return pares = (pares%2 == 0);
			})
			let strinDNV2 = par.join(",");
			$("#resultado2").html("O(s) número(s) par(es) é(são): "+ uniquei(strinDNV2) + "."); 

			let	soma = n.reduce(function(s,n){
				return parseInt(s) + parseInt(n);
			})
			$("#resultado3").html("A soma dos números é: "+ soma + "."); 

        }
		

	})
	function uniquei (u)
    {
        let unico = [...new Set(u)];
        return unico.join(",");
    }

$("#limpar").click(function(){
        $("#numeros").val("");
        $("#resultado").text("");
        $("#resultado2").text("");
        $("#resultado3").text("");
    })
	
	
})