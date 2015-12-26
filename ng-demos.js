/**
 * Created by curos on 26/12/15.
 */
var zoomchat = angular.module("myApp", []);

zoomchat.controller('myCtrl', function($scope, $http) {

    $scope.title = "default title";

    $scope.updateTitle = function() {
        $scope.title = $("#title-input").val();
    };

    $scope.callApi = function () {
        $http.get('/data.json').then(function(response) {
            $scope.title = response.data.question;
        });
    };

    $scope.$watch("title", function(neww, old) {
        console.log("Title changed from '"+old+"' to '"+neww+"'");
    });

    $scope.anotherTitle = "default another title";

    $scope.$watch("anotherTitle", function(neww, old) {
        console.log("anotherTitle changed from '"+old+"' to '"+neww+"'");
    });
});