
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
function preload()
{
 bg= loadImage("bg.png");	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	roof= new Ground(700,80,600,40);
	bob1= new Bob(490,500,100);
	bob2= new Bob(595,500,100);
	bob3= new Bob(700,500,100);
	bob4= new Bob(805,500,100);
	bob5= new Bob(910,500,100);
	
	bob1Diameter= -120;
	string= new Thread(bob1.body,roof.body,-210,0);
	string1= new Thread(bob2.body,roof.body,-105,0);
	string2= new Thread(bob3.body,roof.body,0,0);
	string3= new Thread(bob4.body,roof.body,105,0);
	string4= new Thread(bob5.body,roof.body,210,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  drawSprites();
 


string.display();
string1.display();
string2.display();
string3.display();
string4.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  textSize(30);
  text("Press 'UP' to move the craddle",500,30);
  textSize(100);
  text("Newton's",50,300);
  text("Craddle",950,300);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob5.body.position,{x:-595,y:595})
	}
}

