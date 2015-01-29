'use strict';

/**
 * @ngdoc filter
 * @name quoinApp.filter:discount
 * @function
 * @description
 * # discount
 * Filter discounts
 */
angular.module('quoinApp')
  .filter('discount', function(){
  return function(input, discount){
     	if (input) return  input*(1-discount);
    };
  });
