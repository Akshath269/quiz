class Quiz{


constructor(){

}

getState(){
  
  


}

update(){





}


async start(){
    if(gameState === 0){
      player = new Consetant();
        var  playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
         playerCount = playerCountRef.val();
          playerCount.getCount();
        }
        var quest = new  Question()
          
        
        quest.display();
      }


}



}