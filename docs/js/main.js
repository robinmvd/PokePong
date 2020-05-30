"use strict";
var Ball = (function () {
    function Ball() {
        this._x = 0;
        this._y = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this._div = document.createElement("ball");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this._div);
        this._x = Math.random() * window.innerWidth;
        this._y = Math.random() * window.innerHeight;
        this.xSpeed = -5;
        this.ySpeed = -3;
    }
    Object.defineProperty(Ball.prototype, "x", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "div", {
        get: function () { return this._div; },
        enumerable: true,
        configurable: true
    });
    Ball.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Ball.prototype.update = function () {
        this._x += this.xSpeed;
        this._y += this.ySpeed;
        this._div.style.transform = "translate(" + this._x + "px, " + this._y + "px)";
    };
    Ball.prototype.bounceX = function () {
        this.xSpeed *= -1;
        this.xSpeed *= 1.5;
    };
    Ball.prototype.bounceY = function () {
        this.ySpeed *= -1;
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.balls = [];
        this.score = 0;
        for (var i = 0; i < 10; i++) {
            this.balls.push(new Ball());
        }
        this.paddle = new Paddle(0, 87, 83);
        this.paddle2 = new Paddle(window.innerWidth, 38, 40);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var ball = _a[_i];
            ball.update();
            this.checkBallBounce(ball);
            if (this.checkCollision(ball.getRectangle(), this.paddle.getRectangle())) {
                console.log("BOTSING MET PADDLE");
                ball.bounceX();
                this.addPoint();
            }
        }
        this.paddle.update();
        this.paddle2.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkBallBounce = function (ball) {
        if (ball.y < 0) {
            ball.bounceY();
        }
        else if (ball.y + ball.div.clientHeight > window.innerHeight) {
            ball.bounceY();
        }
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.addPoint = function () {
        var score = document.getElementsByTagName("score")[0];
        this.score++;
        score.innerHTML = "Score: " + this.score;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function () {
    function Paddle(x, upKey, downKey) {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.upkey = upKey;
        this.downkey = downKey;
        if (x != 0)
            x -= this.div.clientWidth;
        this.x = x;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map