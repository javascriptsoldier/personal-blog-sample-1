
// var timer = setInterval(function () {
    // if (!$(".slider-thumbn > img").length == 0) {
        console.log("script calling");
        // Here write your script. It will keep calling untill above selector is available on web
        $('.carousel').carousel({
            interval: false
        });
        $('.carousel .vertical .item').each(function () {
            let next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            for (let i = 1; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });
        console.log("script stopped");
        clearInterval(timer);
    // }
// }, 1000);