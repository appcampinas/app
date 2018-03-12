var app = angular.module('app',['ngRoute','ui.utils.masks']);
app.config(function($routeProvider, $locationProvider,$httpProvider)
{    
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    $routeProvider
    .when(dir+'?modulo='+nomeModulo, {
        controller     : nomeModulo,//o ng-controller tem que ser igual o nome do modulo da url
    })
    
    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise ({ redirectTo: '/' });
});