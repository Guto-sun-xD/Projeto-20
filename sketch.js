
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1, block2, block3;
var engine, world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;
    
	ground = Bodies.rectangle(400,680,800,10,{isStatic:true});
	World.add(world,ground);
	//Crie os Corpos Aqui.
	var block1_options = {
		restituition: 0.34,
		frictionAir: 0.2,
	}
    block1 = Bodies.rectangle(250,350,50,100,block1_options);
	World.add(world,block1);

	var block2_options = {
		restituition: 0.34,
		frictionAir: 0.2,
	}
    block2 = Bodies.circle(500,350,50,block2_options);
	World.add(world,block2);

	var block3_options = {
		restituition: 0.34,
		frictionAir: 0.2,
	}
    block3 = Bodies.circle(500,350,75,block3_options);
	World.add(world,block3);


	Engine.run(engine);
    

}


function draw() {
  rectMode(CENTER);
  background("green");
  ellipseMode(RADIUS);
  drawSprites();
  rect(block1.position.x, block1.position.y,50,100);
  ellipse(block2.position.x, block2.position.y,50);
  ellipse(block3.position.x, block3.position.y,75);
  rect(ground.position.x,ground.position.y,800,10);
}



