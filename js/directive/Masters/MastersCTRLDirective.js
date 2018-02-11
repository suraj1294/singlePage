app
.controller('MastersCTRLDirective',function($scope,masterservice)
	{
		debugger;
		$scope.Employees = [];
		
		   $scope.Message = "";
		   $scope.userName = sessionStorage.getItem('userName');
		
		
		   loadEmployees();
		
		   function loadEmployees() {
				
		
			   var promise = masterservice.get();
			   promise.then(function (resp) {
				   $scope.Employees = resp.data;
				   $scope.Message = "Call Completed Successfully";
			   }, function (err) {
				   $scope.Message = "Error!!! " + err.status
			   });
		   };
		   $scope.logout = function () {
				 
			   sessionStorage.removeItem('accessToken');
			   sessionStorage.removeItem('userName')
			   window.location.href = '#!/';
		   };
	})