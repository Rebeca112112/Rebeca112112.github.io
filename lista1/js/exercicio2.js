function maior(){
	var n1 = document.getElementById("entrada1").value;
	var n2 = document.getElementById("entrada2").value;  // pegando os valores fornecidos//
	
	n1 = parseInt(n1);
	n2 = parseInt(n2);
		
	var result;

	if(n1>n2){
		result = n1 + " é maior que " + n2;
		alert(result);
	}
			
	else if(n2>n1){
		result = n2 + " é maior que " + n1;
		alert(result);
	}
		
	else if (n1==n2){
		result = n1 + " eh igual " +  n2;
		alert(result);
	}
}