//vanilla javascript

var targetBag;
var hdxBag;
var sevenBag;
var bodegaBag;

var targetSlideVol;
var hdxSlideVol;
var sevenSlideVol;
var bodegaSlideVol;

var ampTarget;
var ampHDX;
var ampSeven;
var ampBodega;

var targetImg;
var hdxImg;
var sevenImg;
var bodegaImg;

//var cleanUpImg;

var cnv;

//var currVol = 0;

function preload(){

	targetBag = loadSound('./sound/keyFoods.mp3');
	hdxBag = loadSound('./sound/homeDepot.mp3');
	sevenBag = loadSound('./sound/seven.mp3');
	bodegaBag = loadSound('./sound/bodega.mp3');

	console.log("preload");
}

function setup(){
	cnv = createCanvas(1400, 700);
	//canvas.parent('bags');

	//start at .5 and increment by .01
    targetSlideVol = createSlider(0,1, 0,.01)
	hdxSlideVol = createSlider(0,1, 0,.01)
    sevenSlideVol = createSlider(0,1, 0,.01)
    bodegaSlideVol = createSlider(0,1, 0,.01)

	targetSlideVol.parent('target');
	hdxSlideVol.parent('hdx');
	sevenSlideVol.parent('seven');
	bodegaSlideVol.parent('bodega');

	targetBag.loop();
	hdxBag.loop();
	sevenBag.loop();
	bodegaBag.loop();

	ampTarget = new p5.Amplitude();
	ampHDX = new p5.Amplitude();
	ampSeven = new p5.Amplitude();
	ampBodega = new p5.Amplitude();

	ampTarget.setInput(targetBag);
	ampHDX.setInput(hdxBag);
	ampSeven.setInput(sevenBag);
	ampBodega.setInput(bodegaBag);

	targetImg = loadImage("./images/targetBag-02.png");
	hdxImg = loadImage("./images/hdxBag-02.png");
	sevenImg = loadImage("./images/711Bag-02.png");
	bodegaImg = loadImage("./images/bodegaBag-02.png"); 

	//cleanUpImg = loadImage("./images/cleanUp-03.png"); 

}

function draw(){

	frameRate(10);
	//console.log(ampTarget);

	cnv.background (240,0);

	tint(255, 255); 

	targetBag.setVolume(targetSlideVol.value());
	hdxBag.setVolume(hdxSlideVol.value());
	sevenBag.setVolume(sevenSlideVol.value());
	bodegaBag.setVolume(bodegaSlideVol.value());

	var volTarget = ampTarget.getLevel();
	var volHDX = ampHDX.getLevel();
	var volSeven = ampSeven.getLevel();
	var volBodega = ampBodega.getLevel();

	var aTarget = map(volTarget, 0, 1, 5, 400);
	var aHdx = map(volHDX, 0, 1, 5, 400);
	var aSeven = map(volSeven, 0, 1, 5, 400);
	var aBodega = map(volBodega, 0, 1, 5, 400);

	//console.log(aTarget);

	//image(targetPic, diam, diam);
	//ellipse(500, 500, aTarget, aTarget);
	//ellipse(800, 500, aHdx, aHdx);
	//ellipse(200, 500, aSeven, aSeven);
	//ellipse(1000, 500, aBodega, aBodega);

	if(aTarget>5 && aTarget <= 15){
		console.log(aTarget);
		var rX = random(0, 1250);
		var rY = random(0, 530);
		image(targetImg, rX, rY, targetImg.width/5.5, targetImg.height/5.5);
	}else if(aTarget>15 && aTarget <= 20){
		console.log(aTarget);
		var rX = random(0, 1250);
		var rY = random(0, 530);
		image(targetImg, rX, rY, targetImg.width/4.3, targetImg.height/4.3);
	}else if(aTarget>20){
		console.log(aTarget);
		var rX = random(0, 1250);
		var rY = random(0, 530);
		image(targetImg, rX, rY, targetImg.width/4, targetImg.height/4);
	};


	if(aHdx>5 && aHdx <= 15){
		console.log(aHdx);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(hdxImg, rX, rY, hdxImg.width/5.3, hdxImg.height/5.3);
	}else if(aHdx>15 && aHdx <= 20){
		console.log(aHdx);
		var rX = random(0, 1200);
		var rY = random(0, 520);
		image(hdxImg, rX, rY, hdxImg.width/4.3, hdxImg.height/4.3);
	}else if(aHdx>20 && aHdx <= 30){
		console.log(aHdx);
		var rX = random(0, 1200);
		var rY = random(0, 520);
		image(hdxImg, rX, rY, hdxImg.width/4, hdxImg.height/4);
	}else if(aHdx >= 30){
		console.log(aHdx);
		var rX = random(0, 1200);
		var rY = random(0, 495);
		image(hdxImg, rX, rY, hdxImg.width/3.4, hdxImg.height/3.4);;
	};

	if(aSeven>5 && aSeven <= 15){
		console.log(aSeven);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(sevenImg, rX, rY, sevenImg.width/5.5, sevenImg.height/5.5);
	}else if(aSeven>15 && aSeven <= 20){
		console.log(aSeven);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(sevenImg, rX, rY, sevenImg.width/4.3, sevenImg.height/4.3);
	}else if(aSeven>20){
		console.log(aSeven);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(sevenImg, rX, rY, sevenImg.width/4, sevenImg.height/4);
	};

	if(aBodega>5 && aBodega <= 15){
		console.log(aBodega);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(bodegaImg, rX, rY, bodegaImg.width/5.3, bodegaImg.height/5.3);
	}else if(aBodega>15 && aBodega <= 20){
		console.log(aBodega);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(bodegaImg, rX, rY, bodegaImg.width/4.3, bodegaImg.height/4.3);
	}else if(aBodega>20){
		console.log(aBodega);
		var rX = random(0, 1200);
		var rY = random(0, 530);
		image(bodegaImg, rX, rY, bodegaImg.width/4, bodegaImg.height/4);
	};

	//fill(200, 205, 210, 200);
	//noStroke();
	//rect(12, 548, 220, 60);
	//image(cleanUpImg, 25, 550, cleanUpImg.width/7.25, cleanUpImg.height/7.25);

	//ellipse.parent('bags')
};

function mousePressed() {
	var d = dist(mouseX, mouseY, 135, 660);
	if (d < 150) {
	clear();
	};
};
