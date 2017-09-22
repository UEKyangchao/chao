/*
* @Author: yangchao
* @Date:   2017-07-30 23:46:04
* @Last Modified by:   yangchao
* @Last Modified time: 2017-07-31 09:18:03
*/

'use strict';
// document.write("<table width='800px' height='800px' border='1'cellspacing='0' >" )
//  for (var i=1;i<=9;i++){
//  	document.write("<tr>")
//  	for (var j=1;j<=i;j++){
//  		document.write("<td>")
//  		    document.write(i+"*"+j+"="+i*j)
//  		document.write("<td>") 	
//  	}
//  	document.write("</tr>")
//  }


 for (var i=1;i<=10;i++){
 	for (var j=1;j<=2*i-1;j++){
 		document.write('*')
 	}
 	document.write("</br>")
 }
 // document.write('</p>')
 for (var i=10;i>=1;i--){
 	for (var j=2*i-1;j--;j>=1){
 		document.write('*')
 	}
 	document.write("</br>")
 }
 // document.write('</p>')
document.write("<p align='center'>")
 for (var i=1;i<=10;i++){
 	for (var j=1;j<=2*i-1;j++){
 		document.write('*')
 	}
 	document.write("</br>")
 }
 // document.write('</p>')
 document.write("<p align='center'>")
 for (var i=10;i>=1;i--){
 	for (var j=2*i-1;j--;j>=1){
 		document.write('*')
 	}
 	document.write("</br>")
 }
 document.write('</p>')

