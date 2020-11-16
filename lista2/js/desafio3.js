var linguagens = ['javascript', 'reactjs', 'React native'];
	

function temHabilidade(linguagem){

	if(linguagem.indexOf("javascript") == -1)
		return false;
 	else return true;
 }

var resultado = temHabilidade(linguagens) + ", o vetor possui a linguagem javascript";
document.getElementById("mensagem3").innerHTML=resultado;
console.log(resultado);