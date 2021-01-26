angular.module("classAttendance").controller("usersController", usersController);

function usersController($http){
  const vm = this;
  vm.isSignedIn = false;
}