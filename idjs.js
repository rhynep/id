// subliminal symbol flashes 
subliminal1 = document.getElementById("flashesA"); // gets element by id
subliminal1.addEventListener("mousemove", onMouseMove);     // adds event listener so click causes the color to change

function OnMouseMove(flashes1) {
    flashesA.src = "http://rhynep.github.io/id/images/id_red.png";
    flashesA.style.width = "auto";

}

subliminal1 = document.getElementById("flashesA"); // gets element by id
subliminal1.addEventListener("mouseout", onMouseOut);     // adds event listener so click causes the color to change

function MouseOut(flashes1) {
    flashesA.src = "";
}






