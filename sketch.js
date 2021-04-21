
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boy,boyImg;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var mango11;
var mango12;

var ground;
var tree;
var sling;

function preload()
{
  boyImg=loadImage("sprites/boy.png")	
}

function setup() {
	createCanvas(1300,800);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(700,790,1300,20)
	//Create the Bodies Here.
	
	// boy= new Boy(400,350,5,5)
	stone=new Stone(200,200)

	tree=new Tree(1050,500,450,600)

	mango1=new Mango(1100,430,30);
	 mango2=new Mango(1170,430,30);
	  mango3=new Mango(1010,440,30);
	   mango4=new Mango(1000,470,30);
	    mango5=new Mango(1100,470,30);
		 mango6=new Mango(1000,430,30);
		  mango7=new Mango(900,430,25);
		   mango8=new Mango(1140,450,25);
		    mango9=new Mango(1100,430,25); 
			mango10=new Mango(1200,400,25);
     mango11=new Mango(1120,500,25);
    mango12=new Mango(900,560,25);


	sling=new SlingShot(stone.body,{x:235,y:640})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImg ,200,560,200,300);
  
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
    tree.display();
	sling.display();
	stone.display();

  mango1.depth=mango1.depth+1;
  mango2.depth=mango2.depth+1;
  mango3.depth=mango3.depth+1;
  mango4.depth=mango4.depth+1;
  mango5.depth=mango5.depth+1;
  mango6.depth=mango6.depth+1;
  mango7.depth=mango7.depth+1;
  mango8.depth=mango8.depth+1;
  mango9.depth=mango9.depth+1;
  mango10.depth=mango10.depth+1;
  mango11.depth=mango11.depth+1;
  mango12.depth=mango12.depth+1;
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();   
}

