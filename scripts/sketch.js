let trailBackground = [];
var canvas
var mouse;
let squareBackground = [];
let str = ["Design","UX Design", "Visual Design","Interaction Design", "Student","Web Development", "Graphic Design", "Modernism", "Typography"]
let color = ["#39B54A", "#009444", "#006838"];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.elt.style.position = "fixed";
  noCursor();
  
      for (i=0; i<50; i++){
    trailBackground[i] = new Trail(mouseX,mouseY,random(1,8),random(color),random(0.05,1.5));
  }
  
  for (i=0; i<50; i++) {
    squareBackground[i] = new Square(random(0,windowWidth) , random(0,windowHeight), random(10,40), random(1,50) ,random(0.1,0.5));
  }
}

function draw() {
  background(255);
    noCursor();
    noStroke();
  
    for (i=0; i<50; i++) {
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
    this.colorFull = false;
    this.cSpeed = random(0.01,1);
    this.text = random(str);
    this.textSize = random(6,32);
  }
  
  body() {
    fill(0,148,68, this.c);
    
    //Turn
    if(this.c<50 && this.colorFull==false) {
      this.c+=this.cSpeed;
    }
    //Reach full
    else if(this.c>50 && this.colorFull==false) {
      this.colorFull = true;
    }
    //go back
    else if (this.c>-50 && this.colorFull==true) {
      this.c-=this.cSpeed;
    }
    //reach 0 color
    else if (this.c<-50 && this.colorFull==true){
      this.colorFull=false;
    }
    
    textAlign(CENTER);
    textSize(this.textSize);
    text(this.text,this.x,this.y);
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











