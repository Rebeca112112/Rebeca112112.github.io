$(function(){
    
    $("#botao1").click(function(){
        if($("#a").prop("checked") == true)
        {
            $("#resultado").text("Resposta incorreta:")
            $("#r").append($("<p>").text("A resposta correta é a letra A. Um gás real aproxima-se do ideal quanto mais alta for sua temperatura e menor sua pressão."));
            $(".A").css("color", "red");
            $(".B").css("color", "red");
            $(".C").css("color", "red");
            $(".D").css("color", "green");
            $(".E").css("color", "red");
        }
        if($("#b").prop("checked") == true)
        {
            $("#resultado").text("Resposta incorreta:")
            $("#r").append($("<p>").text("A resposta correta é a letra A. Um gás real aproxima-se do ideal quanto mais alta for sua temperatura e menor sua pressão."));
            $(".A").css("color", "red");
            $(".B").css("color", "red");
            $(".C").css("color", "red");
            $(".D").css("color", "green");
            $(".E").css("color", "red");
        }
        if($("#c").prop("checked") == true)
        {
            $("#resultado").text("Resposta incorreta:")
            $("#r").append($("<p>").text("A resposta correta é a letra A. Um gás real aproxima-se do ideal quanto mais alta for sua temperatura e menor sua pressão."));
            $(".A").css("color", "red");
            $(".B").css("color", "red");
            $(".C").css("color", "red");
            $(".D").css("color", "green");
            $(".E").css("color", "red");
        }
        if($("#d").prop("checked") == true)
        {
            $("#resultado").text("Resposta correta: Parabéns!!")
            $("#r").append($("<p>").text(" Um gás real aproxima-se do ideal quanto mais alta for sua temperatura e menor sua pressão."));
            $(".A").css("color", "red");
            $(".B").css("color", "red");
            $(".C").css("color", "red");
            $(".D").css("color", "green");
            $(".E").css("color", "red");
        }
        if($("#e").prop("checked") == true)
        {
            $("#resultado").text("Resposta incorreta: ")
            $("#r").append($("<p>").text("A resposta correta é a letra A. Um gás real aproxima-se do ideal quanto mais alta for sua temperatura e menor sua pressão."));
            $(".A").css("color", "red");
            $(".B").css("color", "red");
            $(".C").css("color", "red");
            $(".D").css("color", "green");
            $(".E").css("color", "red");
        }
    })

    $("#botao2").click(function(){
        if($("#a1").prop("checked") == true)
        {
            $("#resultado2").text("Resposta correta: Parabéns!!")
            $("#r2").append
            (
                // $("<p>").text("A resposta correta é a letra A."),
                $("<p>").text("Lei geral dos gases perfeitos"),
                $("<p>").text(" P1.V1/T1=P2.V2/T2"),
                $("<p>").text("1.10/200=2.V2/400"),
                $("<p>").text("200.2.V2=1.10.400"),
                $("<p>").text("400.V2=4000"),
                $("<p>").text("V2=4000/400"),
                $("<p>").text("V2 = 10 L")
            );
            $(".A1").css("color", "green");
            $(".B1").css("color", "red");
            $(".C1").css("color", "red");
            $(".D1").css("color", "red");
            $(".E1").css("color", "red");
        }
        if($("#b1").prop("checked") == true)
        {
            $("#resultado2").text("Resposta incorreta: ")
            $("#r2").append
            (
                $("<p>").text("A resposta correta é a letra A."),
                $("<p>").text("Lei geral dos gases perfeitos"),
                $("<p>").text(" P1.V1/T1=P2.V2/T2"),
                $("<p>").text("1.10/200=2.V2/400"),
                $("<p>").text("200.2.V2=1.10.400"),
                $("<p>").text("400.V2=4000"),
                $("<p>").text("V2=4000/400"),
                $("<p>").text("V2 = 10 L")
            );
            $(".A1").css("color", "green");
            $(".B1").css("color", "red");
            $(".C1").css("color", "red");
            $(".D1").css("color", "red");
            $(".E1").css("color", "red");
        }
        if($("#c1").prop("checked") == true)
        {
            $("#resultado2").text("Resposta incorreta: ")
            $("#r2").append
            (
                $("<p>").text("A resposta correta é a letra A."),
                $("<p>").text("Lei geral dos gases perfeitos"),
                $("<p>").text(" P1.V1/T1=P2.V2/T2"),
                $("<p>").text("1.10/200=2.V2/400"),
                $("<p>").text("200.2.V2=1.10.400"),
                $("<p>").text("400.V2=4000"),
                $("<p>").text("V2=4000/400"),
                $("<p>").text("V2 = 10 L")
            );
            $(".A1").css("color", "green");
            $(".B1").css("color", "red");
            $(".C1").css("color", "red");
            $(".D1").css("color", "red");
            $(".E1").css("color", "red");
        }
        if($("#d1").prop("checked") == true)
        {
            $("#resultado2").text("Resposta incorreta:")
            $("#r2").append
            (
                $("<p>").text("A resposta correta é a letra A."),
                $("<p>").text("Lei geral dos gases perfeitos"),
                $("<p>").text(" P1.V1/T1=P2.V2/T2"),
                $("<p>").text("1.10/200=2.V2/400"),
                $("<p>").text("200.2.V2=1.10.400"),
                $("<p>").text("400.V2=4000"),
                $("<p>").text("V2=4000/400"),
                $("<p>").text("V2 = 10 L")
            );
            $(".A1").css("color", "green");
            $(".B1").css("color", "red");
            $(".C1").css("color", "red");
            $(".D1").css("color", "red");
            $(".E1").css("color", "red");
        }
        if($("#e1").prop("checked") == true)
        {
            $("#resultado2").text("Resposta incorreta:")
            $("#r2").append
            (
                $("<p>").text("A resposta correta é a letra A."),
                $("<p>").text("Lei geral dos gases perfeitos"),
                $("<p>").text(" P1.V1/T1=P2.V2/T2"),
                $("<p>").text("1.10/200=2.V2/400"),
                $("<p>").text("200.2.V2=1.10.400"),
                $("<p>").text("400.V2=4000"),
                $("<p>").text("V2=4000/400"),
                $("<p>").text("V2 = 10 L")
            );
            $(".A1").css("color", "green");
            $(".B1").css("color", "red");
            $(".C1").css("color", "red");
            $(".D1").css("color", "red");
            $(".E1").css("color", "red");
        }
    })


 $("#limpar").click(function(){
        $("#a").prop("checked", false);
        $("#b").prop("checked", false);
        $("#c").prop("checked", false);
        $("#d").prop("checked", false);
        $("#e").prop("checked", false);
        $(".A").css("color", "black");
        $(".B").css("color", "black");
        $(".C").css("color", "black");
        $(".D").css("color", "black");
        $(".E").css("color", "black");
        $("#resultado").text("");
        $("#r").text("");
    });


    $("#limpar2").click(function(){
        $("#a1").prop("checked", false);
        $("#b1").prop("checked", false);
        $("#c1").prop("checked", false);
        $("#d1").prop("checked", false);
        $("#e1").prop("checked", false);
        $(".A1").css("color", "black");
        $(".B1").css("color", "black");
        $(".C1").css("color", "black");
        $(".D1").css("color", "black");
        $(".E1").css("color", "black");
        $("#resultado2").text("");
        $("#r2").text("");
    });

});