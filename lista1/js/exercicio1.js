function somar(){
		var n1 = document.getElementById("entrada1").value;
		var n2 = document.getElementById("entrada2").value;
		n1 = parseInt(n1);
		n2 = parseInt(n2);
		var resultado = soma(n1,n2);
		alert("O resultado da soma é " + resultado);
}

function soma(op1,op2){
	return op1 + op2;
}