$(function(){
	$("#execut").click(function(){

		let n1 = $("#numero1").val();
		let n2 = $("#numero2").val();
		var opcoes = $("#corr").val();

		if(n1 == '' || n2 == '')
		{
			$("#resultado1").html("Insira uma valor válido, pfv!"); 
		}
		else{
			n1 = parseInt(n1);
			n2 = parseInt(n2);

			let calculo = 0;
			if(opcoes == '1')
			{
				calculo = n1+n2;
				$("#resultado1").html("A soma de " + n1 +" e " + n2 + " é igual a " + calculo + "."); 
			}
			if(opcoes == '2')
			{
				calculo = n1-n2;
				$("#resultado1").html("A subtração de " + n1 +" e " + n2 + " é igual a " + calculo + "."); 
			}
			if(opcoes == '3')
			{
				calculo = n1*n2;
				$("#resultado1").html("A multiplicação de " + n1 +" e " + n2 + " é igual a " + calculo) + "."; 
			}
			else if(opcoes == '4')
			{
				calculo = n1/n2;
				$("#resultado1").html("A divisão de " + n1 +" e " + n2 + " é igual a " + calculo + "."); 
			}
		}
	})

	$("#limpar").click(function(){
        $("#numero1").val("");
        $("#numero2").val("");
        $("#resultado1").text("");
    })
})