// let URL_MAIN = `${window.location.protocol}//${window.location.host}:5002`

myApp.factory('userModel', ['$http', '$cookies', function($http, $cookies){
	var userModel = {}

	userModel.doLogin = function(loginData){
		console.log(loginData)
		return $http({
			headers:{
				'Content-Type':'application/json'
			},
			url: `${URL_MAIN}/auth/dashboard`,
			method: 'POST',
			data:{
				username: loginData.username,
				password: loginData.password
			}
		}).success(function(res){
			console.log(res)
			$cookies.put('auth', JSON.stringify(res))
		}).error(function(err){
			console.log(err)
		})
	}

	userModel.getAuthStatus = function (){
		var status  = $cookies.get('auth')
		if (status) {
			return true
		} else {
			return false
		}
	}

	userModel.doUserLogout = function(){
		$cookies.remove('auth')
		$http({
			url: `${URL_MAIN}/logout`,
			method: 'GET'
		}).then(function(res){
			console.log(res)
			// location.reload()
		},function(err){
			console.log(err)
		})
	}

	userModel.getUserObject = function(){
		var userObj = angular.fromJson($cookies.get('auth'));
		return userObj
	}

	return userModel
}])