describe('passCont', function() {
  beforeEach(module('myApp'));
   var $controller;
 
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  describe('testing', function() {
     
    it('IShi', function() {
      var $scope = {};
       $controller('myController', {$scope: $scope});
      expect($scope.text).toEqual('hi');
    });
    it('addTest',function(){

      var $scope = {};
      
     var modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
      var controller = $controller('popupController', { 

        $scope: $scope,
        $uibModalInstance: modalInstance
       }); 
       
       $scope.tid="100";
       $scope.tname="abc";
       $scope.add();
       expect($scope.datas).toContain({ tid: '100', tname: 'abc' }); 
    })
    it('RemoveTest', function() {
      var $scope = {};
       $controller('myController', {$scope: $scope});
       $scope.tid="100";
       $scope.tname="abc";
       $scope.remove();
      expect($scope.datas).not.toContain({ tid: '100', tname: 'abc' }); 
    });
  });

});  