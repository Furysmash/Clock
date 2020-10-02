var hr
var min
var sec

var hrAngle,minAngle,secAngle

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  angleMode(DEGREES)
  strokeWeight(7);
}


function draw(){
  background(0)

  translate(width/2,height/2)
  rotate(-90)

  hr = hour()
  min = minute()
  sec = second()

  hrAngle = map(hr%12,0,12,0,360)
  minAngle = map(min,0,60,0,360)
  secAngle = map(sec,0,60,0,360)

  push()
  stroke("green");
  rotate(hrAngle);
  line(0,0,75,0);
  pop()

  push()
  stroke("red");
  rotate(secAngle);
  line(0,0,150,0);
  pop()

  push()
  stroke("blue");
  rotate(minAngle);
  line(0,0,100,0);
  pop()

  noFill()
  strokeWeight(10)

  stroke("red")
  arc(0,0,300,300,0,secAngle);

  stroke("blue")
  arc(0,0,270,270,0,minAngle);

  stroke("green")
  arc(0,0,240,240,0,hrAngle);
}
