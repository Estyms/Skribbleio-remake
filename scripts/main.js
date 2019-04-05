var loadimage = false;
var img = new Image();
function setup() {
createCanvas(windowWidth, windowHeight);
}


var x = 0;
oldmousey = 0;
oldmousex = 0;
function draw() {
  var r = (x%255);
  var g = (x%124);
  var b = (x%614)/2 ;
if (mouseIsPressed) {
stroke(0);//img.save("test","png");
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
  if (key === 's'){
    img = get();
    console.log("Image saved");
  }
  if (key === 'r'){
    loadimage = true;
    console.log("Image loading");
  }
  if (key === 'c'){
    clear();
    console.log("Image cleared");
    img = get();
  }
}
