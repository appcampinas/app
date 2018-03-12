app.controller('MainCtrl', function($scope, $http) {


  $scope.enviarCadastro = function (){

      console.log($scope.cadastro);
      if(document.forms[0].$valid){
        console.log('ok');
      }else{
        console.log('myBad');
      }

  }

  $scope.enviarEmail = function(){

    console.log('enviar E-mail');

  }

  $scope.carregaCep = function(){


    $http.get('https://viacep.com.br/ws/'+$scope.cadastro.cep+'/json/').then(function(result){
        console.log(result.data);

        $scope.cadastro.cep = result.data.cep;
        $scope.cadastro.bairro = result.data.bairro;
        $scope.cadastro.cidade = result.data.localidade;
        $scope.cadastro.logradouro = result.data.logradouro;
        $scope.cadastro.uf = result.data.uf;
    });


  }

});
