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


    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
