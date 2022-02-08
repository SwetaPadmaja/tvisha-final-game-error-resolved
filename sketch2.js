var ground;
var corona, coronaGroup;
var MaskedMan, maskedManGroup;
var unMaskedMan, unMaskedManGroup;
var syringe, syringeGroup;
var gameState=0;
var man;
var restart,house;

function preload(){

  covidimg=loadImage("Images/Covid.png");

  awarenessimg=loadImage("Images/Awareness.png");

}
function setup(){

    createCanvas(windowWidth,windowHeight);
  
    ground = createSprite(width/2,height-100,width,20);
    ground.velocityX=-3;
    ground.shapeColor="brown";
  
    man = createSprite(200,ground.y-195,30,370);
    restart=createSprite(windowWidth/2,windowHeight/2);
    house=createSprite(windowWidth-60,windowHeight/2);
  
    restart.visible=false;
  
    coronaGroup= new Group();
   
}

  function draw()
  {

    //start screen
     if(gameState==0)
     {
        background(awarenessimg);
        restart.visible=false;
        //text("Press n to continue",200,200);
        if(keyCode==110){
          man.x=200;
          gameState=1;
        }
    }
  if(gameState==1)
  {

        background("white");
      
        man.visible=true;
        restart.visible=false;
      //infinite ground
        if(ground.x < width/2){
      ground.x = ground.width/2;
        }
        if(keyWentDown("UP")){
          man.y=man.y-10;
        }
      
        if(keyWentDown("DOWN")){
          man.y=man.y+10;
        }
      
        if(keyWentDown("LEFT")){
          man.x=man.x-10;
        }
      
        if(keyWentDown("RIGHT")){
          man.x=man.x+10;
        }
        spawnCorona();

        if(coronaGroup.isTouching(man)){
            gameState=2
            ground.velocityX=0;
            coronaGroup.setVelocityEach(0);
            coronaGroup.destroyEach();
            man.visible=false;
            restart.visible=true;
            text("You are no longer safe, please isolate yourself for a week,Please click on restart to start game",windowWidth/2,windowHeight/2-100);
           ; 
        }
        if(man.isTouching(house))  {
            gameState=2;
            ground.velocityX=0;
            coronaGroup.setVelocityEach(0);
            coronaGroup.destroyEach();
            man.visible=false;
            restart.visible=true;
            text("You have reached your destination, you are safe now,Please click on restart to start game",windowWidth/2,windowHeight/2-100);
           
        }
        
    drawSprites();
    } 
    if( gameState===2 ){
        if(mousePressedOver(restart)){

        
        console.log("now gs 2")
        reset();
        
    }}

  }

  function spawnCorona(){

    if(frameCount%200===0){
      corona = createSprite(width,random(height-150, height-300))
      corona.velocityX = -10;
     // corona.shapeColor="green";
     corona.addImage("corona",covidimg);
     corona.scale=0.5;
      coronaGroup.add (corona);
    }
    
    }
function reset(){
    {      
            location.reload();
             
    }
}
   
    
