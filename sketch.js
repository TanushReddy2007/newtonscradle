const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(600, 200, 600, 100);

    bobDaimeter = 5;

	bobObject1 = new Bob(400, 400, 50);
	bobObject2 = new Bob(500, 400, 50);
	bobObject3 = new Bob(600, 400, 50);
	bobObject4 = new Bob(700, 400, 50);
	bobObject5 = new Bob(800, 400, 50);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDaimeter*40,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDaimeter*20,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-bobDaimeter*0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,+bobDaimeter*20,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,+bobDaimeter*40,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255, 255, 0);

  roofObject.display();
                                                                    
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-100,y:-100})
  }
}