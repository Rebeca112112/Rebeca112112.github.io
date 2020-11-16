
function custos(){

	var c = document.getElementById("custo").value; // peguei o valor e passei pra float //
	c = parseFloat(c);


	var distribuidor = parseFloat(28);
	var preço_dis= c*(distribuidor/100);

	var imposto = parseFloat(45);
	var preço_imp = c*(imposto/100);

	var custo_final = c + (preço_dis + preço_imp);
	alert("O custo final eh " + custo_final);
}
	

