function medias(){

	var n1 = document.getElementById("nota1").value;
	var n2 = document.getElementById("nota2").value;
	var n3 = document.getElementById("nota3").value;
	var aluno = document.getElementById("nome").value;

	var n1 = parseFloat(n1);
	var n2 = parseFloat(n2);
	var n3 = parseFloat(n3);

	var mediaFinal = notas(n1,n2,n3);
	alert("A média final de " + aluno + " é " + mediaFinal);

}
	
function notas(a,b,c){
	var media = ((a*2) + (b*3) + (c*5))/10;
	return media;
}