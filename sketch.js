var col = 0;
var pills;
var minutes;
var player;
var playerImg;
//function preload(){
 //playerImg = loadImage('assets/brain.jpg'); }

var score = 0;

function setup() {
  createCanvas(600, 600);

    //group of red dots aka pills

pills = new Group();
  for (var i = 0; i < 15; i++) {
    var p = createSprite(
      random(1, width-10),
      random(55, height-20),
      20, 20);
      
      //making the pills move
    p.velocity.y = 1;  
    p.velocity.x = 1;
    p.shapeColor = color("red");
    pills.add(p);
  }
    
   minutes  = new Group();
  for (var i = 0; i < 15; i++) {
    var m = createSprite(
      random(1, width-10),
      random(55, height-20),
      20, 20);
           //making the pills move
    m.velocity.y = -.5;  
    m.velocity.x = -.5;
    m.shapeColor = color("blue");
    minutes.add(m);
  }
  
//pink box or brain
  player = createSprite(50, 50, 40, 40);
 // player.addImage (playerImg);
    player.shapeColor = color("pink");

    
}
function draw() {
  col = map(mouseY, 100, 400, 100, 200);
	background(15, col, 20);
    
    
    //movement of brain
  player.velocity.x = 
    (mouseX-player.position.x)*0.5;
  player.velocity.y = 
    (mouseY-player.position.y)*0.5;
  //overlap of brain to mins and pills
  player.overlap(pills, getPill);
  player.overlap(minutes, getMinute);
  
    if (mouseIsPressed) {
    player.rotation -= 5;
    }

    drawSprites();
    
    //rules
    fill("black");
    noStroke();
    textSize(30);
    textAlign(TOP, LEFT);
    text("Score 15.5 or Higher", 50, 70);
    //score
  fill("orange");
  noStroke();
  textSize(60);
  textAlign(CENTER, CENTER);
 
    if (score < 15.5) {
    text(score, width/2, height/2);
       
  }
  else {
    text("you can start the day!", width/2, height/2);
      
  }

}
//the function of the brain eating pills
function getPill(player, pill) {
  pill.remove(2);
  score += 1;
}
// brain getting minutes
function getMinute(player, minute) {
  minute.remove(1);
  score += .5;
}