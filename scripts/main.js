//firebase
var firebaseConfig = {
  apiKey: "AIzaSyDFtx9dasSHdURDlHSGNF1T557YECT5Vdc",
  authDomain: "skribbleio-remake.firebaseapp.com",
  databaseURL: "https://skribbleio-remake.firebaseio.com",
  projectId: "skribbleio-remake",
  storageBucket: "skribbleio-remake.appspot.com",
  messagingSenderId: "1051457739740",
  appId: "1:1051457739740:web:07cfdd1841d7e766480d19"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//Skribble
var loadimage = false;
var img = new Image();
var colors = [0,0,0];
var img2 = new Image();
var initialized = false

pressure = -2

function setup() {
  a = createCanvas(800, 600);
  a.parent('sketch-holder');
}


var x = 0;
oldmousey = 0;
oldmousex = 0;
function draw() {

  if (!initialized){
    initPressure()
  }

  if (mouseIsPressed) {
  stroke(colors[0],colors[1],colors[2]);//img.save("test","png");
  } else {
  stroke(0,0,0,0);

  }
  strokeWeight(4*pressure)
  line(mouseX, mouseY,oldmousex,oldmousey);
  x++;
  oldmousey = mouseY;
  oldmousex = mouseX;

}

/*setInterval(()=>{
  img = get();
    canvas = img.canvas.toDataURL()
    db.collection('Skribble').doc('9ZORKpbhy5VnpPCksu4r').set({
      image:canvas
    });
    console.log("Image saved");
},1000)
*/

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
    
  }
  if (key === 'x'){
        db.collection('Skribble').doc('9ZORKpbhy5VnpPCksu4r').get().then(doc => {
          clear();
          var raw = new Image();
          raw.src = doc.data().image;
          raw.onload = function() {
            img3 = createImage(raw.width, raw.height);
            img3.drawingContext.drawImage(raw, 0, 0);
            image(img3, 0, 0);
          }
        }).catch(e=>{
          image(img2,0,0)
          console.log("Image could not be loaded");
        })
  }
  if (key === 'c'){
    clear();
    console.log("Image cleared");
  }
}


function initPressure() {

  //console.log("Attempting to initialize Pressure.js ");

  Pressure.set('canvas', {

    start: function(event){
      // this is called on force start
      isDrawing = true;
      isDrawingJustStarted = true;
    },
    end: function(){
      // this is called on force end
      isDrawing = false
      pressure = 0;
    },
    change: function(force, event) {
      if (initialized == false){
        console.log("Pressure.js initialized successfully");
        initialized = true;
      }
      pressure = force;

    }
  });

  Pressure.config({
    polyfill: true, // use time-based fallback ?
    polyfillSpeedUp: 0, // how long does the fallback take to reach full pressure
    polyfillSpeedDown: 0,
    preventSelect: true,
    only: null
    });

}
