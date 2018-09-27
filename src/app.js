const showFiltered = (filteredProjects, id) => {
    let outPut = '';
    filteredProjects.forEach(elm => {
        outPut += `
        <div class="projects">
        <div>
          <img class="responsive-img" src="${elm.imgDestop}" alt="200px">
        </div>
      </div>`
    })

    $(`${id}`).html(outPut)
    if (filteredProjects.length % 3 === 0) {
        $(`.projects`).addClass('col s4 m4')
    }
    else if (filteredProjects.length % 2 === 0) {
        $(`.projects`).addClass('col s6 m6')
        $(`${id}`).css({ 'padding-left': '15%', 'padding-right': '15%' })

    }
    else {
        $(`.projects`).addClass('col s12 m12 l12')
    }

}

const getProjects = (filterBy, id) => {
    fetch('./projects.json').then(response => response.json()).
        then(response => {
            const filteredProjects = filterProjects(response, filterBy)
            showFiltered(filteredProjects, id)
        })
}
$(document).ready(() => {
    $(".button-collapse").sideNav()
    $('.tabs').tabs()
    getProjects('all', '#test-swipe-1')
})

$(document).scroll(() => {
    if ($(window).scrollTop() > $(window).height() + $('nav').height()) {
        $('nav').addClass('navClass')
        $('nav').removeClass('z-depth-0')
    }
    else {
        $('nav').removeClass('navClass')
        $('nav').addClass('z-depth-0')
    }
})
$('.scrollspy').scrollSpy({
    scrollOffset: 66    
})

$('#filter-project').click((e) => {
    if (e.target.nodeName === "A") {
        getProjects(e.target.id, e.target.hash)
    }
})



$(document).ready(function () {
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.slide-prev').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev')
    });
    $('.slide-next').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next')
    });
    //this is for navigation using a new tab
    $('.share-btn').click(function (e) {
        var win = window.open('http://google.com', '_blank');
        win.focus();
    });
});