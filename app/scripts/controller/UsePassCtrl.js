'use strict';

/**
 * @ngdoc function
 * @name quoinApp.controller:UsePassCtrl
 * @description
 * # UsePassCtrl
 * 
 */
angular.module('quoinApp')
  .controller('UsePassCtrl', function ($scope, passFactory) {

  	//Store Selection local for now 
    //note : we may have price may be seperate later on
  	$scope.modeOfTransport = [{"id":0,"name":"Bus", "price" : 3.50 },{"id":1,"name":"Subway", "price" : 5.50 },{"id":2,"name":"Commuter Rail", "price" : 4.75 }];
  	
  	//Pass info would be pulled in upon entry - for now is is kept hardcoded in a factory 
  	$scope.user = passFactory.myPass();

    $scope.showBal = false;

    $scope.studentDiscount = passFactory.studentDiscount();
    $scope.elderDiscount = passFactory.elderlyDiscount();
    $scope.workerDiscount = passFactory.workerDiscount();
    $scope.weekendDiscount = passFactory.weekendDiscount();
    $scope.weekendCheck = passFactory.checkWeekend();

    $scope.discount = ($scope.user.isElderly && $scope.elderDiscount)|| ($scope.user.isStudent && $scope.studentDiscount)|| ($scope.user.isWorker && $scope.workerDiscount);

  	$scope.checkBalance = function(){
      if($scope.user.balance){
        $scope.showBal = true;
      }else{
        //no balance in object
      }

  	}

  });
