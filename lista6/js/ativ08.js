$(function(){

    $("#botaooo").click(function(){
        let data1 = $("#data1").val(); 
        let data2 = $("#data2").val(); 

        let ano1 = data1.substr(0,4);
        let mes1 = data1.substr(5,2);
        let dia1 = data1.substr(8,2);

        let ano2 = data2.substr(0,4);
        let mes2 = data2.substr(5,2);
        let dia2 = data2.substr(8,2);

        let data_qualquer1 = new Date(ano1,mes1 - 1,dia1);
        let data_qualquer2 = new Date(ano2,mes2 - 1,dia2);
        
        let d1 = data_qualquer1.getTime();
        let d2 = data_qualquer2.getTime(); 

        const calculo_data = Math.abs(d1- d2);
        let calculo_semana = (1000 * 60 * 60 * 24 * 7);
        const days = Math.ceil(calculo_data/calculo_semana);
        $("#resultado").text("Passaram(ou) " + days + " semana(s) entre essas duas datas.");
    })

    $("#limpar").click(function(){
        $("#data1").val("");
        $("#data2").val("");
        $("#resultado").text("");
    })

});

