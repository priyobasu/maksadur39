class Game{

    constructor(){


    }
   
   
   
      getState() // read the game State from Database
   
    { 
      var gameStateref=database.ref("gameState");
gameStateref.on("value",function(data){
    gameState=data.val();
});
   
        

    }
    
    
    update(state) // update the gameState from the database
    {
      database.ref('/').update({
        gameState:state
    })


    }
    

    
      async start(){

        if(gameState===0){
          player=new Player();
          var playercountref=await database.ref("playerCount").once("value");
          if(playercountref.exists()){
            playerCount=playercountref.val();
            player.getCount()
          }
          form=new Form();
          form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage(carImg1);
        car2 = createSprite(300,200);
        car2.addImage(carImg2);
        car3 = createSprite(500,200);
        car3.addImage(carImg3);
        car4 = createSprite(700,200);
        car4.addImage(carImg4);

        cars=[car1,car2,car3,car4];

      }
      play(){

        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
          background("gray");
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
          var index=0,x=175,y;
          for(var plr in allPlayers){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index===player.index)
            {
              camera.position.x=displayWidth/2;
              camera.position.y=cars[index-1].y;
            }
          }
        }
          if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=10;
            player.update();
          }
          drawSprites();

    }
  }
  


