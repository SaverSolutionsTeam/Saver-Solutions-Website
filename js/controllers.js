angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

    .controller('loginCtrl', function($scope, $state) {
    
    $scope.user = {
      email: "",
      password: "",
    };
    $scope.login = function(form) {
//      if (form.$valid) {
//        /*Do something...*/
//          $state.go('app.profile');
//      }
    };
    
    $scope.register = function(){
        
            $state.go('register');
        
        }
})

.controller('registerCtrl', function($scope, $state, registerService) {
    
      	$scope.register = function(userData){
    
        // default post header
//        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//            
            var ck_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
		var ck_password= /^[A-Za-z0-9!@#$%^&*()_]{7,10}$/;
		
		// counting how many values are not empty in an object
		var count = 0;
		for(var value in userData){
			if(userData[value] !=""){
				++count;
			}
		}
		
		if(!userData || count < 6){	
			$scope.message="Fill in the entire form";	
		}else if(!ck_email.test(userData.email)){
			$scope.message="invalid email";	
		}else if(!ck_password.test(userData.password)){
			$scope.message="Password must have one uppercase, any number and a special character with a minimum of 7 characters.";
		}else if(userData.password != userData.confpass){
			$scope.message="Passwords do not match";
        }else {
			  $scope.message="";
        }
			  
			  registerService.register(userData)
			  .then(function(data){
					console.log(data);
					$scope.message=data.message;
					
					if(data.success){
						$state.go('profile');
					}
			  }, function(error){
//				  	console.log('error' ,error);
				  	$scope.message="failed to register, please try again";
			  })		  
			  
			  
		}
		 
})

.controller('profileCtrl', function($scope, $ionicPopover) {

    function DropDown(el) {
        this.dd = el;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                    event.stopPropagation();
            });	
        }                                                                                                          }

    $(function() {

        var dd = new DropDown( $('#dd3') );

            $(document).click(function() {
                // all dropdowns
                $('.wrapper-dropdown-3').removeClass('active');
            });

    });
    
    $ionicPopover.fromTemplateUrl('templates/profile.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'android';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }

});
