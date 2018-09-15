$(document).ready(()=>{
    $(".button-collapse").sideNav()
}) 

$(document).scroll(()=>{
    if($(window).scrollTop()>300){
        $('nav').addClass('navClass')
    }
    else{
        $('nav').removeClass('navClass')        
    }
})
$('.scrollspy').scrollSpy({
    scrollOffset:80
})
