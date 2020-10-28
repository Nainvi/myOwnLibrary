var mObj,fObj;
var obj1,obj2,obj3;

function setup() {
  createCanvas(800,400);
  mObj = createSprite(600, 200, 100, 50);
  fObj = createSprite(200, 200, 50, 100);
  mObj.shapeColor = "green";
  fObj.shapeColor = "green";
  mObj.debug = true;
  fObj.debug = true;
  obj1 = createSprite(200, 100, 50, 50);
  obj2= createSprite(400, 100, 50, 50);
  obj3= createSprite(600, 100, 50, 50);
  obj1.shapeColor = "green";
  obj2.velocityX = 4;
  obj3.velocityX = -4;
}

function draw() {
  background(255,255,255);
  mObj.x = mouseX;
  mObj.y = mouseY; 
  console.log(fObj.width/2+mObj.width/2);
  console.log(mObj.x-fObj.x);
  console.log(fObj.x-mObj.x);
 
 if(isTouching(mObj,obj1)){
  mObj.shapeColor = rgb(64,224,208);
  obj1.shapeColor = rgb(64,224,208);
  }
  else{
    mObj.shapeColor = "green";
  obj1.shapeColor = "green";
  
 }
bounceOff(obj2,obj3);
  drawSprites();
}