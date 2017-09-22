/*
* @Author: yangchao
* @Date:   2017-08-09 17:13:36
* @Last Modified by:   yangchao
* @Last Modified time: 2017-08-09 17:40:26
*/

'use strict';
window.onload =function(){
	let error =document.getElementById('error');
   setInterval(function(){
   	if(!parseInt(error.innerText)){
   		// clearInterval(t);
   		close();
   	}
   	error.innerText-=1;
   },1000)
}	