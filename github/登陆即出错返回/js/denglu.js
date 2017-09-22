/*
* @Author: yangchao
* @Date:   2017-08-09 17:00:20
* @Last Modified by:   yangchao
* @Last Modified time: 2017-08-09 17:54:03
*/

'use strict';
window.onload=function(){
	let btn = document.getElementById('btn')
	let user = document.getElementById('user')
	let pass = document.getElementById('pass')
	btn.onclick = function(){
	if(user.value=='zhangsan'&& pass.value=='123456'){
		alert('success')
	}else{
		open('chucuo.html');
	}
	
}
}