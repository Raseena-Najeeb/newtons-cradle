
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	roof = new Roof(400,100,600,20);

	bob1 = new Bob(300,300);
	bob2 = new Bob(350,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(450,300);
	bob5 = new Bob(500,300);
	chain1 = new Rope(bob1.body,roof.body,-100,0);
	chain2 = new Rope(bob2.body,roof.body,-50,0);
	chain3 = new Rope(bob3.body,roof.body,0,0);
	chain4 = new Rope(bob4.body,roof.body,50,0);
	chain5 = new Rope(bob5.body,roof.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  startcraddle();
  
  
  drawSprites();
 
}

function startcraddle()
{
	if(keyDown("space"))
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{ x: -20, y: 0});
	}
	
}




