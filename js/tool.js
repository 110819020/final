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

    //執行回到頂部
	$('.return-btn').click(function(){ 
		$('html,body').animate({scrollTop:0}, 200);
    });

    //顯示與消失回頂端按鈕
    $(window).scroll(function(){
        var px = 100;
        if (document.body.scrollTop > px || document.documentElement.scrollTop > px) {
            $('.return-btn').css('display', 'block');/*顯示*/
        } else {
            $('.return-btn').css('display', 'none');/*隱藏*/
        }
    })

});