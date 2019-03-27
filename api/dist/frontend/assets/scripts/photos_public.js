/*jslint browser: true*/
/*global  $,FB */
alert('hello public')
$(document).ready(function () {
    "use strict";
    $(".share_item").css('width', 100 / $(".share_items li").size() - 2 + "%");
    $(document).keydown(function (e) {
        if ($('#overlay_img').attr('src') !== "" || $('#overlay_vid > source').attr('src') !== "") {
            if (e.keyCode == 37) {
                swipeImage('right');
                return false;
            } else if (e.keyCode == 39) {
                swipeImage('left');
                return false;
            }
        }
    });

    $('#overlay_img').load(function () {
        $('#overlay_img').fadeTo('fast', 1, function () {
            $("#img_loader").fadeOut();
        });
    });
    if (String(window.location).indexOf('whosevent.com') > 1) {
        $(".print_item").hide();
    }
    if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
        $("#overlay_div .left-btn").hide();
        $("#overlay_div .right-btn").hide();
    } else {
        $("#overlay_div .left-btn").show();
        $("#overlay_div .right-btn").show();
    }

    var curPicId,
        curPicUrl,
        curPicUrlLocal,
        $photos = $('#photos'),
        $overlayImg = $('#overlay_img'),
        $shareInfo = $('#share_info'),
        socialLogOut = function () {
            // twitter
            APP.twitterLoggedIn = false;
            APP.facebookLoggedIn = false;
            APP.tumblrLoggedIn = false;
            // facebook logout
            try {
                FB.logout();
            } catch (e) {
            }
            window.location = $('#logout-now').attr('rel');
//            $.get('/social-logout/');
            $("#social-logout").fadeOut();
        },
        countdown = function (element, minutes, seconds) {
            // set time for the particular countdown
            var time = minutes * 60 + seconds,
                $el = $('#' + element);
            APP.interval = setInterval(function () {
                // if the time is 0 then end the counter
                if (!time) {
                    $('#log_msg').html("you have been logged out");
                    $el.html("you have been logged out");
                    $('.cancel_share').trigger('click');
                    // $("#close_pic").trigger('click');
                    closeOverlay();
                    //do logout
                    clearInterval(APP.interval);
                    socialLogOut();
                    $shareInfo.find('#log_msg').html(
                        'You will be logged out in <span id="clk">05</span> seconds'
                    );
                    return;
                }
                minutes = Math.floor(time / 60);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                seconds = time % 60;
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                $el.html(seconds);
                time--;
            }, 1000);
        },
        setCurPic = function ($pic) {
            if ($pic) {
                curPicId = $pic.data('id');//console.log(curPicId);
                curPicUrl = $pic.data('url');
                curPicUrlLocal = $pic.data('url_local');
            } else {
                curPicId = curPicUrl = curPicUrlLocal = '';
            }
        },
        showImageOverlay = function () {
            $.scrollLock(true);
            $('body').css('overflow', 'hidden');
            var result = curPicUrlLocal.search(".mp4");
            if(result >0){
                $overlayImg.css('opacity', '0');
                $('#img_loader').fadeIn('fast');
                $("#overlay_vid").css('display', 'block');
                $("#overlay_vid").css('opacity', '1');
                $("#overlay_vid > source").attr("src", curPicUrlLocal);
                $('#overlay_vid').get(0).load();
                $('#overlay_vid').get(0).play();
                $("#overlay_vid").show();
                $('#overlay_div').fadeIn(function (event) {
                    $('#img_loader').fadeOut('fast');
                    var $shareItem = $('.share_item');
                    $shareItem.css('height', $shareItem.width() + 'px');
                    $("#img_nav").css('width', $("#overlay_vid").width() + 16 + 'px');
                    $("#img_nav").css('height', $("#overlay_vid").height() + 16 + 'px');
                });
            }
            else{
                $("#overlay_vid").hide();
                $('#img_loader').fadeIn('fast');
                $overlayImg.css('opacity', '0').attr('src', curPicUrlLocal);
                $('#overlay_div').fadeIn(function (event) {
                    var $shareItem = $('.share_item');
                    $('#img_loader').fadeOut('fast');
                    $shareItem.css('height', $shareItem.width() + 'px');
                    $overlayImg.css('margin-left', '-' + $overlayImg.width() / 2 - 8 + 'px');
                    $("#img_nav").css('width', $overlayImg.width() + 16 + 'px');
                    $("#img_nav").css('height', $overlayImg.height() + 16 + 'px');
                });
            }

        },
        swipeImage = function (direction) {
            
            var $curPic = $('#pic_' + curPicId),
                curPicIndex = $curPic.index(),
                nextPicIndex = (direction === 'left') ? curPicIndex + 2 : curPicIndex,
                $nextPic = $photos.find('li:nth-child(' + nextPicIndex + ')');
            if ($nextPic.length) {
                $("#img_loader").show();
                setCurPic($nextPic);
                window.location.hash = curPicId;
                if ($nextPic.data("type") == "photo"){
                    $("#overlay_vid").get(0).pause();
                    $("#overlay_vid > source").attr("src", "");
                    $("#overlay_vid").hide();
                    $overlayImg.fadeTo('fast', 0, function () {
                        $overlayImg.attr('src', '');
                        $overlayImg.attr('src', curPicUrlLocal);
                        $overlayImg.css({'margin-left': '-' + $overlayImg.width() / 2 - 8 + 'px'});
                        $("#img_nav").css('width', $overlayImg.width() + 16 + 'px');
                        $("#img_nav").css('height', $overlayImg.height() + 16 + 'px');
                    });
                }else{
                    $overlayImg.hide();
                    $overlayImg.attr('src', '');
                    $("#overlay_vid").css('display', 'block');
                    $("#overlay_vid").css('opacity', '1');
                    $("#overlay_vid > source").attr("src", $nextPic.data('url_local'));
                    $('#overlay_vid').get(0).load();
                    $('#overlay_vid').get(0).play();
                    $("#overlay_vid").show();
                    $('#img_loader').fadeIn('fast');
                    $("#overlay_vid").fadeTo( "fast" , 1);
                    $("#img_nav").css('width', $("#overlay_vid").width() + 16 + 'px');
                    $("#img_nav").css('height', $("#overlay_vid").height() + 16 + 'px');
                    $('#img_loader').fadeOut('fast');
                }
            }
        },
        shareTweet = function () {
            $(".share_form_wrap").fadeOut('fast');
            if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
                $("#share_loader").fadeIn();
                $("#share_load_msg").html("Posting to Twitter");
            }

            var data = {
                'id': curPicId,
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
            };

            if (!APP.defaultTwitterMessage) {
                var message = prompt("Message?");
                if (message === null) {
                    // prompt cancelled
                    countdown('clk', 0, 5);
                    return;
                } else if (message) {
                    data['message'] = message;
                }
            }

            $.ajax({
                url: '/twitter/tweet/',
                data: data,
                type: 'POST',
                success: function (response) {
                    $("#share_div").removeClass('loading');
                    if (response.success !== 'undefined') {
                        if (location.hostname !== "whosevent.com") {
                            countdown('clk', 0, 5);
                        }
                        $shareInfo.find('#res_msg').html(response.message);
                        $shareInfo.fadeIn(function () {});
                        $("#share_loader").fadeOut();
                        $("#share_load_msg").html("");
                        $("#twitter_share").fadeIn();
                    } else {
                        alert("Sorry, something went wrong. please try again.");
                    }
                }
            });
        },
        shareTumblrPost = function () {
            // todo do this
            $(".share_form_wrap").fadeOut('fast');
            if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
                $("#share_loader").fadeIn();
                $("#share_load_msg").html("Posting to Tumblr");
            } else {}

            $.ajax({
                url: '/tumblr/post/',
                data: {
                    'id': curPicId,
                    'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
                },
                type: 'POST',
                success: function (response) {
                    $("#share_div").removeClass('loading');
                    if (response.success !== 'undefined') {
                        if (location.hostname !== "whosevent.com") {
                            countdown('clk', 0, 5);
                        }
                        $shareInfo.find('#res_msg').html(response.message);
                        $shareInfo.fadeIn(function () {
                        });
                        $("#share_loader").fadeOut();
                        $("#share_load_msg").html("");
                        $("#tumblr_share").fadeIn();

                    } else {
                        alert("Sorry, something went wrong. please try again.");
                    }
                }
            });
        },
        showFBFriendList = function () {
            $(".share_form_wrap").fadeOut('fast');

            if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
                // $("#share_loader").fadeIn();
                // $("#share_load_msg").html("who are you with?");
            } else {}

            $('#fb-friends').show();
            $('#share_div').css('display', 'block');
        },
        currentPhotoId = docCookies.getItem('currentPhotoId'),
       // currentPhotoId = docCookies.getItem('pic_19376'),
//        currentPhotoId = $('#pic_' + window.location.hash.replace('#', '')),
        loginSite = docCookies.getItem('loginSite');
//loginSite ="localhost";
    if (APP.twitterLoggedIn === true || APP.facebookLoggedIn === true || APP.tumblrLoggedIn === true) {
        $("#social-logout").fadeIn();
    } else {
        $("#social-logout").fadeOut();
    }
$("#photos li.photo.small").css('height', ($("#photos li.photo.small").width())*3/4+"px");
//    $photos.find('li.photo.small').css('height', $photos.find('li.photo.small').width() + 'px');
//    
//    $photos.find('li.photo.small').css('height','315px');
//     $photos.find("li.photo.small").css('width', "500px");


//  $photos.find("li.photo.small").css('height', "225px");
//        $photos.find("li.photo.small").css('width', "300px");
    if (window.location.hash.length) {
//        var $pic = $('#pic_' + window.location.hash.replace('#', ''));
        var $pic = $('#photo_id').val();
        setCurPic($pic);
        showImageOverlay($pic);
    }

    //open large pic
    $photos.on('touchstart, click', 'li.photo.small', function (event) {
        var $pic = $(this);
        setCurPic($pic);
        window.location.hash = $pic.data('id');
        showImageOverlay($pic);
    });

$('#overlay_div').on('touchstart, click', ".close_pic", function (event) { closeOverlay();});

function closeOverlay(){
        $.scrollLock(false);
        $('body').css('overflow', 'visible');
        var scr = $(window).scrollTop();
        $(".share_form_wrap").fadeOut('100');
        $("#share_div").fadeOut('100');
        $("#overlay_vid").get(0).pause();
        $("#overlay_vid > source").attr("src", "");
        setCurPic();
        $(".search-choice-close").trigger('click');
        //$("li.result-selected").css('background','#f00');
        $('#chooser').trigger('liszt:updated');
        $(window).scrollTop(scr);
        $("#overlay_div").fadeOut('200', function (event) {
            window.location.hash = '';
            $(window).scrollTop(scr);
            $overlayImg.attr('src', '').fadeTo('fast', 0, function () {
            });
            $("#heading").removeClass("ui-fixed-hidden").addClass("ui-fixed");
        });
        return false;
    }

    //handle swipe
    $('#overlay_div').on('swipeleft', function (event) {
        swipeImage('left');
    });
    $('#overlay_div').on('click', '.left-btn', function (event) {
        event.preventDefault();
        swipeImage('right');
    });

    $('#overlay_div').on('swiperight',  function (event) {
        swipeImage('right');
    });
    $('#overlay_div').on('click', '.right-btn', function (event) {
        event.preventDefault();
        swipeImage('left');
    });

    $('#header').on('click', '#social-logout', function (event) {
        socialLogOut();
    });

    $("#overlay_back").on('click', function (event) {
        closeOverlay();
        return false;
    });

    $("#img_bk").on('click', function (event) {
        closeOverlay();
        return false;
    });

    $shareInfo.on('click', '#share-more', function (event) {
        event.preventDefault();
        clearInterval(APP.interval);
        $('.cancel_share').trigger('click');
        $shareInfo.find('#log_msg').html(
            'You will be logged out in <span id="clk">05</span> seconds'
        );
    });

    $shareInfo.on('touchstart, click', '#logout-now', function (event) {
        event.preventDefault();
        socialLogOut();
        $('.cancel_share').trigger('click');
        closeOverlay();
        $shareInfo.find('#log_msg').html(
            'You will be logged out in <span id="clk">05</span> seconds'
        );
    });

    $('.cancel_share').on('touchstart, click', function (event) {
        event.preventDefault();
        $(".share_form_wrap").fadeOut();
        $("#share_div").fadeOut();
        $(".search-choice-close").trigger('click');
    });

    // tweet
    $('.share_item').on('touchstart, click', '.tweet', function (event) {
        event.preventDefault();
        $(".share_form_wrap").fadeOut();
        $("#share_div").fadeOut(function () {
            if (!APP.twitterLoggedIn) {
                docCookies.setItem('currentPhotoId', curPicId);
                docCookies.setItem('loginSite', 'twitter');
                APP.showTwitterPopup();

                if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
                    $("#share_loader").fadeIn();
                    $("#share_load_msg").html("Connecting to Twitter");
                    $("#share_div").fadeIn();
                }

            } else {
                shareTweet();
                $("#twitter_share").fadeIn();
                $("#share_div").fadeIn();
            }
        });
    });

    // facebook
//    $('.share_item').on('touchstart, click', '.post', function (event) {
////alert('facebook');
//        event.preventDefault();
//        $(".share_form_wrap").fadeOut();
//        $("#share_div").fadeOut(function () {
//            if (!APP.facebookLoggedIn) {//alert('login');
//                docCookies.setItem('currentPhotoId', curPicId);
//                docCookies.setItem('loginSite', 'facebook');
//                APP.showFacebookPopup();//alert('popup');
//
//                if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
//                    // $("#share_loader").fadeIn();
//                    // $("#share_load_msg").html("Connecting to Facebook");
//                    // $("#share_div").fadeIn();
//                }
//                else {
//                }
//                $("#share_loader").fadeOut();
//            } else {
//                showFBFriendList();
//                $("#chooser").chosen();
//                $("#fb_share").fadeIn();
//                $("#share_div").fadeIn();
//            }
//        });
//    });
    $('#fb-friends').on('touchstart, click', '#fb-submit', function (event) {//alert($('#fb-form').attr('rel')); alert('http://' + document.domain + '/buzzybooth/photofeed/photo_shared');
        event.preventDefault();
        // $("#fb-friends #friends").hide();
        // $("#fb-friends .share_btn_wrap").hide();
        if ($('#friend-tag').length > 0) {
            $('#friend-tag').removeAttr("selected");
        }

        $(".share_form_wrap").hide();
        $("#share_loader").fadeIn();
        $("#share_load_msg").html('uploading to Facebook');
        //********************custom**********
//         var result =$.ajax({
//            type: "POST",
//            url: $('#fb-form').attr('rel'),
//            data: $('#fb-form').serializeArray(),
//            async: false
//        }).responseText; 
//        if(result == "success"){
//            $("#share_loader").fadeOut();
//                $("#share_load_msg").html('');
//                $("#share_div").removeClass('loading');
//                if (response.success !== 'undefined') {
//                    $('#fb-friends').hide();
//                    $("#share_loader").fadeOut();
//                    $("#share_load_msg").html("");
//                    countdown('clk', 0, 5);//}
//                    $shareInfo.find('#res_msg').html(response.message);
//                    $shareInfo.fadeIn(function () {
//                    });
//                } else {
//                    alert("Sorry, something went wrong. please try again.");
//                }
//        } else {
//            alert("Sorry, something went wrong. please try again.");
//        }
        //****************custom**************
        $.ajax({
//            url: '/facebook/post/',
//            url:  'http://' + document.domain + '/buzzybooth/photofeed/photo_shared',
            url: $('#fb-form').attr('rel'),
            data: $('#fb-form').serializeArray(),
//            traditional: true,
            type: "POST",
            success: function (response) { //alert(response);
                $("#share_loader").fadeOut();
                $("#share_load_msg").html('');
                $("#share_div").removeClass('loading');
                if (response.success !== 'undefined') {
                    $('#fb-friends').hide();
                    $("#share_loader").fadeOut();
                    $("#share_load_msg").html("");
                    countdown('clk', 0, 5);//}
                    $shareInfo.find('#res_msg').html(response.message);
                    $shareInfo.fadeIn(function () {
                    });
                } else {
                    alert("Sorry, something went wrong. please try again.");
                }
            }
//             error: function(xhr, status, error){						
//                                console.log(xhr.readyState);
//                                alert("An AJAX error occured: " + status + "\nError: " + error);
//                            }
        });
    });

    // tumblr
    $('.share_item').on('touchstart, click', '.tumblr_post', function (event) {
        event.preventDefault();
        $(".share_form_wrap").fadeOut();
        $("#share_div").fadeOut(function () {
            if (!APP.tumblrLoggedIn) {
                docCookies.setItem('currentPhotoId', curPicId);
                docCookies.setItem('loginSite', 'tumblr');
                APP.showTumblrPopup();

                if (navigator.userAgent.match(/Android|iPad|IEMobile/i)) {
                    $("#share_loader").fadeIn();
                    $("#share_load_msg").html("Connecting to Tumblr");
                    $("#share_div").fadeIn();
                }
            } else {
                shareTumblrPost();
                $("#tumblr_share").fadeIn();
                $("#share_div").fadeIn();
            }
        });
    });

    // email photo
    $('.share_item').on('touchstart, click', '.email', function (event) {
        event.preventDefault();
        $(".share_form_wrap").fadeOut();
        $("#share_div").fadeOut(function () {
            $("#email_add").val('');
//            $("#email_add2").val('');
//            $("#email_add3").val('');
            $("#email_share").fadeIn();
            $("#share_div").fadeIn();
            $("#email_id").val($(this).data('id'));
        });
    });

    $("#mail_form").on("submit", function (event) {
        event.preventDefault();
        realign();
        $(window).scrollTop();

        var email_address = $("#email_add").val(),
            email_address2 = $("#email_add2").val(),
            email_address3 = $("#email_add3").val();
        if (!email_address) {
            return;
        }
        $(".share_form_wrap").hide();
        // $(".share_form_wrap").fadeOut('fast', function () {
            $("#share_load_msg").html("Sending Email");
            $("#share_loader").fadeIn();
        // });

        $.ajax({
            url: '/email-photo/' + curPicId + '/',
            data: {
                'email_address': email_address,
                'email_address2': email_address2,
                'email_address3': email_address3
            },
            success: function (response) {
                if (response.success !== 'undefined') {
                    $shareInfo.find('#res_msg').html(response.message);
                } else {
                    $shareInfo.find('#res_msg').html("Sorry, could not email the photo.");
                }
                $("#share_loader").fadeOut(function (event) {
                    $("#share_load_msg").html("");
                    $("#log_msg").hide();
                    $(".log_btn").hide();
                    $shareInfo.fadeIn(function () {
                    });
                });
                setTimeout(function () {

                    //$('#cancel_share').trigger('click');
                    $(".share_form_wrap").fadeOut();
                    $("#share_div").fadeOut();
                }, 3000);
            }
        });
        //return false;
    });

    // sms photo
    $('.share_item').on('touchstart, click', '.sms', function (event) {
        event.preventDefault();

        $(".share_form_wrap").fadeOut();

        $("#share_div").fadeOut(function () {
            $("#sms_share").fadeIn();
            $("#share_div").fadeIn();
            $("#sms_id").val($(this).data('id'));
        });
    });

    // fotomoto
    $('.share_item').on('touchstart, click', '.buy-print', function (event) {
        FOTOMOTO.API.showWindow(FOTOMOTO.API.PRINT, "overlay_img");
    });

    $("#sms_form").on("submit", function (event) {
        event.preventDefault();
        var phone_number = $("#sms_num").val();
        if (!phone_number) {
            return;
        }
        $(".share_form_wrap").fadeOut('fast');
        $("#share_loader").fadeIn();
        $("#share_load_msg").html("Sending SMS");
        $.ajax({
            url: '/sms-photo/' + curPicId + '/',
            data: {'phone_number': phone_number},
            success: function (response) {
                if (response.success !== 'undefined') {
                    $shareInfo.find('#res_msg').html(response.message);
                } else {
                    $shareInfo.find('#res_msg').html('Sorry, could not text the photo.');
                }
                $("#share_loader").fadeOut(function (event) {
                    $("#share_load_msg").html("");
                    $("#log_msg").hide();
                    $(".log_btn").hide();
                    $shareInfo.fadeIn(function () {
                    });
                });
            }
        });
    });

    $('.share_item').on('touchstart, click', '.print', function (event) {
        event.preventDefault();
        $('#print-frame').attr('src', '/print/' + curPicId + '/');//[0].contentWindow.print();
        //window.print();
    });

    // deal with orientation change
    window.addEventListener("orientationchange", function () {}, false);
    function realign(){
        if (window.innerHeight <= window.innerWidth) {
            //alert('landscape');
        }
        else if (window.innerHeight > window.innerWidth) {
            //alert('portrait');
        }
        $(".share_item").css('width', 100 / $(".share_items li").size() - 2 + "%");

         $("#photos li.photo.small").css('height', ($("#photos li.photo.small").width())*3/4+"px");
//        $photos.find("li.photo.small").css('height', ($photos.find("li.photo.small").width()) + "px");
//        $photos.find("li.photo.small").css('height', "315px");


//        $photos.find("li.photo.small").css('height', "225px");
//        $photos.find("li.photo.small").css('width', "300px");
        $overlayImg.css('margin-left', "-" + $overlayImg.width() / 2 - 8 + 'px');
        $("#img_nav").css('width', $overlayImg.width() + 16 + 'px');
        $("#img_nav").css('height', $overlayImg.height() + 16 + 'px');
        $(".share_item").css('height', $(".share_item").width() + "px");
    }

    //change elements when window resizes
    window.onresize = function (event) {
        realign();
    };

    $("#overlay_img").bind("load", function () {
        $overlayImg.css('margin-left', "-" + $overlayImg.width() / 2 - 8 + 'px');
        $("#img_loader").fadeOut('fast');
        $overlayImg.fadeTo('slow', 1, function () {
            $("#img_nav").css('width', $overlayImg.width() + 16 + 'px');
            $("#img_nav").css('height', $overlayImg.height() + 16 + 'px');
        });
    });

    //if (currentPhotoId) {
        if (1) {
        //console.log('hey', currentPhotoId);
        $('#pic_' + currentPhotoId).click();

        if (loginSite === 'twitter') {
            APP.twitterLoggedIn = true;
            $('#tweet_link').click();
        } else if (loginSite === 'facebook') {
            APP.facebookLoggedIn = true;
            $('#fb_link').click();
        }
    }
//    docCookies.removeItem('currentPhotoId');
//    docCookies.removeItem('loginSite');
});

$.scrollLock = ( function scrollLockClosure() {
'use strict';
 
var $html = $( 'html' ),
// State: unlocked by default
locked = false,
// State: scroll to revert to
prevScroll = {
scrollLeft : $( window ).scrollLeft(),
scrollTop : $( window ).scrollTop()
},
// State: styles to revert to
prevStyles = {},
lockStyles = {
//'overflow-y' : 'scroll',
'position' : 'fixed',
'width' : '100%'
};
 
// Instantiate cache in case someone tries to unlock before locking
saveStyles();
 
// Save context's inline styles in cache
function saveStyles() {
var styleAttr = $html.attr( 'style' ),
styleStrs = [],
styleHash = {};
 
if( !styleAttr ){
return;
}
 
styleStrs = styleAttr.split( /;\s/ );
 
$.each( styleStrs, function serializeStyleProp( styleString ){
if( !styleString ) {
return;
}
 
var keyValue = styleString.split( /\s:\s/ );
 
if( keyValue.length < 2 ) {
return;
}
 
styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
} );
 
$.extend( prevStyles, styleHash );
}
 
function lock() {
var appliedLock = {};
 
// Duplicate execution will break DOM statefulness
if( locked ) {
return;
}
 
// Save scroll state...
prevScroll = {
scrollLeft : $( window ).scrollLeft(),
scrollTop : $( window ).scrollTop()
};
 
// ...and styles
saveStyles();
 
// Compose our applied CSS
$.extend( appliedLock, lockStyles, {
// And apply scroll state as styles
'left' : - prevScroll.scrollLeft + 'px',
'top' : - prevScroll.scrollTop + 'px'
} );
 
// Then lock styles...
$html.css( appliedLock );
 
// ...and scroll state
$( window )
.scrollLeft( 0 )
.scrollTop( 0 );
 
locked = true;
}
 
function unlock() {
// Duplicate execution will break DOM statefulness
if( !locked ) {
return;
}
 
// Revert styles
$html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );
 
// Revert scroll values
$( window )
.scrollLeft( prevScroll.scrollLeft )
.scrollTop( prevScroll.scrollTop );
 
locked = false;
}
 
return function scrollLock( on ) {
// If an argument is passed, lock or unlock depending on truthiness
if( arguments.length ) {
if( on ) {
lock();
}
else {
unlock();
}
}
// Otherwise, toggle
else {
if( locked ){
unlock();
}
else {
lock();
}
}
};
}() ); 