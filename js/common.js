$(document).ready(function() {
    
    //執行回到頂部
	$('.return-btn').click(function(){ 
		$('html,body').animate({scrollTop:0}, 100);
    });

    //顯示與消失回頂端按鈕
    $(window).scroll(function(){
        var px = 100;
        if (document.body.scrollTop > px || document.documentElement.scrollTop > px) {
            $('.return-btn').css('display', 'block');/*顯示*/
        } else {
            $('.return-btn').css('display', 'none');/*隱藏*/
        }
    });

    //burger animate and RWD setting
    var w = $(window).width();
    $(".burger").click(function() {
        $(this).toggleClass("is-change");
        
        if($(".lessons").hasClass("les-po-50")){
            $(".lessons").removeClass("les-po-50");
            $(".lessons").addClass("les-po-0");
        }
        else if($(".lessons").hasClass("les-po-0")){
            $(".lessons").removeClass("les-po-0");
            $(".lessons").addClass("les-po-50");
        }
    });
    console.log(w);

    if(w >= 576){
        $(".lessons").addClass("les-po-0");
    }
});