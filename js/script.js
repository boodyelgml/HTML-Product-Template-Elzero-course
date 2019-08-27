$(function () {
   
    $(window).on('load', function() { 
        $('.loading').fadeOut(1000);
    });
    
});
//count js
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



// Dependency: CountUp.js: https://github.com/inorganik/CountUp.js

$(window).on("load" , function(){
    $(".loader").fadeOut()
})