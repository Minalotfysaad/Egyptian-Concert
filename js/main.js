$(document).ready(function () {
    // Nav Open Handler
    $(".nav-toggle").click(function () {
        $(".nav-container").animate({ left: 0 }, 500);
    });

    // Change color of nav-toggle on scroll
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var homeHeight = $("#home").outerHeight();
        var scrollPercentage = Math.min(scrollTop / homeHeight, 1);

        if (scrollPercentage > 0.5) {
            $(".nav-toggle").addClass("scrolled");
        } else {
            $(".nav-toggle").removeClass("scrolled");
        }

        // Scroll-Spy Effect
        var sections = $("section");
        sections.each(function () {
            var top = $(this).offset().top - 50;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr("id");
            if (scrollTop >= top && scrollTop <= bottom) {
                $(".nav-list .nav-item").removeClass("active");
                $(".nav-list .nav-item a[href='#" + id + "']")
                    .parent()
                    .addClass("active");
            }
        });
    });

    // Nav Close Handler
    $(".close-toggle").click(function () {
        let navWidth = $(".nav-box").outerWidth();
        $(".nav-container").animate({ left: -navWidth }, 500);
    });

    // Nav Active Handler
    $(".nav-list .nav-item").click(function () {
        $(".nav-list .nav-item").removeClass("active");
        $(this).addClass("active");
    });

    //Accordion Handler
    $(".accordion .item>h3").click(function () {
        $(this).next(".content").slideToggle();
        $(".content").not($(this).next(".content")).slideUp();
    });

    // Counter Handler
    // Set the date
    var concertDate = new Date("Dec 31, 2024 23:59:59").getTime();

    var x = setInterval(function () {
        // today's date and time
        var now = new Date().getTime();
        var timeLeft = concertDate - now;

        // Time calculations
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        // Append
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // If the count down is over
        if (timeLeft < 0) {
            clearInterval(x);
            $("#days").text("0");
            $("#hours").text("0");
            $("#minutes").text("0");
            $("#seconds").text("0");
        }
    }, 1000);

    // Form Handler
    //Prevent Default
    $("form").submit(function (e) {
        e.preventDefault();
    });

    // Textarea handler
    $("textarea").keyup(function () {
        let count = $(this).val().length;
        $(".char-counter").text(100 - count <= 0 ? "No" : 100 - count);
    });
});
