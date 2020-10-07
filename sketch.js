var backgrondImage,canvas,player,form,game,gameState=0,playerCount,database
function setup() {
canvas=createCanvas(500.500);
database=firebase.database();
game=new Game();
game.getState();
game.start();
}
function draw() {

}