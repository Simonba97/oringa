//CAMBIA LA FORMA EN LA QUE SUBE Y BAJA DE SECCIÓN.
var downAndUp = function() {
    $('a').click(function(event) {
        var self = this;
        // console.log($(self).attr('href'));
        event.stopPropagation();
        var Position = $($(self).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: Position
        }, 1000);
        return false;
    });
};

var preOrNext = function() {
    $('preOrNext').click(function() {
        var escondoEl = $(this).attr('escondoEl');
        var muestroEl = $(this).attr('muestroEl');

        $('#contenedor' + escondoEl).hide('fast');
        $('#contenedor' + muestroEl).show('fast');
    });
}

var isDebug = function() {

    return false;
    // return true;
}

var eventMessagesButtonWhatsapp = function() {
    var arrayMessages = ["Dejanos una voz de aliento", "Llamanos", "Contáctanos", "Clic acá", "Envía un mensaje"];
    var numMessages = arrayMessages.length;
    var cont = 0;
    var iconWhatsapp = '<i class="fa fa-whatsapp" aria-hidden="true"></i> ';

    function changeMessage() {
        var btn = $('#btnSendWhatsapp');
        btn.html(iconWhatsapp + ' ' + arrayMessages[cont].toUpperCase());
        if (cont == (numMessages - 1)) {
            cont = 0;
        } else {
            cont++;
        }
    }

    setInterval(changeMessage, 2000);
}

$(document).ready(function() {
    console.log("Simón Bustamante Alzate - Copyright © Todos los Derechos Reservados");
    console.log("Repositorio de GitHub: https://github.com/Simonba97/new");
    eventMessagesButtonWhatsapp();
    downAndUp();
    preOrNext();
    swal({
        'type': 'info',
        'title': "¡ATENCIÓN!",
        'text': 'Somos un conjunto de personas sin animo de lucro.',
        'confirmButtonText': 'Listo',
        'confirmButtonColor': '#8cf07c'
    });
});