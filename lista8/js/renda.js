$(function(){
	$("#execut").click(function(){

		let salario = $("#numero1").val();
		salario = parseInt(salario);
		let taxa = 0;
		if(salario <= 1903.98)
		{
			$("#resultado1").html("Não há taxa de imposto!"); 
		}
		if(salario > 1903.98 && salario <= 2826.65)
		{	
			let porcentagem = 7.5/100;
			taxa = (salario*porcentagem) - 142.80;
			taxa = Math.round(taxa);
			$("#resultado1").html("Sua taxa é de, aproximadamente: " + taxa);
		}
		if(salario > 2826.65 && salario <= 3751.05)
		{	
			let porcentagem = 15/100;
			taxa = (salario*porcentagem) - 354.80;
			taxa = Math.round(taxa);
			$("#resultado1").html("Sua taxa é de, aproximadamente: " + taxa);
		}
		if(salario > 3751.05 && salario <= 4664.68)
		{
			let porcentagem = 22.5/100;
			taxa = (salario*porcentagem) - 636.13;
			taxa = Math.round(taxa);
			$("#resultado1").html("Sua taxa é de, aproximadamente: " + taxa);
		}
		else if(salario > 4664.68)
		{
			let porcentagem = 27.5/100;
			taxa = (salario*porcentagem) - 869.36;
			taxa = Math.round(taxa);
			$("#resultado1").html("Sua taxa é de, aproximadamente: " + taxa);

		}
	})
	$("#limpar").click(function(){
        $("#numero1").val("");
        $("#resultado1").text("");
    })
})