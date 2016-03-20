window.onload=function(){
	var bird={
		x:140,y:284,w:40,h:40
	}
	var guandaoT=[
	    {x:345,y:0,w:60,h:230},
		{x:535,y:0,w:60,h:230}
	]
	var guandaoB=[
		{x:345,y:338,w:60,h:230},
		{x:535,y:338,w:60,h:230}
	]
    var canvas=document.querySelector('#canvas');
    var ctx=document.querySelector('#canvas').getContext('2d');
    var e=canvas.offsetWidth;
    // console.log(e);


    var birdimg=document.querySelector('#sucai');
	var draw=function(){
		ctx.clearRect(0,0,320,568);
		var sjs=Math.random()*100+180;
		//画鸟
		bird.y += 2;
        ctx.drawImage(birdimg,0,0,170,150,190,bird.y,40,40)
  

		// ctx.fillRect(140,bird.y,bird.w,bird.h);

		//管道
    var pipe1=document.querySelector('#pipe1');
    var pipe2=document.querySelector('#pipe2');

		var vs;
    	for(var i=0;i<guandaoT.length;i++){
    		var d=guandaoT[i];
    		if(recvsrec(bird,d)){
    			vs=true;
    		}
    		d.x -= 1;
    		if(d.x <= -30){
    			d.x = 345;
    			d.h = sjs;
    		}
            ctx.drawImage(pipe1,0,0,40,200,d.x,d.y,d.w,d.h);
    		// ctx.fillRect(d.x,d.y,d.w,d.h);
    	}
    	for(var i=0;i<guandaoB.length;i++){
    		var d=guandaoB[i];
    		console.log(d);
    		if(recvsrec(bird,d)){
    			vs=true;
    		}
    		d.x -= 1;
    		if(d.x <= -50){
    			d.x = 345;
    			d.h = sjs+108;
    			d.y = sjs+108;
    		}
            ctx.drawImage(pipe2,0,0,40,200,d.x,d.y,d.w,d.h)
    		// ctx.fillRect(d.x,d.y,d.w,d.h);
    	}
    	if(vs){
    		return;
    	}
		
		//边界判断
		if(bird.y>=568-40||bird.y<= 0){
			return;
		}else{
			window.requestAnimationFrame(draw);
		}
	}
	window.requestAnimationFrame(draw);
	canvas.onclick=function(){
		bird.y-=40;
	}
    
    //判定碰撞柱子
	var recvsrec =  function(rect0,rect1){
    if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
      return false;
    } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
      return false;
    } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
      return false;
    } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
      return false;
    }
    return true;
    };
}