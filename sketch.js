const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon;

function preload(){
  backgroundImg=loadImage("./assets/background.gif");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle=-PI/4;
  tower=new Tower(150,270,160,310);
  cannon=new Cannon(280,185,100,50,angle);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
  tower.display();
  cannon.display();
}

