

ionicApp.factory('loginService', function ($http, $q) {


   return {
       loginUser: function(userData) {
           // the $http API is based on the deferred/promise APIs exposed by the $q service
           // so it returns a promise for us by default
           return $http({
                           url: 'https://goalachiever-devroids.c9.io/api/login',
                            method: "POST",
                            data: userData,
                            headers: {'Content-Type': 'application/json'}
                       })
                        .then(function(response) {
                          
                           if (typeof response.data === 'object') {
                                return response.data;
                           } else {
                               // invalid response
                               console.log("invalid response (response not an object)")
                                return $q.reject(response.data);
                       }

                   }, function(response) {
                       // something went wrong
                       return $q.reject(response.data);
           });
       }
   };
});

ionicApp.factory('registerService', function ($http, $q) {


   return {
       register: function(userData) {
           // the $http API is based on the deferred/promise APIs exposed by the $q service
           // so it returns a promise for us by default
           console.log(userData);
           return $http({
                           url: 'https://saversolutions-mokhethi.c9users.io/dbReg.php',
                            method: "POST",
                            data: 
               { 
                                'firstName': userData.fname,
                                'lastName': userData.lname,
                                'cellNum': userData.cellnum,
                                'email': userData.email,
                                'password': userData.password,
                                'confPass': userData.confpass
                },
                            headers: {'Content-Type':  'application/x-www-form-urlencoded'}
                       })
                        .then(function(response) {
	                        
                           if (typeof response.data === 'object') {
                               console.log("Valid response");
                                return response.data;
                           } else {
                               // invalid response
                               console.log("invalid response (response not an object)")
                                return $q.reject(response.data);
                       }

                   }, function(response) {
                       // something went wrong
                       return $q.reject(response.data);
           });
       }
   };
});

