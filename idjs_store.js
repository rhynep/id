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

teeDiv3 = document.getElementById("teediv3");
theTee3 = document.getElementById("tee3");
teeDiv3.addEventListener("click", expandImage3);
theTee3 = document.getElementById("tee3");

function expandImage3() {
    if (teeDiv3.style.position == "") {
        teeDiv3.style.position = "absolute";
        teeDiv3.style.top = "100";
        teeDiv3.style.left = "100";
        theTee3.style.width = "auto";
        theTee3.src = "https://rhynep.github.io/id/images/tee3.png";
    } 
    else { // makes it small
        teeDiv3.style.position = "";
        theTee3.style.width = "";
    }
}

teeDiv4 = document.getElementById("teediv4");
theTee4 = document.getElementById("tee4");
teeDiv4.addEventListener("click", expandImage4);
theTee4 = document.getElementById("tee4");

function expandImage4() {
    if (teeDiv4.style.position == "") {
        teeDiv4.style.position = "absolute";
        teeDiv4.style.top = "100";
        teeDiv4.style.left = "100";
        theTee4.style.width = "auto";
        theTee4.src = "https://rhynep.github.io/id/images/tee4.png";
    } 
    else { // makes it small
        teeDiv4.style.position = "";
        theTee4.style.width = "";
    }
}