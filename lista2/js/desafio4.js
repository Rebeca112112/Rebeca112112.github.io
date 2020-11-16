function experiencia(anos){

	if(anos==0)
		return "Você não tem nenhuma esperiencia?";
	else if(anos<=1)
		return "Você é um Iniciante, meu/minha jovem!"
	else if(anos<=3)
		return "Você é Intermediário!";
	else if(anos<=6)
		return "Você é avançado!!";
	else 
		return "Você é Jedi Master";
}

function retornar(){

	var r1 = document.getElementById("mensagem4").value;
	var resultado = experiencia(r1);
	alert(resultado);

}

// De 0-1 ano: Iniciante//
// De 1-3 anos: Intermediário//
// De 3-6 anos: Avançado//
// De 7 acima: Jedi Master//