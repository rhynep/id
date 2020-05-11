// store javascript

teeDiv1 = document.getElementById("teediv1");
theTee1 = document.getElementById("tee1");
teeDiv1.addEventListener("click", expandImage1);
theTee1 = document.getElementById("tee1");

function expandImage1() {
    if (teeDiv1.style.position == "") {
        teeDiv1.style.position = "absolute";
        teeDiv1.style.top = "100";
        teeDiv1.style.left = "100";
        theTee1.style.width = "auto";
        theTee1.src = "https://rhynep.github.io/id/images/tee1.png";
    } 
    else { // makes it small
        teeDiv1.style.position = "";
        theTee1.style.width = "";
    }
}

teeDiv2 = document.getElementById("teediv2");
theTee2 = document.getElementById("tee2");
teeDiv2.addEventListener("click", expandImage2);
theTee2 = document.getElementById("tee2");

function expandImage2() {
    if (teeDiv2.style.position == "") {
        teeDiv2.style.position = "absolute";
        teeDiv2.style.top = "100";
        teeDiv2.style.left = "100";
        theTee2.style.width = "auto";
        theTee2.src = "https://rhynep.github.io/id/images/tee2.png";
    } 
    else { // makes it small
        teeDiv2.style.position = "";
        theTee2.style.width = "";
    }
}