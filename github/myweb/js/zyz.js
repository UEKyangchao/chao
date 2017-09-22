
//轮播图
$(function(){
	//自动轮播
	let num=0;
	let len=$(".pic li a img").length;
	let t=setInterval(move,3000)
	function move(){
//		num=(++num+len)%len;
        num++;
        if(num>len-1){
        	num=0;
        }
		$(".pic li a img").css({opacity:0.3,zIndex:0})
	    $(".pic li a img").eq(num).animate({opacity:1}).css("z-index",1)
	    $(".btns li").eq(num).addClass("hot").siblings().removeClass("hot")
	}
	//左右箭头按钮
	$(".left").click(function(){
		num=--num%len;
		$(".pic li a img").css({opacity:0.3,zIndex:0})
	    $(".pic li a img").eq(num).animate({opacity:1}).css("z-index",1)
	    $(".btns li").eq(num).addClass("hot").siblings().removeClass("hot")
	})
	$(".right").click(function(){
		move();
	})
	//小轮播点事件
	$(".btns li").bind("click",function(){
		var index=$(this).index(".btns li");
		num=index;
	    $(".pic li a img").css({opacity:0.3,zIndex:0})
	    $(".pic li a img").eq(num).animate({opacity:1}).css("z-index",1)
	    $(".btns li").eq(num).addClass("hot").siblings().removeClass("hot")
	})
	//鼠标移入事件
	$(".pic li a img, .left,.right,.btns li ").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,3000)
	})
	//失去焦点获得焦点事件
	$(window).blur(function(){
			clearInterval(t)
	})
	$(window).focus(function(){
			t=setInterval(move,3000)
	})
})
//旅途动态
$(function(){
    	function autoplay1(){
	    	$(".bg1").animate({"opacity":0},2000);
	    	$(".bg2").animate({"opacity":1},2000);
    	}
    	function autoplay2(){
	    	$(".bg1").animate({"opacity":1},2000);
	    	$(".bg2").animate({"opacity":0},2000);
    	}
    	setInterval(function(){
	    		if ($(".bg1").css("opacity")==0) {
	    		    autoplay2()
	    	    }else if($(".bg1").css("opacity")==1){
	    		   autoplay1()
	    	    }
    	},4000);
})
//旅途风景
//$(function(){
//	let cur=$(".view li img").index(".zhezhao");
//	$(".view li img").hover(function(){
//		$(".zhezhao").slideUp("slow")
//		$(this).parent().next().slideDown("slow");
//	},function(){
//		$(".zhezhao").slideUp("slow")
//	})
//})
$(function(){
	$('.main').sliphover();
})
