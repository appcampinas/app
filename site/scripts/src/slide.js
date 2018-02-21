var tempo;
var slideAtivo = 0;//comeco do vetor
var slides   = [1,2]; //coloca os slides ordenados
var slidesID = [1,2];//id que esta no html banner.php
var tempoTransicao = 12000;
var pauseSlide = 0;
function Rotacionar() {
  if(pauseSlide == 0){
    clearTimeout(tempo);//zera o tempo se clicar em algum botao

    $(".slideDD").hide();//efeito fadeOut

    //faz a transição
    $("#slide"+slidesID[slideAtivo]).show("1500");  //mostra slide
    $("#menu-nav-slide li").removeClass("slide-active");  //tira o botao ativo 
    $("#bt"+slides[slideAtivo]).addClass("slide-active"); //mostra o botao ativo do atual
    
    //se chegou ao final do slide começa novamente do primeiro
    if(slideAtivo == slides.length-1){
      slideAtivo = 0;
    }else{
      slideAtivo++;
    }
    tempo = setTimeout("Rotacionar()", tempoTransicao);//rotaciona para o proximo slide
  }
}

$(document).ready(function() {
  
  Rotacionar(slideAtivo);  

  $("#bt1").click(function(){
    slideAtivo = slides.indexOf(1);
    pauseSlide = 0;
    Rotacionar();
  });

  $("#bt2").click(function(){
    slideAtivo = slides.indexOf(2);
    pauseSlide = 0;
    Rotacionar();
  });
});


if(document.getElementById("home") != null){
window.addEventListener('load', function(){
  var home = document.getElementById("home");   

  var inicialX,
      inicialPageY,
      startTime,
      allowedTime = 300, // maximum time allowed to travel that distance
      threshold = 150, //required min distance traveled to be considered swipe
      restraint = 100, // maximum distance allowed at the same time in perpendicular direction
      elapsedTime,
      swipedir

      home.addEventListener('touchstart', function(e){
        var toqueobj = e.changedTouches[0];

        inicialX = toqueobj.pageX;
        inicialPageY = toqueobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface   
      }, false)

 /* home.addEventListener('touchmove', function(e){
      var toqueobj = e.changedTouches[0] // reference first touch point for this event
      var pageY = toqueobj.pageY - inicialPageY; // calculate dist traveled by touch point
            
      $(window).scrollTop($(window).scrollTop()-(pageY));    
  }, false)
  */
  home.addEventListener('touchend', function(e){
    var toqueobj = e.changedTouches[0];
    var distX = toqueobj.pageX - inicialX;

    var distY = toqueobj.pageY - inicialPageY;
    elapsedTime = new Date().getTime() - startTime; // get time elapsed
    
    if (elapsedTime <= allowedTime){ // first condition for awipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
        if (distX < 0){
          Rotacionar();
        }else{
          slideAtivo -= 2;

          if(slides.length == slideAtivo){
            slideAtivo--;
          }

          if(slideAtivo < 0 || slideAtivo == -2){            
            slideAtivo = slides.length+slideAtivo;//volta no primeiro, pois nao existe menor que zero
          }
          Rotacionar();
        }
      }
    }   
  })
},false)
}


