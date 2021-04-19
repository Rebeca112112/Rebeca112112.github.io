$(function(){

    $("#botao").click(function(){
        let solvente = $("#solvente").val();
        let soluto = $("#soluto").val();
        suluto = parseFloat(soluto);
        solvente = parseFloat(solvente);
        let mult1 = 330 * solvente;
        if(mult1 > soluto)
        {
            $("#resultado").html("1L água - 330g açúcar<br>" + solvente + "L água - Xg açúcar<br> 1 . X = 330 . " + solvente + "<br>X = " + mult1 + "g<br> Era esperado " + mult1 + "g<br>Você forneceu " + soluto + "g,  então <b>solução insaturada.</b>");
        }
        if(mult1 < soluto)
        {
            $("#resultado").html("1L água - 330g açúcar<br>" + solvente + "L água - Xg açúcar<br> 1 . X = 330 . " + solvente + "<br>X = " + mult1 + "g<br> Era esperado " + mult1 + "g<br>Você forneceu " + soluto + "g,  então <b>solução supersaturada.</b>");
        }
        if(mult1 == soluto)
        {
            $("#resultado").html("1L água - 330g açúcar<br>" + solvente + "L água - Xg açúcar<br> 1 . X = 330 . " + solvente + "<br>X = " + mult1 + "g<br> Era esperado " + mult1 + "g<br>Você forneceu " + soluto + "g,  então <b>solução saturada.</b>");
        }
    })

    $("#limpar").click(function(){
        $("#solvente").val("");
        $("#soluto").val("");
        $("#resultado").text("");
    })
    
})
