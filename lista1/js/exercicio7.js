//Uma revendedora paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.//

function funcionarios(){

	var carroVendido = document.getElementById("carro").value;
	var vendaTotal = document.getElementById("vendas").value; 
	var salario = document.getElementById("fixo").value;
	var comissao = document.getElementById("unidade").value;
	
	// convertendo //
	salario = parseFloat(salario);  // salario total //
	comissao = parseFloat(comissao); // comissao por unidade //
	vendaTotal = parseFloat(vendaTotal); // valor total das vendas //
	carroVendido = parseInt(carroVendido); // valor que recebe por cada carro vendido // 

	var total = percentual(carroVendido, vendaTotal, salario, comissao);
	alert("O seu salario total eh "  + total);

	}

function percentual(cv,vt,s,c){
	var calculo1 = cv*c ; 
	var calculo2 = (vt*0.05);
	var resultado = s + calculo1 + calculo2;
	return resultado;
}