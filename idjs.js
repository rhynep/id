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
subliminal1.addEventListener("mouseout", onMouseMove1);     

function MouseOut(flashes1, flashes2) {
    flashesA.src = "";
    flashesB.src = "";
}






// javascript photo enlarge

myitem = document.getElementById("firsttest"); // gets element by id
myitem.addEventListener("click", onClick);     // adds event listener so click causes the color to change

function onClick() {                // function added to make color change on click
    myitem.style.color = "green";
    myitem.style.fontSize = "2em";
}
myitem = document.getElementById("firsttest"); // adds event listener: changing text color
myitem.addEventListener('mouseout', onMouseOut);

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}




