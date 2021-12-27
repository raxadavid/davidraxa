let trailBackground = [];
var canvas
var mouse;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.elt.style.position = "fixed"
  noCursor();
  
      for (i=0; i<30; i++){
    trailBackground[i] = new Trail(mouseX,mouseY,10,color((random(1,255)),random(1,100)*2,255),random(0.05,1.5));
  }
}

function draw() {
  background(255);
    noCursor();
  
  
  //trail background,  overlays all items
  for (i=0; i<30; i++) {
    trailBackground[i].trailBody();
    trailBackground[i].ease();
  }
  
  //Mouse pointer
  //fill ("white");
  //circle(mouseX, mouseY, 20);
}

class Trail {
  constructor(x,y,d,c,s) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.s = s;
  }
  
  trailBody(){
  fill(this.c);
  circle(this.x,this.y,this.d);
  }
  
  ease() {
  let easing = this.s;
  let targetX = mouseX;
  let dx = targetX - this.x;
  let targetY = mouseY;
  let dy = targetY - this.y;
  this.x += (dx * easing);
  this.y += (dy * easing);
  }
}