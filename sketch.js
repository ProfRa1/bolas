
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
radius = 40
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	//Create the Bodies Here.
    leftSide = new ground(570,610,20,120);
	rightSide = new ground(710,610,20,120);
	groundObj=new ground(width/2,670,width,20);


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,radius,radius);
   leftSide.display();  
  rightSide.display();
  groundObj.display();
 
  drawSprites();
 
}



