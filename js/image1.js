let img0;
var w = window.innerWidth;
var h = window.innerHeight;
function preload() {
  img0 = loadImage('../proyecto/materiales/auspiciadores.png');		
}
function setup() {
  canvas=createCanvas(w,h);
}
function draw() {
	image(img0, (width-img0.width/3)/2,(height-img0.height/3)/2,img0.width/3,img0.height/3);	
}
function mouseClicked() {
	window.open("../proyecto/index.html","_self");
}