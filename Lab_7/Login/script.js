function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "") {
        showText("user name field cannot be empty");
    }
    else if (password == "") {
        showText("password field cannot be empty");
    }
    else /*if (email == "admin" && password == "Abc123EFG")*/ {
        login();
        
    } 
    // else {
        // showText("login failed");
    // }
}

async function login(){
    var email = document.getElementById("email");
    var pass  = document.getElementById("password");

    var logObj = {
        "email": email.value,
        "password": password.value //check what is ""
    }

    try {
        var lObj = await fetch("https://reqres.in/api/register", 
            {
                method: "post",
                body:JSON.stringify(logObj),
                headers:{
                    "content-type":"application/json"
                }
            }
        )

        var logObj = await lObj.json();

        if (logObj.token) {
            showText("login Success");
            localStorage.mytoken = logObj.token;
        } else {
            showText("login failed, bad data")
        }
    } catch (error) {
        console.log(error);
    }
}


function showText(text) {
    document.getElementById("validator-text").innerText = text;
    document.getElementById("validator-text").style.display = 'block';
}


var password = document.getElementById("password");
password.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

password.onblur = function () {
   // document.getElementById("message").style.display = "none";
}

//password Regex validation 
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

password.onkeyup = function () {
    var lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}