app
.config(
	['$routeProvider','$stateProvider','$urlRouterProvider',
		function($routeProvider,$stateProvider,$urlRouterProvider){
			
				$routeProvider
				.when("/", {
					templateUrl : "js/directive/Login/Login.html"
				})
				.when("/Masters", {
					templateUrl : "js/directive/Masters/Masters.html"
				})
				.when("/Register", {
					templateUrl : "js/directive/Register/Register.html"
				})
				.when("/RegisterExternal",{
					templateUrl : "js/directive/registerExternal/registerExternal.html"
				})
				.otherwise({
					redirectTo: "/"
				});
		}
	]
)