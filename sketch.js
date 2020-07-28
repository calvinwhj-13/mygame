var form;
var player;
var object;
var enemy1,enemy2,enemy3,enemy4;
var edges;
var playermove;
var playerani;
var deathani;
var bgimg;
var objimg;
var gamestate;

function preload() {
  playerani = loadAnimation("sprites/playercharacters/tile000.png","sprites/playercharacters/tile003.png","sprites/playercharacters/tile004.png");
  bgimg = loadImage("sprites/floor.png");
  objimg = loadImage("sprites/tile000.png");
  enemyani = loadAnimation("sprites/enemyanimation/tiles/1/tile000.png","sprites/enemyanimation/tiles/1/tile001.png","sprites/enemyanimation/tiles/1/tile002.png","sprites/enemyanimation/tiles/1/tile006.png","sprites/enemyanimation/tiles/1/tile005.png","sprites/enemyanimation/tiles/1/tile004.png","sprites/enemyanimation/tiles/1/tile003.png","sprites/enemyanimation/tiles/1/tile004.png","sprites/enemyanimation/tiles/1/tile005.png","sprites/enemyanimation/tiles/1/tile006.png");
  deathani = loadAnimation("sprites/playercharacters/tile025.png","sprites/playercharacters/tile036.png","sprites/playercharacters/tile037.png","sprites/playercharacters/tile046.png","sprites/playercharacters/tile047.png","sprites/playercharacters/tile050.png");
  deadani = loadImage("sprites/playercharacters/tile050.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgimg);
  player = new Player(displayWidth/2,displayHeight/2,10,10);
  player.sprite.addAnimation("label1",playerani)
  player.sprite.setCollider("circle",0,0,5);
  enemy1 = new Enemy(displayWidth/4,displayHeight/4,10,10);
  enemy1.movement(2,2);
  enemy1.sprite.addAnimation("label2",enemyani);
  enemy2 = new Enemy(displayWidth/4,displayHeight/3,10,10);
  enemy2.movement(-2,-2);
  enemy2.sprite.addAnimation("label3",enemyani);
  enemy3 = new Enemy(displayWidth/3,displayHeight/4,10,10);
  enemy3.movement(-2,2);
  enemy3.sprite.addAnimation("label4",enemyani);
  enemy4= new Enemy(displayWidth/3,displayHeight/3,10,10);
  enemy4.movement(2,-2);
  enemy4.sprite.addAnimation("label5",enemyani);
  object = new Object1(random(displayWidth/4,displayWidth/3),random(displayHeight/4,displayHeight/3),5,5);
  playermove = randomVelocity();
}

function draw() {
  background("white");
  player.display();
  object.display();
  if(isTouching(player.sprite,object)) {
      player.sprite.playermove;
  } 
  else{
    enemy1.velocityX = 2;
  }
  edges=createEdgeSprites();
  enemy1.sprite.bounceOff(edges);
  enemy2.sprite.bounceOff(edges);
  enemy3.sprite.bounceOff(edges);
  enemy4.sprite.bounceOff(edges);
  if(player.sprite.collide(object.sprite)) {
    object.visible = false;
    enemy1.frenzy();
    enemy2.frenzy();
    enemy3.frenzy();
    enemy4.frenzy();
  }
  if(player.sprite.collide(enemy1)||player.sprite.collide(enemy2)||player.sprite.collide(enemy3)||player.sprite.collide(enemy4)) {
    player.sprite.addAnimation("llabel",deathani);
    gamestate = 1;
  }
  if(gamestate===1) {
    player.sprite.addImage(deadani);
  }
  drawSprites();
}

function randomVelocity() {
  enemy1.velocityX = random(-10,10);
  enemy1.velocityY = random(-10,10);
}