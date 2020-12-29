//adding the components for physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating the variables
var canvas;
var back,background1Img,background2Img, background3Img;
var hero, heroImg;
var drone,droneImg;
var invisibleGround1,invisibleGround2,invisibleGround3;
var bg;
var bullets, bulletsGroup, bulletsImg;
var VDrone, VDroneImg;
var villain, villainImg;
var droneCount = 0
function preload(){

//preloading the images;
droneImg = loadImage("hDrone.png")
heroImg = loadAnimation("hero1.png","hero2.png","hero3.png","hero4.png","hero5.png","hero6.png")
bg = loadImage("bg3.jpg");
bulletsImg = loadImage("bullets.png");
background1Img = loadImage("bg.jpg");
background2Img = loadImage("bg2.jpg");
background3Img = loadImage("bg3.jpg");
VDroneImg = loadImage("vDrone.png");
villainImg = loadImage("Mr Doom.png");

}
function setup(){
  
  //creating the canvas
  createCanvas(displayWidth-50, displayHeight-50);
  //creating the engine and adding it to the world
  engine = Engine.create();
  world = engine.world;

  //background = createSprite(displayWidth/2, displayHeight/2,displayWidth,displayHeight)
  //background.addImage(background1Img);
 // background.scale = 0.4
  //creating the invisible ground;
  invisibleGround1 = createSprite(100,500,2500,20)
  invisibleGround2 = createSprite(100,80,2500,20)
  invisibleGround3 = createSprite(100,330,2500,20)

  //creating the ground;
  drone = createSprite(200,200,30,30);
  drone.addImage(droneImg);
  drone.scale = 1;

  //creating the hero
  hero = createSprite(200,400,200,200);
  hero.addAnimation("hero",heroImg);
  hero.scale = 0.5;

  bulletsGroup  = new Group();
}

function draw(){

  
  back = createSprite(windowWidth/2 , windowHeight/2 , windowWidth, windowHeight);
  back.addImage(background1Img);
  back.scale = 1;
  back.velocityX = -4;
  if(back.x< windowWidth ){
    back.x = back.width /2;
   }
  
  //colliding drone from the invisible grounds
  drone.collide(invisibleGround2);
  drone.collide(invisibleGround3);

  //positioning the drone
  drone.x = hero.x+100;
   
  //condition to control the drone
  if(keyDown(DOWN_ARROW)){
    drone.y = drone.y+10
  }
  if(keyDown(UP_ARROW)){
    drone.y = drone.y-10
  }

  if(keyWentDown("space"))
  { bullets = createSprite(drone.x,drone.y);
     bullets.addImage("bullet",bulletsImg);
     bullets.velocityX= 4;
     bullets.scale = 0.1;
     bulletsGroup.add(bullets); 
  }
  
  spawnVDrone();
  spawnVillain();

  //drawing the sprites
  drawSprites();
  
}

//function for bullets

function spawnVDrone(){

    if(frameCount%180 ===0){
      VDrone = createSprite(displayWidth-30,250,30,30);
      VDrone.addImage(VDroneImg);
      VDrone.velocityX = -10;
    }
}

function spawnVillain(){
  villain = createSprite(600,360,40,40)
  villain.addImage(villainImg)
  villain.scale = 0.45;
}