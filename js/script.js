//Loading 動畫控制
window.onload = function() { 
    $('.loader').delay(200).fadeOut();
    $('#loading').delay(200).fadeOut();
};

$(document).ready(function() {

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
    });

});