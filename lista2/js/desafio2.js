function retornar()
{
    var r1=document.getElementById("mensagem_a").value;
    var r2=document.getElementById("mensagem_b").value;
    var resultado="Os números do intervalo são: ";
    resultado += pares(r1,r2);
    alert(resultado);
}

function pares(x,y)
{
    var npar=[];
    for(i=x;i<=y;i++)
    {
        if(i%2==0)
        {
            npar.push(i);
        }
    }
    return npar.toString();
}



	
	




