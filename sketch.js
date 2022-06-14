
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let neha_world;
var ball;
var rock;
var wall;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  neha_world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var rock_options ={
    restitution: 0.5,
    frictionAir:0.001
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(neha_world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(neha_world,ball);
  
  rock = Bodies.circle(300,20,30,rock_options);
  World.add(neha_world,rock);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(neha_world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(rock.position.x,rock.position.y,30);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,200,20);
}

