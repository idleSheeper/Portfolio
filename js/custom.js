$(document).ready(function(){
    
    // Set standard settings
     if($(window).width() > 992) {//992
        $('#about, #portfolio').css('height',$(window).height());
        $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio h1').css('height') +')');
        $('.projects').attr('width', $('.projects').css('width')); 
        $('.projects').addClass('overflow-scroll');
        $('.arrow').addClass('arrow-rotate');
       }
    else {
        $('#portfolio h1').css('box-shadow', '0px 0px 5px 10px black');
        $('.poster').addClass('font-for-sm');
    }
    
    // Resize window -> change height of .Portfolio
    $( window ).resize(function() {
       if($(window).width() > 992) {
            $('#about, #portfolio').css('height',$(window).height());
            $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio h1').css('height') +')');
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
    
    // show/hide projects for medium and large devices
    $('#portfolio h1').on('click', function(){        
        if($(window).width() > 992) $('.projects').slideToggle();       
    });
    
    // show/hide full poster for medium and large devices
    $('.poster').on('click', function(){        
        if($(window).width() > 992) {
            $('#portfolio').toggle();
            $(this).parent().toggleClass('col-md-10 col-md-4 about-zoom');
            $('.hidden-p-poster').toggleClass('hidden-lg hidden-md')
            $(this).toggleClass('zoom ');
            $('#about .arrow').toggleClass('visible-md visible-lg hidden-md hidden-lg');
        }
    });
    
    // show/hide a signpost with contact
    $('.arrow').on('click', function(event){
        event.preventDefault();
        if($(window).width() > 992)
        if ($(this).hasClass("isDown") ) {
            $(this).stop().animate({bottom:"-=50px"}, 200);          
            $(this).removeClass("isDown");
        } 
        else {
            $(this).stop().animate({bottom:"+=50px"}, 200);   
            $(this).addClass("isDown");
            console.log('dziala');
        };
        return false;
    }).children().on('click', function (event) {
        event.stopPropagation();
        });
    
    // the effect of pulling noose
    $('#noose').on('click', function(){
        $(this).animate({height: '+=15px'}).animate({height: '-=15px'});
         if($(window).width() > 992) $('.projects').slideToggle();
    });    
});