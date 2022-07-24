const squareTwo = document.getElementById("squareTwo");
const squareThree = document.getElementById("squareThree");
const squareFour = document.getElementById("squareFour");
const squareFive = document.getElementById("squareFive");
const squareSix = document.getElementById("squareSix");
const squareSeven = document.getElementById("squareSeven");
const squareEight = document.getElementById("squareEight");
const squareNine = document.getElementById("squareNine");
const squareTen = document.getElementById("squareTen");
const squareEleven = document.getElementById("squareEleven");
const squareTwelve = document.getElementById("squareTwelve");

document.addEventListener("mousemove", (event) => {
	posX = event.clientX - window.innerWidth / 2;
	posY = event.clientY - window.innerHeight / 2;

	squareTwo.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareThree.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareFour.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareFive.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareSix.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareSeven.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareEight.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareNine.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareTen.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareEleven.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
	squareTwelve.style.transform =
		"translate(" + posX * 0.002 + "%, " + posY * 0.002 + "%)";
});