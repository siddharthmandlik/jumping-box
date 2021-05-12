var fixSprite1, fixSprite2,fixSprite3, fixSprite4; 
var movingSprite;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   
movingSprite=createsprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
movingSprite.velocityX=3;
    movingSprite.velocityY=3;
    
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="green";
    
    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="blue";
    
    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="yellow";
    
    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="red";
    
    
    
    
    
}

function draw() {
    background(rgb(10,10,10));
    

    
    //write code to bounce off ball from the block1 
    if(movingSprite.x<0){
        music.stop()
        movingSprit.velocityX=3
    }
else if(movingSprite.x>800){
music.stop()
    movingSprite.velocityX=-3
}


 if(isTouching(movingSprite,fixSprite4)){
     music.play()
     movingSprite.shapeColor="red";
     bounceoff(movingSprite,fixSprite4)
 
 
 }
else if(isTouching(movingSprite,fixSprite3)){
     music.stop()
     movingSprite.shapeColor="yellow";
     bounceoff(movingSprite,fixSprite3)}
    
    else if(isTouching(movingSprite,fixSprite2)){
     music.stop()
     movingSprite.shapeColor="blue";
     bounceoff(movingSprite,fixSprite2)}
    
    else if(isTouching(movingSprite,fixSprite1)){
     music.stop()
     movingSprite.shapeColor="green";
     bounceoff(movingSprite,fixSprite1)}
    
    if (movingSprite.y<0){
    music.stop()
    movingSprite.velocity=3
    }
    
    
    drawSprites();
}
