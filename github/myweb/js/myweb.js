$(function(){
//轮播图开始
 let now=0;
   let t=setInterval(fn,5000);
function fn(){
//	console.log(now)
	now++;
	if(now==$(".big").length){
		now=0;
	}
	$(".big").animate({opacity:0,zIndex:0},0);
//	console.log($(".big"))
	$(".big").eq(now).animate({opacity:1,zIndex:999},50)
//	console.log($(".big").eq(now))
}
//fn();
//轮播图结束
	 
	 
})	 	