'use strict';
/**
*  Module
*
* Description
*/
var myApp = angular.module('Astrum', ['ngRoute', 'ngCookies'])
var URL_MAIN = `${window.location.protocol}//${window.location.host}:5002`

myApp.constant('url', {
	url: `${window.location.protocol}//${window.location.host}`,
	order_work: '#/dashboard/order/',
	dashboard: '#/dashboard/',
	usuarios: '#/users/',
	kml: '#/kml/',
	en_proceso: 'en_proceso',
	pendiente: 'pendiente',
	en_curso: 'en_curso',
	cancelado: 'cancelado',
	resuelto: 'resuelto',
	no_resuelto: 'no_resuelto',
	reprogramado: 'reprogramado',
	reportado: 'reportado',
	no_asignado: 'no_asignado',
	// MARKERS DE CADA ORDeN DE TRABAJO DE TIPO POSTE
	marker_order_service_poste_pendiente: '../images/markers/17.icon_orden_poste_pendiente.png',
	marker_order_service_poste_en_progreso: '../images/markers/17.1.icon_orden_poste_en_progreso.png',
	marker_order_service_poste_resuelto: '../images/markers/17.2.icon_orden_poste_resuelto.png',
	marker_order_service_poste_no_resuelto: '../images/markers/17.3.icon_orden_poste_no_resuelto.png',
	marker_order_service_poste_reportado: '../images/markers/17.4.icon_orden_poste_reportado.png',
	marker_order_service_poste_reprogramado: '../images/markers/17.5.icon_orden_poste_reprogramado.png',
	marker_order_service_poste_cancelado: '../images/markers/17.6.icon_orden_poste_cancelado.png',
	marker_order_service_poste_no_asignado: '../images/markers/17.1.icon_orden_poste_en_curso.png',
	// MARKERS DE CADA ORDeN DE TRABAJO DE TIPO CLIENTE
	marker_order_service_cliente_pendiente: '../images/markers/19.icon_orden_cliente_pendiente.png',
	marker_order_service_cliente_en_curso: '../images/markers/19.1.icon_orden_cliente_en_curso.png',
	marker_order_service_cliente_resuelto: '../images/markers/19.2.icon_orden_cliente_resuelto.png',
	marker_order_service_cliente_no_resuelto: '../images/markers/19.3.icon_orden_cliente_no_resuelto.png',
	marker_order_service_cliente_reportada: '../images/markers/19.4.icon_orden_cliente_reportada.png',
	marker_order_service_cliente_reprogramada: '../images/markers/19.5.icon_orden_cliente_reprogramada.png',
	marker_order_service_cliente_cancelada: '../images/markers/19.6.icon_orden_cliente_cancelada.png',
	marker_order_service_cliente_no_asignada: '../images/markers/19.6.icon_orden_cliente_no_asignada.png',
	// MARKERS DE TIPO CLIENTE
	marker_client_pendiente_big: '../images/markers/15.icon_cliente_pendiente2x.png',
	marker_client_pendiente_short: '../images/markers/15.icon_cliente_pendiente.png',
	marker_client_cancelada_big: '../images/markers/15.6.icon_cliente_cancelado2x.png',
	marker_client_cancelada_short: '../images/markers/15.6.icon_cliente_cancelado.png',
	marker_client_resuelta_big: '../images/markers/15.2.icon_cliente_resuelto2x.png',
	marker_client_resuelta_short: '../images/markers/15.2.icon_cliente_resuelto.png',
	marker_client_no_resuelta_big: '../images/markers/15.3.icon_cliente_no_resuelto2x.png',
	marker_client_no_resuelta_short: '../images/markers/15.3.icon_cliente_no_resuelto.png',
	marker_client_reprogramada_big: '../images/markers/15.5.icon_cliente_reprogramado2x.png',
	marker_client_reprogramada_short: '../images/markers/15.5.icon_cliente_reprogramado.png',
	marker_client_reportada_big: '../images/markers/15.4.icon_cliente_reportado2x.png',
	marker_client_reportada_short: '../images/markers/15.4.icon_cliente_reportado.png',
	marker_client_en_curso_big: '../images/markers/15.1.icon_cliente_en_curso2x.png',
	marker_client_en_curso_short: '../images/markers/15.1.icon_cliente_en_curso.png',
	marker_client_no_asignada_big: '../images/markers/15.icon_cliente_pendiente2x.png',
	marker_client_no_asignada_short: '../images/markers/15.icon_cliente_pendiente.png',
	// MARKERS DE TIPO POSTE
	marker_poste_pendiente_big: '../images/markers/16.icon_poste_en_curso2x.png',
	marker_poste_pendiente_short: '../images/markers/16.icon_poste_en_curso.png',
	marker_poste_en_curso_big: '../images/markers/16.icon_poste_en_curso2x.png',
	marker_poste_en_curso_short: '../images/markers/16.icon_poste_en_curso.png',
	marker_poste_cancelada_big: '../images/markers/16.6.icon_poste_cancelado2x.png',
	marker_poste_cancelada_short: '../images/markers/16.6.icon_poste_cancelado.png',
	marker_poste_resuelta_big: '../images/markers/16.3.icon_poste_resuelta2x.png',
	marker_poste_resuelta_short: '../images/markers/16.3.icon_poste_resuelta.png',
	marker_poste_no_resuelta_big: '../images/markers/16.2.icon_poste_no_resuelto2x.png',
	marker_poste_no_resuelta_short: '../images/markers/16.2.icon_poste_no_resuelto.png',
	marker_poste_reprogramada_big: '../images/markers/16.5.icon_poste_reprogramado2x.png',
	marker_poste_reprogramada_short: '../images/markers/16.5.icon_poste_reprogramado.png',
	marker_poste_reportada_big: '../images/markers/16.4.icon_poste_reportado2x.png',
	marker_poste_reportada_short: '../images/markers/16.4.icon_poste_reportado.png',
	marker_poste_en_progreso_big: '../images/markers/16.1.icon_poste_en_progreso2x.png',
	marker_poste_en_progreso_short: '../images/markers/16.1.icon_poste_en_progreso.png',
	// marker_poste_no_asignada_big: '../images/markers/16.icon_poste_pendiente2x.png',
	// marker_poste_no_asignada_short: '../images/markers/16.icon_poste_pendiente.png',
// MARKERS DE TIPO POSTER EN FOCO
	markers_focus_poste_pendiente_short: '../images/markers/18.icon_orden_poste_pendiente_active.png',
	markers_focus_poste_pendiente_big: '../images/markers/18.icon_orden_poste_pendiente_active2x.png',
	markers_focus_poste_en_curso_short: '../images/markers/18.1.icon_orden_poste_en_curso_active.png',
	markers_focus_poste_en_curso_big: '../images/markers/18.1.icon_orden_poste_en_curso_active2x.png',
	markers_focus_poste_resuelto_short: '../images/markers/18.2.icon_orden_poste_resuelto_active.png',
	markers_focus_poste_resuelto_big: '../images/markers/18.2.icon_orden_poste_resuelto_active2x.png',
	markers_focus_poste_no_resuelto_short: '../images/markers/18.3.icon_orden_poste_no_resuelto_active.png',
	markers_focus_poste_no_resuelto_big: '../images/markers/18.3.icon_orden_poste_no_resuelto_active2x.png',
	markers_focus_poste_reportado_short: '../images/markers/18.4.icon_orden_poste_reportado_active.png',
	markers_focus_poste_reportado_big: '../images/markers/18.4.icon_orden_poste_reportado_active2x.png',
	markers_focus_poste_reprogramado_short: '../images/markers/18.5.icon_orden_poste_reprogramado_active.png',
	markers_focus_poste_reprogramado_big: '../images/markers/18.5.icon_orden_poste_reprogramado_active2x.png',
	markers_focus_poste_cancelado_short: '../images/markers/18.6.icon_orden_poste_cancelado_active.png',
	markers_focus_poste_cancelado_big: '../images/markers/18.6.icon_orden_poste_cancelado_active2x.png',
	// MARKERS DE TIPO CLIENTE EN FOCO
	markers_focus_cliente_pendiente_short:'../images/markers/20.icon_orden_cliente_pendiente_active.png',
	markers_focus_cliente_pendiente_big:'../images/markers/20.icon_orden_cliente_pendiente_active2x.png',
	markers_focus_cliente_cancelado_short:'../images/markers/20.1.icon_orden_cliente_cancelada_active.png',
	markers_focus_cliente_cancelado_big:'../images/markers/20.1.icon_orden_cliente_cancelada_active2x.png',
	markers_focus_cliente_en_curso_short:'../images/markers/20.1.icon_orden_cliente_en_curso_active.png',
	markers_focus_cliente_en_curso_big:'../images/markers/20.1.icon_orden_cliente_en_curso_active2x.png',
	markers_focus_cliente_resuelto_short:'../images/markers/20.2.icon_orden_cliente_resuelto_active.png',
	markers_focus_cliente_resuelto_big:'../images/markers/20.2.icon_orden_cliente_resuelto_active2x.png',
	markers_focus_cliente_no_resuelto_short:'../images/markers/20.3.icon_orden_cliente_no_resuelto_active.png',
	markers_focus_cliente_no_resuelto_big:'../images/markers/20.3.icon_orden_cliente_no_resuelto_active2x.png',
	markers_focus_cliente_reportado_short:'../images/markers/20.4.icon_orden_cliente_reportada_active.png',
	markers_focus_cliente_reportado_big:'../images/markers/20.4.icon_orden_cliente_reportada_active2x.png',
	markers_focus_cliente_reprogramado_short:'../images/markers/20.5.icon_orden_cliente_reprogramada_active.png',
	markers_focus_cliente_reprogramado_big:'../images/markers/20.5.icon_orden_cliente_reprogramada_active2x.png',
	// MARKERS TIPO CLIENTE EN INFORMACION DE ITEM TIPO CLEINTE
	// marker_view_cliente_en_curso_short: '../images/markers/15.1.icon_cliente_en_curso.png',
	// marker_view_cliente_en_curso_big: '../images/markers/15.1.icon_cliente_en_curso2x.png',
	// marker_view_cliente_resuelto_short: '../images/markers/15.2.icon_cliente_resuelto.png',
	// marker_view_cliente_resuelto_big: '../images/markers/15.2.icon_cliente_resuelto2x.png',
	// marker_view_cliente_no_resuelto_short: '../images/markers/15.3.icon_cliente_no_resuelto.png',
	// marker_view_cliente_no_resuelto_big: '../images/markers/15.3.icon_cliente_no_resuelto2x.png',
	// marker_view_cliente_reportado_short: '../images/markers/15.4.icon_cliente_reportado.png',
	// marker_view_cliente_reportado_big: '../images/markers/15.4.icon_cliente_reportado2x.png',
	// marker_view_cliente_reprogramado_short: '../images/markers/15.5.icon_cliente_reprogramado.png',
	// marker_view_cliente_reprogramado_big: '../images/markers/15.5.icon_cliente_reprogramado2x.png',
	// marker_view_cliente_cancelado_short: '../images/markers/15.6.icon_cliente_cancelado.png',
	// marker_view_cliente_cancelado_short: '../images/markers/15.6.icon_cliente_cancelado2x.png',
	// marker_view_cliente_pendiente_short: '../images/markers/15.icon_cliente_pendiente.png',
	// marker_view_cliente_pendiente_short: '../images/markers/15.icon_cliente_pendiente2x.png',
	// MARKERS TIPO POSTE EN INFORMACION DE TIPO POSTE
	// marker_view_poste_en_curso_short: '../images/markers/16.1.icon_poste_en_curso.png',
	// marker_view_poste_en_curso_big: '../images/markers/16.1.icon_poste_en_curso2x.png',
	// marker_view_poste_resuelto_short: '../images/markers/16.2.icon_poste_resuelto.png',
	// marker_view_poste_resuelto_big: '../images/markers/16.2.icon_poste_resuelto2x.png',
	// marker_view_poste_no_resuelto_short: '../images/markers/16.3.icon_poste_no_resuelto.png',
	// marker_view_poste_no_resuelto_big: '../images/markers/16.3.icon_poste_no_resuelto2x.png',
	// marker_view_poste_reportado_short: '../images/markers/16.4.icon_poste_reportado.png',
	// marker_view_poste_reportado_big: '../images/markers/16.4.icon_poste_reportado2x.png',
	// marker_view_poste_reprogramado_short: '../images/markers/16.5.icon_poste_reprogramado.png',
	// marker_view_poste_reprogramado_big: '../images/markers/16.5.icon_poste_reprogramado2x.png',
	// marker_view_poste_cancelado_short: '../images/markers/16.6.icon_poste_cancelado.png',
	// marker_view_poste_cancelado_short: '../images/markers/16.6.icon_poste_cancelado2x.png',
	// marker_view_poste_pendiente_short: '../images/markers/16.icon_poste_pendiente.png',
	// marker_view_poste_pendiente_short: '../images/markers/16.icon_poste_pendiente2x.png',
})


