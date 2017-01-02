$(document).ready(function(){
    console.log($(window).height());
    $('#about, #portfolio').css('height',$(window).height());
    $('.projects').css('height', 'calc(' + $('#portfolio').css('height') + ' - ' + $('#portfolio .cos').css('height') +')');
///    $('.projects').hide();
    $('.projects').attr('width', $('.projects').css('width'));
    var rope = 0;
    
//    $('#portfolio .cos').on('click', function(){
//        $('.projects').fadeToggle();
//    });
    
    $('.projects').on('scroll',function(){ 
       // $(this).animate({backgroundPosition: '-=0% -=1px -=0px -=5px'}, 10);
       // $(this).animate({backgroundPosition: '-=0% -=1px'}, 10);
        var tab =($(this).css('background-position-y').replace(',' , '').split('%'));
        var factor = 5;
        console.log(tab)
        
        if($(this).children().first().position().top -rope >0) factor = -5;
            
        tab[0] = parseInt(tab[0])- factor;
        tab[1] = parseInt(tab[1])+ factor;
        
        $(this).css({backgroundPositionY: ''+tab[0] +'%, ' + tab[1] + '%'});
        console.log($(this).css('background-position'));
        rope = $(this).children().first().position().top;
       
    });
});