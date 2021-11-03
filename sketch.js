var button,b1,b2,b3;
var heading
var ch=0
var i2,i3,i4

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameCount=0
}

function draw() {
  background(220);
 if(frameCount<2){
   i2=createElement("Iframe").attribute("src","https://shrianshgoel.github.io/home/")
   i2.class("responsive-iframe")
   i2.position(width/999,height/999)
 }
}
function windowResized(){
      i2.position(width/999,height/999)
}
