include('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');

var isLightMode = true

function myFunction () {
    console.log("helo body");
    var element = document.body;
    element.classList.toggle("dark-mode");
    isLightMode = !isLightMode

    
    // var img = element.querySelector(".lightmode")
    // img.src.includes("darkmode") ? img.src = "../../images/lightmode.png" : img.src = "../../images/darkmode.png";
}