//var app = angular.module('app',['ngRoute','ui.utils.masks','idf.br-filters']);
var app = angular.module('app', ['ngRoute', 'ui.utils.masks','idf.br-filters', 'ui.select', 'ngSanitize']);
//pega o pathname para definir as rotas independente de qual dominio for acessado
var dir = window.location.pathname;
//pega o modulo digitado na URL
//var nomeModulo = window.location.href.split("?")[1].split("modulo=")[1];
//console.log(dir+'?modulo='+nomeModulo);
app.config(function($routeProvider, $locationProvider,$httpProvider)
{    
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    //$httpProvider.defaults.headers.post['Authorization'] = 'Basic 4067392c00f6d47b';   
    if(localStorage.getItem('token')){
        $httpProvider.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('token')).token;//recupera a autorizacao do local storage
    }
    $routeProvider
        .when("/home", { //index.html#!/publicidade
            templateUrl: "pesquisarCidade.html?v=3",
            controller: "pesquisarCtrl" //o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/site/:cidade", { //index.html?v=3#!/publicidade
            templateUrl: "home.html?v=4",
            controller: "homeCtrl" //o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/pagamento/:codLoja", { //index.html#!/pagamento
            templateUrl: "pagamento.html",
            controller: "pagamentoCtrl" //o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/endereco/:codLoja", { //index.html#!/publicidade
            templateUrl : "endereco.html",
            controller     : "enderecoCtrl"//o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/produtos/:codLoja", { //index.html#!/publicidade
            templateUrl : "produtos.html",
            controller     : "produtosCtrl"//o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/detalhe/produto/:loja/:cod", { //index.html#!/publicidade
            templateUrl : "produto_detalhe.html",
            controller     : "detalheProdutoCtrl"//o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/pedidos", { //index.html#!/publicidade
            templateUrl : "meus_pedidos.html",
            controller     : "pedidosCtrl"//o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/detalhe/pedido/:cod_transacao", { //index.html#!/publicidade
            templateUrl : "meus_pedidos_detalhe.html",
            controller     : "detalhePedidosCtrl"//o ng-controller tem que ser igual o nome do modulo da url
        })
        .when("/estabelecimento", { //index.html#!/estabelecimento/cadastro
        templateUrl : "cadastroEstabelecimento.html",
        controller  : "cadastroEstabelecimentoCtrl"//o ng-controller tem que ser igual o nome do modulo da url
    })
        .when("/faq", { //index.html#!/estabelecimento/cadastro
        templateUrl : "faq.html"
    })
        

    // caso não seja nenhum desses, redirecione para a rota '/'
      .otherwise ({ redirectTo: '/home' });
});