$(document).ready(function(){
});

//var divs = document.getElementsByTagName('div');
//divs[0].style.paddingLeft = "0px";
//divs[0].style.paddingRight = "0px";

var ds = document.querySelectorAll("div");
if (ds != null) {
    for (var i = 0; i < ds.length; i++) {
        if (ds[i].className == "container") {
            ds[i].className = "container-fluid no-gap";
        }
    }
}

var headings = ["Artificial intelligence (AI)","Internet of things (IoT)","Cognitive computing (CC)", "Cloud computing","Robotics","Blockchain"]
var contents = [
    "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals. Leading AI textbooks define the field as the study of 'intelligent agents': any system that perceives its environment and takes actions that maximize its chance of achieving its goals (Wikipedia).",
    "The Internet of things (IoT) describes the network of physical objects, so known as, 'things' — that are embedded with sensors, software, and other technologies that is used for the purpose of connecting and exchanging data with other devices and systems over the Internet (Wikipedia).",
    "Cognitive computing (CC) refers to technology platforms that, broadly speaking, are based on the scientific disciplines of artificial intelligence and signal processing. These platforms encompass machine learning, reasoning, natural language processing, speech recognition and vision (object recognition), human–computer interaction, dialog and narrative generation, among other technologies (Wikipedia).",
    "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center (Wikipedia).",
    "Robotics is an interdisciplinary field that integrates computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans (Wikipedia).",
    "A blockchain is a growing list of records, called blocks, that are linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree) (Wikipedia)."
];

var images = ["ai","iot","cognitive","cloud","robotics","blockchain"];

var techSection = document.getElementById("tech");
for(var i = 0; i < headings.length; i++){
    techSection.innerHTML += 
    "<figure class='col-md-4 col-sm-6 col-12'>" + 
        "   <img src = 'images/Homepage/" + images[i] + ".jpg' class='img - fluid'>" + 
    "   <figurecaption> " +
    "       <h3>" + headings[i] + "</h3>" + 
    "       <p>" + contents[i] + "</p>" + 
    "   <a href='" + "' class= 'btn btn-default'>Read more</a>" + 
    "   </figurecaption>" +
    "</figure>";
}

var figures = document.getElementsByTagName("figure");
for(var i = 0; i < figures.length; i++){
    figures[i].style.padding = "0px";
    figures[i].style.margin = "0px";
    figures[i].style.border = "none";
};

var as = document.getElementsByClassName("btn-default");
for (var i = 0; i < as.length; i++) {
    as[i].style.border = "1px solid white";
    as[i].style.padding = "4px";
    as[i].style.color = "white";
}
