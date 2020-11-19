var database,gameState = 0,game,player,form,playerCount;

function setup(){
createCanvas(400,400);

database = firebase.database();
game = new Game();
game.getState();
game.start();


}
function draw(){


}