function graus(){

	var f = document.getElementById("grau").value;
	f = parseFloat(f);
	
	var c = (((f-31)/9)*5);
	alert("o resultado de Fahrenheit para Celsius eh " + c);

}