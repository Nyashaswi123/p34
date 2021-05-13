const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var hero,ground,fly;



function preload(){
Bg = loadImage("images/bg.png");
}
function setup() {
  createCanvas(1200,800);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(500,460,900,10);
  hero = new Hero(300,400,20);
  monster = new Monster(950,300,200,200)
  fly = new Fly(hero.body,{x:400,y:100})  
  box1 = new Box(690,450,40,40)
  box2 = new Box(730,450,40,40)
  box3 = new Box(690,400,40,40)
  box4 = new Box(730,400,40,40)
  box5 = new Box(690,350,40,40)
  box6 = new Box(730,350,40,40)
  box7 = new Box(690,200,40,40)
  box8 = new Box(730,200,40,40)
  box9 = new Box(690,150,40,40)
  box10 = new Box(730,150,40,40)
  box11 = new Box(690,100,40,40)
  box12 = new Box(730,100,40,40)

}

function draw() {
  background(Bg);  
  Engine.update(myEngine);
  ground.display();
  hero.display();
 
  monster.display();
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
  }

  function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}



