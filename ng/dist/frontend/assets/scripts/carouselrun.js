$(document).ready(function() {
    var owl = $('#owl-demo');
    owl.owlCarousel({

        transitionStyle: "fade",
        items: 5,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        loop: true,
        margin: 10,
        autoplay: true,
        slidespeed: 800,
        autoplayTimeout: 1000,
        navigation: true,
        singleItem: true,
        autoplayHoverPause: false
    });
});