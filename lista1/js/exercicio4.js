function pitagoras(){
	var b = document.getElementById("entrada1").value;
	var c = document.getElementById("entrada2").value; // pegando os valores dos catetos //

	b = parseInt(b);
	c = parseInt(c);

	var hipotenusa = hipo(b,c);
	alert("o valor da hipotenusa eh " + hipotenusa);

}

function hipo(n1,n2){
	var resultado = Math.pow(n1,2) + Math.pow(n2,2);
	return Math.sqrt(resultado);
}
