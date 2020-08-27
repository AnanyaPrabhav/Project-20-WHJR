var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(170, 300, 200, 50);
  wall = createSprite(1200, 200, 60, 200);
  wall.shapeColor = "rgb(80, 80, 80)";

  speed = random(40, 240);
  weight = random(400, 1500);

  car.velocityX = speed;
}

function draw() {
  background("white");  
  drawSprites();

  //Deformation=0.5 x weight x speed x speed/22500
  collision();
}

function collision(){
  if(wall.x - car.x < wall.width/2+car.width/2){
      var deformation = 0.5*weight*speed*speed/22500;
      if(deformation>=180){
        car.shapeColor="red";
      }
      if(deformation>=100&&deformation<=180){
        car.shapeColor="yellow";
      }
      if(deformation<=100){
        car.shapeColor="green";
      }
    }
}