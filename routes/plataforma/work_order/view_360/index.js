var express = require('express')
var app = express.Router()

var config = require('../../../../config.js')
var users_type = config.users_access
var hostlocal_url = config.hostlocal_url.server

app.get('/read/:file_name', function (req, res) {

	var file_name = req.params.file_name || 'not_found';
	
	var template_html = `<!DOCTYPE html>
							<html lang='en'>
								<head>
								    <meta charset='UTF-8'>
								    <title>test_visor_360</title>
								    <link rel='stylesheet' href='https://cdn.pannellum.org/2.3/pannellum.css'>
								    <style>
								        *{
								            padding: 0;
								            margin: 0;
								        }
								    </style>
								</head>
								<body>
								    <div style='height: 500px; background: black;' id='div_panno'>
								        
								    </div>
								    <script src='https://cdn.pannellum.org/2.3/pannellum.js'></script>
								    <script type='text/javascript'>
								        function show_viewer(namePhoto){
								            var baseUrl = '${hostlocal_url}/news/'+namePhoto;
								            pannellum.viewer('div_panno', {
								                'type': 'equirectangular',
								                'panorama': baseUrl,
								                'autoLoad': true,
								                'showZoomCtrl' : false
								            });
								        };
								        (function () {
								            width = window.screen.width;
								            document.getElementById('div_panno').style.width = width;
								            show_viewer('${file_name}');
								        })();
								    </script>
								</body>
							</html>`;


	console.log(template_html)

	// Reemplazar photo name
	res.status(200).send(template_html)

})

module.exports = app
