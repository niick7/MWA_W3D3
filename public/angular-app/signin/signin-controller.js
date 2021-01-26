angular.module("classAttendance").controller("signinController", signinController);

function signinController($http){
  const vm = this;
  vm.isSignedIn = false;
}