// let URL_MAIN = `${window.location.protocol}//${window.location.host}:5002`

myApp.factory('Auth', ['$http', '$q', 'AuthToken', function($http, $q, AuthToken){
	var authFactory = {}

	authFactory.login = function(username, password){
		return $http.post(`${URL_MAIN}/auth/dashboard`, {
			username: username,
			password: password
		})
		.success(function(data){
			AuthToken.setToken(data.token)
			return data
		})
	}

	authFactory.logout = function(){
		AuthToken.setToken()
	}

	authFactory.isLoggedIn = function(){
		if (AuthToken.getToken) {
			return true
		} else {
			return false
		}
	}

	authFactory.getUser = function(){
		if (AuthToken.getToken()) {
			return $http.get()
		}
	}
}])