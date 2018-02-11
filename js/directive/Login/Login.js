'use strict';
app
	.directive('login', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope:{
				//EXAMPLE: variableName:'=attrTagName'

			},
			controller:'LoginCTRLDirective',
			templateUrl:'js/directive/Login/Login.html'
		}
	});
