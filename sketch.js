const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var ground, ball;
var box1;

function setup(){
 var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    box1 = new Box(200,200,50,50);
    box2 = new Box(240,100,50,70);

   
	var render = Render.create({
		element:document.body,
		engine: engine,
		options: {
		  width: 400,
		  height: 400,
          wireframes:false,
        },
       
	  });
      Render.run(render);
      Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    box1.display();
    box2.display();
}
