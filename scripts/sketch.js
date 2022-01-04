let trailBackground = [];
var canvas
var mouse;
let squareBackground = [];

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
  
  for (i=0; i<100; i++) {
    squareBackground[i] = new Square(random(0,windowWidth) , random(0,windowHeight), random(10,50), random(1,100) ,random(0.1,0.5));
  }
}

function draw() {
  background(255);
    noCursor();
    noStroke();

    for (i=0; i<100; i++) {
    squareBackground[i].body();
    squareBackground[i].movement();
  }
  
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
  square(this.x,this.y,this.d);
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

class Square {
  constructor(x,y,d,c,s) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.s = s;
    this.reverseMove = random([true,false]);
    this.reverseMoveY = random([true,false]);
  }
  
  body() {
    fill(200,200,random(200,255),this.c);
    square(this.x,this.y,this.d);
  }
  
  movement() {
    if (this.x<windowWidth && this.reverseMove==true) {
      this.x+=this.s;
    }
    //hit side
    else if (this.x>windowWidth && this.reverseMove==true){
     this.reverseMove = false;
    }
    else if (this.reverseMove==false && this.x>0) {
      this.x-=this.s;
    }
    //hit side
    else if (this.x<windowHeight && this.reverseMove==false) {
      this.reverseMove = true;
    }

    
//Moving up and down
    if (this.y<windowHeight && this.reverseMoveY==true) {
      this.y+=this.s;
    }
    else if (this.y>windowHeight && this.reverseMoveY==true){
     this.reverseMoveY = false;
    }
    else if (this.reverseMoveY==false && this.y>0) {
      this.y-=this.s;
    }
    
    else if (this.y<windowHeight && this.reverseMoveY==false) {
      this.reverseMoveY = true;
    }
    
  }
  
  
  
}











