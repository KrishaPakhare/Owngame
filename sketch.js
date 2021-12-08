/*var gameState = 0;
var game 
var level1ButtonImg , level2ButtonImg
var girlImg , boyImg ;
var bgImg , lvl1BgImg
var tickImg
var player_walking;
var plasticText , metalText;
var oopsSound ; 
var girlAnimation , boyAnimation ;
var livesLeftImg , livesLeft = 3;

function preload()
{
	level1ButtonImg = loadImage("images/level1.png");
	level2ButtonImg = loadImage("images/level2.png");
	girlImg = loadImage("images/girl.png");
	boyImg = loadImage("images/Boy.png");
	bgImg = loadImage("images/Background1stpg.jpg");
    tickImg = loadImage("images/tick.png")
	lvl1BgImg = loadImage("images/kitchen for level 1.png")
	plasticText = loadImage("images/plasticText.png")
	metalText = loadImage("images/metalText.png")
	oopsSound = loadSound("sounds/alert1.mp3")
	girlAnimation = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png")
    boyAnimation = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png")
	livesLeftImg = loadImage("images/lives.png");

}

function setup() {
	createCanvas(windowWidth , windowHeight);
game = new Game();

	
  
}


function draw() {
	background("white")
 if(gameState === 0){
	 game.start();
 }
 if(gameState === 1){
	 game.quiz();
 }
 if(gameState === 2){
	 game.play();
 }
 if(gameState === 3){
	 game.end();
 }
 drawSprites()
}*/

var gameState = 0;
var game 
var level1ButtonImg , level2ButtonImg
var girlImg , boyImg ;
var bgImg , lvl1BgImg
var tickImg
var player_walking;
var plasticText , metalText;
var oopsSound ; 
var girlAnimation , boyAnimation ;
var invisibleGround;
var recyclableItem1 , recyclableItem2 , recyclableItem3 , recyclableItem4 , recyclableItem5 , recyclableItem6 , recyclableItem7 ;
var nonRecyclableItem1 , nonRecyclableItem2 , nonRecyclableItem3 , nonRecyclableItem4 , nonRecyclableItem5 , nonRecyclableItem6 , nonRecyclableItem7 ;
var score, itemScore = 0;
var livesLeftImg , livesLeft = 3;
var endGameImg ;

function preload()
{
	level1ButtonImg = loadImage("images/level1.png");
	level2ButtonImg = loadImage("images/level2.png");
	girlImg = loadImage("images/girl.png");
	boyImg = loadImage("images/Boy.png");
	bgImg = loadImage("images/Background1stpg.jpg");
    tickImg = loadImage("images/tick.png")
	lvl1BgImg = loadImage("images/bglvl1.jpg");
	lvl1BgImg.velocityX = -4;
	plasticText = loadImage("images/plasticText.png")
	metalText = loadImage("images/metalText.png")
	oopsSound = loadSound("sounds/alert1.mp3")
	girlAnimation = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl5.png","images/girl6.png","images/girl7.png","images/girl8.png")
    boyAnimation = loadAnimation("images/boy1.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png","images/boy8.png")
	recyclableItem1 = loadImage("images/recyclable1.png");
	recyclableItem2 = loadImage("images/recyclable2.png");
	recyclableItem3 = loadImage("images/recyclable3.png");
	recyclableItem4 = loadImage("images/recyclable4.png");
	recyclableItem5 = loadImage("images/recyclable5.png");
	recyclableItem6 = loadImage("images/recyclable6.png");
	recyclableItem7 = loadImage("images/recyclable7.png");

	nonRecyclableItem1 = loadImage("images/non recyclable1.png");
	nonRecyclableItem2 = loadImage("images/non recyclable2.png");
	nonRecyclableItem3 = loadImage("images/non recyclable3.png");
	nonRecyclableItem4 = loadImage("images/non recyclable4.png");
	nonRecyclableItem5 = loadImage("images/non recyclable5.png");
	nonRecyclableItem6 = loadImage("images/non recyclable6.png");
	nonRecyclableItem7 = loadImage("images/non recyclable7.png");

	livesLeftImg = loadImage("images/lives.png");

	endGameImg = loadImage("images/endImage.jpg")

}

function setup() {
	createCanvas(windowWidth , windowHeight);
game = new Game();

	
  
}


function draw() {
	background("white")
 if(gameState === 0){
	 game.start();
 }
 if(gameState === 1){
	 game.quiz();
 }
 if(gameState === 2){
	 game.play();
 }
 if(gameState === 3){
	 game.end();
 }
 drawSprites()
}







