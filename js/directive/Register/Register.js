'use strict';
app
	.directive('register', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope:{
				//EXAMPLE: variableName:'=attrTagName'

			},
			controller:'RegisterCTRLDirective',
			templateUrl:'js/directive/Register/Register.html'
		}
	});
