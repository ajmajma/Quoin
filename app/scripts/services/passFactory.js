'use strict';

/**
 * @ngdoc service
 * @name quoinApp.passFactory
 * @description
 * # passFactory
 * Keep our discounts and pass information here for passing
 * It may make sense to break these up into seperate factories/services in the future but for now I will keep them together
 */
angular.module('quoinApp')
  .factory('passFactory', function () {

    //hardcoding the discounts for now - assuming we will grab them from an $http in the future
    var weekend = 0.75;
    var student = 0.5;
    var worker = 0;
    var elderly = 0.5;

    //IF we needed montly costs seperate for any reason we could so something like this (for now they are not)
    //monly costs array, type = type ID of tranportation type
    var monthly = [{'typeId' : 0, 'cost' : 5.50}, {'typeId' : 1, 'cost' : 3.25}, {'typeId' : 2, 'cost' : 4.50}];

    //current users pass
    //type is shared with passTypes 'id' for relationship
    var pass = {'id' : 543, 'type' : 1, 'isElderly' : false, 'isStudent' : false, 'isWorker' : false, 'validBus' : true, 'validSubway' : true, 'validCommuter' : false };
    //if it were prepaid it would have balance key like so (and type would be 1)
    //var pass = {'id' : 543, 'type' : 1, 'isElderly' : false, 'isStudent' : false, 'isWorker' : false,  'validBus' : true, 'validSubway' : true, 'validCommuter' : false , 'balance' : 10.75};

    //check if weekend so we can call if (passFactory.checkWeekend())
    var currentDate = new Date();
    var day = currentDate.getDay();
    var isWeekend = (day == 6) || (day == 0); 

    // Public API
    return {
      weekendDiscount: function () {
        return weekend;
      },
       studentDiscount: function () {
        return student;
      },
       workerDiscount: function () {
        return worker;
      },
       elderlyDiscount: function () {
        return elderly;
      },
      myPass: function() {
        return pass;
      },
      monlthyCosts: function() {
        return monthly;
      },
      checkWeekend: function(){
        return isWeekend;
      }
    };
  });
