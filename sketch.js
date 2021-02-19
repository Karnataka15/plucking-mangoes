
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, mango, stone, tree;

function setup() 
{
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 850, 850, 300);
	
	tree1 = new Tree(580, 450, 400, 600);
	
	mango1 = new Mango(575, 400, 50, 50);
	mango2 = new Mango(550, 350, 50, 50);
	mango3 = new Mango(675, 260, 50, 50);
	mango4 = new Mango(750, 410, 50, 50);
	mango5 = new Mango(600, 200, 50, 50);
	mango6 = new Mango(450, 320, 50, 50);
	mango7 = new Mango(640, 325, 50, 50);

	boy = new Boy(150, 680, 200, 300);
	stone = new Stone(160, 300, 100, 100);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  Engine.update(engine);
  background("lightBlue");

  ground.display();
  tree1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  boy.display();
  stone.display();
  
  drawSprites();
}

function fall()
{
	if((mango1.x < 575 && mango1.y < 400) || (mango1.x > 575 && mango1.y > 400) || (mango1.x < 575 && mango1.y > 400)|| (mango1.x > 575 && mango1.y < 400))
	{
		Matter.Body.setStatic(mango1.body, false);
	} else
	{
		Matter.body.setStatic(mango2.body, true);
	}

	if((mango2.x < 550 && mango2.y < 350) || (mango2.x > 550 && mango2.y > 350) || (mango2.x < 550 && mango2.y > 350)|| (mango2.x > 550 && mango2.y < 350))
	{
		Matter.Body.setStatic(mango2.body, false);
	} else
	{
		Matter.body.setStatic(mango2.body, true);
	}
}


