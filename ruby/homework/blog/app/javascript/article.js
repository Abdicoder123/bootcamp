
console.log("toggle button feature");

var toggleButton = document.getElementById("toggle");
var content = document.getElementById("hide-features");

toggleButton.addEventListener("click", function(){
    if(content.style.display === "none"){
        content.style.display = "block";
        toggleButton.textContent = "Hide Content";
    }
    else {
        content.style.display = "none";
        toggleButton.textContent = "Show Content";
    }
})