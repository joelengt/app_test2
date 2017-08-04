let URL_MAIN = `${window.location.protocol}//${window.location.host}:5002`

myApp.factory('Socket', ['socketFactory', function(socketFactory){
	// return socketFactory()
	return socketFactory(
		{
			prefix: 'notifications',
			ioSocket: io.connect(`${URL_MAIN}/notificaciones-io`)
		},
		// {
		// 	prefix: 'chat',
		// 	ioSocket: io.connect('/chat-io')
		// },
		{
			prefix: 'Track_one_user',
			ioSocket: io.connect(`${${URL_MAIN}}/tracking-io`)
		}
	)
}])