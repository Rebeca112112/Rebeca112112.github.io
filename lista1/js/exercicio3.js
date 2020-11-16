function ehPrimo(){
	var n = document.getElementById("numero1").value; // pegando o numero do input //
	// recebi ele como number no html //
	// se o numero for menor que um, ele n eh primo //
	var result;
	var i = 0;
	var aux = 0;
	if(n>=1)
	{	

		if(n==1)
		{
			result= "O número " + n + " não é primo, pois ele não possui dois divisores";
			alert(result);
		}
		for(i=1 ; n>=i; i++)
		{
			if(n%i==0)
			aux++;
		}

		if(aux==2) //um numero primo so pode ser dividido por ele mesmo e por um, entao se a quantidade de vezes que o lup rodar for duas, ele eh primo//
		{
			result = "O número "+ n +" é primo";
            alert(result);
		}
		
		if(aux>2){
			result = "O número "+ n +" não é primo";
            alert(result);
		}
			
	}
		else{
			result = "O número não pode ser zero ou negativo! O espaço precisa ser preenchido e não é permitido texto";
			alert(result);
		}
}