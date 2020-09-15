const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var ground1, ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

var polygon1;

var slingshot;

var Poly

function preload(){
Poly = loadImage('Polygon.jpg')
}

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
  polygon1 = Bodies.circle(50,200,20);

  World.add(world,polygon1);

  imageMode(CENTER);
image(Poly,polygon1.position.x,polygon1.position.y,40,40);


  
ground1 = new Ground(280,360,300,20);

box1 = new Box(180,330,40,40);
box2 = new Box(210,330,40,40);
box3 = new Box(240,330,40,40);
box4 = new Box(270,330,40,40);
box5 = new Box(300,330,40,40);
box6 = new Box(330,330,40,40);
box7 = new Box(360,330,40,40);

box8 = new Box(195,290,40,40);
box9 = new Box(235,290,40,40);
box10 = new Box(275,290,40,40);
box11 = new Box(305,290,40,40);
box12 = new Box(345,290,40,40);

box13 = new Box(225,250,40,40);
box14 = new Box(265,250,40,40);
box15 = new Box(305,250,40,40);

box16 = new Box(265,210,40,40);

slingshot = new SlingShot(polygon1.body,{x: 50, y: 200});

}

function draw() {
  background(255,255,0); 
  
  

polygon1.display();
slingshot.display();

ground1.display();

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
box11.display();
box12.display();

box13.display();
box14.display();
box15.display();

box16.display();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

