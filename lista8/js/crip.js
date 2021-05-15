$(function(){
	$("#execut").click(function(){
		let texto = $("#t").val();
		let numero_rotacao = $("#n").val();	
		numero_rotacao = parseInt(numero_rotacao);
		var values = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       	let para_array = texto.split('');
       	let tamanho1 = texto.length;
       	let tamanho2 = values.length;
       	let i = 0;
       	let x = 0;
       	let a;
       	let aux;

       	// menor que os três que o usuário forneceu //
       	while(x<tamanho1)
       	{
       		aux = para_array[x];
       		while(i<tamanho2)
       		{
       			if(values[i] == aux)
       			{
       				if((i+numero_rotacao)>tamanho2)
       				{
       					a = i + numero_rotacao - tamanho2;
       					para_array[x] = values[a];
       				}
       				else if((i+numero_rotacao) == tamanho2)
       				{
       					para_array[x] = values[0];
       				}
       				else{
       					para_array[x] = values[i+numero_rotacao];
       				}
       			}
       			i++;
       		}
       		i = 0;
       		x++;
       	}	
       	para_string = para_array.join('');
       	$("#resultado1").html("O resultado é " + para_string);

	})
	$("#limpar").click(function(){
        $("#n").val("");
        $("#t").val("");
        $("#resultado1").text("");
    })
})