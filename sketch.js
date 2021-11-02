var button,b1,b2,b3;
var heading


function setup() {
  createCanvas(windowWidth, windowHeight);
  button=createButton("")
  button.size(width,height)
  button.position(-width/2777,-height/2777)
  button.class("o")
  
  heading = createButton("Welcome to the world of Games created By Shriansh")
  heading.position(width/2.90,height/22)
  heading.size(width/3.50,height/7)
  heading.class("o2")
  
  b1=createElement("a","Fight for Life").attribute("href","https://preview.p5js.org/shriansh.goel-jade/present/mBmTWx5_I")
b1.size(width/5,height/5)
  b1.position(width/9.90,height/3)
  b1.class("o3");
  
  b2= createElement("a","Qr code Generator").attribute("href","shriansh.ml")
  b2.size(width/5,height/5)
   b2.position(width/2.50,height/3)
   b2.class("o4"); 
  
  b3=createElement("a","Iframe Browser").attribute("href","https://preview.p5js.org/shriansh.goel/present/JgY70OIIa")
  b3.size(width/5,height/5)
   b3.position(width/1.37,height/3)
b3.class("o5")
}

function draw() {
  background(220);
 
}
function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
  button.size(windowWidth,windowHeight)

  heading.position(width/2.90,height/22)
  heading.size(width/3.50,height/7)
  b3.size(width/5,height/5)
   b3.position(width/1.37,height/3)
  b2.size(width/5,height/5)
   b2.position(width/2.50,height/3)
   b1.size(width/5,height/5)
  b1.position(width/9.90,height/3)
}
