var bullet, wall;
var speed, weight;
var thickness; 


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  bullet = createSprite(50, 200, 50, 50);
  wall =  createSprite(1000, 200, 60, 100);
  bullet.velocityX = speed;
  wall.shapeColor = "yellow"
  thickness = random(22,83);
}

function draw() {
  background(0);
  //add if condtion given in the project document hint 2  

if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  

  if(damage > 10)
  {
      wall.shapeColor = color(255,0,0);
    
  }

  if(damage < 10)
  {
      wall.shapeColor = color(0,255,0)
  }

}
  drawSprites();
}

function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge)
{
  return true
}
else {
return false; 
} 
}
