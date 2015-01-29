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

    $scope.studentDiscount = passFactory.studentDiscount();
    $scope.elderDiscount = passFactory.elderlyDiscount();
    $scope.workerDiscount = passFactory.workerDiscount();
    $scope.weekendDiscount = passFactory.weekendDiscount();
    $scope.weekendCheck = passFactory.checkWeekend();

    //watch for changes to re-apply the person based discount
     $scope.$watch('user', function() {
      $scope.discount = ($scope.user.isElderly && $scope.elderDiscount) || ($scope.user.isStudent && $scope.studentDiscount) || ($scope.user.isWorker && $scope.workerDiscount);
    });

  	$scope.checkBalance = function(){
     //we will use this function to hide/show balance upon reuqest, the UI for thi has not yet been determined

  	}

    $scope.usePassNow = function(){
      //validate pass can be used in this instance (sprint 2)
      if($scope.user.type === 0 ){
        //add verification to make sure monthly pass is good for this type of transportation


      }else if($scope.user.type === 1 ){
        //remove amount from card (including discounts)

      }
    }

    //does not toggle between, just swaps user once.
    $scope.swapUserTest = function(){
      $scope.user = {'id' : 543, 'type' : 1, 'isElderly' : false , 'isStudent' : true , 'isWorker' : false,  'validBus' : true, 'validSubway' : true, 'validCommuter' : false , 'balance' : 10.75};
    }
  });
