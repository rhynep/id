// subliminal symbol flashes 

// red flash
subliminal1 = document.getElementById("flashesA"); 
subliminal1 = document.getElementById("flashesB"); 
subliminal1.addEventListener("mousemove", onMouseMove);    

function OnMouseMove(flashes1) {
    flashesA.src = "http://rhynep.github.io/id/images/id_red.png";
    flashesA.style.width = "auto";

}

subliminal1 = document.getElementById("flashesA"); 
subliminal1.addEventListener("mouseout", onMouseMove1);     

function MouseOut(flashes1) {
    flashesA.src = "";
}





// pink flash
subliminal2 = document.getElementById("flashesB"); 
subliminal2.addEventListener("mousemove", onMouseMove2);    

function OnMouseMove2(flashes2) {
    flashesB.src = "http://rhynep.github.io/id/images/id_pink.png";
    flashesB.style.width = "auto";

}

subliminal2 = document.getElementById("flashesB"); 
subliminal2.addEventListener("mouseout", onMouseMove3);     

function MouseOut(flashes2) {
    flashesB.src = "";
}
