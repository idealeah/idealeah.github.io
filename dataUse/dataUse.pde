PImage james;
PFont font;

void setup(){
  size(500, 500);
  james= loadImage("technology.jpg");
  font= createFont("BADABB__.TTF", 80);
}

void draw(){
  background(40);
  image(james, 0, 0, 500, 400);
  
  textFont(font);
  fill(255, 80, 90);
  text("Don't cry, James", 0, 470);
}