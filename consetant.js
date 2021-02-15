
class Consetant {
    constructor(){
      this.index=null
      this.distance=0
      this.name=null
      
    }
  
    getCount(){
     var playerCountref =database.ref('playerCount');
     playerCountref.on("value",function(data){
       playerCount=data.val();
     })
    }
  
    updateCount(count){
      database.ref('/').update({playerCount:count})
    }
  
   update(){
      var playerIndex="players/player"+this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      })
   }

   static getPlayerInfo(){
     var playerInfoRef=database.ref('players');
     playerInfoRef.on("value", (data)=>{
      allPlayers=data.val();
     } )

   }
   //get player information player1,2,3,4
   //Static functions are those common functions which are called by the class themselves rather than by objects of the class 
  }



/*

-gameState
-playerCount
-players
  -player1
    -name
    -distance
  -player2
    -name
    -distance
  -player3
    -name
    -distance
  -player4
    -name
    -distance


*/