var botao = document.getElementById('botao');
var inputt = document.getElementById('entrada');
var limpar = document.getElementById('limpar');

botao.onclick = function retorna()
{
    var select_reag1 = document.getElementById('reagente1').value;
    var select_reag2 = document.getElementById('reagente2').value;
    var select_corr = document.getElementById('corr').value;
    var valor = document.getElementById('entrada').value;
    if(select_reag1 == '1' && select_reag2 == '2' && select_corr == '1')
    {
        valor = parseFloat(valor);
        var a = valor*22.4;
        var b = (a/44.8); /* H2 - O2 volume*/
        var produto = b + valor;
        a = a.toFixed(2);
        b = b.toFixed(2);
        produto = produto.toFixed(2);
        var resultadoCompleto = "44,8L H2 - 22,4L O2 <br>" +valor +"L H2 - XL O2 <br><br> 44,8 . X = 22,4 . " + valor + "<br> X = " + a + "/44,8 <br> X = " + b + "L O2 <br><br> Dado " + valor + "L de H2, precisa de " + b + "L de O2." ;
        document.getElementById('resultado').innerHTML = resultadoCompleto;
        document.getElementById('h2(1)').innerHTML = valor;
        document.getElementById('o2(1)').innerHTML = b;
        document.getElementById('h2o(1)').innerHTML = produto;
    }
    
    if(select_reag1 == '2' && select_reag2 == '1' && select_corr == '1')
    {
        valor = parseFloat(valor);
        var a = valor*44.8;
        var b = (a/22.4);
        var produto = b + valor; /* O2 para H2 volume*/
        a = a.toFixed(2);
        b = b.toFixed(2);
        produto = produto.toFixed(2);
        var resultadoCompleto = "44,8L H2 - 22,4L O2 <br>"  + "XL H2 -" + valor + "L O2 <br><br> 22,4 . X = " + "44,8 . " + valor +"<br> X = " + a + "/22,4 <br> X = "+ b + "L H2 <br><br> Dado " + valor + "L de O2, precisa-se de " + b + "L de H2." ;
        document.getElementById('resultado').innerHTML = resultadoCompleto;
        document.getElementById('h2(1)').innerHTML = b;
        document.getElementById('o2(1)').innerHTML = valor;
        document.getElementById('h2o(1)').innerHTML = produto;
    }

    if(select_reag1 == '2' && select_reag2 == '3' && select_corr == '2')
    {
        valor = parseFloat(valor);
        var a = valor*18;
        var b = a/22.4;
        var produto = (b*22.4)/44.8; /* O2v - H2Og*/
        a = a.toFixed(2);
        b = b.toFixed(2);
        produto = produto.toFixed(2);
        var resultadoCompleto = "18g H2O - 22,4L O2 <br> Xg H2O - " + valor + "L O2 <br><br> 22,4 . X = " + a + ". 1 <br> X = " + a + "/22.4 <br> X = " + b + "g H2O <br><br>Dado " + valor + "L O2, produzimos " + b + "g de H2O";
        document.getElementById('resultado').innerHTML = resultadoCompleto;
        document.getElementById('h2').innerHTML = produto;
        document.getElementById('o2').innerHTML = valor;
        document.getElementById('h2o').innerHTML = b;
    }

    if(select_reag1 == '3' && select_reag2 == '2' && select_corr == '2')
    {
        valor = parseFloat(valor);
        var a = valor*22.4;
        var b = a/18;
        var produto = (b*44.8)/22.4;
        console.log(a);
        console.log(b);
        console.log(produto);
        a = a.toFixed(2); /* H20g - O2V*/
        b = b.toFixed(2);
        produto = produto.toFixed(2);
        var resultadoCompleto = "22,4L O2 -18g H2O <br> XL O2 - " + valor + "g H2O <br><br> 18 . X = " + valor + ". 22,4 <br> X = " + a + "/18 <br> X = " + b + "L O2 <br><br>Para " + valor + "g H2O, precisamos de " + b + "L de O2";
        document.getElementById('resultado').innerHTML = resultadoCompleto;
        document.getElementById('h2').innerHTML = produto;
        document.getElementById('o2').innerHTML = b;
        document.getElementById('h2o').innerHTML = valor;
    }
}

limpar.onclick = function limpa()
{
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('h2(1)').innerHTML = '44,8';
    document.getElementById('o2(1)').innerHTML = '22,4';
    document.getElementById('h2o(1)').innerHTML = '67,2';
    document.getElementById('h2').innerHTML = '44,8';
    document.getElementById('o2').innerHTML = '22,4';
    document.getElementById('h2o').innerHTML = '18';
    inputt.value = '';
}