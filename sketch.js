var countDistanceX=0
var gap=60
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  for(i=0;i<12;i++){
  platform1=new Platform(countDistanceX);

  countDistanceX=countDistanceX+platform1.rw/2+gap
  }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

