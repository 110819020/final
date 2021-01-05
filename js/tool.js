$(document).ready(function() {
    
    //跳轉
    $('#nav-polygon').click(function() {
        $('html,body').animate({ scrollTop: $(".polygon").offset().top - 50 }, 200)
    });
    $('#nav-deformer').click(function() {
        $('html,body').animate({ scrollTop: $(".deformer").offset().top - 50 }, 200)
    });
    $('#nav-rotation').click(function() {
        $('html,body').animate({ scrollTop: $(".rotation").offset().top - 50 }, 200)
    });
    $('#nav-path').click(function() {
        $('html,body').animate({ scrollTop: $(".path").offset().top - 50 }, 200)
    });
    $('#nav-parameter').click(function() {
        $('html,body').animate({ scrollTop: $(".parameter").offset().top - 50 }, 200)
    });

});