//append the close button to the list
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = makeCloseButton();
    myNodelist[i].appendChild(span);
}

//append the check button to the list
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = makeCheckButton();
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
closeItem();

var check = document.getElementsByClassName("check");
checkItem();

// "Add" function
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    var span = makeCloseButton();
    li.appendChild(span);


    var span = makeCheckButton();
    li.appendChild(span);

    closeItem();
    checkItem();
}

function makeCloseButton() {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    return span;
}

function closeItem() {
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function makeCheckButton() {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2713");
    span.className = "check";
    span.appendChild(txt);
    return span;
}

function checkItem() {
    for (var i = 0; i < check.length; i++) {
        check[i].onclick = function (ev) {
            var div = this.parentElement;
            div.classList.toggle('checked');
        }
    }
}