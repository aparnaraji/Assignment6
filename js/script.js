var app=angular.module('myApp', ['ui.bootstrap','pascalprecht.translate']);
// code inside config
app.config(function ($translateProvider, $translatePartialLoaderProvider) {
  $translateProvider.useLoader('$translatePartialLoader', {
  urlTemplate: '/i18n/{part}/{lang}.json'
});
});
// functions of controller
var datas_array;
app.controller('myController',['$scope','$uibModal','$translatePartialLoader','$translate',function($scope,$uibModal,$translatePartialLoader,$translate){
 $scope.lang_change='en';
 $scope.text="hi";
 $scope.datas=[];
 datas_array=$scope.datas;
 $translatePartialLoader.addPart('home');
 $translate.refresh();
 $translate.use($scope.lang_change);
 $scope.select_lang=function(){
   $translate.use($scope.lang_change);
 }
 // function to display popup for adding datas
 $scope.popUp=function(){
  $scope.tid="";
  $scope.tname="";
  $translatePartialLoader.addPart('add');
  $translate.refresh();
  $translate.use($scope.lang_change);
  var modalInstance = $uibModal.open({
   templateUrl: 'add.html',
   controller:'popupController',
   resolve: {
    datas_array: function () {
     return $scope.datas;
    }
   }
  });
 }
 // function to remove table data
 $scope.remove=function(index){
  $scope.datas.splice(index,1);
 }
}]);
// code inside popupController
app.controller('popupController',['$scope','$uibModalInstance',function($scope,$uibModalInstance){
 // function to add data to table
 $scope.datas=datas_array;
 $scope.add=function(){
  var flag=0;
  if($scope.tid==""||$scope.tname==""||$scope.tid==undefined||$scope.tname==undefined){
   alert("Fill all input fields");
  } 
  else{
   angular.forEach($scope.datas,function(value,key){
    if($scope.tid==value.tid){
     flag=1;
    }
   });
   if(flag==1){
    alert("Task Id already present!!!");
    $scope.tid="";
    $scope.tname="";
   }else{
    $scope.datas.push({tid:$scope.tid,tname:$scope.tname});
    $uibModalInstance.dismiss('cancel');
   }
  }
  $scope.tid="";
  $scope.tname="";
  
 }
 $scope.cancel=function(){
  $scope.tid="";
  $scope.tname="";
  $uibModalInstance.dismiss('cancel');
  
 }
}]);