const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld;
var paper1;
var ground1;
function setup() {
  createCanvas(1200,400);
myEngine = Engine.create();
myWorld =myEngine.world


World.add(myWorld,ground)
paper1=new  Paper(100,200,50);
ground1 = new Ground(600,height,1200,20);

}

function draw() {
  background(0); 
  Engine.update(myEngine);

paper1.display();
ground1.display();
}