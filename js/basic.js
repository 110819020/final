$(document).ready(function() {

    //跳轉
    $('#nav-intro').click(function() {
        $('html,body').animate({ scrollTop: $(".introduction").offset().top - 50 }, 200)
    });
    $('#nav-develop').click(function() {
        $('html,body').animate({ scrollTop: $(".development").offset().top - 50 }, 200)
    });
    $('#nav-feature').click(function() {
        $('html,body').animate({ scrollTop: $(".feature").offset().top - 50 }, 200)
    });
    $('#nav-interface').click(function() {
        $('html,body').animate({ scrollTop: $(".interface").offset().top - 50 }, 200)
    });
});