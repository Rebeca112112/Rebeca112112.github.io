function retornar()
{
    var salario=document.getElementById("mensagem1").value;
    var reajuste=document.getElementById("mensagem2").value;

    salario=parseFloat(salario);
    reajuste=parseFloat(reajuste);

    var resultado=calcula_reajuste(salario,reajuste);
    alert("O seu novo salário é " + resultado);
}

function calcula_reajuste(sal,rj)
{
    var r=sal*(rj/100);
    var resultado=sal + r;
    return resultado;
}