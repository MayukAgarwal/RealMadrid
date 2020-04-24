(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });



    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $(document).mousemove(function (e) {
        $('#screen').text((e['screenX']) + ' ' + (e['screenY']));
    });

})(jQuery); // End of use strict

// Change Theme 
function themePicker(selected) {
    switch (selected) {
        case 1:
            document.querySelector("#masthead").style.backgroundColor = "#FFB7A1";
            break;
        case 2:
            document.querySelector("#masthead").style.backgroundColor = "#EFBC68";
            break;
        case 3:
            document.querySelector("#masthead").style.backgroundColor = "#5F9595";
            break;
        default:
            document.querySelector("#masthead").style.backgroundColor = "#00529f";
    }
};

// Change Star Color
function toggleAttributeStar() {
    let x = document.querySelectorAll(".divider-custom-line");
    let y = document.getElementsByClassName("star-icon")
    if (!x[0].getAttribute('style')) {
        x[0].setAttribute('style', "background-color: #e09082; background-image: linear-gradient(315deg, #e09082 0%, #f8dba4 74%);");
        x[1].setAttribute('style', "background-color: #e09082; background-image: linear-gradient(315deg, #f8dba4  0%, #e09082 74%);");
        y[0].setAttribute('style', "color: #f8dba4;");
    } else {
        x[0].removeAttribute('style');
        x[1].removeAttribute('style');
        y[0].removeAttribute('style');
    }
};

// Clock Script
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {

    hrPosition = hrPosition + (3 / 360);
    minPosition = minPosition + (6 / 60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);


$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});
