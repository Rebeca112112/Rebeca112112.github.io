$(function(){
	$("#botaooo").click(function(){
		let data = $("#data").val();

		let ano = data.substr(0,4); // igual bd, substring //
        let mes = data.substr(5,2); 
        let dia = data.substr(8,2);

        var mes_nascimento='';
        if(mes == 1){
        	mes_nascimento = "Janeiro";
        }
        else if(mes == 2){
        	mes_nascimento = "Fevereiro";
        }
        else if(mes == 3){
        	mes_nascimento = "Março";
        }
        else if(mes == 4){
        	mes_nascimento = "Abril";
        }
        else if(mes == 5){
        	mes_nascimento = "Maio";
        }
        else if(mes == 6){
        	mes_nascimento = "Junho";
        }
        else if(mes == 7){
        	mes_nascimento = "Julho";
        }
        else if(mes == 8){
        	mes_nascimento = "Agosto";
        }
        else if(mes == 9){
        	mes_nascimento = "Setembro";
        }
        else if(mes == 10){
        	mes_nascimento = "Outubro";
        }
        else if(mes == 11){
        	mes_nascimento = "Novembro";
        }
        else if (mes == 12) {
        	mes_nascimento = "Dezembro";
        }


        $("#resultado").text(dia + " de " + mes_nascimento + " de " + ano + ".");


        $("#limpar").click(function(){
        $("#data").val("");
        $("#resultado").text("");
   		 })
	})
})