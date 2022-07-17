
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 900);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:1.2
	}


	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200, 600, 20, ball_options);
	World.add(world,ball)

	groundObj=new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120)
	rightside = new Ground(900,600,20,120)


	

	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:7,y:-13});
	}
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  groundObj.display();
  leftside.display();
  rightside.display();
  ellipse(ball.position.x, ball.position.y, 20)
  drawSprites();
 
}



