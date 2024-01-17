function Transport() {

    document.getElementById("Start").style.display = "block";
    document.getElementById("CvA").style.display = "none";
    document.getElementById("EduA").style.display = "none";

    // Nav bar styling

    // transport
    document.getElementById("Transport").style.backgroundColor = "rgb(139, 17, 129)"
    document.getElementById("Transport").style.color = "white";

    // Send CV
    document.getElementById("Send").style.backgroundColor = "rgb(0, 0, 0)"
    document.getElementById("Send").style.color = "rgb(3, 255, 255)";

    // Educational Practice
    document.getElementById("Education").style.backgroundColor = "rgb(0, 0, 0))"
    document.getElementById("Education").style.color = "rgb(3, 255, 255)";
}

function Send() {
    document.getElementById("CvA").style.display = "block";
    document.getElementById("EduA").style.display = "none";
    document.getElementById("Start").style.display = "none";

    // Nav bar styling

    document.getElementById("Send").style.backgroundColor = "rgba(255, 177, 177, 0.2)"
    document.getElementById("Send").style.color = "black";

    // Transport 
    document.getElementById("Transport").style.backgroundColor = "rgb(0, 0, 0)"
    document.getElementById("Transport").style.color = "rgb(3, 255, 255)";


    // Education
    document.getElementById("Education").style.backgroundColor = "rgb(0, 0, 0)"
    document.getElementById("Education").style.color = "rgb(3, 255, 255)";
}

function Education() {
    document.getElementById("EduA").style.display = "block";
    document.getElementById("CvA").style.display = "none";
    document.getElementById("Start").style.display = "none";
    
    
    // Nav bar styling

    document.getElementById("Education").style.backgroundColor = "rgb(0, 0, 255,0.5)"
    document.getElementById("Education").style.color = "rgb(3, 255, 255)";

    // Transport
    document.getElementById("Transport").style.backgroundColor = "rgb(0, 0, 0)"
    document.getElementById("Transport").style.color = "rgb(3, 255, 255)";

    // Send CV
    document.getElementById("Send").style.backgroundColor = "rgb(0, 0, 0)"
    document.getElementById("Send").style.color = "rgb(3, 255, 255)";
}

function grade12falp1november2022() {
    var score = 0;
    if (document.getElementById("correct1.1.1").checked) {
        score++;
    }
    if (document.getElementById("Question1.1.2").checked) {
        score++;
    }
    if (document.getElementById("Question1.2").checked) {
        score++;
    }
    if (document.getElementById("Question1.3.1").checked) {
        score++;
    }
    if (document.getElementById("Question1.3.2").checked) {
        score++;
    }
    if (document.getElementById("Question1.3.3").checked) {
        score++;
    }
    if (document.getElementById("Question1.4").checked) {
        score++;
    }
    if (document.getElementById("Question1.5.1").checked) {
        score++;
    }
    if (document.getElementById("Question1.5.2").checked) {
        score++;
    }
    if (document.getElementById("Question1.6").checked) {
        score++;
    }
    if (document.getElementById("Question1.7").checked) {
        score++;
    }
    if (document.getElementById("Question1.8").checked) {
        score++;
    }
    if (document.getElementById("Question1.9").checked) {
        score++;
    }
    if (document.getElementById("Question1.10").checked) {
        score++;
    }
    if (document.getElementById("Question1.11").checked) {
        score++;
    }
    if (document.getElementById("Question1.12").checked) {
        score++;
    }
    if (document.getElementById("Question1.13").checked) {
        score++;
    }
    if (document.getElementById("Question3.1").checked) {
        score++;
    }
    if (document.getElementById("Question3.2").checked) {
        score++;
    }
    if (document.getElementById("Question3.3").checked) {
        score++;
    }
    if (document.getElementById("Question3.4").checked) {
        score++;
    }
    if (document.getElementById("Question3.5").checked) {
        score++;
    }
    if (document.getElementById("Question3.6").checked) {
        score++;
    }
    if (document.getElementById("Question3.7").checked) {
        score++;
    }
    if (document.getElementById("Question4.1").checked) {
        score++;
    }
    if (document.getElementById("Question4.2").checked) {
        score++;
    }
    if (document.getElementById("Question4.3").checked) {
        score++;
    }
    if (document.getElementById("Question4.4").checked) {
        score++;
    }
    if (document.getElementById("Question4.5").checked) {
        score++;
    }
    if (document.getElementById("Question4.6").checked) {
        score++;
    }
    if (document.getElementById("Question4.7").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.1a").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.1b").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.1c").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.1d").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.2").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.3").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.4").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.5").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.6").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.7").checked) {
        score++;
    }
    if (document.getElementById("Question5.1.8").checked) {
        score++;
    }
    if (document.getElementById("Question5.2.1").checked) {
        score++;
    }
    if (document.getElementById("Question5.2.2").checked) {
        score++;
    }
    if (document.getElementById("Question5.2.3").checked) {
        score++;
    }
    if (document.getElementById("Question5.2.4").checked) {
        score++;
    }
    if (document.getElementById("Question5.2.5").checked) {
        score++;
    }
    document.write("Your Score is :" + score);
}