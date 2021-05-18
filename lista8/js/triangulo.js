$(function(){
	$("#execut").click(function(){

		let n1 = $("#numero1").val();
		let n2 = $("#numero2").val();
		let n3 = $("#numero3").val();

		n1 = parseInt(n1);
		n2 = parseInt(n2);
		n3 = parseInt(n3);

		function coerente(valor)
   		{
	        if(valor < 0)
	        {
	            valor = valor * (-1);
	        }
	        return valor;
    	}

		// não pode ser negativo//
		if(coerente(n2-n3) < n1 && n1 < (n2+n3) || coerente(n1-n3) < n2 && n2 < (n1+n3) || coerente(n1-n2) < n3 && n3 < (n1+n2)){
		// verificando se eh um triangulo //
			if(n1>0 && n2>0 && n3>0){

				if(n1 == n2 && n1 == n3)
				{	
					$("#resultado1").html("Seu triângulo é equilátero!"); 
				}
				else if(n1 == n2 || n1 == n3 || n2 == n3){
					$("#resultado1").html("Seu triângulo é isósceles!"); 
				}
				else $("#resultado1").html("Seu triângulo é escaleno!"); 

			}
		}
		else $("#resultado1").html("Não é um triângulo!");

	})
	$("#limpar").click(function(){
        $("#numero1").val("");
        $("#numero2").val("");
        $("#numero3").val("");
        $("#resultado1").text("");
    })
})