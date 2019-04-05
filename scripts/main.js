var loadimage = false;
var img = new Image();
var colors = [0,0,0];
function setup() {
createCanvas(windowWidth, windowHeight);
}


var x = 0;
oldmousey = 0;
oldmousex = 0;
function draw() {

if (mouseIsPressed) {
stroke(colors[0],colors[1],colors[2]);//img.save("test","png");
} else {
stroke(0,0,0,0);


}
strokeWeight(4)
line(mouseX, mouseY,oldmousex,oldmousey);
x++
if (loadimage){
  loadimage = false;
  clear();
  image(img, 0, 0);
  console.log("Image loaded");
}
oldmousey = mouseY;
oldmousex = mouseX;

}

function keyTyped(){
  if (key === "a"){
    colors = [0,0,0];
  }
  if (key === "z"){
    colors = [255,0,0];
  }
  if (key === "e"){
    colors = [0,255,0];
  }
  if (key === "r"){
    colors = [0,0,255];
  }
  if (key === "t"){
    colors = [255,255,255];
  }
  if (key === 'w'){
    img = get();
    console.log("Image saved");
  }
  if (key === 'x'){
    if (img != null){
    loadimage = true;
    console.log("Image loading");
  } else {
    console.log("No image saved");
  }
  }
  if (key === 'c'){
    clear();
    console.log("Image cleared");
  }
}
