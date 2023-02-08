const button = $('#btn');
const scrollChange = 1;


function toggleScrollButtonVisibility() {
    let scroll = $(window).scrollTop();
    if (scroll >= scrollChange) {
        button.addClass('visible');
    } else {
        button.removeClass("visible");
    }    
}

function scrollToBeginning(duration = 300) {
    $('html, body').animate({scrollTop:0}, duration);
};

$(window).scroll(function () {
    toggleScrollButtonVisibility()
});

$(button).click(function () {
    scrollToBeginning(1000);
});