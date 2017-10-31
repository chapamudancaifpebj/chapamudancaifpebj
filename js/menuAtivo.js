$(document).ready(function(){
    function addClass(el) {
        menu.removeClass('menuAtivo');
        $(el).addClass('menuAtivo');
    };

    
    var sectionPositions = $('section').map(function(){
        return $(this).position().top;
    });
    var menu = $('.navbar-transparent .nav li a');
    var sections = $('section');

    $(document).on('scroll', function () {
        var scroll = $(document).scrollTop();
        var currentElement;
        $(sectionPositions).each(function (i) {
            if (scroll > this - 100) currentElement = menu[i];
        });
        currentElement && addClass(currentElement);
    });
    menu.on('click', function () {
        addClass(this);
    });
});