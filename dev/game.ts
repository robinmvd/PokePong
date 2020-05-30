class Game {
    
    private balls : Ball[] = []
    private paddle : Paddle
    private paddle2 : Paddle
    private score : number = 0
    
    constructor() {

        for (let i = 0; i < 10; i++) {
            this.balls.push(new Ball())
        }

        this.paddle = new Paddle(0, 87, 83)
        this.paddle2 = new Paddle(window.innerWidth, 38, 40)

        this.gameLoop()
    }
    
    private gameLoop(){
        for (const ball of this.balls) {
            ball.update()

            this.checkBallBounce(ball)
            if (this.checkCollision(ball.getRectangle(), this.paddle.getRectangle())) {
                console.log("BOTSING MET PADDLE")
                ball.bounceX()
                this.addPoint()
            }
        }

        this.paddle.update()
        this.paddle2.update()

        requestAnimationFrame(()=>this.gameLoop())
    }

    private checkBallBounce(ball : Ball) {
       // Top
        if(ball.y < 0) {
            ball.bounceY()
        } 
        // Bottom
        else if(ball.y + ball.div.clientHeight > window.innerHeight) {
            ball.bounceY()
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     private addPoint() {
         let score = document.getElementsByTagName("score")[0]

         this.score++
            score.innerHTML = "Score: "+this.score
     }
} 

window.addEventListener("load", () => new Game())