$(document).ready(function(){
    
    console.log($(window).height());    
     if($(window).width() > 970) {//992
        $('#about, #portfolio').css('height',$(window).height());
        $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio .cos').css('height') +')');
        $('.projects').attr('width', $('.projects').css('width')); 
        $('.projects').addClass('overflow-scroll');
        $('.arrow').addClass('arrow-rotate');
      //  $('.projects').hide();
       }
    else $('#portfolio h1').css('box-shadow', '0px 0px 5px 10px black');


    var rope = 0;
    
    // Resize window -> change height
    $( window ).resize(function() {
       if($(window).width() > 970) {
            $('#about, #portfolio').css('height',$(window).height());
            $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio .cos').css('height') +')');
            $('.projects').addClass('overflow-scroll');
            $('.arrow').addClass('arrow-rotate');
            $('#portfolio h1').css('box-shadow', '5px 0px 5px 5px black');
       }
       else {
            $('#about, #portfolio, .projects').css('height', 'auto');
            $('.projects').removeClass('overflow-scroll');
            $('.arrow').removeClass('arrow-rotate');
            $('.projects').show();
            $('#portfolio h1').css('box-shadow', '0px 0px 5px 10px black');
       }
    });
    
    
    $('#portfolio .cos').on('click', function(){
        
        if($(window).width() > 970) $('.projects').slideToggle();
       
    });
    
    
    $('.poster').on('click', function(){        
        if($(window).width() > 970) {
            $('#portfolio').toggle();
            $(this).parent().toggleClass('col-md-10 col-md-4 about-zoom');
            $(this).toggleClass('zoom ');
            $('#about .arrow').toggleClass('visible-md visible-lg hidden-md hidden-lg');
            
            console.log('zoomi');
        }
    });
    
    $('.arrow').on('click', function(event){
        event.preventDefault();
        if($(window).width() > 970)
        if ($(this).hasClass("isDown") ) {
            $(this).stop().animate({bottom:"-=50px"}, 200);          
            $(this).removeClass("isDown");
        } else {
            $(this).stop().animate({bottom:"+=50px"}, 200);   
            $(this).addClass("isDown");
        };
        return false;
    });
});