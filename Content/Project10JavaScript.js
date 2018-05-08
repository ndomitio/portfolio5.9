//styling for page loader

function myLoadFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "none";
}

//styling for button
function overBtn(x) {
    x.style.fontSize = "20px";
    x.style.backgroundColor = "white";
    x.style.color = "black";
}

function outBtn(x) {
    x.style.fontSize = "14px";
    x.style.backgroundColor = "#474e5d";
    x.style.color = "white";
}
function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    var myArray = [
        "That is a tasty burger",
        "Le Royale with Cheese",
        "Revenge is a dish best served cold",
        "Django, the D is silent",
        "Are you gonna bark all day little doggy, or are you gonna bite"
    ];

    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    alert(randomItem);
    if (userResponse) {
        var win = window.open("http://www.imdb.com/name/nm0000233/", '_blank');
        win.focus();
    }
}

/*styling for drop down*/

//* @param {any} inobj
//*/
function selectMovie(inobj) {
    switch (inobj) {
        case "0":
            document.getElementById("movielist").innerHTML = "<p id='display2'><big><b>Choose a movie</b></big></p>";
            break;
        case "1":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/3collage.jpg />"
            break;
        case "2":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/KBquote.jpg>"
            break;
        case "3":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/LDquote.jpg>"
            break;
        case "4":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/SBquote.jpg>"
            break;
    }
}

//select item by movie

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



//styling for hexcards hover

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

//styling for footer hover

function overFtrBtn(x) {
    
    x.innerText = "Created by Nick Domitio"
}

function outFtrBtn(x) {
    
}


//styling for hw effect
function myHWFunction() {
    var x = document.getElementById("myInput");

    document.getElementById("demo").innerHTML = "Here is the HW requirement";


}
