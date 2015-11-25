$(document).ready(function(){

	$('.parallax').parallax();


});

$(function() {
    // Baixar URLs do feed do canal
    $.get('http://gdata.youtube.com/feeds/api/users/cadeachave/uploads?max-results=1&alt=json', function(result) {

        var entries = result.feed.entry;

        for(var i=0; i<entries.length; i++) {
            var url = entries[i].link[0].href;   

            // Transformar URL de vídeo em URL de embed
            // ANTES: http://www.youtube.com/watch?v=aDqExWjK49Y&algumacoisaaqui
            // DEPOIS: http://www.youtube.com/embed/aDqExWjK49Y
            url = url.replace('/watch?v=', '/embed/');
            url = url.substring(0, url.indexOf('&'));

            // Fazer append dos vídeos
            $('.player').append('<iframe width="480" height="270" src="' + url + '" frameborder="0" allowfullscreen></iframe>');
        }
    });
});