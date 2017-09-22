/*获取/设置元素的内容
 
 
 * */
function html(element,content){
	if(arguments.length==2){
	    element.innerHtml=content
	}else if(arguments.length==1){
		 return element
		
	}
}
function Text(element,content){
	if(arguments.length==2){
	    element.innerText=content
	}else if(arguments.length==1){
		 return element
		
	}
}
