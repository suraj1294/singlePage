app
	.controller('LoginCTRLDirective', function ($scope, loginservice) {
		//Scope Declaration
		debugger;
		
		
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
		$scope.redirect = function () {
			window.location.href = '/';
		};

		//Function to Login. This will generate Token 
		$scope.login = function () {
			//This is the information to pass for token based authentication
			var userLogin = {
				grant_type: 'password',
				username: $scope.userLoginEmail,
				password: $scope.userLoginPassword
			};

			var promiselogin = loginservice.login(userLogin);

			promiselogin.then(function (resp) {

				$scope.userName = resp.data.userName;
				//Store the token information in the SessionStorage
				//So that it can be accessed for other views
				sessionStorage.setItem('userName', resp.data.userName);
				sessionStorage.setItem('accessToken', resp.data.access_token);
				sessionStorage.setItem('refreshToken', resp.data.refresh_token);
				window.location.href = '#!/Masters';
			}, function (err) {

				$scope.responseData = "Error " + err.status;
			});

		};

		$scope.registerGoogle = function () {
			$scope.responseData = "";
			//Service URL(MVC Web Api)
			var GoogleApiUrl = "http://localhost:64991/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A64991%2FLogin.html&state=h7HJy3O0kZjlSSK9t4Zu2O8fXtYpvPKKd0awvaLkfj41"
			window.location.href= GoogleApiUrl;
					
		}

			function getToken() {
				if (location.hash) {
					if (location.hash.split("access_token=").length>1) {
						var accessToken = location.hash.split("access_token=")[1].split('&')[0];
						loginservice.isUserRegistered(accessToken).then(function(res){
							if(res.data.HasRegistered){
								sessionStorage.setItem('userName', res.data.Email);
								sessionStorage.setItem('accessToken', accessToken);
								window.location.href = '#!/Masters';
							}
							else{
								sessionStorage.setItem('externalaccessToken', accessToken);
								window.location.href = "#!/RegisterExternal"
								/*loginservice.SignUpExternalUser(accessToken).then(function(resp){
									window.location.href= GoogleApiUrl;
								})*/
							}
						})						
					}
				}
			}
		getToken();

		
	
	})