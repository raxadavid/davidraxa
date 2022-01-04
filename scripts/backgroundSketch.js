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
  
  
  for (i=0; i<1000; i++) {
    squareBackground[i] = new Square(random(0,windowWidth) , random(0,windowHeight), random(10,40), random(1,50) ,random(0.1,0.5));
  }
}

function draw() {
  background(255);
    noStroke();
  
    for (i=0; i<1000; i++) {
    squareBackground[i].body();
    squareBackground[i].movement();
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











