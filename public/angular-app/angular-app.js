angular.module("classAttendance", ["ngRoute"]).config(config);

function config($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "angular-app/home/home.html",
    controller: "homeController",
    controllerAs: "vm"
  })
  .when("/signin", {
    templateUrl: "angular-app/signin/signin.html",
    controller: "signinController",
    controllerAs: "vm"
  })
  .when("/signup", {
    templateUrl: "angular-app/signup/signup.html",
    controller: "signupController",
    controllerAs: "vm"
  })
  .when("/profile", {
    templateUrl: "angular-app/profile/profile.html",
    controller: "profileController",
    controllerAs: "vm"
  })
  .when("/users", {
    templateUrl: "angular-app/users/users.html",
    controller: "usersController",
    controllerAs: "vm"
  })
  .when("/courses", {
    templateUrl: "angular-app/courses/courses.html",
    controller: "coursesController",
    controllerAs: "vm"
  })
  .otherwise({
    redirectTo: "/"
  })
}