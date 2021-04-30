$(function(){
	$("#execut").click(function(){

		let a = $("#numeros").val();
		if( a == '')
		{
			alert("Digite um valor válido, por favor.");
		}

		else{
			let numeros = a.split(",");
			console.log(numeros);
			
			let min = Math.min(...numeros);
			$("#resultado1").html("O valor mínimo é "+ min); 
			let max = Math.max(...numeros);
			$("#resultado2").html("O valor máximo é "+ max); 
			
			let unique = uniquei(numeros); 
			$("#resultado3").html("O array sem repetições é "+ unique); 

			let sn = sorteando(numeros);
			$("#resultado4").html("O array ordenado é "+ sn); 

}
	
	 function sorteando (st)
    {
        return st.sort().join(",");
    }

	function uniquei (u)
    {
        let unico = [...new Set(u)];
        return unico.join(",");
    }

   
})
$("#limpar").click(function(){
        $("#numeros").val("");
        $("#resultado1").text("");
        $("#resultado2").text("");
        $("#resultado3").text("");
        $("#resultado4").text("");
    })
	
});

