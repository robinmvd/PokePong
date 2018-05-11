"use strict";
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
    }
    Ball.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.ball.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function () {
    function Paddle() {
    }
    Paddle.prototype.move = function () {
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map