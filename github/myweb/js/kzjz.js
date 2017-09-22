window.onload=function(){
        let start=document.querySelector('.star-big');
        let widths=start.offsetWidth;
        let sbig=start.getElementsByClassName('star-pro')[0];
         let sleft=document.querySelector('.star-ttr1');
        let sright=document.querySelector('.star-ttr2');
        let lefts=0
           // 初始状态
           sright.style.color='#B5B0B0';
           sright.classList.add('shouxing'); 
             sright.style.corsur='pointer';
           // 右
           sright.onmouseover=function(){
                  sright.style.color='#ff6700';
              }
           sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
              }
          let st= setInterval(fn,5000)
           // 点击左边
          function moveL(){
                  sbig.style.left=0+'px';
                      // 手型设置
              sright.classList.add('shouxing');
              sleft.classList.remove('shouxing');
               // 颜色设置
              sleft.style.color='#e0e0e2';
              sright.style.color='#B5B0B0';
               // 移入效果
               // 左
               sleft.onmouseover=function(){
                  sleft.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sleft.onmouseout=function(){
                  sleft.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
               // 右
              sright.onmouseover=function(){
                  sright.style.color='#ff6700';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
                   st= setInterval(fn,5000)

              }
                  lefts=0;
                  // clearTimeout(st)
                  
            }

             sleft.onclick=moveL;
            console.log(lefts)
            // 点击右边
            function moveR(){
                  // 手型设置
                 sleft.classList.add('shouxing');
                  sright.classList.remove('shouxing');
                 // 颜色设置
                  sright.style.color='#e0e0e2';
                  sleft.style.color='#B5B0B0';
                  // 移入效果
                  // 左
                  sleft.onmouseover=function(){
                      sleft.style.color='#ff6700';
                      clearTimeout(st)
                  }
                  sleft.onmouseout=function(){
                      sleft.style.color='#B5B0B0';
                       st= setInterval(fn,5000)
                  }
                  // 右
                  sright.onmouseover=function(){
                      sright.style.color='#e0e0e2';
                      clearTimeout(st)

                  }
                  sright.onmouseout=function(){
                      sright.style.color='#e0e0e2';
                       st= setInterval(fn,5000)

                  }
                sbig.style.left=`${-widths}px`;

                 lefts=-widths;
            }
           sright.onclick=moveR;


        function fn(){
              lefts=sbig.offsetLeft;
          if(lefts>=0){
            // 手型设置
             sleft.classList.add('shouxing');
              sright.classList.remove('shouxing');
             // 颜色设置
              sright.style.color='#e0e0e2';
              sleft.style.color='#B5B0B0';
              // 移入效果
              // 左
              sleft.onmouseover=function(){
                  sleft.style.color='#ff6700';
                  clearTimeout(st)
              }
              sleft.onmouseout=function(){
                  sleft.style.color='#B5B0B0';
                   st= setInterval(fn,5000)
              }
              // 右
              sright.onmouseover=function(){
                  sright.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
             sbig.style.left=`${-widths}px`;
               // moveR();
          }
          if(lefts<=(-widths)){
            // console.log(lefts)
              // 手型设置
              sright.classList.add('shouxing');
              sleft.classList.remove('shouxing');
               // 颜色设置
              sleft.style.color='#e0e0e2';
              sright.style.color='#B5B0B0';
               // 移入效果
               // 左
               sleft.onmouseover=function(){
                  sleft.style.color='#e0e0e2';
                  clearTimeout(st)

              }
              sleft.onmouseout=function(){
                  sleft.style.color='#e0e0e2';
                   st= setInterval(fn,5000)

              }
               // 右
              sright.onmouseover=function(){
                  sright.style.color='#ff6700';
                  clearTimeout(st)

              }
              sright.onmouseout=function(){
                  sright.style.color='#B5B0B0';
                   st= setInterval(fn,5000)

              }
             sbig.style.left=0+'px';
          }
        }
       
}
