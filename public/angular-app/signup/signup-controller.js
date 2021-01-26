angular.module("classAttendance").controller("signupController", signupController);

function signupController($http){
  const vm = this;
  vm.isSignedIn = false;
}