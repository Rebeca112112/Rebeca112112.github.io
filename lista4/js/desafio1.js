var elemento = document.getElementById('botao');
elemento.onclick=function clicar()
{
    var quadrado= document.createElement('div');  // criando uma div //
    var text=document.createTextNode(' '); // acrescentando um texto vazio a ela //
    quadrado.appendChild(text); // criando um filho //

    var corpo= document.querySelector('body'); // pegando o body //
    quadrado.style.height='100px';
    quadrado.style.width='100px';
    quadrado.style.margin = '10px';
    quadrado.style.backgroundColor='#FFCC99';
    quadrado.style.float = 'left';
    quadrado.style.border = '5px solid #800000';
    corpo.appendChild(quadrado);
}
