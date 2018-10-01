
$(document).ready(() => {
   
})

$(document).scroll(() => {
    if ($(window).scrollTop() > $(window).height()/2 ) {
        $('nav').addClass('navClass')
        $('nav').removeClass('z-depth-0')
    }
    else {
        $('nav').removeClass('navClass')
        $('nav').addClass('z-depth-0')
    }
})
$('.scrollspy').scrollSpy({
    scrollOffset: $('nav').height()    
})
$('.button-collapse').sideNav()

$('.side-nav').click((e)=>{
    $('.button-collapse').sideNav('hide');
})