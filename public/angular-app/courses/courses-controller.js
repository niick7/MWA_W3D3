angular.module("classAttendance").controller("coursesController", coursesController);

function coursesController($http){
  const vm = this;
  vm.isSignedIn = false;
}