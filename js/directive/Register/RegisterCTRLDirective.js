app
	.controller('RegisterCTRLDirective', function ($scope, $route, loginservice) {
		//Scope Declaration
		$scope.responseData = "";

		$scope.userName = "";

		$scope.userRegistrationEmail = "";
		$scope.userRegistrationPassword = "";
		$scope.userRegistrationConfirmPassword = "";

		$scope.userLoginEmail = "";
		$scope.userLoginPassword = "";

		$scope.accessToken = "";
		$scope.refreshToken = "";
		//Ends Here

		//Function to register user
		$scope.registerUser = function () {

			$scope.responseData = "";

			//The User Registration Information
			var userRegistrationInfo = {
				Email: $scope.userRegistrationEmail,
				Password: $scope.userRegistrationPassword,
				ConfirmPassword: $scope.userRegistrationConfirmPassword
			};

			var promiseregister = loginservice.register(userRegistrationInfo);

			promiseregister.then(function (resp) {
				$scope.responseData = "User is Successfully";
				$scope.userRegistrationEmail = "";
				$scope.userRegistrationPassword = "";
				$scope.userRegistrationConfirmPassword = "";
			}, function (err) {
				$scope.responseData = "Error " + err.status;
			});
		};

		

		$scope.redirect = function () {
			window.location.href = '/';
		};


	})