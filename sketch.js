var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup, redGroup, pinkGroup, greenGroup, blueGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
   redGroup=new Group();
   greenGroup=new Group();
   blueGroup=new Group();
   pinkGroup=new Group();
   arrowGroup=new Group();
  
  
  //creating background
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 3
  
  // creating bow to shoot arrow
  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 
  
}

function draw() {
background("white")
  // moving ground
    background1.velocityX = -3 

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  if(arrowGroup.isTouching(redGroup)){
     arrowGroup.destroyEach();
    redGroup.destroyEach();
    score=score+3
        }
  if(arrowGroup.isTouching(blueGroup)){
     arrowGroup.destroyEach();
    blueGroup.destroyEach();
    score=score+5
        }
  if(arrowGroup.isTouching(greenGroup)){
     arrowGroup.destroyEach();
    greenGroup.destroyEach();
    score=score+1
        }
  if(arrowGroup.isTouching(pinkGroup)){
     arrowGroup.destroyEach();
    pinkGroup.destroyEach();
    score=score+1.5
        }
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
 
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

 
  
  drawSprites();
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
   
  redGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
   
  blueGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
    
  greenGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
   
  pinkGroup.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   
  arrowGroup.add(arrow);
   
}
