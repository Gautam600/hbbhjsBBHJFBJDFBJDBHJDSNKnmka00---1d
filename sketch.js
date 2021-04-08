

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,divsion,divsion2,divsion3,divsion4,divsion5,division6,division7,division8;
var particle=[];
var plinko1,pinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16;

var divisionHeight=300;

function setup() {
  createCanvas(800,400);
  
	engine = Engine.create();
	world = engine.world;
  ground=new Ground(400,690,800,20);
 divsion=new Division(80,400,5,400);
divsion2= new Division(160,400,5,400);
divsion3=new Division(240,400,5,400);
divsion4=new Division(320,400,5,400);
divsion5=new Division(400,400,5,400);
divsion6=new Division(480,400,5,400);
division7=new Division(560,400,5,400);
division8=new Division(640,400,5,400);
plinko1=new Particle(80,500,5);
plinko2=new Particle(160,500,5);
plinko3=new Particle(240,500,5);
plinko4=new Particle(320,500,5);
plinko5=new Particle(400,500,5);
plinko6=new Particle(480,500,5);
plinko7=new Particle(560,500,5);
plinko8=new Particle(640,500,5);
plinko9=new Particle(80,600,5);
plinko10=new Particle(160,600,5);
plinko11=new Particle(240,600,5);
plinko12=new Particle(320,600,5);
plinko13=new Particle(400,600,5);
plinko14=new Particle(480,600,5);
plinko15=new Particle(560,600,5);
plinko16=new Particle(640,600,5);
}

function draw() {
  background(2,55,205);  
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
divsion.display();
divsion2.display();
divsion3.display();
divsion4.display();
divsion5.display();
divsion6.display();
division7.display();
division8.display();
  ground.display();
  drawSprites();
}