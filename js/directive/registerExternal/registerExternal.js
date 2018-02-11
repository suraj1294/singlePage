'use strict';
app
	.directive('registerExternal', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope:{
				//EXAMPLE: variableName:'=attrTagName'

			},
			controller:'registerExternalCTRLDirective',
			templateUrl:'js/directive/registerExternal/registerExternal.html'
		}
	});
