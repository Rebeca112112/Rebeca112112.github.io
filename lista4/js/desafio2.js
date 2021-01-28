function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

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
    quadrado.style.backgroundColor='#b3ffb3';
    quadrado.style.float = 'left';
    quadrado.style.border = '5px solid #2E8B57';
    quadrado.onmouseover = function coresaleatorias()
    {
     quadrado.style.backgroundColor= getRandomColor();
    }
    corpo.appendChild(quadrado);
}

