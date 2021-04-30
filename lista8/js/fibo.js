$(function(){
    $("#execut").click(function(){

        let a = $("#numero").val();
        if(a == '')
        {
            alert("Digite um valor válido, por favor.");
        }

        else{

            let numero = a.split(",");
            let tamanho = a.length; // imagine o j //
            if(numero[tamanho-1] == "")
            {
                numero.pop(); // remove o último elemento do array e retorna esse valor //
            }
            $("#resultado").html("Até " + a + " números, a sequência de Fibonacci é: " +  fibo(a) + ".");
        }
        
    })

    function fibo (numero) 
    {
        let vetor = [];
        vetor.push(0);
        let a = 0;
        let b = 1;
        let aux = 1;
        for (let i=0; i<numero; i++) 
        {
            // add valores ao array //
            vetor.push(aux);
            aux = a + b;
            a = b;
            b = aux;
        }
        // transformando em string novamente //
        return vetor.join(",");
    }

$("#limpar").click(function(){
        $("#resultado").text("");
        $("#numero").val("");
    })
})