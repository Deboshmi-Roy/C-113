function setup(){
  canvas = createCanvas(300,300);
  
  canvas.position(150,150);
  video=createCapture(VIDEO);
  video.hide()
}
function take_snapshot(){
  save('my_filter_image.png');
}
function preload(){

}

function draw{
  Image(video,230,150,220,200);
  fill(255,0,0)
  stroke(255,0,0)
  circle(50,430,80)
  circle(590,430,80)
  circle(590,430,80)
  fill(0,128,0)
  stroke(0,128,0)
  Rect(90,40,460,20)
  Rect(90,420,460,20)
  Rect(40,90,28,300)
  Rect(580,90,20,300)
}