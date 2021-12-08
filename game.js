/*class Game {
    constructor(){
        this.level1Button = createSprite(width/2 + 300,height/2+200);
        this.level1Button.scale = 0.5;
        this.level2Button = createSprite(width/2+300,height/2+100);
        this.level2Button.visible = false;
        this.john  = createSprite(width/2-300, height/2+200);
        this.john.addImage(boyImg);
        this.john.scale = 1.2;
        this.emma = createSprite(width/2 , height/2 + 205);
        this.emma.addImage(girlImg);
        this.emma.scale = 1.4;
        this.level1Button.addImage(level1ButtonImg);
        this.level2Button.addImage(level2ButtonImg);
        this.characterPicked = false;
        this.character = "girl";
        this.tick = createSprite(width/2,height/2+30,10,10);
        this.tick.addImage(tickImg)
        this.tick.scale = 0.2;

        this.option1 = createSprite(width/2+90 , height/2)
        this.option1.scale = 0.4
        this.option1.addImage(plasticText);
        this.option1.visible = false;

        this.option2 = createSprite(width/2-250 , height/2)
        this.option2.addImage(metalText);
        this.option2.scale = 0.3
        this.option2.visible = false;

        this.player = createSprite(100 , height/2 );
        this.player.addAnimation("girl",girlAnimation )
        this.player.addAnimation("idleGirl",girlImg)
        this.player.addAnimation("boy",boyAnimation)
        this.player.addAnimation("idleBoy", boyImg)
        this.player.visible = false;

        this.recyclableItems = [];
        this.nonRecyclableItems = []

    }
start(){
    if(gameState === 0){
    //background (bgImg)
    image(bgImg,150,-50,width-500,height)
    textFont("Algerian")
    textSize(55)
    fill("blue")
    text("WELCOME TO SCAVENGER - HUNT ",width/2-450 , height/2-280)
    textFont("Bahnschrift SemiBold")
    textSize(24)
    fill("black")
    text(" A girl/boy named emma/john were studying about recycling in their chapter of science \n So they started thinking about this and  wanted to try to apply this in their real life \n They tried to do so but didn't received any much response.\n So they wrote a tagline for their work 'DON'T BE A PUCK ! RECYCLE UR JUNK !!'\n They want your support to make the world Better \n Will you join them ?",width/2-525 , height/2-150)
    if(mousePressedOver(this.john)){
        this.characterPicked = true ; 
        this.character = "boy";
        this.tick.x = width/2 - 270
        
    
    }
    else if (mousePressedOver(this.emma)){
        this.characterPicked = true ;
        this.character = "girl";
        this.tick.x = width/2 ; 

    }
    if(mousePressedOver(this.level1Button)){
        gameState = 1;
       // this.createRecyclableItems();
        this.john.visible = false ;
        this.emma.visible = false;
        this.level1Button.visible = false;
        this.tick.visible = false;
        if(this.character=== "girl"){
            this.player.changeAnimation("idleGirl", girlImg)
            this.player.scale= 1.2;
        }
        else{
            this.player.changeAnimation("idleBoy",boyImg)
            this.player.scale= 1.2;
        }
        this.player.visible = true ; 
    }
}
}  
quiz(){
   background("#FFED99");
   fill("#C1AC95")
   noStroke();
   rect(0,0,width,50)
   fill("#AA2B1D")
   textSize(35)
   textFont("Algerian")
   text("Solve this riddle Genius !!",width/2-270,35)
   fill("#B05B3B")
   textSize(35)
   textFont("Consolas")
   text("I am present in your daily life \nBut I burn completely when near fire ! \nThe more useful I am to people \nThe more harmful I am to sea !! \nWho am I ?",width/2-370 , 120)
   this.option1.visible = true
   this.option2.visible = true
   fill("#B05B3B")
   textSize(45)
   textFont("Consolas")
   text("OR",width/2-100 ,height/2+10)

   if(mousePressedOver(this.option1)){
       background(lvl1BgImg)
       this.option1.visible = false;
       this.option2.visible = false;
       gameState = 2;
       if(this.character==="girl"){
           this.player.changeAnimation("girl",girlAnimation)
       }
       else{
           this.player.changeAnimation("boy",boyAnimation)
       }
       this.player.visible = true;
    
   }

   if(mousePressedOver(this.option2)){
    oopsSound.play()
   // gameState = 3 ;
   }
//    


   


}
play(){
    background(lvl1BgImg);

    fill("#C1AC95")
    noStroke();
    rect(camera.position.x-width/2 ,0,width,50)

    fill("#4C4C6D")
    textSize(35)
    textFont("Consolas")
    text("Timeleft :",width/2-750, 35)
    text("Items collected :",width/2+300 ,35)

    

    

    //player_walking = loadAnimation()

}  
end(){

}
createRecyclableItems (){
    //var item1 = createSprite(200,200,100,100);
}    
}*/
class Game {
    constructor(){
        this.level1Button = createSprite(width/2 + 300,height/2+200);
        this.level1Button.scale = 0.5;

        this.level2Button = createSprite(width/2+300,height/2+100);
        this.level2Button.visible = false;

        this.john  = createSprite(width/2-300, height/2+200);
        this.john.addImage(boyImg);
        this.john.scale = 1.2;

        this.emma = createSprite(width/2 , height/2 + 205);
        this.emma.addImage(girlImg);
        this.emma.scale = 1.4;

        this.level1Button.addImage(level1ButtonImg);
        this.level2Button.addImage(level2ButtonImg);

        this.characterPicked = false;
        this.character = "girl";

        this.tick = createSprite(width/2,height/2+30,10,10);
        this.tick.addImage(tickImg)
        this.tick.scale = 0.2;

        this.option1 = createSprite(width/2+90 , height/2)
        this.option1.scale = 0.4
        this.option1.addImage(plasticText);
        this.option1.visible = false;

        this.option2 = createSprite(width/2-250 , height/2)
        this.option2.addImage(metalText);
        this.option2.scale = 0.3
        this.option2.visible = false;

        this.backgnd = createSprite(0,400,600,20)
        this.backgnd.addImage(lvl1BgImg)
        //this.backgnd.velocityX = -4;
        this.backgnd.x = this.backgnd.width/2
        this.backgnd.scale = 2.70
        this.backgnd.visible = false;

        this.player = createSprite(100 , height/2 );
        this.player.addAnimation("girl",girlAnimation )
        this.player.addAnimation("idleGirl",girlImg)
        this.player.addAnimation("boy",boyAnimation)
        this.player.addAnimation("idleBoy", boyImg)
        this.player.visible = false;

        this.recyclableItems = [];
        this.nonRecyclableItems = [];

        this.invisibleGround = createSprite(350,height-100,width,20)
        this.invisibleGround.visible = false;

        this.recyclableItemsGroup = new Group();
        this.non_recyclableItemsGroup = new Group();

        

        

    }
start(){
    if(gameState === 0){
    //background (bgImg)
    image(bgImg,150,-50,width-500,height)
    textFont("Algerian")
    textSize(55)
    fill("blue")
    text("WELCOME TO SCAVENGER - HUNT ",width/2-450 , height/2-280)
    textFont("Bahnschrift SemiBold")
    textSize(24)
    fill("black")
    text(" A girl/boy named emma/john were studying about recycling in their chapter of science \n So they started thinking about this and  wanted to try to apply this in their real life \n They tried to do so but didn't received any much response.\n So they wrote a tagline for their work 'DON'T BE A PUCK ! RECYCLE UR JUNK !!'\n They want your support to make the world Better \n Will you join them ?",width/2-525 , height/2-150)
    if(mousePressedOver(this.john)){
        this.characterPicked = true ; 
        this.character = "boy";
        this.tick.x = width/2 - 270
        
    
    }
    else if (mousePressedOver(this.emma)){
        this.characterPicked = true ;
        this.character = "girl";
        this.tick.x = width/2 ; 

    }
    if(mousePressedOver(this.level1Button)){
        gameState = 1;
       // this.createRecyclableItems();
        this.john.visible = false ;
        this.emma.visible = false;
        this.level1Button.visible = false;
        this.tick.visible = false;
        if(this.character=== "girl"){
            this.player.changeAnimation("idleGirl", girlImg)
            this.player.scale= 1.2;
        }
        else{
            this.player.changeAnimation("idleBoy",boyImg)
            this.player.scale= 1.2;
        }
        this.player.visible = true ; 
    }
}
}  
quiz(){
   background("#FFED99");
   fill("#C1AC95")
   noStroke();
   rect(0,0,width,50)
   fill("#AA2B1D")
   textSize(35)
   textFont("Algerian")
   text("Solve this riddle Genius !!",width/2-270,35)
   fill("#B05B3B")
   textSize(35)
   textFont("Consolas")
   text("I am present in your daily life \nBut I burn completely when near fire ! \nThe more useful I am to people \nThe more harmful I am to sea !! \nWho am I ?",width/2-370 , 120)
   this.option1.visible = true
   this.option2.visible = true
   fill("#B05B3B")
   textSize(45)
   textFont("Consolas")
   text("OR",width/2-100 ,height/2+10)
//    fill("#835151")
//    textSize(45)
//    textFont("Algerian")
//    text("IF U ARE CORRECT , THEN U WILL GET A CHANCE TO SEARCH \n FOR RECYCLABLE ITEMS ON MARS !!",width/2-650 , height/2+ 200)

   if(mousePressedOver(this.option1)){
       

       this.option1.visible = false;
       this.option2.visible = false;
       gameState = 2;
       if(this.character==="girl"){
           this.player.changeAnimation("girl",girlAnimation)
           this.player.x = 50;
           this.player.y = 550;
       }
       else{
           this.player.changeAnimation("boy",boyAnimation)
           this.player.x = 50;
           this.player.y = 550;
       }
       this.player.visible = true;
    
   }
   

   if(mousePressedOver(this.option2)){
    oopsSound.play()
   // gameState = 3 ;
   }
//    


   


}
play(){

    this.backgnd.visible = true;
    this.backgnd.velocityX = -4;

    if(this.backgnd.x<0){
      this.backgnd.x = this.backgnd.width;
    }

    this.player.collide(this.invisibleGround);

    if(keyDown(UP_ARROW)) {
        this.player.velocityY = -12;
    }
    this.player.velocityY+= 0.5;

    fill("#C1AC95")
    noStroke();
    rect(camera.position.x-width/2 ,0,width,50)

    fill("#4C4C6D")
    textSize(35)
    textFont("Consolas")
    text("Lives:",width/2-750, 35)
    for(var i = 1 ; i<=livesLeft ; i++){
        image(livesLeftImg , width/2-640+(i*40) , 10 , 30,30);
    }
    text("Items collected :"+itemScore,width/2+300 ,35)

    this.createRecyclableItems();
    this.createNon_RecyclableItems();

    if(keyDown("space")){
        this.player.velocityY = -12
    }
    this.player.velocityY = this.player.velocityY+0.8;

    if(this.player.isTouching(this.non_recyclableItemsGroup)){
        this.non_recyclableItemsGroup.destroyEach();
        livesLeft --;

    }

    if(livesLeft=== 0){
        gameState = 3 ;
    }

    if(this.player.isTouching(this.recyclableItemsGroup)){
        this.recyclableItemsGroup.destroyEach();
        itemScore = itemScore + 1;
    }

       
    

    

    

    //player_walking = loadAnimation()

}  
end(){
    image(endGameImg , 0,0,width , height);
    this.player.visible = false;
    this.backgnd.visible = false;
    this.recyclableItemsGroup.destroyEach();
    this.non_recyclableItemsGroup.destroyEach();



}
createRecyclableItems (){
    if(frameCount % 500===0){
        var y = Math.round(random(height-150, height-80));
        var item1 = createSprite(width,y,100,100);  
        var rand = Math.round(random(1,7));
        switch(rand){
            case 1: item1.addImage(recyclableItem1); 
                    break;
            case 2: item1.addImage(recyclableItem2); 
                    break;  
            case 3: item1.addImage(recyclableItem3); 
                    break;
            case 4: item1.addImage(recyclableItem4); 
                    break;
            case 5: item1.addImage(recyclableItem5); 
                    break;
            case 6: item1.addImage(recyclableItem6); 
                    break;
            case 7: item1.addImage(recyclableItem7); 
                    item1.scale = 0.2;
                    break;
        }
        item1.velocityX = -4;
        item1.lifetime = Math.round(width/4);

        this.recyclableItemsGroup.add(item1);

    }

    

    
} 
createNon_RecyclableItems (){
    if(frameCount % 600===0){
        var y = Math.round(random(height-150, height-80));
        var item1 = createSprite(width,y,100,100);  
        var rand = Math.round(random(1,7));
        switch(rand){
            case 1: item1.addImage(nonRecyclableItem1); 
                    item1.scale = 0.5;
                    break;
            case 2: item1.addImage(nonRecyclableItem2);
                    item1.scale = 0.5; 
                    break;  
            case 3: item1.addImage(nonRecyclableItem3); 
                    item1.scale = 0.5;
                    break;
            case 4: item1.addImage(nonRecyclableItem4); 
                    item1.scale = 0.2;
                    break;
            case 5: item1.addImage(nonRecyclableItem5); 
                    break;
            case 6: item1.addImage(nonRecyclableItem6);
                    item1.scale = 0.5; 
                    break;
            case 7: item1.addImage(nonRecyclableItem7); 
                    item1.scale = 0.2;
                    break;
        }
        item1.velocityX = -4;
        item1.lifetime = Math.round(width/4);

        this.non_recyclableItemsGroup.add(item1);

    }
}
}