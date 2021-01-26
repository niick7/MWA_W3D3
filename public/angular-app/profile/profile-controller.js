angular.module("classAttendance").controller("profileController", profileController);

function profileController($http){
  const vm = this;
  vm.isSignedIn = true;
}