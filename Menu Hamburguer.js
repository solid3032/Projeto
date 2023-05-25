function abreMenu()  /*Alterar a altura e a cor ao abrir*/
{
  document.getElementById("MenuMobile").style.width  = "60%";

  document.getElementById("botao-hamburg").style.color = "rgb(255,255,255)";
}

function fechaMenu()  /*Alterar a altura e a cor ao fechar*/
{
  document.getElementById("MenuMobile").style.width = "0%";
  document.getElementById("botao-hamburg").style.color = "rgb(0,0,0)";
  
}