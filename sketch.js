//nameSpacing
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myengine,myworld,ground;
function setup() {
  createCanvas(400,400);
myengine=Engine.create();
myworld=myengine.world;
//JSON
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(myworld,ground);

var ball_options={
  restitution:1
}
ball=Bodies.circle(200,100,40,ball_options);
World.add(myworld,ball);

console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);

}

function draw() {
  background(0); 
  Engine.update(myengine); 
rectMode(CENTER);
  rect(200,200,50,50)
  fill ("blue");
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40)
}