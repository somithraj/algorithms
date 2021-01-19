var movingrectangle;
var fixedrectangle;

function setup() {
  createCanvas(400,400);
  movingrectangle=createSprite(200,200,80,50);
  movingrectangle.shapeColor = "pink";
  fixedrectangle=createSprite(200,200,50,80);
  fixedrectangle.shapeColor = "pink";
}

function draw() {
  background(0); 
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY

 
  if(movingrectangle.x - fixedrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2
    && fixedrectangle.x - movingrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2
    && movingrectangle.y - fixedrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2
    && fixedrectangle.y - movingrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2  
    ){
    movingrectangle.shapeColor = "green";
    fixedrectangle.shapeColor = "green";
  }

  else{
    movingrectangle.shapeColor = "pink";
    fixedrectangle.shapeColor = "pink";
  }
  drawSprites();
}