const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var rope;
function setup(){
    var canvas = createCanvas(3000,600);
    engine = Engine.create();
    world = engine.world;

   ball= new Ball (200,150,80,80);
   box1= new Box (940,515,120,80);
   box2= new Box (820,515,120,80);
   box3= new Box (940,434,120,80);
   box4= new Box (820,434,120,80);
   box5= new Box (940,354,120,80);
   box6= new Box (820,354,120,80);
   box7= new Box (940,274,120,80);
   box8= new Box (820,274,120,80);
   box9= new Box (940,194,120,80);
   box10= new Box (820,194,120,80);
   ground = new Ground(1500,580,3000,50); 
   rope = new SlingShot(ball.body,{x:600,y:80});
}
  function draw(){
background(255)
  
Engine.update(engine);
ground.display();
ball.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
rope.display();
  }
  function mouseDragged(){
    
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }