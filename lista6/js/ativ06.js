// Faça um programa que leia uma data de nascimento e retorne quantos dias de vida a pessoa tem.//

// obter informações - getdate //
// alterar -- setdate //


$(function(){
	$("#botaooo").click(function(){
		let data = $("#data_nascimento").val(); // pegando a data de nascimento //

		// a partir de tal caracter, pegar tal caracter //
        let ano = data.substr(0,4); // igual bd, substring //
        let mes = data.substr(5,2); 
        let dia = data.substr(8,2);

        let hoje = new Date;
        let d = new Date(ano,mes - 1,dia); // data q nasceu //

        // math.abs sempre retorna positivo //
        // get time retorna o número de milissegundos desde 1900 //
        // math.ceil arredonda para maior //

        let milissegundos = d.getTime();
        let data_hoje = hoje.getTime();
        
        const calculo_data = Math.abs(milissegundos - data_hoje); // a data de hoje menos a data de nascimento //
        let umDia = (1000 * 60 * 60 * 24);
        const dias = Math.ceil(calculo_data/ umDia); 
        $("#resultado").text("Olá!! " + dias + " são os seus dias de vida!");

	})
	$("#limpar").click(function(){
        $("#data_nascimento").val("");
        $("#resultado").text("");
    })

});

