function preços(){

	var nCompra = document.getElementById('compra').value;
	var nCompra = parseInt(nCompra);
	if(nCompra<12)
	{
		var resultado = nCompra*1.30;
		alert("Você pagou 1.30 em cada unidade e o preço total da sua compra foi de " + resultado)
	}
	else
	{
		var resultado = nCompra*1.00;
		alert("Você pagou 1.00 em cada unidade e o preço total da sua compra foi de " + resultado);

	}
}