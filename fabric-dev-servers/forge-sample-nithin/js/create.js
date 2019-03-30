//var testApp = angular.module('testApp', []);

//testApp.controller('testController' , function ($scope, $http) {
    //$scope.home = "This is the homepage";
    

    //alert($scope.username);
    
module.exports.init = function () {
       var data={
  "$class": "org.forgesample.mynetwork.Owner",
  "ownerId": "121523",
  "firstName": "abc",
  "lastName": "xcv",
  "email": "hsdfhs@email.com"
}
        $http.post("http://localhost:3000/api/org.forgesample.mynetwork.Owner", data)
            .then(function successCallback(response){
                console.log("Successfully POST-ed data");
            }, function errorCallback(response){
                console.log("POST-ing of data failed");
            });


    };
