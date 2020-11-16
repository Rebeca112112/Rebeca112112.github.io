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


document.getElementById("mensagem1").innerHTML=resultado; 