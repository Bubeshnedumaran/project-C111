prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takephoto() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="Cprediction" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9RlXyskFr/model.json',modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak() {
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+prediction1;
    speak2="The second prediction is "+prediction2;
    var utter=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utter);
}