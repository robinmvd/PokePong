/// <reference path="ball.ts"/>
class Game {
    
    // geef hier de ball instance een naam
    // ...
    
    constructor() {
        
        // maak hier een ball instance
        // ...
           
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
        ///
        
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 