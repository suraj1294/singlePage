'use strict';
app
	.directive('masters', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope:{
				//EXAMPLE: variableName:'=attrTagName'

			},
			controller:'MastersCTRLDirective',
			templateUrl:'js/directive/Masters/Masters.html'
		}
	});
