var fixedRect,movingRect;
var o1,o2;
 function setup() { 
   createCanvas(800,400);
    fixedRect=createSprite(200,200,50,100); 
    fixedRect.shapeColor='blue'; 
    movingRect=createSprite(200,200,50,100)
     movingRect.shapeColor='blue'; 
     o1=createSprite(150,100,20,30)
     o1.shapeColor='blue';
     o2=createSprite(150,50,20,30)
     o2.shapeColor='blue';

    } 
     function draw() {
   background(255,255,255);
   movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x); 
  if(bounceOff(movingRect,o1)){ 
    o1.shapeColor='black'; 
    movingRect.shapeColor='black'; 
  }
  else {
    o1.shapeColor='blue';
    movingRect.shapeColor='blue';
  }
  
  
  drawSprites(); 
  }
  function bounceOff(object1,object2)  {
    if(object1.x-object2.x<object2.width/2 + object1.width/2
      && object2.x-object1.x<object2.width/2 + object1.width/2
      && object2.y-object1.y<object2.height/2 + object1.height/2
      && object1.y-object2.y<object2.height/2 + object1.height/2) {
      return true;  
     } 
     else {
return false;
     }
    }