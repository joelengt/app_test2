let URL_MAIN = `${window.location.protocol}//${window.location.host}/app`

console.log('NotificacionS')

var socket = io(`${URL_MAIN}/notificaciones-io`)

socket.on('notis_one_user', function (content) {

	console.log('Mensaje Notificacion')
	console.log(content)
	
	var template = `<div>
						<p>Notificacion de ${content.codigo_orden}</p>
						<strong>${content.type_notification}</strong>
						<p><${content.type_service}/p>
					<div>`

	$('.ContentNotifications').prepend(template)

})

socket.on('notis_counter', function(count) {
	console.log('Cantidad de Notificaciones')
	console.log(count)
})

var NotificationsRoom = document.querySelector('#NotificationsRoom').value

socket.on('connect', function() {
	console.log('Me conete con el servidor')
   // Connected, let's sign-up for to receive messages for this room
   socket.emit('NotificationsRoom', NotificationsRoom)
})

