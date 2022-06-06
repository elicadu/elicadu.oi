/*  */
jQuery(Document).ready(function(){

    $('#abrir').click(function( ){
        $('#menu-movil').animate( {
            right: 0
        },300);
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar').click(function(){
        $('#menu-movil').animate({
            right: '-100%'
        },300);
        $('#abrir').show();
        $('cerrar').hide();
        event.preventDefault();
    });

    $('#link-presentacion').click(function(){
        $('#menu-movil').animate({
            right: -240
        },300);
        $('#abrir').show();
        $('cerrar').hide();
        
    });

    $('#link-portafolio').click(function(){
        $('#menu-movil').animate({
            right: -240
        },300);
        $('#abrir').show();
        $('cerrar').hide();
        
    });

    $('#link-estudios').click(function(){
        $('#menu-movil').animate({
            right: -240
        },300);
        $('#abrir').show();
        $('cerrar').hide();
        
    });
$('#link-habilidades').click(function(){
        $('#menu-movil').animate({
            right: -240
        },300);
        $('#abrir').show();
        $('cerrar').hide();
        
    });

    $('#link-contactos').click(function(){
        $('#menu-movil').animate({
            right: -240
        },300);
        $('#abrir').show();
        $('cerrar').hide();
        
    });

});