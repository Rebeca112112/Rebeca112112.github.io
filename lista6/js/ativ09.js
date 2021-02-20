$(function(){
    
    $("#texto").keyup(function(){

        // para visualizar a senha //
        $("#mostrar").mousedown(function() {
        $("#texto").attr("type", "text");
        });

        $("#mostrar").mouseup(function() {
        $("#texto").attr("type", "password");
        });

        // para ver se eh fraca, media ou forte //

        const letras_minusculas = /[a-z]/;
        const letras_maiusculas = /[A-Z]/;
        const carac_especiais = /[@#!$%&*()-+.,=]/;
        const numeros = /[1-9]/;
        
    
        if(letras_minusculas.test($("#texto").val()) || letras_maiusculas.test($("#texto").val()))
        {
            $("#resultado").text("Senha fraca").css({"color":"red","font-family":"impact","font-size": "25px"});
        }
        if(letras_minusculas.test($("#texto").val()) && letras_maiusculas.test($("#texto").val()) && numeros.test($("#texto").val()))
        {
            $("#resultado").html("Senha média").css({"color":"orange","font-family":"impact","font-size": "25px"});
        }
        if(letras_minusculas.test($("#texto").val()) && letras_maiusculas.test($("#texto").val()) && numeros.test($("#texto").val()) && carac_especiais.test($("#texto").val()))
        {
            $("#resultado").html("Senha forte").css({"color":"green","font-family":"impact","font-size": "25px"});
        }
        if($("#texto").val() == '')
        {
            $("#resultado").html("");
        }
    })

   
});