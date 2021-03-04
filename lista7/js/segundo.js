 $(function(){
 $("#botao3").click(function(){
        if($("#a2").prop("checked") == true)
        {
            $("#resultado3").text("Resposta incorreta:")
            $("#r3").append($("<p>").text("A resposta correta é a letra C, escapa mais facilmente do refrigerante quente, pois quando a temperatura aumenta, aumenta-se também a pressão máxima de vapor (pressão para que se haja equilíbrio com o líquido)."));
            $(".A2").css("color", "red");
            $(".B2").css("color", "red");
            $(".C2").css("color", "green");
            $(".D2").css("color", "red");
        }
        if($("#b2").prop("checked") == true)
        {
            $("#resultado3").text("Resposta incorreta: ")
            $("#r3").append($("<p>").text("A resposta correta é a letra C, escapa mais facilmente do refrigerante quente, pois quando a temperatura aumenta, aumenta-se também a pressão máxima de vapor (pressão para que se haja equilíbrio com o líquido)."));
            $(".A2").css("color", "red");
            $(".B2").css("color", "red");
            $(".C2").css("color", "green");
            $(".D2").css("color", "red");
        }
        if($("#c2").prop("checked") == true)
        {
            $("#resultado3").text("Resposta correta: Parabéns!! ")
            $("#r3").append($("<p>").text("O gás escapa mais facilmente do refrigerante quente, pois quando a temperatura aumenta, aumenta-se também a pressão máxima de vapor (pressão para que se haja equilíbrio com o líquido)."));
            $(".A2").css("color", "red");
            $(".B2").css("color", "red");
            $(".C2").css("color", "green");
            $(".D2").css("color", "red");
        }
        if($("#d2").prop("checked") == true)
        {
            $("#resultado3").text("Resposta incorreta:")
            $("#r3").append($("<p>").text("A resposta correta é a letra C, escapa mais facilmente do refrigerante quente, pois quando a temperatura aumenta, aumenta-se também a pressão máxima de vapor (pressão para que se haja equilíbrio com o líquido)."));
            $(".A2").css("color", "red");
            $(".B2").css("color", "red");
            $(".C2").css("color", "green");
            $(".D2").css("color", "red");
        }
    });


 $("#limpar3").click(function(){
        $("#a2").prop("checked", false);
        $("#b2").prop("checked", false);
        $("#c2").prop("checked", false);
        $("#d2").prop("checked", false);
        $(".A2").css("color", "black");
        $(".B2").css("color", "black");
        $(".C2").css("color", "black");
        $(".D2").css("color", "black");
        $("#resultado3").text("");
        $("#r3").text("");
    });
});