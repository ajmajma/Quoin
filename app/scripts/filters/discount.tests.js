describe("Unit: discount", function() {

    var $filter;

    beforeEach(function () {
     module('quoinApp');
    });

    //get filter provider
    beforeEach( inject(function (_$filter_) { 
     $filter = _$filter_;
    }));

    it('should filter the parameters passed', function(){
      expect($filter('discount')(1, 0.5)).toEqual(0.5);
  });
  
});