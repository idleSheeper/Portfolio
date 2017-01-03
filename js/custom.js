$(document).ready(function(){
    
    console.log($(window).height());    
    $('#about, #portfolio, .container').css('height',$(window).height());
    $('.projects').hide();
    $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio .cos').css('height') +')');
    $('.projects').attr('width', $('.projects').css('width'));
    var rope = 0;
    
    // Resize window -> change height
    $( window ).resize(function() {
        $('#about, #portfolio').css('height',$(window).height());
        $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio .cos').css('height') +')');
        $('.projects').attr('width', $('.projects').css('width')); 
    });
    $('#portfolio .cos').on('click', function(){
        $('.projects').slideToggle();
       
    });
    
    
    $('.poster').on('click', function(){
        $('#portfolio').toggle();
        $(this).parent().toggleClass('col-sm-12 col-sm-4 col-xs-12 about-zoom');
        $(this).toggleClass('zoom ');
        $('.arrow').toggle();
        console.log('zoomi');
    });
    
    $('.arrow').on('click', function(event){
        event.preventDefault();
        if ($(this).hasClass("isDown") ) {
            $(this).stop().animate({bottom:"-=50px"}, 200);          
            $(this).removeClass("isDown");
        } else {
            $(this).stop().animate({bottom:"+=50px"}, 200);   
            $(this).addClass("isDown");
        }
        return false;
    });
});