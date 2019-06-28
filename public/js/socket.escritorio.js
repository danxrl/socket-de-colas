var socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

if (!searchParams.has('escritorio')) {
	  window.location = 'index.html';
	  throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
	socket.emit('atenderTicket', {
		escritorio: escritorio
	}, function(data) {
		
		if (data === 'No hay tickets') {
			alert(data);
			label.text(data);
			return;
		}
		
		label.text('Ticket ' + data.numero);
	});
})