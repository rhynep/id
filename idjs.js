// subliminal symbol flashes 
subliminal1 = document.getElementById("flashesA"); // gets element by id
subliminal1.addEventListener("mouseover", onMouseOver1);     // adds event listener so click causes the color to change

function OnMouseOver(flashes1) {
    flashesA.src = "http://rhynep.github.io/id/images/id_red.png";
    flashesA.style.width = "auto";

}

subliminal1 = document.getElementById("flashesA"); // gets element by id
subliminal1.addEventListener("mouseout", onMouseOut1);     // adds event listener so click causes the color to change

function MouseOut(flashes1) {
    flashesA.src = "";
}






