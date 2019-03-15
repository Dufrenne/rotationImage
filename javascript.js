
 
var img=document.getElementById('test');
  
var angle=0;
setInterval(function(){
    img.style.transform="rotateZ("+ angle++ +"deg)";
}, 30);


