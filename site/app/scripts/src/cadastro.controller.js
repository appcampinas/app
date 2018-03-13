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


    $scope.enviarEmail.funcao = 'emailContato';

    $http.post('www.teste.com.br/ws/',$.param($scope.enviarEmail)).then(function(result){
          console.log(result);
    });

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
