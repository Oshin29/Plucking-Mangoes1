
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var groundObj, tree1,stone1,boy1,mango1,mango2,mango3,mango4;
var chainobj;
var boyobject;


function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  stone1 = new Stone(200,420,60,60);
   groundObj = new Ground(650,height,1300,20);
   tree1 = new Tree(1050,600,450,600);
   
   boy1 = new Boy(200,340,200,300);

   mango1=new Mango(1100,100);
   mango2=new Mango(1170,130);
   mango3=new Mango(1010,140);
   mango4=new Mango(1000,70);
   mango5=new Mango(1100,70);
   mango6=new Mango(1000,230);
   mango7=new Mango(900,230);
   mango8=new Mango(1140,150);
   mango9=new Mango(1100,230);
   mango10=new Mango(1200,200);
   mango11=new Mango(1120,50);
   mango12=new Mango(900,160);
  
   chainobj= new chain(stone1.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  tree1.display();
  groundObj.display();
  stone1.display();
  boy1.display();
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

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);

  chainobj.display();
 // mouseDragged();
  //mouseReleased();

 
 
}


function mouseDragged(){
  
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  chainobj.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  chainobj.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 console.log(lmango.width/2+lstone.width/2)
  	if(distance<=lmango.width/2+lstone.width/2)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


