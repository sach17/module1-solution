(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  $scope.lunch_menu = "";

  $scope.check_count = function () {
  	
  	if($scope.lunch_menu=="") //handles when textbox is empty or containing spaces only
  	{
  		$scope.lunch_menu = "Please enter data first";
  		return;
  	}

	var menus = $scope.lunch_menu.split(',');

  	if(menus.length <= 3)
  	{
  		$scope.lunch_menu = "Enjoy!";		
  	}
  	else if(menus.length > 3)
  	{
  		$scope.lunch_menu = "Too much!";
  	}

  };
}

})();
