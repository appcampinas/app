app.controller('loginCtrl', function($scope,configService,$http){
    // mensagens de validação 
    var divMsn = $(".divHeader");
    var msn = [];
    msn[0] = '<span style="color:gray"><strong>Faça o Login com CPF ou n° Cartão IPTU.</strong></span>';
    msn[1] = '<span style="color:#ff6666"><strong>Preencha todos os campos!</strong></span>';
    msn[2] = '<span style="color:#ff6666"><strong>Login ou senha inválidos!</strong></span>';
    msn[3] = '<span style="color:gray"><strong> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Observação</strong></span>';
    msn[4] = '<span style="color:#ff6666"><strong>Preencha o campo de observação!</strong></span>';        
    divMsn.html(msn[0]);

    // FORMULÁRIO LOGIN
    $scope.validaForm = function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        if(user ==="" || pass === ""){    
            divMsn.html(msn[1]);
        }else{
            $http.post(ws+"/ec/public/login", $.param({                                       
                'usuario':user,
                'senha'  : pass                                       
            })).then(function(response) { 
                if(response.data[0].nc === false || response.data[0].nc === undefined ){
                    divMsn.html(msn[2]);
                }else{                
                    $("#btnLoginModal").click();
                    localStorage.setItem('session_id',JSON.stringify({nome:response.data[0].nome,email:response.data[0].email,nc:response.data[0].nc}));
                    localStorage.setItem('token',JSON.stringify({token:response.data[0].token}));
                    $location.url('pagamento/' + codLoja[2]);
                }                                    
            });
        }              
    }

   /* $scope.getSession = function(){
        
            $http.get(ws+"/ec/public/session").then(function(response) { 
                console.log(response.data);
                                                 
            });          
    }*/
})
