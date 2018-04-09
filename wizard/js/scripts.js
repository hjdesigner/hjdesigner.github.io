$(document).ready(function(){
    $.ajax({
        url: "http://localhost/matriz.json",
        jsonp: "callback",
        dataType: "json",
        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },
     
        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }
    });
})