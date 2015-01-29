describe('Unit: MainCtrl', function() {
  // Load the module with MainCtrl
  beforeEach(module('quoinApp'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('MainCtrl', {
      $scope: scope
    });

  }));

  it('expect $scope.monthlyCosts to fetch from factory', 
    function() {
      expect(scope.monthlyCosts).toEqual([{'typeId' : 0, 'cost' : 5.50}, {'typeId' : 1, 'cost' : 3.25}, {'typeId' : 2, 'cost' : 4.50}]);
  });

  it('should create $scope.myPass when type of pass is selected and purchasePass is run', 
    function() {
      expect(scope.myPass).toBeUndefined();
      //choose select 1
      scope.typeSelect = {"id":0,"name":"Monthly"};
      scope.purchasePass();
      expect(scope.myPass).toEqual({'type' : 0, 'isElderly' : false, 'isStudent' : false, 'isWorker' : false, 'validBus' : true, 'validSubway' : true, 'validCommuter' : false });
   });

  //alterative test for myPass
  it('should create $scope.myPass when type of pass is selected and purchasePass is run', 
    function() {
      expect(scope.myPass).toBeUndefined();
      //choose select  2
      scope.typeSelect = {"id":1,"name":"Prepaid"};
      scope.unlimitedAmount.amount = 5.50;
      scope.purchasePass();
      expect(scope.myPass).toEqual({'type' : 1, 'isElderly' : false, 'isStudent' : false, 'isWorker' : false, 'validBus' : true, 'validSubway' : true, 'validCommuter' : false, 'balance' : parseFloat(5.50).toFixed(2) });
   });
})