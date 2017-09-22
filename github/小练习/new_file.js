function $(select,ranger){
	if(typeof select == 'string'){
		/*if(ranger = undefined){
			ranger=document
		}
		ranger = ranger?ranger:docement;
		ranger = ranger||document;*/
		
		let selector= select.trim()
		let first = select.charAt(0)
		if(first=='#'){
			 return  ranger.getElementById(selector.substring(1))
		}else if(first=='.'){
			 return  ranger.getElementByClassName(selector.substring(1))
			
		}else if(/^[a-zA-Z][a-zA-Z]{0,8}$/.test(selector)){
			 return  ranger.getElementByTagName(selector)
		}
	}else(typeof == 'function'){
		window.onload=function(){
			select();
		}
	}
}
