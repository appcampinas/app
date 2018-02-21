
//definindo se chama local ou em producao
if (window.location.hostname == "w.iptufacil.com.br") {
    var ws = "http://www.iptufacil.com.br/ws";
}
else if(window.location.hostname == "www.ddtotal.com.br" || window.location.hostname == "www.cartaoddtotal.com.br" || window.location.hostname == "w.meucartaocidadao.com.br" || window.location.hostname == "www.meucartaocidadao.com.br" ){
    var ws = "https://www.meucartaocidadao.com.br/ws";
} else if (window.location.hostname == "localhost") {
   var ws = "http://localhost:8025/ws";                 
} else {
    var ws = "http://" + window.location.hostname + ":8025/ws";
}

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */
app.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

/*--- *** verifica sessão ****/
app.service('configService', function($http) {
        this.getLogin = function(){
            
            if(localStorage.getItem('session_id') == null){
                return {nome:"MINHAS", nome2:"COMPRAS"};
            }else{
                return JSON.parse(localStorage.getItem('session_id'));
            }
        }

        this.logout = function(){
            localStorage.removeItem("session_id");
            localStorage.removeItem("token");
        }

});

app.controller('MainCtrl', function($scope,configService)
{
    $scope.configService = configService;
    $scope.teste = "asdfasds";
    //includes
    $scope.pgLogin  = "pages/ec/login.html";
    $scope.pgFooter = "pages/ec/footer.html";
    

    
//    configService.verificaLogin();

    //console.log("controller MainCtrl")
});
  
window.onload = initPage;
function initPage() {
    $("#myModalPublicidade").modal(); //abre modal escolha cidade, sem botoes de close

    $('#carouselExampleControls1 .carousel').carousel();
    window.setTimeout("$('#carouselExampleControls1 .carousel-control-next').click()", 5000);

    $('#carouselTam1 .carousel').carousel();
    window.setTimeout("$('#carouselTam1 .carousel-control-next').click()", 5000);

    $('#carouselExampleControls4 .carousel').carousel();
    window.setTimeout("$('#carouselExampleControls4 .carousel-control-next').click()", 5000);

    $('#carouselExampleControls3 .carousel').carousel();
    window.setTimeout("$('#carouselExampleControls3 .carousel-control-next').click()", 5000);

    $('#carouselTam1').on('slide.bs.carousel', function() {
        $("#carouselTam1 .maisDetalhes").addClass("esconder"); //esconde
        //mostra a imagem
        $("#carouselTam1 .img-fluid").removeClass("esconder");
        $("#carouselTam1 .img-fluid").addClass("d-block");
        $("#carouselTam1 .img-fluid").removeClass("absolute");
        //esconde os detalhes
        $("#carouselTam1 .maisDetalhes").addClass("esconder");
    })
  }
