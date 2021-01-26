angular.module("classAttendance").controller("homeController", homeController);

function homeController($http){
  const vm = this;
  vm.isSignedIn = true;
}