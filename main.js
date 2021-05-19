noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);
      
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose' , gotPoses);
}
function draw() {
    document.getElementById("square_side").innerHTML = "Side of the square will be =" + difference;
    background('#FF0000');
    fill('#FFC0CB');
    stroke('#FFC0CB');
    square(noseX,noseY,difference);
} 
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  function gotPoses(results) {
      if(results.length > 0) {
          console.log(results);
          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.y;
          console.log("noseX " + noseX +"noseY " + noseY );

          leftWristX = results[0].pose.rightWristX.x;
          rightWristX = results[0].pose.leftWristX.y;
          difference = floor(leftWristX - rightWristX);
          console.log("leftWristX " + leftWristX +"rightWristX " + rightWristX + "difference" + difference );
      }
  }