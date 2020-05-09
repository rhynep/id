// subliminal symbol flashes 

// red flash
subliminal1 = document.getElementById("flashesA", "flashesB"); 
subliminal1.addEventListener("mousemove", onMouseMove);    

function OnMouseMove(flashes1, flashes2) {
    flashesA.src = "http://rhynep.github.io/id/images/id_red.png";
    flashesA.style.width = "auto";

    flashesB.src = "http://rhynep.github.io/id/images/id_pink.png";
    flashesB.style.width = "auto";

}

subliminal1 = document.getElementById("flashesA", "flashesB"); 
subliminal1.addEventListener("mouseout", MouseOut);     

function MouseOut(flashes1, flashes2) {
    flashesA.src = "";
    flashesB.src = "";
}






// javascript photo enlarge
theSquareDiv = document.getElementById("images");
theSquare1 = document.getElementById("square1");
theSquareDiv.addEventListener("click", expandImage);
theSquare1 = document.getElementById("square1");

function expandImage() {
    if (theSquareDiv.style.position == "") {
        theSquareDiv.style.position = "absolute";
        theSquareDiv.style.top = "100";
        theSquareDiv.style.left = "100";
        theSquare1.style.width = "auto";
        theSquare1.src = "https://rhynep.github.io/id/images/square1.png";
    } 
    else { // makes it small
        theSquareDiv.style.position = "";
        theSquare1.style.width = "";
    }
}

