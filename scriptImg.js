
document.addEventListener('DOMContentLoaded', function() {
	 loadBags();
	 console.log("bags loaded");
}



//targetImg = new Image();
//hdxImg = new Image();;
//sevenImg = new Image();
//bodegaImg = new Image();

function loadBags(){

	var bags = document.getElementsByClassName('bags');

	var targetImg= document.createElement("img");
	targetImg.src= "./images/targetBag-02.png";
	targetImg.id= 'target';

	var hdxImg= document.createElement("img");
	hdxImg.src= "./images/hdxBag-02.png";
	hdxImg.id= 'hdx';

	var sevenImg= document.createElement("img");
	sevenImg.src= "./images/tsevenBag-02.png";
	sevenImg.id= 'seven';

	var bodegaImg= document.createElement("img");
	bodegaImg.src= "./images/bodegaBag-02.png";
	bodegaImg.id= 'bodega';

});









	/*targetImg.src= "./images/targetBag-02.png";
	hdxImg.src= "./images/hdxBag-02.png";
	sevenImg.src= "./images/711Bag-02.png";
	bodegaImg.src= "./images/bodegaBag-02.png";

	targetImg = loadImage("./images/targetBag-02.png"); 
	hdxImg = loadImage("./images/hdxBag-02.png"); 
	sevenImg = loadImage("./images/hdxBag-02.png"); 
	bodegaImg = loadImage("./images/hdxBag-02.png"); 

	targetImg.loadPixels();
	hdxImg.loadPixels();
	sevenImg.loadPixels();
	bodegaImg.loadPixels();*/
