status=""
img=""
object=[]
function preload() {
    img=loadImage("dog_cat.jpg")
    
}

function setup() {
    
    canvas=createCanvas(500,500)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("info").innerHTML="detecting objects"
}
function modelLoaded() {
 console.log("model is working")
 status="true"
 objectDetector.detect(img,gotResult)      
}
function gotResult(Error,result) {
    if (Error) {
        console.log(Error)
        
    }
    else {
        console.log(result)
        object=result
    }
}

function draw() {
    image(img,0,0,500,500)
    if(status!=''){
        for(i=0;i<object.length;i++){
         document.getElementById("info").innerHTML="objects detected"
          fill("red")
          text(object[i].label,object[i].x,object[i].y)
          noFill()
          stroke("red")
          rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
    
}