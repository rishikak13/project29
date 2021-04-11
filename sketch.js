const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    polygon= loadImage("polygon.png");

}
function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground= new Ground ();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    box1 = new Box (300,275,30,40);
    box2 = new Box (330,275,30,40);
    box3 = new Box (360,275,30,40);
    box4 = new Box (390,275,30,40);
    box5 = new Box (420,275,30,40);
    box6 = new Box (450,275,30,40);
    box7 = new Box (480,275,30,40);
    box8 = new Box (330,245,30,40);
    box9 = new Box (360,245,30,40);
    box10 = new Box (390,245,30,40);
    box11= new Box (420,245,30,40);
    box12= new Box (450,245,30,40);
    box13= new Box (360,205,30,40);
    box14 = new Box (390,205,30,40);
    box15= new Box (420,205,30,40);
    box16= new Box (390,165,30,40);
      
    box17=new Box (640,175,30,40);
    box18=new Box (670,175,30,40);
    box19=new Box (700,175,30,40);
    box20=new Box (730,175,30,40);
    box21=new Box (760,175,30,40);
    box22=new Box (670,135,30,40);
    box23=new Box (700,135,30,40);
    box24=new Box (730,135,30,40);
    box25=new Box (700,95,30,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    rope = new Slingshot(this.ball,{x:100,y:200})
}
function draw(){
    background("white");
    ground.display();
    stand1.display();
    stand2.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("purple");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("darkblue");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();
    fill("yellow");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("orange");
    box22.display();
    box23.display();
    box24.display();
    fill("red");
    box25.display();
    
    imageMode(CENTER);
    image(polygon,ball.position.x,ball.position.y,40,40)
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope.fly();
}