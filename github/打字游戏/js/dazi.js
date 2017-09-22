/*
* @Author: yangchao
* @Date:   2017-08-23 09:16:01
* @Last Modified by:   yangchao
* @Last Modified time: 2017-08-24 00:09:43
*/
//定义一个数组，让数组的长度成为以后要调用的this.length
function Game(){
	this.charsheet=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
	this.length=5;
	this.elements=[]
	this.speed = 10;
	this.score = 0;
	this.scoreObj=document.querySelector('div>span')
	this.gq=10;
	this.position=[];
	this.offspan=1;
	this.off=document.querySelector('.offce>span');

}
//从该数组中抽取元素，抽取的长度为this.length
Game.prototype={
	//让游戏开始
	startgame:function (){
		//抽取this.length个元素
		this.getchars(this.length)
		this.drop();
		this.key();
		this.off.innerText=this.offspan;

		},
		getchars:function(length){
			for(i=0;i<this.length;i++)
				//抽取单个元素
				this.getchar();
        },
        getchar:function(){
        	//let num =Math.floor(Math.random()*this.charsheet.length)
        	let num;
        	let divs=document.createElement('div')
        	//let lefts =(window.innerWidth-400)*Math.random()+200;
        	let lefts;
        	let tops =Math.random()*200;
        	do{
        		num =Math.floor(Math.random()*this.charsheet.length)
        	}while(this.checkRepeat(num));
        	do{
        		lefts =(window.innerWidth-400)*Math.random()+200
        	}while(this.checkPosition(lefts));

        	divs.classList.add('char')
        	divs.style.cssText=`
        	left:${lefts}px;top:${tops}px;
        	`
        	divs.innerText=this.charsheet[num];
        	document.body.appendChild(divs);
        	this.elements.push(divs)
        	this.position.push(lefts)
        },
        checkRepeat:function(num){
        	return this.elements.some(value=>value.innerText==this.charsheet[num])
        },
        checkPosition:function(lefts){
        	
        	return this.position.some(function(value){
        		return Math.abs(value-lefts)<50;
        	});
        },
        drop:function(){
        	this.t = setInterval(()=>{
        		//console.log(this)
        		for(let i=0;i<this.elements.length;i++){
        			let topps = this.elements[i].offsetTop;
        			
        			this.elements[i].style.top=`${topps+this.speed}px`;
        			if(topps>500){
        				document.body.removeChild(this.elements[i])
        				this.elements.splice(i,1)
        				this.position.splice(i,1)
        			}
        			if(this.elements.length<this.length){
        				this.getchar();
        			}

        		}
        	},500)
        	
        },

        key:function(){
        		let that = this ;
        		document.onkeydown=function(e){
        			let char = String.fromCharCode(e.keyCode);
        			for (let i = 0;i<that.elements.length;i++){
        				if (char == that.elements[i].innerText){
        					document.body.removeChild(that.elements[i])
        				    that.elements.splice(i,1)
        				    that.position.splice(i,1)
        				    that.score++;
        				    that.scoreObj.innerText=that.score;
        				    if(that.score==that.gq){
        				    	that.next()
        				    	that.offspan++;
        				    	that.off.innerText=that.offspan;
        				    }
        				    console.log( that.scoreObj.innerText)
        				}
        			}
        		}
        },
        next:function(){
        	clearInterval(this.t);
        	for(let i = 0;i<this.elements.length;i++){
        		document.body.removeChild(this.elements[i]);
        	}
        	this.elements=[];
        	this.position=[];

        	this.length++;
        	this.gq+=10;
        	this.startgame();
        }
// var pg=document.getElementById('pg');
//  setInterval(function(e){
//       if(pg.value!=100) pg.value++;
//       else pg.value=0;
// },100);
}

