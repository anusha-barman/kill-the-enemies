
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;

var enemyArray=[]

function preload()
{
backgroundImg=loadImage("background factory.jpg")
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
	world = engine.world;
   player= new Player(width/2,height/2,20,100)
   ground = new Ground(displayWidth/2,displayHeight-10,displayWidth,20)


   for(var i = 0; i<11; i++){

    var x = Math.random(round(0, displayWidth/2))
    var y = Math.random(round(0, displayHeight/2)) 

    enemy = new Enemy(x,y,50,50)

    enemyArray.push(enemy)

   }

console.log(enemyArray)

   
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  player.display()
  ground.display()

 for(var e=0; e<11;e++){

 enemyArray[e].display()

 } 


 
  
  drawSprites();
 
}



