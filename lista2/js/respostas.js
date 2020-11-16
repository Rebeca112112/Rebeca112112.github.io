// exercício 1 //

var endereco = {
	rua: "Rua dos pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
}
	
var resultado = "O usuário mora em ";
resultado += endereco.cidade;
resultado += "/";
resultado += endereco.uf;
resultado += ", no bairro ";
resultado += endereco.bairro;
resultado += ", na rua ";
resultado += endereco.rua;
resultado += ", com nº ";
resultado += endereco.numero;

//console.log(resultado);

document.getElementById("mensagem1").innerHTML=resultado; 


// exercício 2 //

function pares(x,y){   

	var pares  = [] ; // criando um array(vetor) //
	for(i=x; i<=y ; i++)
	{
		if(i%2 == 0)
			pares.push(i);  // push está add elemento no array //
	}
	return pares.toString(); // retorna uma string representando um objeto//
}
	
	var result = document.getElementById("mensagem2a").innerHTML;
	var r = pares(result);
	console.log(result);
	//var resultado_array = result.split(","); // serve para separar os elementos do array, //
	// ficar mais bonitinho //
	
	/*resultado_array.forEach(function (numero){   // forEach percorre o array //
		var elemento_li = document.createElement("LI");
		elemento_li.innerHTML = numero;
		document.getElementById("mensagem2").appendChild(elemento_li);
	});*/




// exercicio 3 //



 function temHabilidade(linguagem, aux){

 	var i = 0;
 	for(i=0;i<linguagem.length;i++){
 		if(linguagem[i]=aux){
 			return true;
 		}
 		else return false;

 	}	
 }

 	var ling = ['javascript', 'reactjs', 'React native'];
 	var resultado = temHabilidade(ling, ling[1]);
 	document.getElementById("mensagem3").innerHTML = resultado;

 	console.log(resultado);



