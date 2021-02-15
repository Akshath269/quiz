class Question {
    constructor(){
        this.input = createInput("Enter Your name")  ; 
        this.input1 = createInput("Enter Your Option")  ; 
        this.button = createButton('submit');
        this.title = createElement('h3');      
        this.question1 = createElement('h3');   
        this.greeting = createElement('h3');  
        this.option1 = createElement("h3");   
        this.option2 = createElement("h3"); 
        this.option3 = createElement("h3");   
        this.option4 = createElement("h3"); 
    }

    hide(){
        this.greeting.hide();
        this.input.hide()
        this.button.hide()
    }

    display(){

        var title= createElement('h1');
        title.html("My quiz game");
        title.position(350,0);
        
             
    
         
              
               this.question1.html("1+1=")
               this.question1.position(150,80)
               this.option1.html("1:7")
               this.option1.position(150,100)
               this.option2.html("2:5")
               this.option2.position(150,120)
               this.option3.html("3:2")
               this.option3.position(150,140)
               this.option4.html("4:11")
               this.option4.position(150,160)
               this.input.position(150,230)
               this.input1.position(300,230)
               this.button.position(200,280)
            }
        
    }



