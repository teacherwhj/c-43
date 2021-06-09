var h,m,s;

var sAngle, mAngle, hAngle;


function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  translate(200,200)
  rotate(-90);

  h=hour();
  m = minute();
  s = second();

sAngle = map(s,0,60,0,360);
mAngle = map(m,0,60,0,360);
hAngle = map(h,0,12,0,360);

push();
rotate(sAngle);
stroke(255,0,0);
strokeWeight(5);
line(0,0,100,0);
pop();


push();
rotate(hAngle);
stroke(150,250,150);
strokeWeight(5);
line(0,0,50,0);
pop();

push();
rotate(mAngle);
stroke(0,0,255);
strokeWeight(5);
line(0,0,75,0);
pop();

stroke(255,255,255);
point(0,0);

strokeWeight(8);
noFill();
stroke(250,0,0);
arc(0,0,300,300,0,sAngle);
stroke(0,0,255);
arc(0,0,280,280,0,mAngle);
stroke(150,250,150);
arc(0,0,260,260,0,hAngle);

  
}