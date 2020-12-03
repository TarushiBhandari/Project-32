const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var base1, base2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var b23,b24,b25,b26,b27,b28;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15;
var thread;

function preload(){

}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  polygon= new Polygon(500,200,20);
  
  thread=new Connector(polygon.body,{x:230,y:315});
  base1= new Ground(450,600,300,10);
  base2= new Ground(650,400,230,10);

  //creating level1 blue boxes
  b1= new BlueBox(350,575,30,40);
  b2= new BlueBox(380,575,30,40);
  b3= new BlueBox(410,575,30,40);
  b4= new BlueBox(440,575,30,40);
  b5= new BlueBox(470,575,30,40);
  b6= new BlueBox(500,575,30,40);
  b7= new BlueBox(530,575,30,40);

  //creating level2 maroon boxes
  b8= new MaroonBox(365,535,30,40);
  b9= new MaroonBox(395,535,30,40);
  b10= new MaroonBox(425,535,30,40);
  b11= new MaroonBox(455,535,30,40);
  b12= new MaroonBox(485,535,30,40);
  b13= new MaroonBox(515,535,30,40);

  //creating level3 green boxes
  b14= new GreenBox(380,495,30,40);
  b15= new GreenBox(410,495,30,40);
  b16= new GreenBox(440,495,30,40);
  b17= new GreenBox(470,495,30,40);
  b18= new GreenBox(500,495,30,40);

  //creating level4 pink boxes
  b19= new PinkBox(395,455,30,40);
  b20= new PinkBox(425,455,30,40);
  b21= new PinkBox(455,455,30,40);
  b22= new PinkBox(485,455,30,40);

  //creating level5 blue boxes
  b23= new BlueBox(410,415,30,40);
  b24= new BlueBox(440,415,30,40);
  b25= new BlueBox(470,415,30,40);

  //creating level6 maroon boxes
  b26= new MaroonBox(425,375,30,40);
  b27= new MaroonBox(455,375,30,40);

  //creating level7 yellow box
  b28= new YellowBox(440,335,30,40);

  //creating level1 blue boxes for base2
  c1= new BlueBox(580,375,30,40);
  c2= new BlueBox(610,375,30,40);
  c3= new BlueBox(640,375,30,40);
  c4= new BlueBox(670,375,30,40);
  c5= new BlueBox(700,375,30,40);

  //creating level2 maroon boxes for base2
  c6= new MaroonBox(595,335,30,40);
  c7= new MaroonBox(625,335,30,40);
  c8= new MaroonBox(655,335,30,40);
  c9= new MaroonBox(685,335,30,40);

  //creating level3 yellow boxes for base2
  c10= new YellowBox(610,295,30,40);
  c11= new YellowBox(640,295,30,40);
  c12= new YellowBox(670,295,30,40);

  //creating level4 pink boxes for base2
  c13= new PinkBox(625,255,30,40);
  c14= new PinkBox(655,255,30,40);

  //creating level5 green box for base2
  c15= new GreenBox(640,215,30,40);

}

function draw() {
  background("black");  
  Engine.update(engine);


 drawSprites();
 base1.display();
 base2.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 b25.display();
 b26.display();
 b27.display();
 b28.display();
 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
 c6.display();
 c7.display();
 c8.display();
 c9.display();
 c10.display();
 c11.display();
 c12.display();
 c13.display();
 c14.display(); 
 c15.display();
 thread.display();
 polygon.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  thread.fly();
}

function keyPressed(){
  if(keyCode===32)
  {
    Matter.Body.setPosition(polygon.body,{x:140,y:315});
    thread.attacher(polygon.body);
  }
}
