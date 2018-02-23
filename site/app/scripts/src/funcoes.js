$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {        
        e.preventDefault();
        var target = $(this).attr("href");	
        
        if(target.indexOf('#') >= 0){
            $target = $(target);
            
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1000, 'swing', function () {		
                window.location.hash = target;
            }); 
            $('#navbar').removeClass('in');    
        }else{
            window.location.href = target;
        }
    });
});

function closeSmartBanner() {
  $("#app_smartbanner").hide();
  if(localStorage.getItem("avisoCartao") == null) {
    var valor = 0;
  }
  else {
    var valor = localStorage.getItem("avisoCartao");
  }  
  
  var contador = parseInt(valor)+1;

  localStorage.setItem("avisoCartao", contador);  
}

function openModal(title,body){
	$("#myModal .modal-title").html(title);
	$("#myModal .modal-body").html(body);
	$("#btnModal").click();
}




function diaSemana(){
    var hoje=new Date();
    var dia= hoje.getDay();
    return dia;//0 é domingo, 1 é segunda...
}

function horaAtual(){
    // Obtém a data/hora atual
    var data = new Date();
    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes+1) + '/' + ano4;
    if (min < 10) {
        min = "0" + min;
    }

    if (hora < 10) {
        hora = "0" + hora;
    }
    
    var str_hora = hora + ':' + min;

    // Mostra o resultado
    return str_hora;
}

function alert(titulo,body){
    if(!body){
      body = titulo;  
      titulo = 'Compre Aqui';
    } 
   return alertify.alert(titulo,body).set('modal', true); 
}
function alertCompra(){
   return alertify.message('Produto adicionado ao carrinho!').dismissOthers();    
}