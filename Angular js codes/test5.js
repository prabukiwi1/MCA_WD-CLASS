var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http)
{
    $http.get('url')
    .success(function(response)
    {
        $scope.names=response.records;
    });
});