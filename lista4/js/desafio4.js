var vetor = ["Diego", "Gabriel", "Lucas"];
vetor.forEach(function(pessoas) // foreach percorre o vetor//
{
	var nomes = document.createElement('li');
	nomes.innerHTML = pessoas; // o li eh igual a pessoas //
	var lista = document.getElementById('ul');
	lista.appendChild(nomes);  // nomes eh igual a li //
	// ul tem um filho que eh o li //
});

function adicionar(){

	var input = document.getElementById('input').value;
	if(input == ' ')
	{
		alert('O campo não foi preenchido! Por favor, preencha com um nome.');
	}
	else {
		var nomes = document.createElement('li');
		nomes.innerHTML = input; 
		var lista = document.getElementById('ul');
		lista.appendChild(nomes);
		document.getElementById('input').value = ' '; // voltando ao vazio //
	}

}

	