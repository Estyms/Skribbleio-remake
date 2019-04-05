//firebase
var config = {
    apiKey: "AIzaSyDFtx9dasSHdURDlHSGNF1T557YECT5Vdc",
    authDomain: "skribbleio-remake.firebaseapp.com",
    databaseURL: "https://skribbleio-remake.firebaseio.com",
    projectId: "skribbleio-remake",
    storageBucket: "skribbleio-remake.appspot.com",
    messagingSenderId: "1051457739740"
  };
firebase.initializeApp(config);
var database = firebase.database();

//Skribble
var loadimage = false;
var img = new Image();
var colors = [0,0,0];
var img2 = new Image();
firebase.
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
x++;
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
    database.ref('Skribble/9ZORKpbhy5VnpPCksu4r/Image').set(img.src);
    console.log("Image saved");
  }
  if (key === 'x'){
    try {
      img2 = get();
      clear();
      image(img, 0, 0);
      console.log("Image loaded");
    } catch (e) {
      image(img2, 0, 0);
      console.log("Image could not be loaded");
    }
  }
  if (key === 'c'){
    clear();
    console.log("Image cleared");
  }
}
