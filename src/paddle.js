//Creating the paddle
export default class Paddle {

  //exporting the paddle^ adding export default to the class
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;

		this.width = 150;
		this.height = 20;

		this.maxSpeed = 7;
		this.speed = 0; //current speed

		this.position = {  //position as an object

			x: gameWidth / 2 - this.width / 2,
			y: gameHeight - this.height - 10,

		};
	}

	moveLeft() {
		this.speed = -this.maxSpeed; //it will be moving -10px per second
	}

	moveRight() {

		this.speed = this.maxSpeed;
	}

	stop() {
		this.speed = 0;
	}

    //drawing function:
	draw(ctx) {

		ctx.fillStyle = "#0ff"

		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

	}

	update(deltaTime) {  //how many times it changes

		if (!deltaTime) return; //if no deltatime, return

		this.position.x += this.speed;

		if (this.position.x < 0)

		this.position.x = 0;

		if (this.position.x + this.width > this.gameWidth)
		this.position.x = this.gameWidth - this.width;
	}
}
