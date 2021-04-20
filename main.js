song = "";
leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload () {
    song = loadSound("bruh.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded () {
    console.log('poseNet is initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1)
}
function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        leftWristY = results[0].pose.leftWristY.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY );

        RightWristX = results[0].pose.RightWristX.x;
        RightWristY = results[0].pose.RightWristY.y;
        console.log("RightWristX =" + RightWristX + "RightWristY =" + RightWristY ); 

    }
}

