function setup() {
canvas = createCanvas(1240,336);
canvas.parent('canvas');
instializeInSetup(mario);
video = createCapture(VIDEO);
video.size(800,300);
video.parent('canvas');
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
console.log('Model Loaded!');   
}
function draw(){
canvas.center();
} 