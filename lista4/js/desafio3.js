
var vetor = ["Diego", "Gabriel", "Lucas"];
vetor.forEach(function(pessoas) // foreach percorre o vetor//
{
	var nomes = document.createElement('li');
	nomes.innerHTML = pessoas; // o li eh igual a pessoas //
	var lista = document.getElementById('ul');
	lista.appendChild(nomes);  // nomes eh igual a li //
	// ul tem um filho que eh o li //
});




