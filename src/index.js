import Paddle from "../src/paddle.js"; //importing the paddle
import InputHandler from "../src/input.js"; //imports the handler


let canvas = document.getElementById("gameScreen"); //grabbing our canvas
let ctx = canvas.getContext("2d");  //context of the canvas. Context gives us a 2d rendering context in the canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

//we also need to export the paddle here in index.js,because it doesn't know what the paddle is


new InputHandler(paddle);



let lastTime = 0; //we need to know what the time was. So we start from 0

//Making a game loop
function gameLoop(timestamp) {

	let deltaTime = timestamp - lastTime; //how much time has passed
	lastTime = timestamp;

	//clearing the canvas from previous frame
	ctx.clearRect(0, 0, 800, 600);
	paddle.update(deltaTime);
	paddle.draw(ctx);

	requestAnimationFrame(gameLoop); //time stamp comes from.
	//Request Animation frame from the browser and give it the game loop.  Everytime it runs, it says when the next framne is ready, call this game loop again and pass into the time stamp. It will calculate the delta time, pass it to the timestamp and go through the pdate function.

}
