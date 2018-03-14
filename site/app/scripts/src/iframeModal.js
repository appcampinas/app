function resizeIframe() {
    if(document.getElementById("iframeModal")){
        obj = document.getElementById("iframeModal");
    var tam = obj.scrollHeight;

        if(tam <= $(window).height()){
            tam = $(window).height()-50;
                obj.style.height = tam + 'px';
                $(".embed-responsive-16by9").css("height",tam);
        }
    }
}

$(document).ready(function(){
    $("body").click(function(){
        resizeIframe();
    })

    //quando clicar na li do menu, fecha o menu para nao ficar aberto sobre a pagina
    $("#bs-example-navbar-collapse-1").click(function(){
        $(".navbar-toggle").click()
    })

});

function openModalIframe(title,localPagina,corBG){
  $("#myModal .modal-title").html(title);
  $("#myModal .modal-header").css("background",corBG);
  $("#myModal .modal-footer").css("background",corBG);
  $("#myModal .modal-body").css("padding","0px");
  $("#myModal .modal-body").html("<div class='embed-responsive embed-responsive-16by9'><iframe id='iframeModal' onload='resizeIframe()' rows='50' class='embed-responsive-item' src='"+localPagina+"'></iframe></div>");
  //$("#myModal").modal();
  $('#btnModal').click();
}
