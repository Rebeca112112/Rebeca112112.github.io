var botao = document.getElementById('botao');
var limpar = document.getElementById('limpar');

botao.onclick = function retorna()
{
    var inputth2 = document.getElementById('h2').value;
    var inputto2 = document.getElementById('o2').value;
    if(inputth2 == '' || inputth2<=0 || inputto2 == '' || inputto2<=0)
    {
        alert("Insira um valor válido.");
    }
    else
    {
        inputth2 = parseFloat(inputth2);
        inputto2 = parseFloat(inputto2);
        var x = 16*inputth2;
        var x1 = x/2;
        var y = 2*inputto2;
        var y1 = y/16;
        var r = inputto2 - x1;
        var r2 = inputth2 - y1;
        var massa1 = inputto2 + y1;
        var massa = inputth2 + x1;
        x = x.toFixed(2);
        x1 = x1.toFixed(2);
        y = y.toFixed(2);
        y1 = y1.toFixed(2);
        r = r.toFixed(2);
        r2 = r2.toFixed(2);
        massa = massa.toFixed(2);
        massa1 = massa1.toFixed(2);
        if(x1<inputto2)
        {
            var excesso = "2g H2 - 16g O2 <br>" + inputth2 + "g H2 - Xg O2 <br><br> 2 . X = " + x +"<br> X = " + x1 + "<br><br>Para " + inputth2 + "g H2 precisa-se de " + x1 + "g O2<br> " + inputto2 +" - " + x1 + " = " + r + "<br><br>O2 está " + r + " g em excesso<br> O agente limitante é o H2 <br> A massa de H2O formada é de " + massa + "g";

        }
        else if(x1>inputto2)
        {
            var excesso = "2g H2 - 16g O2 <br> Xg O2 -" + inputto2 + "g O2 <br><br> 16 . X = " + y +"<br> X = " + y1 + "<br><br>Para " + inputto2 + "g O2 precisa-se de " + y1 + "g H2<br> " + inputth2 +" - " + y1 + " = " + r2 + "<br><br>H2 está " + r2 + " g em excesso<br> O agente limitante é o O2 <br> A massa de H2O formada é de " + massa1 + "g";
        }
        else if(x1 == inputto2)
        {
            excesso = "Nenhum elemento está em excesso.";
        }
        document.getElementById('resultado').innerHTML = excesso;

    }
}

limpar.onclick = function limpa()
{
    document.getElementById('h2').value = '';
    document.getElementById('o2').value = '';
    document.getElementById('resultado').innerHTML = '';
}