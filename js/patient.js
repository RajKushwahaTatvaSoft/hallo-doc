var isLightMode = true

function myFunction() {
    console.log("helo body");
    var element = document.body;
    element.classList.toggle("dark-mode");
    isLightMode = !isLightMode

}