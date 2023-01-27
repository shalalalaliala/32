function classification() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RWhzqovB0/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(results,error) {
if(error) {
    console.error(error);
} else{
    console.log(results);
    random_numberR = Math.floor(Math.random()*255) + 1;
    random_numberG = Math.floor(Math.random()*255) + 1;
    random_numberB = Math.floor(Math.random()*255) + 1;

    document.getElementById("I_hear").innerHTML = 'I can hear- ' + results[0].label;
    document.getElementById("Accuracy").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("I_hear").style.color = "rgb(" +random_numnerR+","+random_numberG+","+random_numberR+")";
    document.getElementById("Accuracy").style.color = "rgb("+random_numberR+","+random_numberG+","+random_number_R+")";

    img = document.getElementById('alien1');
    img2 = document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4');

    if (results[0].label == "clap") {
        img.src = 'aliens-01.gif';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
    }
else if (results[0],label == "snap") {
    img.src = 'aliens-01.png';
    img2.src = 'aliens-02.gif';
    img3.src = 'aliens-03.png';
    img4.src = 'aliens-04.png';
}
else if (results[0],label == "tap") {
    img.src = 'aliens-01.png';
    img2.src = 'aliens-02.png';
    img3.src = 'aliens-03.gif';
    img4.src = 'aliens-04.png';
}
else{
    img.src = 'aliens-01.png';
    img2.src = 'aliens-02.png';
    img3.src = 'aliens-03.png';
    img4.src = 'aliens-04.gif';
}
} 
}