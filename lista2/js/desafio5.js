function vetor(){

var usuarios = [  
	{  	nome: "Diego",
    	habilidades: ["Javascript", "ReactJS", "Redux"]
	},
	{   nome: "Gabriel",
    	habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	}];

	for (var usuario of usuarios){   // 
	
		var resultado = ('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(", "));
		document.getElementById("mensagem5").innerHTML = resultado;
		alert(resultado);
	}

}



// A função for...of percorre objetos iterativos, chamando uma função personalizada// 
// com instruções a serem executadas para o valor de cada objeto distinto //

