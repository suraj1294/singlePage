app
.controller('registerExternalCTRLDirective',function($scope,$route,loginservice)
	{
		var accessToken = sessionStorage.getItem('externalaccessToken');
		var GoogleApiUrl = "http://localhost:64991/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A64991%2FLogin.html&state=h7HJy3O0kZjlSSK9t4Zu2O8fXtYpvPKKd0awvaLkfj41"

		$scope.RegisterExternalUser=function(){
			
			var dataP = {
				Email:$scope.userLoginEmail,
				Language:$scope.Language,
				UserType:$scope.UserType,
				FarmerName:$scope.FarmerName,
				MobileNumber:$scope.MobileNumber,
				PANNumber:$scope.PANNumber,
				AdharNumber:$scope.AdharNumber,
				DOB:$scope.DOB,
				Gender:$scope.Gender,
				Country:$scope.Country,
				District:$scope.District,
				Tehsil:$scope.Tehsil,
				Village:$scope.Village,
				CropArea:$scope.CropArea,				
			}
			$.ajax({
				url: 'http://localhost:64991/api/Account/RegisterExternalMobile',
				type: "POST",
				headers: {
					"Authorization": 'Bearer ' + accessToken,
					"Content-Type": "Application/json"
				},	
				data:JSON.stringify(dataP),
				success: function (response) {
					alert("User Registered Sucessfully!");					
					
					window.location.href= GoogleApiUrl;
				//	checkUserLogin()
				},
				fail:function(response){
					alert(response);
					console.log(response)
				}
	
			})
	
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