Webcam.set({
    width:350,
    height:350,
    image_formay:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
);
}

console.log('ml5 version', ml5.version);
classifier =
ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9-3LsksUA/.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded')
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(results){
    
    
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=(results[0].confidence.toFixed(3))*100;

    
}

